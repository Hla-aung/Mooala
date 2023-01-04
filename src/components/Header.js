import { useState } from "react"
import logo from "../images/mooala_logo.png";

const Header = () => {
  const [mobile, setMobile] = useState(false)
  return (
    <div className="container header">
      <nav>
        <img src={logo} alt="logo" width="100vw" className="logo"/>
        <div className={mobile ? "mobile" : "headerbox"} onClick={() => setMobile(false)}>
          <a href="/buynow" className="link">
            Buy Now
          </a>
          <a href="/product" className="link">
            Our Products
          </a>
          <a href="/menu" className="menu">
            <img src={logo} alt="logo" width="100vw" />
          </a>
          <a href="/store" className="link">
            Find A Store
          </a>
          <a href="/wholesale" className="link">
            Wholesale
          </a>
        </div>
        <button className="toggle" onClick={() => setMobile(!mobile)}>
            {mobile ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
        </button>
      </nav>
    </div>
  );
};

export default Header;
