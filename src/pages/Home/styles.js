import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-areas:
    'brand header'
    'menu search'
    'menu content'
    'newnote content';
  grid-template-columns: minmax(10rem, 20vw) auto;
  grid-template-rows: 10.6rem 12.8rem auto 8rem;
`;

export const Brand = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
  > h1 {
    color: ${({ theme }) => theme.COLORS.ORANGE};
    font-size: clamp(2rem, 1.2889rem + 1.1111vw, 2.4rem);
    font-weight: 700;
  }
  @media (max-width: 640px) {
    >h1{
      font-size:3.5rem;
    };

    > h1 > span {
      display: none;
    }
  }
`;

export const Menu = styled.ul`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  list-style: none;
  grid-area: menu;
  padding-top: 3.6rem;
  padding-bottom: 2.4rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
  > li > button{
    font-size: clamp(1.4rem, 1.2000rem + 0.6250vw, 1.6rem);
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 0px clamp(2.4rem, -4.2667rem + 16.6667vw, 6.4rem);
  grid-area: search;
`;

export const Content = styled.div`
  padding: 0px clamp(2.4rem, -4.2667rem + 16.6667vw, 6.4rem) 1.6rem;
  overflow: auto;
  grid-area: content;
`;

export const NewNote = styled(Link)`
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  grid-area: 'newnote';
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  font-size: 2.2rem;
  span {
    font-size: clamp(1.8rem, 1.4444rem + 0.5556vw, 2rem);
  }
  @media (max-width: 640px) {
    span {
      display: none;
    }
  }
`;