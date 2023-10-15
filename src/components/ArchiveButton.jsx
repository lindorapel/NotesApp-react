import PropTypes from "prop-types";

const ArchiveButton = ({ id, archived, onArchive }) => {
  return (
    <button
      className="note-item-archive"
      onClick={() => {
        onArchive(id);
      }}
    >
      {archived ? "Pindahkan" : "Arsipkan"}
    </button>
  );
};

ArchiveButton.propTypes = {
  id: PropTypes.number.isRequired,
  archived: PropTypes.bool.isRequired,
  onArchive: PropTypes.func.isRequired,
};

export default ArchiveButton;
