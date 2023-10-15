import NotesSearch from "./NotesSearch";
import PropTypes from "prop-types";

const NotesHeader = ({ searchQuery, onSearchChange }) => {
  return (
    <header>
      <div className="note-header container">
        <h1>Notes.App</h1>
        <NotesSearch
          searchQuery={searchQuery}
          onSearchChange={onSearchChange}
        />
      </div>
    </header>
  );
};

NotesHeader.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
};

export default NotesHeader;
