import PropTypes from "prop-types";

const NotesSearch = ({ searchQuery, onSearchChange }) => {
  return (
    <input
      className="note-search"
      type="text"
      placeholder="Cari catatan..."
      value={searchQuery}
      onChange={(e) => onSearchChange(e.target.value)}
    />
  );
};

NotesSearch.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
};

export default NotesSearch;
