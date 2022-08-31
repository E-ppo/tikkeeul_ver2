import styled from 'styled-components';

interface IPropsData {
  fontSize: string;
}

const TotalTikkeeulPrice = ({ fontSize }: IPropsData) => {
  return (
    <Wrap>
      <FontStyle fontSize={fontSize}>
        내가 모은 티끌 <span>10,000원</span>
      </FontStyle>
    </Wrap>
  );
};
export default TotalTikkeeulPrice;

const Wrap = styled.div`
  margin: 12px 30px;
  text-align: right;
`;

const FontStyle = styled.span<IPropsData>`
  font-size: ${(props) => props.fontSize}rem;
  span {
    color: ${(props) => props.theme.pointBlueColor};
  }
`;
