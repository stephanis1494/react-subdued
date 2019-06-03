import React from 'react'
import { primary } from '../../styles'

const Header = () => (
  <div className='header-container'>
    <div className='icon-container'>
      <img
        src='https://res.cloudinary.com/df0ll615k/image/upload/v1559523294/reactSubduedLogo.png'
        alt='logo'
        className='icon'
      />
      <h1 className='logo-text'> React Subdued </h1>
    </div>

    <style jsx>{`
      .header-container {
        height: 40rem;
        background-color: ${primary};
        box-shadow: 0 4px 8px 0 rgb(189,87,52), 0 6px 20px 0 rgb(189,87,52);
      }
      .icon-container {
        text-align: center;
      }
      .icon {
        opacity: 0.7;
        display: inline-block;
        box-shadow: 0 4px 8px 0 rgb(189,87,52), 0 6px 20px 0 rgb(189,87,52);
        margin-top: 20px;
        border: 1px solid ${primary};
        border-radius: 5px;
      }
      .logo-text {
        color: white;
        font-family: Noto Serif, serif;
        font-size: 80px;
        margin-top: 5px;
        opacity: 0.8;
      }
      @font-face {
        font-family: 'Noto Serif', serif;
        src: url(https://fonts.googleapis.com/css?family=Noto+Serif:700&display=swap);
      }
    `}</style>
  </div>
)
export default Header
