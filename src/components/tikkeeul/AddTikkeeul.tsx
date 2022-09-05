import { useState } from 'react';
import styled from 'styled-components';
import { GoBack } from '../../styles/assets/svg/common';
import { FullStar, EmptyStar } from '../../styles/assets/svg/tikkeeulSvg';

const AddTikkeeul = () => {
  const [addStar, setAddStar] = useState(false);

  return (
    <Wrap>
      <InnerWrap>
        <AddTitle>
          <GoBack />
          <span>티끌 등록하기</span>
          <div />
        </AddTitle>
        <SearchBox>
          <input type='text'></input>
        </SearchBox>
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
export default AddTikkeeul;

const Wrap = styled.div`
  width: 100%;
  max-height: 1200px;
  min-height: 700px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const InnerWrap = styled.div`
  margin: 0 30px;
`;

const AddTitle = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    font-size: 1.25rem;
  }
  div {
    width: 12px;
    height: 23px;
  }
`;

const SearchBox = styled.div`
  margin-top: 15%;
  height: 50px;
  display: flex;
  justify-content: center;
  border: 1px solid;
`;

const AddItemBox = styled.div`
  margin-top: 50%;
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
