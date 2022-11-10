import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';

const Home = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const url = `http://localhost:1337/api/articles`
    fetch(url)
      .then(response => response.json())
      .then(json => setArticles(ancientData => json.data))
      .catch(error => setArticles([]));
  }, [])

  return (
    <div>
      <h1>Home</h1>
      {articles.map(element => {
      return <Link key = {element.id} to={`/articles/${element.attributes.slug}`}>{element.attributes.title}<br></br></Link>
    })}
    </div>
  )
}

export default Home