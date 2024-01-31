import Modal from "react-modal";
import { MdClose } from "react-icons/md";
import Title from "../../title/Title";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const BookMovie = ({
  modalIsOpen,
  afterOpenModal,
  customStyles,
  closeModal,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("click");
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div style={{ width: "550px" }} className="relative p-6">
        <div>
          <Title text={"Book A Tiket"} />
        </div>

        <form onSubmit={handleSubmit}>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            <Form.Control
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </form>
        <div className="absolute top-2 right-2" onClick={closeModal}>
          <MdClose className="text-2xl cursor-pointer" />
        </div>
      </div>
    </Modal>
  );
};

export default BookMovie;
