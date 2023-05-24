import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  border-radius: 8px;
  border: 1px solid #00a5de;
  padding: 0;
  font-size: 2em;
  font-weight: 400;
  background-color: #fff;
  color: #00a5de;
  cursor: pointer;
  transition: border-color 0.25s;
  width: 3vh;
  height: 3vh;
  margin-left: 2vh;
`;

const Line4 = () => {
  const handler = () => {
    window.scrollTo(0, 1500);
  };
  return <Button onClick={handler}> 4 </Button>;
};

export default Line4;
