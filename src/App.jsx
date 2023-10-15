import { getInitialData } from "./utils";
import NotesList from "./components/NotesList";
import NotesInput from "./components/NotesInput";
import { useState } from "react";
import NotesHeader from "./components/NotesHeader";

function App() {
  const [notes, setNotes] = useState(getInitialData());
  const [searchQuery, setSearchQuery] = useState("");

  const onAddNoteHandler = ({ title, body, createdAt }) => {
    setNotes((prevNotes) => [
      ...prevNotes,
      {
        id: +new Date(),
        title,
        body,
        createdAt,
        archived: false,
      },
    ]);
  };

  const onDeleteHandler = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  const onArchiveHandler = (id) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, archived: !note.archived } : note
    );
    setNotes(updatedNotes);
  };

  // Filter catatan berdasarkan query pencarian
  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const activeNotes = filteredNotes.filter((note) => !note.archived);
  const archivedNotes = filteredNotes.filter((note) => note.archived);
  return (
    <div className="Notes-app">
      <NotesHeader
        className="noteHeader-container"
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <div className="note-main">
        <NotesInput addNote={onAddNoteHandler} />
        <div>
          <h2 style={{ fontWeight: "400", margin: "16px 0" }}>Catatan Aktif</h2>
          {activeNotes.length > 0 ? (
            <NotesList
              notes={activeNotes}
              onDelete={onDeleteHandler}
              onArchive={onArchiveHandler}
            />
          ) : (
            <p>Tidak ada catatan.</p>
          )}
          <h2>Catatan yang Diarsipkan</h2>
          {archivedNotes.length > 0 ? (
            <NotesList
              notes={archivedNotes}
              onDelete={onDeleteHandler}
              onArchive={onArchiveHandler}
            />
          ) : (
            <p>Tidak ada catatan yang diarsipkan.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
