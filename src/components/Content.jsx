import {useContext, useState} from 'react';
import {BookmarkContext} from '../helpers';
import {DATABASE_ID, COLLECTOIN_ID, db} from '../baas-setup';

const Card = (params) => {
    const {$id, title, url, subject, category, tag, completed} = params;
    const [checked, setChecked] = useState(completed);

    const navigate = (url) => {
      window.open(url, "_blank");
    }

    const onDoneHandler = async (e) => {
      const {id, checked} = e.target;
      setChecked(checked)

      await db.updateDocument(
        DATABASE_ID,
        COLLECTOIN_ID,
        id,
        {completed : checked}
      )
    } 
  
    return (
      <div className="column is-one-third ">
          <div className={`card is-flex is-flex-direction-column is-justify-content-space-between ${checked ? 'has-background-success-light': '' }`} key={$id}>
            <div className="card-content is-clickable" onClick={() => navigate(url)}>
              <div className="content">
                {title}
              </div>
            </div>
            <footer className="card-footer">
              {/* <a href="#" className="card-footer-item">{subject}</a>
              <a href="#" className="card-footer-item">{category}</a>
              <a href="#" className="card-footer-item">{tag}</a> */}
              <label className="checkbox p-3">
                <input id={$id} type="checkbox" checked={checked} onChange={onDoneHandler} /> Done 
              </label>
            </footer>
          </div>
      </div>
    )
  }

const Content = ({data}) => {
  const context = useContext(BookmarkContext);

  const {documents} = data;
  const {completed, subject, category, tag} = context;

  let finalData  = documents;

  if(subject !== ''){
    finalData = documents.filter((document) => document.subject === subject)
  }
  if(completed !== ''){
    finalData = finalData.filter((document) => document.completed === completed)
  }
  if(category !== ''){
    finalData = finalData.filter((document) => document.category === category)
  }
  if(tag !== ''){
    finalData = finalData.filter((document) => document.tag === tag)
  }

  return (
    <>
      <div className="section pb-0">
        Completed: <span className="has-text-weight-bold mr-6"> { completed === '' && 'All' || `${completed}`} </span>
        Subject: <span className="has-text-weight-bold mr-6"> {subject || 'All'} </span>
        Category: <span className="has-text-weight-bold mr-6"> {category || 'All'} </span>
        Tag: <span className="has-text-weight-bold"> {tag || 'All'}</span>
      </div>

      <div className="columns is-multiline p-6 ">
          {finalData.map((datum) => {
            return <Card key={datum.$id} {...datum} />
          })}
      </div>
    </>
  )
}

export default Content;