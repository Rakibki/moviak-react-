import Modal from "react-modal";
import { MdClose } from "react-icons/md";
import Title from "../../title/Title";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import getLocalStore from "../../../utils/getLocalStore/getLocalStore";
import { toast } from "react-toastify";

const BookMovie = ({
  modalIsOpen,
  afterOpenModal,
  customStyles,
  closeModal,
  show,
}) => {
  const handleBook = (e) => {
    e.preventDefault();
    const MovieName = e.target.MovieName.value;
    const MovieId = e.target.MovieId.value;
    const name = e.target.name.value;
    const email = e.target.email.value;
    const tikets = getLocalStore("tikets");
    const tiketData = { name, email, MovieName, MovieId };
    tikets.push(tiketData);
    const tiketStr = JSON.stringify(tikets);
    localStorage.setItem("tikets", tiketStr);
    toast.success("Tickets have been successfully purchased !");
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div style={{ width: "550px", position: "relative" }} className="p-6">
        <div>
          <Title text={"Book A Tiket"} />
        </div>

        <form onSubmit={handleBook}>
          <div style={{ display: "flex", gap: "6px", marginBottom: "5px" }}>
            <Form.Control
              placeholder="Movie Name"
              defaultValue={show?.show?.name}
              name="MovieName"
              disabled
            />
            <Form.Control
              placeholder="Movie Id"
              defaultValue={show?.show?.id}
              name="MovieId"
              disabled
            />
          </div>
          <div style={{ display: "flex", gap: "6px" }}>
            <Form.Control required placeholder="Enter Your Name" name="name" />
            <Form.Control
              required
              placeholder="Enter Your Email"
              name="email"
            />
          </div>
          <Button
            type="submit"
            style={{
              backgroundColor: "#fe7900",
              border: "none",
              marginTop: "10px",
            }}
          >
            Buy Ticket
          </Button>
        </form>
        <div
          style={{
            position: "absolute",
            top: "2px",
            right: "3px",
            cursor: "pointer",
          }}
          onClick={closeModal}
        >
          <MdClose
            style={{ fontSize: "20px" }}
            className="text-2xl cursor-pointer"
          />
        </div>
      </div>
    </Modal>
  );
};

export default BookMovie;
