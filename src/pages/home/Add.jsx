import add1 from "../../assets/images/add1.jpg";
import add2 from "../../assets/images/add2.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Add = () => {
  return (
    <Row className="mt-5">
      <Col xs={6}>
        <img src={add1} alt="" />
      </Col>
      <Col xs={6}>
        <img src={add2} alt="" />
      </Col>
    </Row>
  );
};

export default Add;
