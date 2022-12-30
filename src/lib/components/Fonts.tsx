import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
       @font-face {
        font-family: 'Radnick';
        src: url('/fonts/Radnick.otf') format('opentype'),
        url('/fonts/Radnick.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
      }
      `}
  />
);

export default Fonts;
