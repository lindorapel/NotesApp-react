import NotesItem from "./NotesItem";
import PropTypes from "prop-types";

const NotesList = ({ notes, onDelete, onArchive }) => {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <NotesItem
          key={note.id}
          onDelete={onDelete}
          onArchive={onArchive}
          {...note}
        />
      ))}
    </div>
  );
};

NotesList.propTypes = {
  notes: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
};

export default NotesList;
