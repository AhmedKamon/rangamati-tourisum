
import { FaGlobeAsia,FaCloudSunRain } from "react-icons/fa";
import { GiMountainRoad } from "react-icons/gi";
import { BiMapPin } from "react-icons/bi";

function Featchers() {
  return (
    <section className="section-featchers">
      <div className="featchers-row">
        <div className="card-1-of-4">
          <div className="featcher-box">
            <FaGlobeAsia className="featcher-box__icon" />

            <h3 className="heading-featcher">Explore the world</h3>
            <p className="featchers-box__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              dicta quam vitae!
            </p>
          </div>
        </div>
        <div className="card-1-of-4">
          <div className="featcher-box">
            <GiMountainRoad className="featcher-box__icon" />

            <h3 className="heading-featcher">Call of GiMountainRoad</h3>
            <p className="featchers-box__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              dicta quam vitae!
            </p>
          </div>
        </div>
        <div className="card-1-of-4">
          <div className="featcher-box">
            <BiMapPin className="featcher-box__icon" />

            <h3 className="heading-featcher">Track as you preferred </h3>
            <p className="featchers-box__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              dicta quam vitae!
            </p>
          </div>
        </div>
        <div className="card-1-of-4">
          <div className="featcher-box">
            <FaCloudSunRain className="featcher-box__icon" />

            <h3 className="heading-featcher">Whats the condition</h3>
            <p className="featchers-box__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              dicta quam vitae!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Featchers;
