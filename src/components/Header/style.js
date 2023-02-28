import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.header`
  grid-area: header;

  padding: 0 5vw;
  height: 10.6rem;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: space-between;
`;

export const Profile = styled(Link)`
  display:flex;
  align-items: center;

  > img {
    width: 7rem;
    height: 7rem;
    object-fit: cover;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction:column;
    margin-left: 16px;
    line-height: 2.4rem;

    span {
      font-size:clamp(1.6rem, 1.4rem + 0.625vw, 1.8rem);
      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    strong {
      font-size:18px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;

export const Logout = styled.button`
  border: none;
  background: none;

  > svg {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 3.6rem;
  }
`