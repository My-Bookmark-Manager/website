const Card = (params) => {
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

const Content = ({data}) => {
    return (
        <div className="columns is-multiline p-6 ">
            {data.documents.map((datum) => <Card key={datum.$id} {...datum} />)}
        </div>
    )
}

export default Content;