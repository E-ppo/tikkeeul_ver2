import { Favorite } from '../../data';
import styled from 'styled-components';
import { FavoritDelete } from '../../styles/assets/svg/tikkeeulSvg';

interface IFavoriteList {
  totalPrice: number;
  data: [
    {
      categoryId: number;
      itemId: number;
      itemName: string;
      price: number;
    }
  ];
}

const FavoriteTag = () => {
  const addTikkeeulList = () => {};
  const deleteFavoriteTag = () => {};
  return (
    <Wrap>
      <ScrollArea>
        {Favorite.data.map((favoriteList, idx) => (
          <Tag key={favoriteList.itemId}>
            <div
              onClick={() => {
                addTikkeeulList();
              }}>
              <span>#</span>
              {favoriteList.itemName}
            </div>
            <FavoritDelete
              onClick={() => {
                deleteFavoriteTag();
              }}
            />
          </Tag>
        ))}
      </ScrollArea>
    </Wrap>
  );
};
export default FavoriteTag;

const Wrap = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  margin: 0 30px;
`;

const ScrollArea = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  overflow-x: scroll;
  white-space: nowrap;

  &::-webkit-scrollbar {
    display: none;
  }
`;
const Tag = styled.div`
  height: 45px;
  font-size: 1.25rem;
  padding: 0 0.5rem;
  margin-right: 0.5rem;
  gap: 5px;
  border: 2px solid #26dfb3;
  border-radius: 25px;
  color: #26dfb3;

  display: flex;
  align-items: center;
  justify-content: center;
  span {
    margin-right: 5px;
    font-weight: 700;
  }
`;
