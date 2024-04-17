import styled from "styled-components";
import * as PNC from "../PopNewCard/PopNewCard.styled";

export const PopBrowseDiv = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;
  top: 70px;
  &:target {
    display: block;
  }
`;

export const Content = styled(PNC.Content)`
  opacity: 1;
  margin-bottom: 20px;
  @media screen and (max-width: 495px) {
    display: block;
    margin-bottom: 20px;
  }
`;

export const TopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const Ttl = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

export const ActiveCategory = styled.div`
  display: block;
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: 1 !important;
  p {
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    white-space: nowrap;
  }
`;

export const Status = styled.div`
  margin-bottom: 11px;
`;
export const StatusP = styled.p`
    margin-bottom: 14px;
    color: #000;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
`;
export const StatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  input {
    display: none;
  }
`;

export const StatusTheme = styled.label`
width: auto;
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  color: #94a6be;
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
  p {
    font-size: 14px;
    line-height: 10px;
    letter-spacing: -0.14px;
  }
`;
export const ActiveStatus = styled.div`
  input:checked + label {
    background-color: #94A6BE;
    color: #ffffff;
  }
`;

export const FormArea = styled(PNC.FormNewArea)`
  background: #eaeef6;
  @media screen and (max-width: 495px) {
    height: 37px;
  }
`;

export const Btns = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  
  button {
    height: 30px;
    margin-bottom: 10px;
    padding: 0 14px;
  }
  @media screen and (max-width: 495px) {
    button {
      width: 100%;
      height: 40px;
    }
  }
`;

export const BtnGroup = styled.div`
  display: flex;
  gap: 8px;
  margin-right: 8px;
  @media screen and (max-width: 495px) {
    width: 100%;
    button {
      margin-right: 0px;
    }
  }
`;
