import styled from 'styled-components';

export const StyledMain = styled.main`
  background: #4b145b;
  height: 100vh;
  display: grid;
  place-items: center;
  .question-card {
    width: 90%;
    max-width: 600px;
    padding: 1.3rem;
    background: white;
    border-radius: 5px;
    box-shadow: 0px 0px 10px #000;
    @media (min-width: 950px) {
      display: flex;
      justify-content: space-between;
      max-width: 1000px;
      .headline {
        width: 28%;
      }
      section {
        width: 68%;
      }
    }
    .headline h1 {
      padding: 2rem 0;
      font-size: 1.4rem;
    }
    .question {
      margin: 1rem 0;
      padding: 1rem;
      box-shadow: 0 5px 15px rgb(0 0 0 / 10%);
      border: 2px solid #eae6eb;
      .question-and-buttons {
        display: flex;
        justify-content: space-between;
        .btn-container button {
          background: lightgrey;
          border: none;
          color: red;
          border-radius: 50%;
          height: 25px;
          width: 25px;
          display: grid;
          place-items: center;
          cursor: pointer;
        }
      }
      .info {
        padding: 1rem 0;
      }
    }
  }
`;
