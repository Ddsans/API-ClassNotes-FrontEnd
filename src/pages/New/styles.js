import styled from "styled-components";

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

export const Form = styled.form`
  grid-area: content;
  width: min(90%, 55.5rem);
  margin: 0 auto;
  padding-bottom: 4rem;
  > header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 3.6rem 0;
    > h1 {
      font-weight: 500;
      font-size: clamp(2.4rem, 1.2rem + 3.75vw, 3.6rem);
    }
  }
  > section {
    margin-top: 3.4rem;
  }
  > section:first-of-type {
    > div:not(div:last-child) {
      margin-bottom: 1.5rem;
    }
  }
  .tags {
    columns: 2;
    column-gap: 1.5rem;
    > div {
      margin-bottom: 1.5rem;
    }
  }
  > button:last-child {
    margin-top: 1.9rem;
  }
`;

export const Textarea = styled.textarea`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.WHITE};
  width: 100%;
  height: 15rem;
  padding: 2rem;
  margin-top: 1.6rem;
  border-radius: 1rem;
  border: none;
  outline: none;
  resize: none;
`;