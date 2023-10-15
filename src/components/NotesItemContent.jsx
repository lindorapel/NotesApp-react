import PropTypes from "prop-types";

const NotesItemContent = ({ title, createdAt, body }) => {
  return (
    <>
      <div className="note-item-content">
        <h3
          style={{
            marginBottom: "4px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {title}
        </h3>
        <p style={{ color: "#aaa", fontSize: "12px", marginBottom: "8px" }}>
          {createdAt}
        </p>
        <p style={{ fontSize: "14px" }}>{body}</p>
      </div>
    </>
  );
};

NotesItemContent.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default NotesItemContent;
