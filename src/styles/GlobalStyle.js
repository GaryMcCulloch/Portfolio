import {createGlobalStyle} from 'styled-components';


const GlobalStyle = createGlobalStyle`

.light-theme{
    --primary-color: #007bff;
    --primary-color-light: #057FFF;
    --secondary-color: #ff7675;
    --background-dark-color: #F1F1F1;
    --background-dark-grey: #e4e4e4;
    --border-color: #cbced8;
    --background-light-color: #F1F1F1;
    --background-light-color-2: rgba(3,127,255,.3);
    --white-color: #151515;
    --font-light-color: #313131;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #E4E4E4;
    --scrollbar-bg-color: #383838;
    --scrollbar-thump-color: #6b6b6b;
    --scrollbar-track-color: #383838;
    --shadow-color: rgba(25,29,43,.05);
    --shadow-color-2: rgba(0,123,255, .1);
    --tech-shadow: #f1f1f1;
    --tech-shadow2: #d2d2d2;
    --tech-shadow3: #fff;
    
}
.dark-theme{
    --primary-color: #007bff;
    --primary-color-light: #057FFF;
    --secondary-color: #6c757d;
    --background-dark-color: #10121A;
    --background-dark-grey: #191D2B;
    --border-color: #2e344e;
    --background-light-color: #F1F1F1;
    --background-light-color-2: rgba(3,127,255,.3);
    --white-color: #FFF;
    --font-light-color: #a4acc4;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #191D2B;
    --scrollbar-bg-color: #383838;
    --scrollbar-thump-color: #6b6b6b;
    --scrollbar-track-color: #383838;
    --shadow-color: rgba(25,29,43,.45);
    --shadow-color-2: rgba(0,123,255, .1);
    --tech-shadow: #10121a;
    --tech-shadow2: #0a0b10;
    --tech-shadow3: #161924;
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Nunito', sans-serif;
    font-size: 1.1rem;
    
}
body{
    background-color: var(--background-dark-color);
    color: var(--font-light-color);
    transition: all .4s ease-in-out;
}
body::-webkit-scrollbar{
    width: 9px;
    background-color: #383838;
}
body::-webkit-scrollbar-thumb{
    border-radius: 10px;
    background-color: #6b6b6b;
}
body::-webkit-scrollbar-track{
    border-radius: 10px;
    background-color: #383838;
}
a{
    font-family: inherit;
    color: inherit;
    font-size: inherit;
}

.btn{
            padding: .8rem 2rem;
            margin-top: 2rem;
            border: 2px solid var(--primary-color);
            background: transparent;
            text-transform: uppercase;
            color: var(--white-color);
            &:hover{
                background: #007bff;
                color: black;
            }
        }

h1{
    font-size: 3rem;
    color: var(--white-color);
    @media screen and (min-width: 600px){
        font-size: 4rem
    }
    @media screen and (min-width: 800px){
        font-size: 5rem
    }
    @media screen and (min-width: 1000px){
        font-size: 6rem
    }
    @media screen and (min-width: 1200px){
        font-size: 7rem
    }
}
span{
    color: var(--primary-color);  
    font-size: inherit;  
}

h3{
    font-size: 1.6rem;
    color: var(--white-color);
}

h4{
    padding-bottom: 20px;
    font-size: 1.4rem;
    color: var(--white-color);
}

h6{
    color: var(--white-color);
    font-size: 1.2rem;
}


}




p{
    font-size: .9rem;  
    padding-bottom: 1rem;
}

@media screen and (min-width: 600px){
    p{
        font-size: 1rem;
    }
    h3{
        font-size: 2rem;
    }
}

@media screen and (max-width: 500px) {
        .laptopVis{
            display: none;
        }
    }


//Utilities
.u-margin-bottom{
    margin-bottom: 4rem;
}
//Floting Toggler
.light-dark-mode{
    background-color: var(--background-light-color-2);
    width: 6.5rem;
    height: 2.5rem;
    z-index: 15;
    display: flex;
    align-items: center;
    justify-content: center;
    svg{
      display: flex;
      align-items: center;
      font-size: 1.7rem;
      color: var(--white-color);
    }
  }
  //Nav Toggler
  .hamburger-menu{
      position: fixed;
      right: 5%;
      top: 3%; 
      z-index: 30;
      svg{
          font-size: 3rem;
      }
    }
    .nav-toggle{
        transform: translateX(-100%);
        
    }

`;

export default GlobalStyle;