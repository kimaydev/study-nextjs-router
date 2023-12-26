import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  height: calc(100% - 60px);
  padding: 20px;
  & > main,
  & > div {
    height: 100%;
    padding: 10px;
    border-radius: 10px;
    background-color: #fff;
    border: 1px solid #ddd;
    isolation: isolate;
    overflow: hidden;
  }
`;
