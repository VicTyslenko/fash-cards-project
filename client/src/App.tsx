import { Main } from "./components/main";
import { ToastContainer } from "react-toastify";
import * as S from "./styles";

function App() {
  return (
    <S.AppWrapper>
      <Main />
      <ToastContainer />
    </S.AppWrapper>
  );
}

export default App;
