import { StyledMain } from './styled-components/Styled.main';
import Questions from './components/Questions';

function App() {
  return (
    <StyledMain>
      <section className='container'>
        <Questions />
      </section>
    </StyledMain>
  );
}

export default App;
