import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import api from "../../../../../../api/api";

export const ImageTagModal = ({
  closeModal,
  selectedItem,
  setSelectedItem,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [ page, setPage]  = useState(1)
  console.log("search",results)





  useEffect(() => {
    if (searchTerm !== '') {
      setPage(1);  // reset page number
      setResults([]);  // reset results
    }
  }, [searchTerm]);
  
  useEffect(() => {
    if (!selectedItem) {
      api
        .get(`article/item`, {
          params: {
            itemName: searchTerm,
            page: page,
          },
        })
        .then((res) => {
          setResults(res.data.list)
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [searchTerm, selectedItem, page]);
  

  const handleSelect = (item) => {
    setSelectedItem(item.itemName);
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
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {results.map((item, index) => (
            <div key={item.itemId}>
              {item.itemName}
              <button onClick={() => handleSelect(item)}>Select</button>
            </div>
          ))}
        </>
      ) : (
        <StTagResultContainer>
          <StTagImageContainer>
            <StTagImageStyle src="https://m.media-amazon.com/images/I/418QpEn9JKL._SY355_.jpg" />
          </StTagImageContainer>
          <div>
            <h2>{selectedItem}</h2>
          </div>
        </StTagResultContainer>
      )}
    </StModalCotainer>
  );
};

const StModalCotainer = styled.div`
  background-color: white;
  position: absolute;
  width: 280px;
  min-height: 280;
  max-height: 200px;
  border-radius: 10px;
  padding: 20px;
  z-index: 10000;
  overflow: scroll;
  top: 31px;
  left: -127px;
`;

const StTagResultContainer = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  border-radius: 8px;
  background-color: rgb(247, 249, 250) !important;
  min-width: 200px;
`;

const StTagImageContainer = styled.div`
  position: relative;
  flex: 0 0 auto;
  width: 80px;
  height: 80px;
  margin-right: 12px;
  border-radius: 2px;
  overflow: hidden;
`;

const StTagImageStyle = styled.img`
  width: 100%;
  height: 100%;
`;