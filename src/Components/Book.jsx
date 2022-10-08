import React from "react";
import { memo } from "react";

function Book() {
  return (
    <section className="section-book">
      <div className="row">
        <div className="book">
          <div className="book__form">
          <div className="u-mb-2">
        <h2 className="heading-secondary">
          Let's chat
        </h2>
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
                <label htmlFor="name" className="form__label">Full Name</label>
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
                <label htmlFor="email" className="form__label">Email</label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
export default memo(Book,{
  isReact: true
});

// export default Book;
