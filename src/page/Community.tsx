import styled from 'styled-components';
import { useState } from 'react';
import { Header } from '../components/common';
import { BoardList, ChattingList } from '../components/community';

interface IComponentStyle {
  componentState: boolean;
}

function Community() {
  const [component, setCompoenet] = useState(<BoardList />);
  const [topMenu, setTopMenu] = useState(true);

  return (
    <>
      <Wrap>
        <Header title={'커뮤니티'} />
        <ButtonBox componentState={topMenu}>
          <button>티끌 자랑</button>
          <button>쓸까? 말까?</button>
        </ButtonBox>
        {component}
      </Wrap>
    </>
  );
}
export default Community;

const Wrap = styled.div``;
const ButtonBox = styled.div<IComponentStyle>`
  height: 100%;
  height: 60px;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  margin: 0.5rem 1rem 0 1rem;
  border-bottom: 1px solid #cccccc;

  button {
    height: 90%;
    height: 40px;
    background: white;
    border-radius: 10px 10px 0 0;

    font-size: 1.125rem;
    font-weight: 700;
    font-family: 'Noto Sans KR', sans-serif;
    color: #666666;
  }

  button:first-child {
    width: 48%;
    border: 1px solid
      ${(props) =>
        props.componentState ? props.theme.mainMintColor : '#CCCCCC'};
    border-bottom: none;
  }
  button:last-child {
    width: 48%;
    border: 1px solid
      ${(props) =>
        props.componentState ? '#CCCCCC' : props.theme.pointBlueColor};
    border-bottom: none;
  }
`;
