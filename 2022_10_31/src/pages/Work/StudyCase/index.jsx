import {useParams} from 'react-router-dom';
import Navbar from '../../../components/Navbar';
import works from '../../../assets/works';
import {useState, useEffect} from 'react';

const WorkItem = () => {
  const [currentWork, setCurrentWork] = useState(null);
  const work = useParams()['works'].split('-')[0];

  useEffect(() => {
    works[work] != undefined ? setCurrentWork(works[work]):setCurrentWork(null);
  }, [])

  return currentWork != null ? (
    <div>
      <Navbar/>
      <h1>Projet</h1>
      <h2>{currentWork.title}</h2>
      <p>{currentWork.content}</p>
    </div>
  ):(<div>
      <Navbar/>
      <h1>Projet</h1>
      <p>Pas de projet portant ce nom</p>
  </div>)
}

export default WorkItem;