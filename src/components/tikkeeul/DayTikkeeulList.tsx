import styled from 'styled-components';
import {
  LeftArrowBlack,
  RightArrowBlack,
} from '../../styles/assets/svg/tikkeeulSvg';
import { FavoriteTag, LoadTikkeeulList } from '../tikkeeul';

const DayTikkeeulList = () => {
  const today = new Date().toJSON().split('T', 1);

  return (
    <Wrap>
      <DaySelectStyle>
        <span>
          <LeftArrowBlack />
        </span>
        <span>{today}</span>
        <span>
          <RightArrowBlack />
        </span>
      </DaySelectStyle>
      <FavoriteTag />
      <LoadTikkeeulList />
    </Wrap>
  );
};
export default DayTikkeeulList;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 30px;
`;

const DaySelectStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
  }
`;
