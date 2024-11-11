import React, { useCallback, useState } from "react";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import Input from "../../ui/Input/Input";

import styles from "./SearchNotes.module.scss";
import { debounce } from "../../utils/helper";
interface SearchNotesProps {
  onChange: (text: string) => void;
}

const SearchNotes: React.FC<SearchNotesProps> = ({
  onChange
}) => {
  const [searchText, setSearchText] = useState("");
  const debounceTimeout = 1000; 
  const debouncedOnChange = useCallback(debounce(onChange, debounceTimeout), [onChange]);

  const handleOnSearch = (text: string) => {
    setSearchText(text);
    debouncedOnChange(text);
  }
  return (
    <div className={styles.container}>
      <SearchIcon className={styles.searchIcon} />
      <Input onChange={(e) => handleOnSearch(e.target.value)} placeholder="Search notes" value={searchText} className={styles.searchInput} />
    </div>
  )
};

export default SearchNotes;