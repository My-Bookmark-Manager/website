import {useContext} from 'react';
import {BookmarkContext} from '../helpers';

const Card = (params) => {
    const {$id, title, url, context, category, tag} = params;
  
    const navigate = (url) => {
      window.open(url, "_blank");
    }
  
    return (
      <div className="column is-one-third is-clickable" onClick={() => navigate(url)}>
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

const Content = ({data}) => {
  const context = useContext(BookmarkContext);

  const {documents} = data;
  const {subject, category, tag} = context;

  let finalData  = documents;

  if(subject !== ''){
    finalData = documents.filter((document) => document.subject === subject)
  }
  if(category !== ''){
    finalData = finalData.filter((document) => document.category === category)
  }
  if(tag !== ''){
    finalData = finalData.filter((document) => document.tag === tag)
  }

    return (
      <>
        <section className="section">Current Filters - 
          Subject: {subject || 'All'}, 
          Category: {category || 'All'}, 
          Tag: {tag || 'All'}
        </section>

        <div className="columns is-multiline p-6 ">
            {finalData.map((datum) => {
              return <Card key={datum.$id} {...datum} />
            })}
        </div>
      </>
    )
}

export default Content;