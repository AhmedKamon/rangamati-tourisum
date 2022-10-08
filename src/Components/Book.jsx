import React from "react";
import { memo } from "react";

function Book() {
  return (
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
  );
}
export default memo(Book, {
  isReact: true,
});

// export default Book;
