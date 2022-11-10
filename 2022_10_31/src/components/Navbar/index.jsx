import {Link} from 'react-router-dom';

const Navbar = () => {

  const body = document.body;
  let theme;

  if (localStorage) {
    theme = localStorage.getItem("theme");
  }
  if (theme === "dayMode" || theme === "nightMode") {
    body.classList.add(theme);
  } else {
    body.classList.add("dayMode");
  }

  const switchTheme = () => {
    if (theme === "nightMode") {
      body.classList.replace("nightMode", "dayMode");
      localStorage.setItem("theme", "dayMode");
      theme = "dayMode";
    } else {
      body.classList.replace("dayMode", "nightMode");
      localStorage.setItem("theme", "nightMode");
      theme = "nightMode";
    }
  }

  return (
    <div>
      <Link key={`home`} to={`/`}>Home </Link>
      <Link key={`about`} to={`/about`}>About </Link>
      <Link key={`works`} to={`/works`}>Works </Link>
      <button onClick={e => switchTheme(e)}>Night mode</button>
    </div>
  )
}

export default Navbar;