import styled from 'styled-components';

export const StyledMain = styled.main`
  background: #4b145b;
  height: 100vh;
  display: grid;
  place-items: center;
  .container {
    width: 90%;
    max-width: 1200px;
    margin: auto;
    .question-card {
      width: 100%;
      padding: 1.3rem;
      background: white;
      border-radius: 5px;
      box-shadow: 0px 0px 10px #000000;
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

          position: relative;
          .btn-container button {
            position: absolute;
            right: 2rem;
            transform: translateX(50%);
            background: transparent;
          }
        }
      }
    }
  }
`;
