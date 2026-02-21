import type { InputProps } from "./models";

import * as S from "./styles";

export const CheckBoxInput = (props: InputProps) => {
  return <S.Input type="checkbox" {...props} />;
};
