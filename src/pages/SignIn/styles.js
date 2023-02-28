import styled from "styled-components";
import backgroundImg from '../../Assets/Study_environment.png'

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  align-items: stretch; 
`;

export const Form = styled.form`
  max-width: 41em;
  padding: 8em 4em;
  margin: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  > h1 {
    font-size:48px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  >h2 {
    font-size:24px;
    margin: 48px 0;
  }

  >p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  >a {
    margin-top:124px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
`

export const Background = styled.div`
  flex:1;
  background:url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`;