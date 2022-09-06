import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { SearchIcon } from '../../styles/assets/svg/common';
import { Item } from '../../data';

interface ISearchBarStyle {
  radiusStyle?: boolean;
}

interface IAllItemList {
  categoryId: number;
  categoryName: string;
  itemId: number;
  itemName: string;
  itemDefaultPrice: number;
}

const AutoSearchItem = () => {
  // input에 입력값이 있나 없나 상태확인
  const [isInputValue, setIsInputValue] = useState(false);
  // input값
  const [inputValue, setInputValue] = useState('');
  // filter된 아이템 리스트
  const [serachItemList, setSerachItemList] = useState<IAllItemList[] | []>([]);
  const [selectingItemIdx, setSelectingItemIdx] = useState(0);
  const [addItem, setAddItem] = useState<IAllItemList>();

  const changeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setIsInputValue(true);
  };

  const handleKeyEvent = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (isInputValue) {
      if (
        e.key === 'ArrowDown' &&
        serachItemList.length - 1 > selectingItemIdx
      ) {
        setSelectingItemIdx(selectingItemIdx + 1);
      } else if (e.key === 'ArrowUp' && serachItemList.length >= 0) {
        setSelectingItemIdx(selectingItemIdx - 1);
      } else if (e.key === 'Enter' && serachItemList.length >= 0) {
        selectedItem(selectingItemIdx);
      }
    }
  };

  const showSearchList = () => {
    //인풋박스 데이터를 지우거나, 검색어 엔터 후 인풋박스를 비워줄 때
    if (inputValue === '') {
      setIsInputValue(false);
      setSerachItemList([]);
    } else {
      const selectedItem = Item.data.filter((allItemList) =>
        allItemList.itemName.includes(inputValue)
      );
      setSerachItemList(selectedItem);
    }
  };

  const selectedItem = (idx: number) => {
    setAddItem(serachItemList[idx]);
  };

  useEffect(showSearchList, [inputValue]); //메모이제이션 할 수 있는 방법 생각해보기.....
  return (
    <Wrap>
      <InputBox radiusStyle={isInputValue}>
        <InputArea
          type='text'
          onChange={changeInputValue}
          onKeyUp={handleKeyEvent}
        />
        <IconDiv>
          <SearchIcon />
        </IconDiv>
      </InputBox>

      {isInputValue ? (
        <DropBoxList radiusStyle={isInputValue}>
          {!(serachItemList.length === 0) ? (
            serachItemList.map((item, idx) => {
              return (
                <li
                  key={item.itemId}
                  onClick={() => {
                    selectedItem(idx);
                  }}
                  onMouseOver={() => {
                    setSelectingItemIdx(idx);
                  }}
                  className={selectingItemIdx === idx ? 'selected' : ''}>
                  {item.itemName}
                </li>
              );
            })
          ) : (
            <>
              <div>
                <span>
                  <span>앗!</span> 아직 등록이 안되어있네요!
                  <br />
                  새로 등록하시겠어요?
                </span>
              </div>
              <div>티끌 등록하기</div>
            </>
          )}
        </DropBoxList>
      ) : (
        ''
      )}
    </Wrap>
  );
};
export default AutoSearchItem;

const Wrap = styled.div`
  width: 100%;
`;
const InputBox = styled.div<ISearchBarStyle>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #d1d0d0;
  border-radius: ${(props) =>
    props.radiusStyle === false ? '30px' : '30px 30px 0 0'};
`;
const InputArea = styled.input`
  width: 80%;
  height: 80%;
  border: none;
  outline: none;
  text-align: center;
`;
const IconDiv = styled.div`
  width: 10%;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

const DropBoxList = styled.ul<ISearchBarStyle>`
  width: 100%;
  height: 150px;

  border: 1px solid #d9d9d9;
  display: flex;
  flex-direction: column;

  align-items: center;

  li {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    height: 35px;
    &.selected {
      background-color: #d9d9d9;
    }
  }

  div:first-child {
    height: 70%;
    display: flex;
    align-items: center;
    span {
      font-size: 1rem;
      span {
        color: #26dfa6;
      }
    }
  }
  div:last-child {
    width: 100%;
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: #26dfa6;
    border-radius: 0 0 30px 30px;

    cursor: pointer;
  }
`;
