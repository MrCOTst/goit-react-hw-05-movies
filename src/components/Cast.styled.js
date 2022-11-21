import styled from 'styled-components';

export const CastUl = styled.ul`
display: grid;
max-width: calc(100vw - 48px);
grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
grid-gap: 16px;
padding: 20px 0 0 0;
list-style: none;
`;
export const CastLi = styled.li`
border: 2px solid red;
border-radius: 8px;
  box-shadow: 0px 4px 3px 0px rgba(246, 0, 0, 0.2),
    4px 4px 4px 0px rgba(246, 247, 245, 0.14), 0px 2px 1px -1px rgba(246, 247, 245, 0.12);
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover {
      transform: scale(1.02);
      }
`;
export const CastImg = styled.img`
display: block;
width: 100%;
  height: 260px;
  object-fit: cover;
  overflow: hidden;
  border-radius: 8px;
`;

export const CastText = styled.p`

  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  color: white;
  padding: 0 15px
`;
