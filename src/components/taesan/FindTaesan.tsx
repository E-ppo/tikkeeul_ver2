import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { GoBack, SearchIcon } from '../../styles/assets/svg/common';
import { MakeTaesan } from '../taesan/index';

function FindTaesan() {
  const [currentPage, setCurrentPage] = useState(0);
  const taesanStep = [
    { name: '새로운 태산 만들기', content: <MakeTaesan /> },
    { name: '태산 등록하기', content: <MakeTaesan /> },
  ];
  return (
    <>
      <SearchBox>
        <input placeholder='네이버에서 태산 찾기' />
        <SearchIcon />
      </SearchBox>

      <SearchList>
        <ProductImg />
        <ProductInfo>
          <ProductTitle>공기청정기</ProductTitle>
          <div>
            <span> 최저가 </span>15,000원
          </div>
        </ProductInfo>
      </SearchList>
      <Divider />

      <NewTaesanBtn>태산 등록하기</NewTaesanBtn>
    </>
  );
}

const Divider = styled.div`
  border-top: 1px solid #dedede;
  margin: 0px;
`;

const ProductImg = styled.div`
  background-color: gray;
  width: 94px;
  height: 94px;
  border-radius: 20px;
`;

const ProductInfo = styled.div`
  span {
    font-weight: 400;
    color: ${(props) => props.theme.mainMintColor};
  }
`;

const ProductTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const SearchList = styled.div`
  padding: 20px 0px;
  align-items: center;
  display: flex;
  gap: 15px;
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 20px;
  padding: 10px 14px;
  border: 1px solid #aaa;
  box-sizing: border-box;

  input {
    margin-right: 6px;
    border: transparent;
    text-align: center;
    width: 100%;
    :focus {
      text-align: left;
      outline: none;
      /* border-radius: 20px 20px 0px 0px; */
    }
  }
`;

const NewTaesanBtn = styled.div`
  color: white;
  font-weight: 700;
  font-size: 20px;
  padding: 16px;
  text-align: center;
  margin: auto;
  border-radius: 100px;
  background-color: ${(props) => props.theme.mainMintColor};
`;
export default FindTaesan;
