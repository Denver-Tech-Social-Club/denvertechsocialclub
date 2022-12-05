import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      /* latin */
      @font-face {
        font-family: 'Radnick';
        src: url('Radnick.ttf') format('ttf'),
        url('Radnick.ttf') format('ttf');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
      }
      `}
  />
);

export default Fonts;
