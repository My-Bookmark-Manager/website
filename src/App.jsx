import './App.css';
import {Client, Databases} from 'appwrite';
import { useEffect, useState } from 'react';
import {getContexts, getTags, getCategories} from './helpers';
import {Content, NavBar} from './components';

const BAAS_ENDPOINT = '';
const PROJECT_ID = '';
const DATABASE_ID = '';
const COLLECTOIN_ID = '';

const client = new Client();
  client
    .setEndpoint(BAAS_ENDPOINT)
    .setProject(PROJECT_ID);

const db = new Databases(client);

function App() {
  const [data, setData] = useState(null);
  const [contexts, setContexts] = useState(null);
  const [categories, setCategories] = useState(null);
  const [tags, setTags] = useState(null);

  useEffect(() => {
    async function getBookmarks(){
      const response = await db.listDocuments(DATABASE_ID, COLLECTOIN_ID);
      setData(response);

      const contexts = getContexts(response);
      setContexts(contexts);

      const categories = getCategories(response);
      setCategories(categories);

      const tags = getTags(response);
      setTags(tags);
    }

    getBookmarks();
    
  }, [])

  if(!data){
    return null;
  }

  return (
    <>
      <NavBar contexts={contexts} categories={categories} tags={tags} />
      <Content data={data} />
    </>
    
  )
}

export default App
