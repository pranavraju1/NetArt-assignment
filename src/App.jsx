import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import "./App.css";
import Instruments from "./Components/Instruments";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <p style={{ marginTop: "50px" }}>
        <center>
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
          RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
          POWER FOR THE NATION.
        </center>
      </p>
      <Instruments />
      <p style={{ marginBottom: "20px", marginTop: "10px" }}>
        <center>
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors{" "}
        </center>
      </p>
      <div className="hr"></div>
      <p style={{ marginBottom: "20px", marginTop: "20px" }}>
        <b>
          <center>
            C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
          </center>
        </b>
      </p>
      <p style={{ marginBottom: "20px" }}>
        <center>
          CHEMICALS & PROCESS <span className="red">|</span> POWER{" "}
          <span className="red">|</span> WATER & WASTE WATER{" "}
          <span className="red">|</span> OILS & GAS{" "}
          <span className="red">|</span> PHARMA <span className="red">|</span>{" "}
          SUGARS & DISTILLERIES <span className="red">|</span> PAPER & PULP{" "}
          <span className="red">|</span> MARINE & DEFENCE{" "}
          <span className="red">|</span> METAL & MINING{" "}
          <span className="red">|</span> FOOD & BEVERAGE{" "}
          <span className="red">|</span> PETROCHEMICAL & REFINERIES{" "}
          <span className="red">|</span> SOLAR <span className="red">|</span>{" "}
          BUILDING <span className="red">|</span> HVAC{" "}
          <span className="red">|</span> FIRE FIGHTING{" "}
          <span className="red">|</span>
          AGRICULTURE & RESIDENTIAL
        </center>
      </p>
      <Footer />
    </>
  );
};

export default App;
