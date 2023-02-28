import styled from "styled-components";

export const Container = styled.button`
  background:none;
  color: ${({ theme, isActive }) => isActive ? theme.COLORS.ORANGE : theme.COLORS.WHITE};

  border: none;
  font-size: 16px;
`