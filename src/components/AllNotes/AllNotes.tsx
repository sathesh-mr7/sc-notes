import { useSelector } from "react-redux";
import Notes from "../Notes/Notes";
import { RootState } from "../../store/reduxStore";

const AllNotes = () => {
  const notes = useSelector((state: RootState) => state.notes);
  return (
    <Notes notes={notes} />
  );
}

export default AllNotes;