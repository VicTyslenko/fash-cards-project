import { Main } from "./components/main";
import { DefaultModal } from "./shared/default-modal";
import * as S from "./styles";

function App() {
  return (
    <S.AppWrapper>
      <Main />
      <DefaultModal />
    </S.AppWrapper>
  );
}

export default App;
