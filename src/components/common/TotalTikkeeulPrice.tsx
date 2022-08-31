import styled from 'styled-components';

interface IStyleProps {
  fontSize?: string;
  divHight?: string;
}

interface IPropsData {
  fontSize?: string;
  divHight?: string;
  totalPrice: number;
}

const TotalTikkeeulPrice = ({ fontSize, divHight, totalPrice }: IPropsData) => {
  return (
    <Wrap divHight={divHight}>
      <FontStyle fontSize={fontSize}>
        내가 모은 티끌 <span>{totalPrice.toLocaleString('ko-KR')}원</span>
      </FontStyle>
    </Wrap>
  );
};
export default TotalTikkeeulPrice;

const Wrap = styled.div<IStyleProps>`
  margin: 12px 30px;
  height: ${(props) => (props.divHight ? props.divHight : '')}px;
  display: flex;
  align-items: center;
`;

const FontStyle = styled.span<IStyleProps>`
  width: 100%;
  text-align: right;
  font-size: ${(props) => (props.fontSize ? props.fontSize : 1)}rem;
  font-weight: 400;
  span {
    color: ${(props) => props.theme.pointBlueColor};
    font-weight: 700;
  }
`;
