import styled from "styled-components";

const TotalTikkeeul = () =>{
  return (
    <Wrap>
      <span>내가 모은 티끌 <span>10,000원</span></span>
    </Wrap>
    )
}
export default TotalTikkeeul;

const Wrap = styled.div`
  margin: 0 30px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  span{
    font-size: 1.2rem;
    span{
      color: ${(props)=> props.theme.pointBlueColor};
    }
  }

`;
