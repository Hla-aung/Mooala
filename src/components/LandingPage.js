import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlantWilt } from "@fortawesome/free-solid-svg-icons";
import banana from "../images/mooala_banana.png";

const LandingPage = () => {
  return (
    <div className="landingPage">
      <div className="text">
        <h1>BANANAMILK.</h1>
        <h1>It's A Thing.</h1>
        <div className="icon">
          <FontAwesomeIcon icon={faPlantWilt} style={{ color: "green" }} />
          <p>
            Mooala Bananamilk is a delicious, unsweetened, plant-based diary
            alternative.
          </p>
        </div>
        <div className="icon">
          <FontAwesomeIcon icon={faPlantWilt} style={{ color: "green" }} />
          <p>Our Bananamilk is made with Real Bananas and Cinnamon.</p>
        </div>
        <div className="icon">
          <FontAwesomeIcon icon={faPlantWilt} style={{ color: "green" }} />
          <p>
            At Moola, we only use the good stuff like Calcium, Potassium and
            Vitamin C.
          </p>
        </div>
        <div className="icon">
          <FontAwesomeIcon icon={faPlantWilt} style={{ color: "green" }} />
          <p>USDA Organic is toxic pesticide and preservative free.</p>
        </div>
        <button className="button">Shop All Our Products</button>
      </div>
    
      <img src={banana} alt="banana" />
      
    </div>
  );
};

export default LandingPage;
