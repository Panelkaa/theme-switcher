import React from "react";
import "./App.css";
import './index.css'
import logo from "./images/logo.png";
import me from "./images/me.png"
import useLocalStorage from "use-local-storage";



function App() {

  const [theme, setTheme] = useLocalStorage('theme' ? 'light' : 'dark')

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }

  return ( 
  <div data-theme={theme}>
    <header className="header">
        <img className="logo" src={logo} alt="logo"></img>
        <h1 className="logo__programmer">Rustam Shaifulin</h1>
        
        <div className="switcher"><i onClick={switchTheme} className="fa-solid fa-toggle-on"></i></div>
      </header>
    <div className="app" >
      
      <main className="main">
        <div className="about">
          <div className="about__title">Hello, I'm frontend-developer from Russia</div>
          <h1 class="about__programmer">Rustam Shaifulin</h1>
          <p className="about__status">Programmer (Developer / Designer)</p>
          <div className="about__photo">
            <img className="me" src={me} alt="me"></img>
          </div>        
        </div>  

        <div className="info">
          <h2 className="info__title">Work</h2>
          <div className="info__line"></div>
          <p className="info__text">A programmer is a specialist who writes and tests code for software. A more general term is a computer scientist, but still the term "programmer" can be used to refer to a software developer, software engineer, computer specialist, software analyst, etc.</p>
          <div className="info__btn">
          <button className="btn"><a className="info__link" href="https://github.com/Panelkaa">My portfolio</a><span> 	&#62; </span></button>
          </div>        
        </div>  

        <div className="bio">
          <h2 className="bio__title">Bio</h2>
          <div className="bio__line"></div>
          <p className="bio__info"><b>2003</b>Born in Moscow, Russia</p>
          <p className="bio__info"><b>2019</b>Student at A.A. Nikolaev College</p>
          <p className="bio__info"><b>2021</b>Started doing web programming and took the Algoritmika course</p>
          <p className="bio__info"><b>2003</b>Learning React and JavaScript</p>
        </div> 

        <div className="hobby">
          <h2 className="hobby__title">Hobby</h2>
          <div className="hobby__line"></div>
          <p className="hobby__text"><span className="hobby__link" href="">Music,</span> Art, Drawing, <span className="hobby__link" href="">Fitness,</span> Photogrphy, Japan, Travel</p>
        </div>

        <div className="web">
          <h2 className="web__title">On the web</h2>
          <div className="web__line"></div>
          <div className="web__link">
          <a className="link__item" href="https://github.com/Panelkaa"><i class="fa fa-github" aria-hidden="true"></i> @Panelkaa</a>
            <a className="link__item" href="https://github.com/Panelkaa"><i class="fa fa-instagram" aria-hidden="true"></i><span className="link__text">@legobionikkkle</span></a>
            <a className="link__item" href="https://twitter.com/Panelkaa4"><i class="fa fa-twitter" aria-hidden="true"></i> @Panelkaa4</a>
            <a className="link__item" href="https://discordapp.com/users/351442833879728138/"><i class="fab fa-discord"></i> Discord</a>
          </div>
        </div>
      </main>

    </div>
    </div>
  );
    
}

export default App;
