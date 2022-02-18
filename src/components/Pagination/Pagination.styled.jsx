import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 24px auto;
`;

export const PageBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  padding: 4px 8px;
  margin: 0 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: tomato;
  }

  &[disabled] {
    pointer-events: none;
  }
`;

export const CurrentPage = styled.span`
  margin: 0 8px;
`;
