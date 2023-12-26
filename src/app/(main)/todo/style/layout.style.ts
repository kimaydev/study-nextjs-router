import styled from 'styled-components';

export const TodoLayout = styled.div`
  ul {
    & > li {
      width: 100%;
      background-color: darkblue;
      border-radius: 20px;
      a {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 150px;
        color: #fff;
        font-size: 24px;
      }
    }
  }
`;
