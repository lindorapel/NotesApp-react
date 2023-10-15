import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";
import PropTypes from "prop-types";
import NotesItemContent from "./NotesItemContent";
import { showFormattedDate } from "../utils";

const NotesItem = ({
  id,
  title,
  createdAt,
  body,
  archived,
  onDelete,
  onArchive,
}) => {
  return (
    <>
      <div className="note-item">
        <NotesItemContent
          title={title}
          createdAt={showFormattedDate(createdAt)}
          body={body}
        />
        <div className="note-item-action" style={{ display: "flex" }}>
          <DeleteButton id={id} onDelete={onDelete} />
          <ArchiveButton id={id} archived={archived} onArchive={onArchive} />
        </div>
      </div>
    </>
  );
};

NotesItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
};

export default NotesItem;
