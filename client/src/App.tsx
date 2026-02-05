import { Main } from "./components/main";
import { ToastContainer } from "react-toastify";
import { DefaultModal } from "./shared/default-modal";
import * as S from "./styles";

function App() {
  return (
    <S.AppWrapper>
      <Main />
      <ToastContainer />
      <DefaultModal />
    </S.AppWrapper>
  );
}

export default App;
