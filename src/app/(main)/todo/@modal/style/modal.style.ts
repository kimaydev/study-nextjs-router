import styled from 'styled-components';

export const TodoMadalLayout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  & > div {
    background-color: #fff;
    width: 500px;
    height: 500px;
  }
`;
