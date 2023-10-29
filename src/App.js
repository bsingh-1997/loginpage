import React from 'react';
import styled from 'styled-components';
import logo from "./logointern.PNG"

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ImageContainer = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 40%;
  }
`;

const LoginContainer = styled.div`
  width: 70%;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background: #f9f9f9;
  height:70%;



  @media (min-width: 768px) {
    width: 40%;
  }
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const LoginInput = styled.input`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 16px;
`;

const LoginButton = styled.button`
  background: #007BFF;
  color: #fff;
  border: none;
  border-radius: 3px;
  padding: 10px;
  margin-top: 2vh;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s;
  width:70%;
  margin-left:auto;
  margin-right:auto;
  &:hover {
    background: #0056b3;
  }
`
const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  font-size: 14px;
`;

const Checkbox = styled.input`
  margin-right: 8px;
`;

const TermsLink = styled.a`
  color: #FFA500;
  text-decoration: none;
`;
const LoginTitle = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;
const imageStyle = {
  display: 'block',
  margin: '0 auto',
  maxWidth: '100%',
  height: 'auto  ',
};


;


function LoginPage() {
  return (
    <PageContainer>
      <ImageContainer>
        <img src={logo} alt="Image" style={imageStyle} />
      </ImageContainer>
      <LoginContainer>
        <LoginTitle>Login</LoginTitle>
        <LoginForm>
          <p>Login ID</p>
          <LoginInput type="text" placeholder="Username" />
          <p>Password</p>
          <LoginInput type="password" placeholder="Password" />
          <CheckboxContainer>
            <label>
              <Checkbox type="checkbox" /> Remember Me
            </label>
          </CheckboxContainer>
          <CheckboxContainer>
            <label>
              <Checkbox type="checkbox" /> Agree to <TermsLink href="#">Terms and Conditions</TermsLink>
            </label>
          </CheckboxContainer>
          <LoginButton>Login</LoginButton>
        </LoginForm>
      </LoginContainer>
    </PageContainer>
  );
}

export default LoginPage;
