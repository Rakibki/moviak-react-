import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import banner1 from "../../assets/images/banner1.jpg";
import banner2 from "../../assets/images/banner2.jpg";
import banner3 from "../../assets/images/banner3.jpg";
import banner4 from "../../assets/images/banner4.jpg";
import banner5 from "../../assets/images/banner5.jpg";

const Banner = () => {
  return (
    <AwesomeSlider style={{ height: "550px" }}>
      <div
        style={{
          backgroundImage: `url(${banner1})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 style={{fontSize: "50px", fontWeight: "bold"}}>
          Kubo and the Two <span style={{ color: "#fe7900" }}>Strings</span>
        </h1>
        <p style={{ color: "#fff", fontFamily: "sans-serif", textAlign: "center", marginTop: "5px", fontSize: "18px" }}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem <br />
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab ...
        </p>
      </div>

      <div
        style={{
          backgroundImage: `url(${banner2})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 style={{fontSize: "50px", fontWeight: "bold"}}>
          Kubo and the Two <span style={{ color: "#fe7900" }}>Strings</span>
        </h1>
        <p style={{ color: "#fff", fontFamily: "sans-serif", textAlign: "center", marginTop: "5px", fontSize: "18px" }}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem <br />
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab ...
        </p>
      </div>
      <div
        style={{
          backgroundImage: `url(${banner3})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 style={{fontSize: "50px", fontWeight: "bold"}}>
          Kubo and the Two <span style={{ color: "#fe7900" }}>Strings</span>
        </h1>
        <p style={{ color: "#fff", fontFamily: "sans-serif", textAlign: "center", marginTop: "5px", fontSize: "18px" }}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem <br />
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab ...
        </p>
      </div>
      <div
        style={{
          backgroundImage: `url(${banner4})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 style={{fontSize: "50px", fontWeight: "bold"}}>
          Kubo and the Two <span style={{ color: "#fe7900" }}>Strings</span>
        </h1>
        <p style={{ color: "#fff", fontFamily: "sans-serif", textAlign: "center", marginTop: "5px", fontSize: "18px" }}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem <br />
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab ...
        </p>
      </div>
      <div
        style={{
          backgroundImage: `url(${banner5})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 style={{fontSize: "50px", fontWeight: "bold"}}>
          Kubo and the Two <span style={{ color: "#fe7900" }}>Strings</span>
        </h1>
        <p style={{ color: "#fff", fontFamily: "sans-serif", textAlign: "center", marginTop: "5px", fontSize: "18px" }}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem <br />
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab ...
        </p>
      </div>
    </AwesomeSlider>
  );
};

export default Banner;
