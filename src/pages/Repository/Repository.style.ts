import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;

    svg {
      margin-right: 4px;
    }

    &:hover {
      color: #303;
    }
  }
`;

export const RepoInfo = styled.section`
  max-width: 700px;
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      border-radius: 50%;
      width: 120px;
      height: 120px;
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 32px;
        color: #303030;
      }

      p {
        font-size: 18px;
        color: #737380;
        margin-top: 4px;
      }
    }
  }

  ul {
    display: flex;
    margin-top: 40px;

    li {
      & + li {
        margin-left: 80px;
      }

      strong {
        display: block;
        font-size: 32px;
        color: #303030;
      }
      span {
        display: block;
        color: #737380;
      }
    }
  }
`;

export const Issues = styled.section`
  margin-top: 80px;

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
