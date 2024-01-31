const Show = ({ show }) => {
  console.log(show);
  return (
    <div style={{cursor: "pointer"}}>
      <img style={{ width: "100%" }} src={show?.show?.image?.medium} alt="" />
      <h3
        style={{ textAlign: "center", fontSize: "50px", fontFamily: "cursive" }}
      >
        {show?.show?.name}
      </h3>
    </div>
  );
};

export default Show;
