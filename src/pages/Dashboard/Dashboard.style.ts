import { shade } from 'polished';
import styled, { css } from 'styled-components';

interface FormsProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 42px;
  line-height: 1.2;
  color: #3a3a3a;
  max-width: 450px;

  margin-top: 80px;
`;

export const Form = styled.form<FormsProps>`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;

    border: 0;
    border-radius: 8px 0 0 8px;
    color: #303030;
    border: 2px solid #fff;

    &:hover {
      border-color: '#04d361';
      border-right: 0;
    }

    ${(props) =>
      props.hasError &&
      css`
        border-color: #c53030;
        border-right: 0;
      `};

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;

    border: 0;
    border-radius: 0 8px 8px 0px;
    background: #04d361;
    color: #fff;
    font-weight: 700;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Error = styled.span`
  max-width: 490px;
  width: 100%;
  display: block;
  font-size: 14px;
  color: #c53030;
  margin-top: 8px;
`;

export const DeleteButton = styled.button`
  max-width: 210px;
  width: 100%;
  margin-top: 8px;
  font-size: 10px;
  padding: 4px 8px;

  outline: 0;
  background-color: transparent;
  border-radius: 5px;
  border: 1px solid #c53030;
  color: #303;

  &:hover {
    background: ${shade(0.2, '#c53030')};
    color: #fff;
  }
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    width: 100%;
    padding: 24px;

    background: #fff;
    border-radius: 8px;
    text-decoration: none;

    display: flex;
    align-items: center;

    transition: transform 0.2s;

    & + a {
      margin-top: 10px;
    }

    &:hover {
      transform: translateX(10px);
    }

    img {
      width: 64px;
      border-radius: 50%;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        margin-top: 4px;

        font-size: 18px;
        color: #a8a8b3;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;

      &:hover {
        color: #303030;
      }
    }
  }
`;
