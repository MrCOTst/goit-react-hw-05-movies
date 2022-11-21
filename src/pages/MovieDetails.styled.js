import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const DetailMain = styled.div`
// margin: 0 50px;
//   padding: 0 50px;
`;

export const MovieAbout = styled.div`
display: flex;

  padding: 0 50px 0 50px;
border-bottom: 3px solid red;
`;

export const MovieInfo = styled.div`
display: flex;
flex-direction: column;
  padding: 0 0 0 50px;
`;

export const DetailImg = styled.img`
  display: inline-block;
  width: 40%;
  height: 50%;
  object-fit: cover;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 4px 4px 4px rgba(247, 241, 241, 0.925);
  margin: 0 0 10px 0;
`;

export const DetailInfo = styled.div`
display: flex;
flex-direction: column;
padding: 20px 50px;
margin-bottom: 20px;
  
  border-bottom: 3px solid red;
`;

export const Title2 = styled.h2`
color: white;
padding: 5px
`
export const Title3 = styled.h3`
color: white;
padding: 5px
`
export const DetailText = styled.p`
  text-decoration: none;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  color: white;
  padding: 5px
 
`;

export const MovieLink = styled(NavLink)`

  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  color: white;
  padding: 5px

  border: 2px solid red;
  border-radius: 5px;

  :hover {
    color: red;
  }
`;