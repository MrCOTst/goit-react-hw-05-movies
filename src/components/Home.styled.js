import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HomeList = styled.ul`
display: flex;
align-items: center;
width: 100%;
max-width: 600px;
background-color: #fff;
border-radius: 3px;
`

export const HomeText = styled.p`
text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;

`
export const HomeLink = styled(NavLink)`
color: black;

&.active {
  color: blue;
}
`;
