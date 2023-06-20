import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  border-radius: 8px;
  border: 1px solid #f9ae00;
  padding: 0;
  font-size: 2em;
  font-weight: 400;
  background-color: #fff;
  color: #f9ae00;
  cursor: pointer;
  transition: border-color 0.25s;
  width: 3vh;
  height: 3vh;
  margin-left: 2vh;
  margin-right: 2vh;
  &:hover {
    /* hover 효과 스타일 */
    background-color: #f9ae00;
    color: #fff;
  }
`;

const Line4 = () => {
  const handler = () => {
    window.scrollTo(0, 0);
  };
  return <Button onClick={handler}> 3 </Button>;
};

export default Line4;
