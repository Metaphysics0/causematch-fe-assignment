import DonorBody from './Components/DonorBody/DonorBody';
import DonorForm from './Components/DonorForm/DonorForm';
import { GlobalStyle } from './GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <DonorForm />
      <DonorBody />
    </>
  );
}

export default App;
