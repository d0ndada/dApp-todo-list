import { useState } from "react";
import { SortButton } from "../styles/FormStyled";

function SortOrder({ SortByAZ, SortById }) {
  const [switchSort, setSwitchSort] = useState(false);

  const handleClick = (e) => {
    if (switchSort === false) {
      e.preventDefault();
      SortByAZ();
      setSwitchSort(true);
    }
    if (switchSort === true) {
      e.preventDefault();
      SortById();
      setSwitchSort(false);
    }
  };

  return (
    <SortButton onClick={handleClick}>
      {switchSort ? (
        <span className="material-symbols-outlined">sort</span>
      ) : (
        <span className="material-symbols-outlined">filter_list</span>
      )}
    </SortButton>
  );
}

export default SortOrder;
