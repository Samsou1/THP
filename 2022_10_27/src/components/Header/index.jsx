import nightMode from "../../assets/nightMode"
import { useContext } from "react"
const Header = () => {
  const night = useContext(nightMode);
  return (
    <div>
      <h1>Portfolio de John Doe</h1>
      <a href='#'>Link Github</a>
      <button onClick={night.toggleNM}>Night mode</button>
      <h2>Bonjour, je m'appelle John Doe. Bienvenue sur mon portfolio !</h2>
      <p>Depuis quelques mois, j'apprends le développement web grâce à The Hacking Projet. J'ai ainsi pu apprendre à utiliser Ruby, Rails, JavaScript et React.</p>
    </div>
  )
}

export default Header;