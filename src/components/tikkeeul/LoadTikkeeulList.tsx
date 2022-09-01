import { stringify } from 'querystring';
import styled from 'styled-components';
import { TikkeeulData } from '../../data';

const LoadTikkeeulList = () => {
  const tikkeeulModify = () => {};
  const tikkeeulDelete = () => {};

  return (
    <Wrap>
      {TikkeeulData.data?.map((tData, idx) => (
        <InnerWrap key={idx}>
          <RightContents>
            <span>
              {tData.categoryId} <br />
              <span>{tData.itemName}</span>
            </span>
          </RightContents>
          <LeftContents>
            <span
              className='topMenu'
              onClick={() => {
                tikkeeulModify();
              }}>
              수정
            </span>
            <span
              className='topMenu'
              onClick={() => {
                tikkeeulDelete();
              }}>
              삭제
            </span>
            <br />
            <span className='price'>
              {tData.price.toLocaleString('ko-KR')}원
            </span>
          </LeftContents>
        </InnerWrap>
      ))}
    </Wrap>
  );
};
export default LoadTikkeeulList;

const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const InnerWrap = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
  border-bottom: 1px solid #f5f5f5;
  padding: 1rem 0;
  line-height: 200%;
`;
const RightContents = styled.div`
  display: flex;

  span {
    font-size: 1rem;
    font-weight: 300;
    span {
      font-weight: 700;
      font-size: 1.25rem;
    }
  }
`;
const LeftContents = styled.div`
  width: 30%;
  text-align: right;

  .topMenu {
    margin-left: 10%;
    font-size: 1rem;
    font-weight: 300;
    cursor: pointer;
  }
  .price {
    font-weight: 700;
    font-size: 1.25rem;
  }
`;
