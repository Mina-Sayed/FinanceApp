// LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
`;

const Button = styled(Link)`
  display: inline-block;
  margin: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #f2f2f2;
  color: #333;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
`;

const LandingPage = () => {
  return (
    <Container>
      <h1>Welcome to the Landing Page</h1>
      <Button to="/register">Register</Button>
      <Button to="/login">Login</Button>
    </Container>
  );
};

export default LandingPage;
