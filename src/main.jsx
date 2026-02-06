import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import reactImg from './assets/react.svg'
import viteImg from './assets/vite.svg'
import rightArrow from './assets/right-arrow.svg'
import './profile.css'
 


const rootElement = document.getElementById('root');
const rootDom = createRoot(rootElement);



rootDom.render(
  <>
    <header>
      <img src={viteImg} style={{width: '4rem', height: '4rem'}} alt="vite logo"  />
      <img src={reactImg} alt="react logo" />
      <H1 className="heading">Hi , I am a React <span>Developer</span></H1>
    </header>
    <main>
  <h2 className='name-heading'>This is NayeemShaik</h2>
  <ol>
    <li>Learning React</li>
    <li>Building Projects</li>
    <li>Getting Hands-on Experience</li>
    <li>Preparing for Job Interviews</li>
    <li>Contributing to Open Source</li>
  </ol>
  <a href='#' className='button'>
    <span>Join Now</span>
    <img src={rightArrow} alt="right arrow" />
  </a>

    </main>
    <footer style={{marginTop: '2rem'}}>
      <span style={{color: 'gray'}}>© 2024 NayeemShaik. All rights reserved.</span>
    </footer>
      </>
)

