import {Link, useLocation} from "react-router-dom";
import styled from "styled-components";


function Navigation() {
  const location = useLocation();
  return (
      <Wrapper>
        <ul className='nav-items'>
          <li className={`nav-item ${location.pathname === '/' ? "active" : ""}`}>
            <Link to="/">
              Нүүр
            </Link>
          </li>
          <li className={`nav-item ${location.pathname === '/' ? "active" : ""}`}>
            <Link to="/">
              Байгууллага
            </Link>
          </li>
          <li className={`nav-item ${location.pathname === '/users' ? "active" : ""}`}>
            <Link to="/">
              Хэрэглэгч
            </Link>
          </li>
          <li className={`nav-item ${location.pathname === '/' ? "camps" : ""}`}>
            <Link to="/">
              Кэмп
            </Link>
          </li>
          <li className={`nav-item ${location.pathname === '/' ? "food" : ""}`}>
            <Link to="/">
              Хоол
            </Link>
          </li>
          <li className={`nav-item ${location.pathname === '/' ? "rooms" : ""}`}>
            <Link to="/">
              Өрөө хуваарь
            </Link>
          </li>
        </ul>
      </Wrapper>
  );
}


const Wrapper = styled.div`
  .nav-items {
    list-style: none;
    margin-right: 30px;

    .nav-item {
      border: 2px solid gray;
      border-radius: 4px;
      padding: 5px 20px;
      transition: background-color 0.3s ease-in-out;

      :not(:first-child) {
        margin-top: 10px;
      }

      a {
        text-decoration: none;
        color: #000;
      }

      &.active {
        border: 2px solid #ff4757;
        background-color: #ff4757;
        //box-shadow: rgba(0, 0, 0, 0.19) 6px 2px 16px 0, rgba(0, 0, 0, 0.23) -6px -2px 16px 0;
        //box-shadow: rgba(0, 0, 0, 0.19) 0 6px 10px, rgba(0, 0, 0, 0.23) 0 6px 10px;
        box-shadow: rgba(17, 17, 26, 0.1) 0 4px 16px, rgba(17, 17, 26, 0.05) 0 8px 32px;

        a {
          color: #fff;
        }
      }
    }
  }
`

export default Navigation;