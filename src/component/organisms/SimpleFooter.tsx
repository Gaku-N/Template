import styled from 'styled-components';

export const SimpleFooter = (props:{copyWrite:string, baseColor?:string}) => {
  const copyWrite = props.copyWrite;
  const baseColor = props.baseColor || '#ddd'
  const style = { backgroundColor: baseColor };
  return (<SFooter style={style}>{copyWrite}</SFooter>)
};
const SFooter = styled.div`
  height: 30px;
  line-height: 30px;
  background-color: lightblue;
  text-align: center;
  position: absolute;
  width: 100%;
  bottom: 0px;
`;
