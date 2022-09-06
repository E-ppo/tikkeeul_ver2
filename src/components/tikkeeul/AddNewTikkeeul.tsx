import { useRef, useState } from 'react';
import styled from 'styled-components';
import { FullStar, EmptyStar } from '../../styles/assets/svg/tikkeeulSvg';
import { Category } from '../common';

const AddNewTikkeeul = () => {
  const [addStar, setAddStar] = useState(false);
  const itemNameRef = useRef<HTMLInputElement>(null);
  const dfPrice = useRef<HTMLInputElement>(null);

  const addNewItemTikkeeul = () => {
    console.log(itemNameRef.current?.value);
    console.log(dfPrice.current?.value);
  };

  return (
    <Wrap>
      <InnerWrap>
        <ItemBox>
          <ItemTitle>카테고리</ItemTitle>
          <InputBox>
            <Category />
          </InputBox>
        </ItemBox>
        <ItemBox>
          <ItemTitle>이름</ItemTitle>
          <InputBox>
            <input type='text' ref={itemNameRef} />
          </InputBox>
        </ItemBox>
        <ItemBox>
          <ItemTitle>가격</ItemTitle>
          <InputBox>
            <input type='number' ref={dfPrice} />
          </InputBox>
        </ItemBox>
      </InnerWrap>
      <Footer
        onClick={() => {
          addNewItemTikkeeul();
        }}>
        <span>티끌 등록하기</span>
      </Footer>
    </Wrap>
  );
};
export default AddNewTikkeeul;

const Wrap = styled.div`
  width: 100%;
  height: 100%;
`;

const InnerWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20% 30px;
  gap: 1rem;
`;

const ItemBox = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
`;

const ItemTitle = styled.div`
  width: 20%;
  font-size: 1rem;
  text-align: right;
  padding: 0 5% 0 0;
`;
const InputBox = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;

  input {
    width: 100%;
    border: 1px solid #cccccc;
    border-radius: 30px;
    text-align: center;
    outline: none;
  }
`;

const Footer = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  height: 70px;
  background-color: #26dfa6;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  span {
    font-size: 1.125rem;
    color: white;
  }
`;
