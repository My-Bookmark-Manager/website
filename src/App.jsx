import './App.css';
import {Client, Databases} from 'appwrite';
import { useEffect, useState } from 'react';

const BAAS_ENDPOINT = '';
const PROJECT_ID = '';
const DATABASE_ID = '';
const COLLECTOIN_ID = '';

const client = new Client();
  client
    .setEndpoint(BAAS_ENDPOINT)
    .setProject(PROJECT_ID);

const db = new Databases(client);

function Card(params){
  const {$id, title, url, context, category, tag} = params;

  const navigate = (url) => {
    window.open(url, "_blank");
  }

  return (
    <div className="column is-one-third" onClick={() => navigate(url)}>
        <div className="card" key={$id}>
          <div className="card-content">
            <div className="content">
              {title}
            </div>
          </div>
          <footer className="card-footer">
            <a href="#" className="card-footer-item">{context}</a>
            <a href="#" className="card-footer-item">{category}</a>
            <a href="#" className="card-footer-item">{tag}</a>
          </footer>
        </div>
    </div>
  )
}

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function getBookmarks(){
      const response = await db.listDocuments(DATABASE_ID, COLLECTOIN_ID);
      setData(response);
    }

    getBookmarks();
    
  }, [])

  if(!data){
    return null;
  }

  return (
    <div className="columns">
      {data.documents.map((datum) => <Card key={datum.$id} {...datum} />)}
    </div>
  )
}

export default App
