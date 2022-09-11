import styled from 'styled-components';
import { BoardListData } from '../../data';
import LikeComponent from './LikeComponent';

const BoardList = () => {
  return (
    <>
      <Wrap>
        <BoardListBox>
          {BoardListData.data.map((item) => (
            <li>
              <ContentsBox>
                <img src={item.image} alt='태산이미지' />
                <div>
                  <span>{item.createdAt}</span>
                  <p>{item.title}</p>
                  <span>
                    <span>{item.nickname}</span>
                    <br />
                    {item.contents}
                  </span>
                  <div>
                    <LikeComponent
                      LikeCount={item.likeCount}
                      CommentCount={item.viewCount}
                    />
                  </div>
                </div>
              </ContentsBox>
            </li>
          ))}
        </BoardListBox>
      </Wrap>
    </>
  );
};
export default BoardList;

const Wrap = styled.div`
  background-color: #ededed;
`;
const BoardListBox = styled.ul`
  width: 100%;

  li {
    height: 180px;
    display: flex;
    align-items: center;
    background-color: white;
    margin-bottom: 20px;
  }
`;
const ContentsBox = styled.div`
  margin: 0 30px;
  height: 100%;
  display: flex;
  align-items: center;
  img {
    width: 130px;
    height: 130px;
    border-radius: 50%;
    object-fit: cover;
  }
  div {
    margin: 0 0 0 20px;
    p {
      font-size: 1rem;
      font-weight: 700;
      padding: 10px 0;
    }
    span {
      font-size: 0.75rem;
      span {
        font-weight: 700;
      }
    }
    div:last-child {
      width: 100%;
      display: flex;
      margin: 5px 0 0 0;
    }
  }
`;
