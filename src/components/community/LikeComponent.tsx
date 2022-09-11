import { useState } from 'react';
import styled from 'styled-components';
import {
  EmptyLike,
  FullLike,
  CommentIcon,
} from '../../styles/assets/svg/community';

interface IPropsData {
  LikeCount: number;
  CommentCount: number;
}

const LikeComponent = ({ LikeCount, CommentCount }: IPropsData) => {
  const [isLike, setIsLike] = useState(false);
  return (
    <Wrap>
      <span
        onClick={() => {
          {
            isLike ? setIsLike(false) : setIsLike(true);
          }
        }}>
        {isLike ? <FullLike /> : <EmptyLike />} <span>{LikeCount}</span>
      </span>
      <span>
        <CommentIcon /> <span>{CommentCount}</span>
      </span>
    </Wrap>
  );
};
export default LikeComponent;
const Wrap = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10%;

  span {
    display: flex;
    align-items: center;
    span {
      margin-left: 5px;
    }
  }
`;
