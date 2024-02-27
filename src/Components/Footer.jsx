import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="footer">
      <div className="f1">
        <div className="phone">
          <FaPhoneAlt />
        </div>
        <div style={{ color: "white", paddingTop: "10px" }}>
          Toll free 1800 200 1234
        </div>
      </div>
      <div
        className="f1"
        onClick={() =>
          window.open("https://www.facebook.com/cripumps", "_blank")
        }
      >
        <div className="globe">
          <FaFacebook style={{ height: "40px", width: "40px" }} />
        </div>
        <div style={{ color: "white", paddingTop: "10px" }}>
          www.facebook.com/cripumps
        </div>
      </div>
      <div className="f1"
      onClick={() =>
        window.open("https://www.crigroups.com/", "_blank")
      }
      >
        <div className="globe">
          <BsGlobe style={{ height: "40px", width: "40px" }} />
        </div>
        <div style={{ color: "white", paddingTop: "10px" }}>
          www.crigroups.com
        </div>
      </div>
    </div>
  );
};

export default Footer;
