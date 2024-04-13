import styled from "styled-components";

export const hover01 = styled.div`
  &:hover {
    background-color: #33399b;
  }
`;

export const hover02 = styled.div`
  &:hover {
    color: #33399b;
  }
  &:hover::after {
    border-left-color: #33399b;
    border-bottom-color: #33399b;
  }
`;

export const hover03 = styled.div`
  &:hover {
    background-color: #33399b;
    color: #ffffff;
  }
  &:hover a {
    color: #ffffff;
  }
`;

export const Hide = styled.div`
display: none;
`;

//кнопка "Создать новую задачу"
export const Button = styled.button`
  width: 132px;
  height: 30px;
  background-color: #565eef;
  border-radius: 4px;
  border: 0;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  color: #ffffff;
  float: right;
`;