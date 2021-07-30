/** @format */

import React from "react";
import { DivFindContact } from "./FindContactStyles";

const FindContact = ({ onHandleChange, filter }) => {
  return (
    <DivFindContact>
      Find Contsct by Name:
      <input
        type="text"
        value={filter}
        name="filter"
        autoComplete="off"
        onChange={onHandleChange}
      />
    </DivFindContact>
  );
};

export default FindContact;
