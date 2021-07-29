/** @format */

import React from "react";
import { DivFindContact } from "./FindContactStyles";

const FindContact = ({ onHandleChange }) => {
  return (
    <DivFindContact>
      Find Contsct by Name:
      <input
        type="text"
        name="filter"
        autoComplete="off"
        onChange={onHandleChange}
      />
    </DivFindContact>
  );
};

export default FindContact;
