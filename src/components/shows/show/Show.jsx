import { Link } from "react-router-dom";

const Show = ({ show }) => {
  console.log(show);
  return (
    <Link to={`/show/${show?.show?.id}`}>
      <div style={{ cursor: "pointer" }}>
        <img style={{ width: "100%" }} src={show?.show?.image?.medium} alt="" />
        <h6
          style={{
            marginTop: "10px",
            fontSize: "20px",
            color: "#202020",
            textDecoration: "underline",
            textDecorationColor: "#fe7900",
          }}
        >
          {show?.show?.name}
        </h6>
        <p
          style={{
            color: "#7b7b7b",
            textDecoration: "underline",
            textDecorationColor: "#fe7900",
          }}
        >
          {show?.show?.ended}
        </p>
      </div>
    </Link>
  );
};

export default Show;
