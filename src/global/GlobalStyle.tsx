import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  body {
  background: rgba(0,0,0,0.9);
  margin: 0;
  color: white;
}

:focus{
  outline: none;
}

.MuiTypography-root {
    margin: 0;
    color: white;
}


.MuiBackdrop-root {
  filter: blur(4px);
}
`;
