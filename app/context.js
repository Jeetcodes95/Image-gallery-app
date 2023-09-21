"use client";
import React, { createContext, useState } from "react";
export const DataContext = createContext(null);

const DataStore = (props) => {
  const [Data, setData] = useState([]);
  return (
    <DataContext.Provider value={[Data, setData]}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataStore;
