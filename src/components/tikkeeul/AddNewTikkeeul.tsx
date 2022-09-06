import { useState } from 'react';
import styled from 'styled-components';

import { FullStar, EmptyStar } from '../../styles/assets/svg/tikkeeulSvg';

const AddNewTikkeeul = () => {
  const [addStar, setAddStar] = useState(false);

  return (
    <Wrap>
      <InnerWrap>
        <SearchBox>
          <input type='text'></input>
        </SearchBox>
        <BlankBox></BlankBox>
        <AddItemBox>
          <div
            onClick={() => {
              addStar ? setAddStar(false) : setAddStar(true);
            }}>
            {addStar ? <FullStar /> : <EmptyStar />}
          </div>

          <span>
            아이스크림
            <br /> 3000원
          </span>
        </AddItemBox>
      </InnerWrap>
      <Footer>
        <span>티끌 등록하기</span>
      </Footer>
    </Wrap>
  );
};
export default AddNewTikkeeul;

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const InnerWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 30px;
  height: 80%;
  justify-content: space-evenly;
`;

const SearchBox = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  border: 1px solid;
`;

const BlankBox = styled.div``;
const AddItemBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
  border-bottom: 1px solid;

  span {
    line-height: 120%;
    font-size: 2.5em;
    margin: 10px 0;
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
  span {
    font-size: 1.125rem;
    color: white;
  }
`;
