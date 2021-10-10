import React from 'react';
import styled from 'styled-components';
import {Dropdown, DropdownMenu, DropdownToggle, DropdownItem  } from 'reactstrap';
import userIcon from '../../images/user.svg';
import mainLogo from '../../images/logo.png';

const Wrapper = styled.div`
  height: 50px;
  background-color: #fff;
  border-bottom: 1px solid #dadada;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 6px -1px, rgba(0, 0, 0, 0.06) 0 2px 4px -1px;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    .main-logo{
      width: 120px;
      height: 42px;
      object-fit: contain;
    }
    .dropdown{
      cursor: pointer;
      .user{
        width: 32px;
        height: 32px;
        background-size: contain;
      }
      .wel-txt{
        margin-left: 10px;
        font-size: 14px;
        font-weight: bold;
      }
    }
    
  }
`

function Header() {
  const [open, setOpen] = React.useState(false);
  const toggle = () => {
    setOpen(!open)
  }
  return (
      <Wrapper>
        <div className={'container'}>
          <img src={mainLogo} className="main-logo" alt="Red Rock"/>
          <Dropdown isOpen={open} toggle={toggle}>
            <DropdownToggle
                tag="span"
                data-toggle="dropdown"
                aria-expanded={open}
            >
              <img src={userIcon} className="user" alt="user dropdown"/>
              <span className="wel-txt">
                Hi, Ochiroo
              </span>
            </DropdownToggle>
            <DropdownMenu >
              <DropdownItem>Гарах</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </Wrapper>
  )
}

export default Header;