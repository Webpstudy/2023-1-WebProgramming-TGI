import React from 'react';
import styled from 'styled-components';

const ShapeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RoundedShape = styled.div`
  width: 35vw;
  height: 5vh;
  border-top-left-radius: 100px;
  border-bottom-left-radius: 100px;
  background-color: #f9ae00;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const RoundedShapeRight = styled.div`
  width: 35vw;
  height: 5vh;
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;
  background-color: #f9ae00;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const LittleRoundedShape = styled.div`
  width: 3vw;
  height: 10vh;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  border-left: 1px solid #f9ae00;
  border-bottom: 1px solid #f9ae00;
  border-top: 1px solid #f9ae00;
  background-color: #fafbfc;
  padding-left: 10px;
`;
const LittleRoundedShapeRight = styled.div`
  width: 3vw;
  height: 10vh;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  border-right: 1px solid #f9ae00;
  border-bottom: 1px solid #f9ae00;
  border-top: 1px solid #f9ae00;
  background-color: #fafbfc;
  padding-right: 10px;
`;

const ShapeTextleft = styled.span`
  padding-left: 1vw;
  color: #ffffff;
  font-size: 20px;
`;
const ShapeTextright = styled.span`
  padding-right: 1vw;
  color: #ffffff;
  font-size: 20px;
`;
const ShapeTextcenter = styled.span`
  height: 10vh;
  color: #333;
  font-size: 24px;
  font-weight: bold;
  border-bottom: 1px solid #f9ae00;
  border-top: 1px solid #f9ae00;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ChungMuRo3 = () => {
  return (
    <ShapeContainer>
      <RoundedShape>
        <ShapeTextleft> &lt; 을지로 3가 </ShapeTextleft>
      </RoundedShape>
      <LittleRoundedShape />
      <ShapeTextcenter> 충무로 </ShapeTextcenter>
      <LittleRoundedShapeRight />

      <RoundedShapeRight>
        <ShapeTextright> 동대입구 &gt;</ShapeTextright>
      </RoundedShapeRight>
    </ShapeContainer>
  );
};

export default ChungMuRo3;
