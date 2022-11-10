import {useParams} from 'react-router-dom';
import {useState} from 'react';
import Showdown from 'showdown';
const converter = new Showdown.Converter();

const Article = () => {
  const [currentItem, setCurrentItem] = useState(null);
  
  useState(() => {
    const item = useParams();
    const url = `http://localhost:1337/api/articles?filters[slug]=${item.article}`;
    fetch(url)
      .then(response => response.json())
      .then(json => setCurrentItem(json.data[0].attributes))
      .catch(error => setCurrentItem(null));
  },[])

  if(currentItem === null ||currentItem === undefined){
    return(<h1>No item with such name </h1>)
  }else{
    return (
      <div>
        <h1>Article</h1>
        <h2>Title: {currentItem.title}</h2>
        <h2>Released date: {currentItem.released_date}</h2>
        <h3>Description: {currentItem.description}</h3>
        <p>Content</p>
        <div id ='mardDownContent' dangerouslySetInnerHTML={{__html: converter.makeHtml(currentItem.content)}}></div>
      </div>
    )
  }
}

export default Article