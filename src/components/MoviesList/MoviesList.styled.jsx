import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.ul`
  padding: 0;
  margin-left: -20px;
  margin-top: -20px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  list-style: none;
`;

export const Card = styled.li`
  margin-left: 20px;
  margin-top: 20px;
  max-width: 280px;
  flex-basis: calc(100% - 20px);
  border-radius: 5px;
  overflow: hidden;
  background: #fafafa;
  transition: all 500ms ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const CardLink = styled(Link)`
  padding: 0;
  width: 100%;
  text-decoration: none;
  color: black;
`;

export const Img = styled.img`
  display: block;
  width: 100%;
  height: 398px;
  object-fit: cover;
`;

export const Title = styled.p`
  margin-top: 12px;
  padding: 0 4px;
  text-align: center;
  font-weight: 700;
  line-height: 1.33;
  text-transform: uppercase;
`;
