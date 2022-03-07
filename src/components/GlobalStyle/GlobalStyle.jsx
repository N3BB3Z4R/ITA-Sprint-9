import { createGlobalStyle } from 'styled-components';

// const desktopStartWidth = '996'
// const desktop = `@media (min-width: ${desktopStartWidth}px)`
// const mobile = `@media (max-width: ${desktopStartWidth}px)`

/* Estilo global con Styled-Component */
export const GlobalStyle = createGlobalStyle`

  :root {
    /* --dark: hsla(0,0,0,0); */
    --background: #fafafa;
    --text: #e9dc2b;
    --dark: #111;
    --clear: #fff;
    --blue: #3B4CCA;
    --blue2: #185dcc;
    --red: #CC0000;
    --red2: #9e2804;
    --green: #4a8605;
    --yellow: #FFDE00;
    --ocre: #B3A125;
    --radius1: 15px;
  }


  // Back to Top Floating Button 
  .container-top {
    --offset: 100px;
    --fade: 80px;
    
    display: flex;
    align-items: flex-end;
    width: 60px;
    justify-self: end;
    justify-content: flex-end;
    -webkit-mask:linear-gradient(#0000 calc(100vh + var(--offset)),#000 calc(100vh + var(--offset) + var(--fade)));
  }

  .top {
    position: sticky;
    bottom: 20px;      
    margin-right:10px; 
    
    /* visual styling */
    width:100%;
    aspect-ratio:1;
    background:#333;
    border-radius:10px;
  }
  .top:before {
    content:"";
    position:absolute;
    inset:30%;
    transform:translateY(20%) rotate(-45deg);
    border-top:5px solid #fff;
    border-right:5px solid #fff;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 1rem;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    /* box-shadow: inset 0 0 5px grey; */
    background-color: #333;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #777;
    border-radius: 10px;
  }

`;