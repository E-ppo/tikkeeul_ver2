import styled from "styled-components";

function DailyTikkeeul(){
  return (
    <GlobalTest>DailyTikkeeul</GlobalTest>
  )
}
export default DailyTikkeeul;

const GlobalTest=styled.div`
color: ${(props)=> props.theme.mainMintColor};
`;