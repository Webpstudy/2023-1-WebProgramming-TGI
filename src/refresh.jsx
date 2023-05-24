import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  border-radius: 0;
  border: none;
  padding: 0;
  font-size: 0;
  font-weight: 0;
  cursor: pointer;
`;

const Img = styled.img`
  width: vh;
  height: 2vh;
`;

const Refresh = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <Button onClick={handleRefresh}>
      <Img src="./src/assets/icons/refresh.png" alt="refresh"></Img>
    </Button>
  );
};

export default Refresh;
