import styled from "styled-components";
import { theme } from "../../StyledCommon";

export const StyledSearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

export const StyledSearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  height: 30px;
  font: inherit;
  font-size: 20px;
  border: none;
  border-radius: 5px;
  outline: none;
  padding-left: 10px;
  padding-right: 5px;

  &::placeholder {
    font-family: inherit;
    font-size: 18px;
  }
`;
