import Header from "./Header";
import styled from "styled-components";
import Navigation from "./Navigation";

 const Wrapper = styled.div`
  .main-layout{
    display: flex;
    margin-top: 30px;
  }
 `

function Layout({children}) {
  return (
      <Wrapper>
        <Header/>
        <div className="container main-layout">
          <Navigation/>
            {children}
        </div>
      </Wrapper>
  )
}

export default Layout;