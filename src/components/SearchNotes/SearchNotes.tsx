import React from "react";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import styles from "./SearchNotes.module.scss";
import Input from "../Input/Input";

interface SearchNotesProps {
  onChange: (text: string) => void;
}

const SearchNotes: React.FC<SearchNotesProps> = ({
  onChange
}) => {
  return (
    <div className={styles.container}>
      <SearchIcon className={styles.searchIcon} />
      <Input onChange={(e) => onChange(e.target.value)} placeholder="Search notes" value="" className={styles.searchInput} />
    </div>
  )
};

export default SearchNotes;