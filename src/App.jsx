import './App.css';
import {Client, Databases} from 'appwrite';
import { useEffect, useState } from 'react';
import {getSubjects, getTags, getCategories, BookmarkContext} from './helpers';
import {Content, NavBar} from './components';

const BAAS_ENDPOINT = process.env.BAAS_ENDPOINT;
const PROJECT_ID = process.env.PROJECT_ID;
const DATABASE_ID = process.env.DATABASE_ID;
const COLLECTOIN_ID = process.env.COLLECTOIN_ID;

const client = new Client();
  client
    .setEndpoint(BAAS_ENDPOINT)
    .setProject(PROJECT_ID);

const db = new Databases(client);

function App() {
  const [data, setData] = useState(null);
  const [subjects, setSubjects] = useState(null);
  const [categories, setCategories] = useState(null);
  const [tags, setTags] = useState(null);

  const [filter, setFilter] = useState({subject: '', category:'', tag: ''})

  useEffect(() => {
    async function getBookmarks(){
      const response = await db.listDocuments(DATABASE_ID, COLLECTOIN_ID);
      setData(response);

      const subjects = getSubjects(response);
      setSubjects(subjects);

      const categories = getCategories(response);
      setCategories(categories);

      const tags = getTags(response);
      setTags(tags);
    }

    getBookmarks();
    
  }, [])

  const onFilterChange = (key, value) => {
    setFilter((s) => {
      return {
        ...s,
        [key]: value
      }
    })
  }

  if(!data){
    return null;
  }

  return (
    <>
      <NavBar subjects={subjects} categories={categories} tags={tags} callback={onFilterChange} />
      <BookmarkContext.Provider value={filter}>
        <Content data={data} />
      </BookmarkContext.Provider>
      
    </>
    
  )
}

export default App
