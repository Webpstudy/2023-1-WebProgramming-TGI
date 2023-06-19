import React from 'react';
import styled from 'styled-components';
import refresh from '../../assets/icons/refresh.png';

const Button = styled.button`
  border-radius: 0;
  border: none;
  padding: 0;
  font-size: 0;
  font-weight: 0;
  cursor: pointer;
  background-color: #fafbfc;
`;

const Img = styled.img`
  width: 2.3vh;
  height: 2vh;
`;

const Refresh = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <Button onClick={handleRefresh}>
      <Img src={refresh} alt="refresh"></Img>
    </Button>
  );
};

export default Refresh;
