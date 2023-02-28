import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    'header'
    'content';
  height: 100vh;
  > main {
    overflow: auto;
  }
  `;

export const Content = styled.div`
  grid-area: 'content';
  width: min(90%, 55.5rem);
  margin: 0 auto;
  padding-bottom: 4rem;
  > div:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5rem 0;
    > a {
      font-size: clamp(2.5rem, 2rem + 1.5625vw, 3rem);
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
    > button:first-of-type {
      align-self: flex-end;
      color: ${({ theme }) => theme.COLORS.RED};
    }
  }
  > h1 {
    font-weight: 500;
    font-size: clamp(2.4rem, 1.2rem + 3.75vw, 3.6rem);
  }
  > p {
    font-family: 'Roboto', sans-serif;
    font-size: clamp(1.4rem, 1.2rem + 0.625vw, 1.6rem);
    line-height: 1.9rem;
    text-align: justify;
    margin: 1.6rem 0 5rem;
  }
  > section:not(section:last-child) {
    margin-bottom: 2.8rem;
  }
`;

export const Links = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  > li > a {
    color: #fff;
    font-size: clamp(1.4rem, 1.2rem + 0.625vw, 1.6rem);
  }
`;