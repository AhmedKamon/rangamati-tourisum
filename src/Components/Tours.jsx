import React from "react";

function Tours() {
  return (
    <section className="section-tours">
      <div className="u-center-text  u-mb-2">
        <h2 className="heading-secondary">
          Adventure to the exciting culture of mountain
        </h2>
      </div>
      <div className="row-tours">
        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture-1"> &nbsp; </div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span-1">Explore The mountain </span>
              </h4>
              <div className="card__details">
                <ul>
                  <li>7 day tour</li>
                  <li>Up to 15 people</li>
                  <li>2 tour guides</li>
                  <li>Sleep in cozy hotel</li>
                  <li>Difficulity: easy</li>
                </ul>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-1">
              <div className="card__cta">
                <div className="card__price-box">
                  <p className="card__price-only">Only</p>
                  <p className="card__price-value">1200</p>
                </div>
                <a href="#/" className="btn btn--white" >Book Now</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-1-of-3">1</div>
        <div className="col-1-of-3">1</div>
      </div>
    </section>
  );
}

export default Tours;
