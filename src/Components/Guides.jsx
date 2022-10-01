import React from "react";
import guid1 from '../images/naruto.jpg'

function Guides() {
  return (
    <section className="section-guides">
      <div className="u-center-text  u-mb-2 u-mt-8">
        <h2 className="heading-secondary">Guides or superheros</h2>
      </div>
      <div className="row">
        <div className="guide">
          <figure className="guide__shape">
            <img src={guid1} className='guide__img' alt="" />
          </figure>
          <div className="guide__text">
            <h3 className="heading-tertiary u-mb-2">I want to be the best ninja of all time</h3>
            <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod assumenda perspiciatis quo alias velit mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum cupiditate quidem ea? Labore, id facilis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsa numquam ab dolore cumque natus?</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Guides;
