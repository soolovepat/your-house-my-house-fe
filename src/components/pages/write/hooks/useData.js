import React, { createContext, useState, useContext } from "react";

const DataContext = createContext();

function DataProvider({ children }) {
  const [data, setData] = useState({
    title: "",
    residence: 0,
    content: "",
    tags: [
      {
        contentImageId: "",
        tagsId: [],
        itemId: [],
        itemName: [],
        brand: [],
        coverImage: [],
        axisX: [],
        axisY: [],
      },
    ],
  });

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
}

function useData() {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
}

export { DataProvider, useData };
