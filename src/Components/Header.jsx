
import Logo from '../images/logo.png'

function Header() {
  return (
   
    <div className='header' >
      <div className="header__logo-container">
        <img src={Logo} className='header__logo' alt="Logo" />
      </div>
      <div className="header__text-box">

      <h1 className="heading-primary">
        <span className="heading-primary--main">RANGAMATI</span>
        <span className="heading-primary--sub">is where life happens</span>
      </h1>
        <a className='btn btn--white animated--btn' href="/">Discover Now</a>
      </div>
    </div>
    
   
  )
}

export default Header