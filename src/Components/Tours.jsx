import React from "react";

function Tours() {
  return (
    <section className="section-tours" id="section-tours">
      <div className="u-center-text  u-mb-8">
        <h2 className="heading-secondary">
          Adventure to the exciting culture of nature
        </h2>
      </div>
      <div className="row-tours">
        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture-1"> &nbsp; </div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span-1">Explore The furmon  </span>
              </h4>
              <div className="card__details">
                <ul>
                  <li>1 day tour</li>
                  <li>Up to 15 people</li>
                  <li>2 tour guides</li>
                  <li>no sleep</li>
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
                <a href="#popup" className="btn btn--white" >Book Now</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-1-of-3">
           <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture-2"> &nbsp; </div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span-2">dive into kaptai lake</span>
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
            <div className="card__side card__side--back card__side--back-2">
              <div className="card__cta">
                <div className="card__price-box">
                  <p className="card__price-only">Only</p>
                  <p className="card__price-value">2000</p>
                </div>
                <a href="#popup" className="btn btn--white" >Book Now</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-1-of-3">
           <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture-3"> &nbsp; </div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span-3">Explore Buddha behar </span>
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
            <div className="card__side card__side--back card__side--back-3">
              <div className="card__cta">
                <div className="card__price-box">
                  <p className="card__price-only">Only</p>
                  <p className="card__price-value">1200</p>
                </div>
                <a href="#popup" className="btn btn--white" >Book Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="u-center-text  u-mb-2 u-mt-8">
        <a href="#popup" className="btn btn--green">Book Now</a>
      </div>
    </section>
  );
}

export default Tours;
