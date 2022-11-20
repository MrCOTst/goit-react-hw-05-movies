import styled from 'styled-components';

export const SearchForm = styled.form`
display: flex;
align-items: center;
width: 100%;
max-width: 600px;
background-color: #fff;
border-radius: 3px;
overflow: hidden;
`;

export const SearchButton = styled.button`
display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  :hover {
    opacity: 1;
  }
`;


export const SearchInput = styled.input`
display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: solid 2px;
  border-radius: 4px;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  ::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
