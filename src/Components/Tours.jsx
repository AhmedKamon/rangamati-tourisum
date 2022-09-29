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
            <div className="card__side card__side--front">front</div>
            <div className="card__side card__side--back card__side--back-1">back</div>
          </div>
        </div>
        <div className="col-1-of-3">1</div>
        <div className="col-1-of-3">1</div>
      </div>
    </section>
  );
}

export default Tours;
