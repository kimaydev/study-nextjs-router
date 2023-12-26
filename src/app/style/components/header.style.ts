import styled from 'styled-components';

export const HeaderLayout = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: pink;
  height: 60px;
  border-bottom: 1px solid #ff647f;
  padding: 0 20px;
  box-sizing: border-box;
  h1 {
  }
  nav {
    & > ul {
      display: flex;
      align-items: center;
      gap: 0 20px;
      & > li {
      }
    }
  }
`;
