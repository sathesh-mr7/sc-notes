import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../store/reduxStore";
import Notes from "../Notes/Notes";

const FolderNotes = () => {
  const notes = useSelector((state: RootState) => state.notes);
  const { folderId } = useParams<{ folderId: string }>();

  const folderNotes = notes.filter(note => note?.folder === folderId);
  return (
    <Notes notes={folderNotes} />
  );
}

export default FolderNotes;