import React from "react";

function About() {
  return (
    <main>
      <scetion className="section-about">
        <div className="u-center-text  u-mb-2">
          <h2 className="heading-secondary">
            Adventure to the exciting culture of mountain
          </h2>
        </div>
        <div className="row">
          <div className="col-1-of-2">
            <h3 className="heading-third u-mb-2">Live life like its last chance</h3>
            <p className="paragraph"> ipsum dolor sit amet consectetur adipisicing elit. Nesciunt praesentium numquam molestias ad dolorem minima beatae, quis perspiciatis officia. Culpa soluta placeat omnis delectus commodi. Aut omnis sunt fugiat quos!</p>
            <h3 className="heading-third u-mb-2">let us make you fall in nature</h3>
            <p className="paragraph"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ratione voluptas dolores laborum facilis quisquam nihil id.</p>
            <a href="/" className="btn-text">learn more &rarr;</a>
          </div>
          <div className="col-1-of-2">image</div>
        </div>
      </scetion>
    </main>
  );
}

export default About;
