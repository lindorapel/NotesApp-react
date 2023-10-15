import PropTypes from "prop-types";

const DeleteButton = ({ id, onDelete }) => {
  return (
    <button className="noteItem-delete" onClick={() => onDelete(id)}>
      Delete
    </button>
  );
};

DeleteButton.propTypes = {
  id: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DeleteButton;
