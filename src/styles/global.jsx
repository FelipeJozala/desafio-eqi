import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap');
    
		*{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Nunito Sans', sans-serif;
  	}

    html {
      display: flex;
      justify-content: center;
    }

    body {
      width: 90vw;
      background: ${(props) => props.theme.background};
      font-size: 1rem;
      color: ${(props) => props.theme.text};
    }

		main {
			display: flex;
			flex-direction: column;

			@media only screen and (min-width: 768px) {
        flex-direction: row;
      }
		}

		aside {
			padding-top: 20px;
			width: 100%;
		}

    h1 {
      text-align: center;
      font-size: 1.5rem;
      margin: 30px 0 30px 0;

        @media only screen and (min-width: 768px) {
          font-size: 2rem;
          margin: 30px 0 30px;
        }
    }

		
`
