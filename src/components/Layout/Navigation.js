import {Link} from "react-router-dom";
import styled from "styled-components";


function Navigation() {
  return (
      <Wrapper>
        <ul className='nav-items'>
          <li className='nav-item'>
            <Link to="/">
              Нүүр
            </Link>
          </li>
          <li className='nav-item'>
            <Link to="/">
              Байгууллага
            </Link>
          </li>
          <li className='nav-item'>
            <Link to="/">
              Хэрэглэгч
            </Link>
          </li>
          <li className='nav-item'>
            <Link to="/">
              Кэмп
            </Link>
          </li>
          <li className='nav-item'>
            <Link to="/">
              Хоол
            </Link>
          </li>
          <li className='nav-item'>
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
      :not(:first-child){
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
        box-shadow: rgba(0, 0, 0, 0.19) 0 6px 10px, rgba(0, 0, 0, 0.23) 0 6px 10px;
        a {
          color: #fff;
        }
      }
    }
  }
`

export default Navigation;