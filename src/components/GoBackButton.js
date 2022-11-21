import { HiArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin: 10px 50px;
  padding: 8px 0;
  color: white;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;

  :hover {
    color: orangered;
  }
`;

export default function BackLink ({ to, children }) {
  return (
    <StyledLink to={to}>
      <HiArrowLeft size="24" color= "white" />
      {children}
    </StyledLink>
  );
};