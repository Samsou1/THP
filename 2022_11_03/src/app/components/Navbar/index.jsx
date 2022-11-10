import { colors } from "app/abstracts/variables";
import { selectAuth } from "features/auth/authSlice";
import { authLogout } from "features/auth/authSlice";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  width: 5rem;
  height: 100vh;
  position: fixed;
  background-color: ${colors["bg-secondary"]};
  overflow: hidden;
  color: white;
  transition: width 0.2s ease;

  a {
    color: inherit;
  }

  .link-text {
    display: none;
  }

  &:hover {
    width: 15rem;

    .link-text {
      display: block;
    }

    .logo .nav-link {
      filter: grayscale(0) opacity(1);
    }

    .logo svg {
      transform: rotate(0deg);
    }
  }
`;

const NavLinks = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;

  .nav-item {
    width: 100%;
    cursor: pointer;

  }

  .nav-link {
    display: flex;
    align-items: center;
    height: 5rem;
    filter: grayscale(100%) opacity(0.7);
    transition: 0.3s;

    &:hover {
      filter: grayscale(0%) opacity(1);
    }

    .link-text {
      margin-left: 1rem;
    }
  }

  svg {
    min-width: 2rem;
    width: 2rem;
    margin: 0 1.5rem;

    .primary {
      fill: ${colors["primary"]};
    }

    .secondary {
      fill: ${colors["secondary"]};
    }

    .primary,
    .secondary {
      transition: 0.3s;
    }
  }

  .logo {
    font-weight: bold;
    margin: 1rem 0;
    width: 100%;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;

    svg {
      transform: rotate(270deg);
      transition: transform 0.5s;
    }
  }
`;

const Navbar = () => {
  const isAuth = useSelector((state) => selectAuth(state));
  const dispatch = useDispatch();

  const handleClick = () => {
    Cookies.remove("token");
    dispatch(authLogout());
  };

  let content = (
    <>
      <li className="nav-item">
        <NavLink to="/profile" className="nav-link">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fad"
            data-icon="cat"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g className="fa-group">
              <path
                fill="currentColor"
                d="M448 96h-64l-64-64v134.4a96 96 0 0 0 192 0V32zm-72 80a16 16 0 1 1 16-16 16 16 0 0 1-16 16zm80 0a16 16 0 1 1 16-16 16 16 0 0 1-16 16zm-165.41 16a204.07 204.07 0 0 0-34.59 2.89V272l-43.15-64.73a183.93 183.93 0 0 0-44.37 26.17L192 304l-60.94-30.47L128 272v-80a96.1 96.1 0 0 0-96-96 32 32 0 0 0 0 64 32 32 0 0 1 32 32v256a64.06 64.06 0 0 0 64 64h176a16 16 0 0 0 16-16v-16a32 32 0 0 0-32-32h-32l128-96v144a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V289.86a126.78 126.78 0 0 1-32 4.54c-61.81 0-113.52-44.05-125.41-102.4z"
                className="primary"
              ></path>
              <path
                fill="currentColor"
                d="M376 144a16 16 0 1 0 16 16 16 16 0 0 0-16-16zm80 0a16 16 0 1 0 16 16 16 16 0 0 0-16-16zM131.06 273.53L192 304l-23.52-70.56a192.06 192.06 0 0 0-37.42 40.09zM256 272v-77.11a198.62 198.62 0 0 0-43.15 12.38z"
                className="secondary"
              ></path>
            </g>
          </svg>
          <span className="link-text">Mon Profil</span>
        </NavLink>
      </li>
      <li className="nav-item">
        <div type="button" className="nav-link" onClick={handleClick}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M18,21H6c-1.657,0-3-1.343-3-3V6c0-1.657,1.343-3,3-3h12c1.657,0,3,1.343,3,3v12	C21,19.657,19.657,21,18,21z"
              className="primary"
            ></path>
            <path
              d="M14.812,16.215L7.785,9.188c-0.384-0.384-0.384-1.008,0-1.392l0.011-0.011c0.384-0.384,1.008-0.384,1.392,0l7.027,7.027	c0.384,0.384,0.384,1.008,0,1.392l-0.011,0.011C15.82,16.599,15.196,16.599,14.812,16.215z"
              className="secondary"
            ></path>
            <path
              d="M7.785,14.812l7.027-7.027c0.384-0.384,1.008-0.384,1.392,0l0.011,0.011c0.384,0.384,0.384,1.008,0,1.392l-7.027,7.027	c-0.384,0.384-1.008,0.384-1.392,0l-0.011-0.011C7.401,15.82,7.401,15.196,7.785,14.812z"
              className="secondary"
            ></path>
          </svg>
          <div className="link-text">Déconnection</div>
        </div>
      </li>
    </>
  );

  if (!isAuth) {
    content = (
      <li className="nav-item">
        <NavLink to="/login" className="nav-link">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M14.5,2C10.358,2,7,5.358,7,9.5c0,4.142,3.358,7.5,7.5,7.5S22,13.642,22,9.5	C22,5.358,18.642,2,14.5,2z M17,9c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2s2,0.895,2,2C19,8.105,18.105,9,17,9z"
              className="primary"
            ></path>
            <path
              d="M7.587,12.413l-5.294,5.294C2.105,17.895,2,18.149,2,18.414V21c0,0.552,0.448,1,1,1h2.586c0.265,0,0.52-0.105,0.707-0.293	l1.293-1.293C7.851,20.149,8,19.789,8,19.414C8,18.633,8.633,18,9.414,18c0.375,0,0.735-0.149,1-0.414l1.173-1.173	C9.787,15.654,8.346,14.212,7.587,12.413z"
              className="secondary"
            ></path>
          </svg>
          <span className="link-text">Connection</span>
        </NavLink>
      </li>
    );
  }

  return (
    <Nav>
      <section>
        <NavLinks>
          <li className="logo">
            <NavLink to="/" className="nav-link">
              <h1 className="link-text">Shmeeter</h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12,2C6.477,2,2,6.477,2,12c0,1.592,0.382,3.091,1.043,4.427l-1.005,4.019c-0.229,0.915,0.6,1.745,1.516,1.516 l4.019-1.005C8.909,21.618,10.408,22,12,22c5.523,0,10-4.477,10-10C22,6.477,17.523,2,12,2z"
                  className="primary"
                ></path>
              </svg>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M18,21H6c-1.657,0-3-1.343-3-3V8.765c0-1.09,0.591-2.093,1.543-2.622l6-3.333	c0.906-0.503,2.008-0.503,2.914,0l6,3.333C20.409,6.672,21,7.676,21,8.765V18C21,19.657,19.657,21,18,21z"
                  className="primary"
                ></path>
                <path
                  d="M15,21H9v-6c0-1.105,0.895-2,2-2h2c1.105,0,2,0.895,2,2V21z"
                  className="secondary"
                ></path>
              </svg>
              <span className="link-text">Accueil</span>
            </NavLink>
          </li>
          {content}
        </NavLinks>
      </section>
    </Nav>
  );
};

export default Navbar;
