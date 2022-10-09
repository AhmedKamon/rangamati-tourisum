import logo from "../images/logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <img src={logo} alt="" loading="lazy" className="footer__logo" />
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item">
                <a className="footer__link" href="/">Locations</a>
              </li>
              <li className="footer__item">
                <a className="footer__link" href="/">Contact</a>
              </li>
              <li className="footer__item">
                <a className="footer__link" href="/">carrers</a>
              </li>
              <li className="footer__item">
                <a className="footer__link" href="/">privacy policy</a>
              </li>
              <li className="footer__item">
                <a className="footer__link" href="/">Terms</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
            <p className="footer__copyright">This website is for personal and business use</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
