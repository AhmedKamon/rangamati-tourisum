import React from "react";
import guid1 from '../images/naruto.jpg'
import kakashi from '../images/kakashi.jpg'
import hinata from '../images/hinata.jpg'

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
            <figcaption className="guide__caption">Naruto Uzumaki</figcaption>
          </figure>
          <div className="guide__text">
            <h3 className="heading-tertiary u-mb-2">I want to be the best ninja of all time</h3>
            <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod assumenda perspiciatis quo alias velit mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum cupiditate quidem ea? Labore, id facilis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsa numquam ab dolore cumque natus?</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="guide">
          <figure className="guide__shape">
            <img src={kakashi} className='guide__img' alt="" />
            <figcaption className="guide__caption">Kakashi Hatake
</figcaption>
          </figure>
          <div className="guide__text">
            <h3 className="heading-tertiary u-mb-2">I want to be the best ninja of all time</h3>
            <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod assumenda perspiciatis quo alias velit mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum cupiditate quidem ea? Labore, id facilis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsa numquam ab dolore cumque natus?</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="guide">
          <figure className="guide__shape">
            <img src={hinata} className='guide__img' alt="" />
            <figcaption className="guide__caption">Hinata Hyuga</figcaption>
          </figure>
          <div className="guide__text">
            <h3 className="heading-tertiary u-mb-2">I want to be the best ninja of all time</h3>
            <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod assumenda perspiciatis quo alias velit mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum cupiditate quidem ea? Labore, id facilis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsa numquam ab dolore cumque natus?</p>
          </div>
        </div>
      </div>
      <div className="u-center-text  u-mt-8">
        <a href="/" className="btn-text">View more Ninjas as guides &rarr; </a>
      </div>
    </section>
  );
}

export default Guides;
