import React from 'react';
import styled from "styled-components";
import {Button, Form, FormGroup, Label, Input, FormText, Row, Col} from 'reactstrap';
import {Link} from 'react-router-dom';
import mainLogo from '../../images/logo.png';


const Wrapper = styled.div`
  .card {
    margin-left: auto;
    margin-top: 50px;
    .main-logo {
      display: flex;
      justify-content: center;
      img {
        width: 163px;
        background-size: contain;
        background-repeat: no-repeat;
      }
    }
  }
`

function Login() {

  return (
      <>
        <Wrapper>
          <Row>
            <Col xl={{size: 3, offset: 4}}>
              <div className={'card card-body'}>
                <Form>
                  <div className="main-logo">
                    <img src={mainLogo} alt="Red Rock"/>
                  </div>
                  <div className="mt-3">
                    <FormGroup>
                      <Label for="email">Имейл</Label>
                      <Input type="email" name="email" id="email" placeholder="Имейл хаяг оруулана уу"/>
                    </FormGroup>
                  </div>
                  <div className="mt-3">
                    <FormGroup>
                      <Label for="password">Нууц үг</Label>
                      <Input type="password" name="password" id="password" placeholder="Нууц үгээ оруулана уу"/>
                    </FormGroup>
                  </div>
                  <div className="mt-3 d-flex justify-content-between">
                    <Link to={"/signup"}>
                      Бүртгүүлэх
                    </Link>
                    <Button type={"submit"} color="danger">
                      Нэвтрэх
                    </Button>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </Wrapper>
      </>
  );
}

export default Login;