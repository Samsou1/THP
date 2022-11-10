import Navbar from '../../components/Navbar';
import {Link} from 'react-router-dom';
import works from '../../assets/works';

const Work = () => {
  return (
    <div>
      <Navbar/>
      <h1>Projets</h1>
      <h3>Au fil des années, nous avons pu accompagner les meilleurs.</h3>
      <p>Découvrez pas à pas comment nous avons été présents pour lancer vos marques préférées.</p>
      <div>
        {Object.keys(works).map((element, index) => {
          return <Link key={index} to={`/works/${element}-study-case`}>{element.toUpperCase()} </Link>
        })}
      </div> 
    </div>
  )
}

export default Work;