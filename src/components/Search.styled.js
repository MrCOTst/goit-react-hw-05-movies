import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: transperent;
  margin: 15px 0 12px 50px;
  border: 2px solid red;
  border-radius: 5px;
  overflow: hidden;
`;

export const SearchButton = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 2px solid red;
  margin: 3px;
  border-radius: 5px;
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
  font-size: 24px;
  border: solid 2px;
  border-radius: 4px;
  outline: none;
  margin: 5px 5px;
  padding: 4px 4px;

  ::placeholder {
    font: inherit;
    font-size: 24px;
  }
`;
