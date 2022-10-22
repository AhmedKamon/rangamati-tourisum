import React from "react";
import { memo } from "react";
import img1 from '../images/about1.jpg'
import img2 from '../images/about2.jpg'

function Book() {
  return (<>
    <section className="section-book">
      <div className="row">
        <div className="book">
          <div className="book__form">
            <div className="u-mb-2">
              <h2 className="heading-secondary">Let's chat</h2>
            </div>
            <form action="#" className="form">
              <div className="form__group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form__input"
                  placeholder="Full Name"
                  required
                />
                <label htmlFor="name" className="form__label">
                  Full Name
                </label>
              </div>
              <div className="form__group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form__input"
                  placeholder="email"
                  required
                />
                <label htmlFor="email" className="form__label">
                  Email
                </label>
              </div>
              <div className="form__group  u-mb-4">
                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="small"
                    name="radio-group"
                  />
                  <label htmlFor="small" className="form__radio-label">
                    <span className="form__radio-btn"></span>Small tour group
                  </label>
                </div>
                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="large"
                    name="radio-group"
                  />
                  <label htmlFor="large" className="form__radio-label">
                    <span className="form__radio-btn"></span>Large tour group
                  </label>
                </div>
              </div>
              <div className="form__group">
                <button className="btn btn--green">Submit Now &rarr;</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <div className="popup">
      <div className="popup__content">
        <div className="popup__left">
          <img src={img1} alt=" user" className="popup__img" />
          <img src={img2} alt=" user" className="popup__img" />
        </div>
        <div className="popup__right">
          <h2 className="heading-secondary u-mb-2">Start booking now</h2>
          <h3 className="heading-third u-mb-2">Importent &nbash; terms and condition applyes </h3>
          <p className="popup__text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis quaerat eum ipsa! Nisi veniam quas accusamus exercitationem cum possimus nam officia ex, beatae, eaque, mollitia itaque corporis est? Earum, ea? Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae.
          </p>
          <a href="/" className="btn btn--green">Book Now</a>
        </div>
      </div>
    </div>
    </>
  );
}
export default memo(Book, {
  isReact: true,
});

// export default Book;
