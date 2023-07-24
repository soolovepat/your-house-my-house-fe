import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

export const ImageTagModal = ({ closeModal, selectedItem, setSelectedItem }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (searchTerm && !selectedItem) {
      axios.get(`https://reqres.in/api/unknown`)
        .then(res => {
          const filteredData = res.data.data.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
          setResults(filteredData);
        })
        .catch(err => {
          console.error(err);
        });
    }
  }, [searchTerm, selectedItem]);

  const handleSelect = (item) => {
    setSelectedItem(item);
    closeModal();
  };

  return (
    <StModalCotainer>
      {!selectedItem ? (
        <>
          <input 
            type="text" 
            placeholder="Search..." 
            value={searchTerm} 
            onChange={e => setSearchTerm(e.target.value)} 
          />
          {results.map((item, index) => (
            <div key={index}>
              {item.name}
              <button onClick={() => handleSelect(item)}>Select</button>
            </div>
          ))}
        </>
      ) : (
        <div>
          <h4>Selected item:</h4>
          <p>{selectedItem.name}</p>
        </div>
      )}
    </StModalCotainer>
  );
}

const StModalCotainer = styled.div`
  background-color: white;
  position: absolute;
  width: 200px;
  min-height: 100px;
  max-height: 200px;
  top: 40px;
  border-radius: 10px;
  padding: 20px;
  z-index: 600;
  overflow: scroll;
`;
