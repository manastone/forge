import styled from "styled-components";

export const MenuStyle = styled("div")<any>`
  position: fixed;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  display: none;
  background: rebeccapurple;
  width: 100px;
  height: 100px;
`;
