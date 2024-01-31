import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import coverImg from "../../assets/images/img_25.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import sideber from "../../assets/images/sideber.jpg";
import add from "../../assets/images/add.png";

const ShowDetails = () => {
  const [show, setShow] = useState({});
  const { showId } = useParams();

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res?.json())
      .then((result) => {
        const data = result.find((item) => item?.show?.id == showId);
        setShow(data);
      });
  }, []);

  console.log(show);

  return (
    <div>
      <img src={coverImg} alt="" />

      <div style={{ width: "90%", margin: "0 auto" }} className="mt-5">
        <Container>
          <Row>
            <Col xs={8}>
              <Row>
                <Col xs={5}>
                  <img src={show?.show?.image?.original} alt="" />
                </Col>
                <Col xs={7}>
                  <h4>Movie Name: {show?.show?.name}</h4>
                  <p>Movie Type: {show?.show?.type}</p>
                  <p>Movie status: {show?.show?.status}</p>
                  <p>Movie language: {show?.show?.language}</p>
                  <p>Movie runtime: {show?.show?.runtime}</p>
                  <p>Movie premiered: {show?.show?.premiered}</p>
                  <p>Movie ended: {show?.show?.ended}</p>
                  <p>Movie days: {show?.show?.ended[0]}</p>
                  <p>country: {show?.show?.network?.country?.name}</p>
                </Col>
              </Row>
              <div className="mt-5">
                <h4>Summary</h4>
                <p>{show?.show?.summary}</p>
              </div>
            </Col>
            <Col xs={4}>
              <img src={sideber} alt="" />
              <img className="mt-4" src={add} alt="" />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ShowDetails;
