import { useState } from "react";
import PropTypes from "prop-types";

const NotesInput = ({ addNote }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onTitleChangeEventHandler = (event) => {
    const inputValue = event.target.value;

    if (inputValue.length <= 50) {
      setTitle(inputValue);
    }
  };

  const onBodyChangeEventHandler = (event) => {
    setBody(event.target.value);
  };

  const onSubmitEventHandler = (event) => {
    event.preventDefault();
    addNote({ title, body, createdAt: +new Date() });
    setTitle("");
    setBody("");
  };

  const remainingCharacters = 50 - title.length;
  return (
    <div className="note-input">
      <h2 style={{ fontWeight: "400", margin: "16px 0" }}>Buat Catatan</h2>
      <p style={{ color: "#aaa", fontSize: "14px", textAlign: "right" }}>
        sisa karakter :{remainingCharacters}{" "}
      </p>
      <form onSubmit={onSubmitEventHandler}>
        <input
          style={{
            display: "block",
            width: "100%",
          }}
          type="text"
          placeholder="Ini adalah judul ..."
          value={title}
          onChange={onTitleChangeEventHandler}
          required
        />
        <textarea
          style={{
            display: "block",
            width: "100%",
            minHeight: "175px",
            resize: "none",
          }}
          type="text"
          placeholder="Tuliskan catatanmu disini ..."
          value={body}
          onChange={onBodyChangeEventHandler}
          required
        ></textarea>
        <button type="submit">Tambah</button>
      </form>
    </div>
  );
};

NotesInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NotesInput;
