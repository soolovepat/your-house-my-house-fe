import React, { useState, useEffect } from "react";
import styled from "styled-components";
import api from "../../../../../../api/api";

export const ImageTagModal = ({
  closeModal,
  selectedItem,
  setSelectedItem,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (searchTerm !== "") {
      setPage(1);
      setResults([]);
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
          setResults(res.data.list);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [searchTerm, selectedItem, page]);

  const handleSelect = (item) => {
    const urlRegex = /https?:\/\/[^"]+/g;
    const coverImageUrlArray = item.coverImage.match(urlRegex);

    let coverImageUrl =
      coverImageUrlArray && coverImageUrlArray.length > 0
        ? coverImageUrlArray[0]
        : "";

    setSelectedItem({
      itemId: item.itemId,
      itemName: item.itemName,
      brand: item.brand,
      coverImage: coverImageUrl,
    });
    closeModal();
  };

  return (
    <>
      <StModalCotainer>
        {!selectedItem ? (
          <StSearchWrapper>
            <div className="input-group">
              <StSearchInput
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <StCancleBtn onClick={() => closeModal()}> 취소</StCancleBtn>
            </div>
            <StResultContainer>
              {results.map((item, index) => {
                let imageUrls;
                let firstImageUrl;
                try {
                  imageUrls = JSON.parse(item.coverImage);
                  firstImageUrl = imageUrls[0];
                } catch (err) {
                  console.error("Failed to parse coverImage:", err);
                }

                return (
                  <StResultButton
                    key={item.itemId}
                    onClick={() => handleSelect(item)}
                  >
                    <div
                      style={{
                        width: "70px",
                        height: "70px",
                        position: "relative",
                      }}
                    >
                      <StResultImg src={firstImageUrl} />
                    </div>
                    <div
                      style={{
                        flex: " 1 0 0px",
                        alignSelf: "stretch",
                        margin: "11px",
                      }}
                    >
                      <div
                        style={{
                          color: "#828c94",
                          fontSize: "12px",
                        }}
                      >
                        {" "}
                        {item.brand}
                      </div>
                      <div
                        style={{
                          fontSize: "14px",
                          fontWeight: "500",
                          lineHeight: "18px",
                        }}
                      >
                        {item.itemName}
                      </div>
                    </div>
                    <div>
                      <StResultBtn>선택</StResultBtn>
                    </div>
                  </StResultButton>
                );
              })}
            </StResultContainer>
          </StSearchWrapper>
        ) : (
          <StTagResultContainer>
            <StTagImageContainer>
              <StTagImageStyle src={selectedItem.coverImage} />
            </StTagImageContainer>
            <div>
              <h2>{selectedItem.itemName}</h2>
            </div>
          </StTagResultContainer>
        )}
      </StModalCotainer>
    </>
  );
};

const StSearchWrapper = styled.div`
  padding: 10px 15px 10px;
  display: flex;
  flex-direction: column;

  .input-group {
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 12px;
  }
`;

const StModalCotainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 375px;
  position: absolute;
  max-height: 375px;
  border-radius: 10px;
  padding: 20px;
  z-index: 10000;
  overflow: scroll;
  top: 31px;
  left: -171px;
`;

const StTagResultContainer = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  border-radius: 8px;
  background-color: rgb(247, 249, 250) !important;
  min-width: 200px;
  height: auto;
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

const StSearchInput = styled.input`
  padding: 8px 15px 9px;
  width: 100%;
  border: 1px solid #dbdbdb;
  background-color: #fff;
  color: #000;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 15px;
  line-height: 21px;
  resize: none;

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px rgba(53, 197, 240, 0.3);
  }
`;

const StCancleBtn = styled.button`
  display: inline-block;
  margin: 0px;
  width: auto;
  box-sizing: border-box;
  border: none;
  background: none;
  font-weight: normal;
  text-decoration: none;
  text-align: center;
  transition: color 0.1s ease 0s, opacity 0.1s ease 0s;
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
  color: rgb(66, 66, 66);
  padding: 2px;
  font-size: 15px;
  line-height: 19px;
  width: 37px;
`;

const StResultContainer = styled.div`
  flex: 1 1 auto;
  padding: 10px 0;
  overflow: auto;
`;

// result button
const StResultButton = styled.button`
  display: flex;
  width: 100%;
  align-items: center;
  margin: 0;
  padding: 5px 15px;
  cursor: pointer;
  background: transparent;
  border: none;
  box-sizing: border-box;
  font: inherit;
  font-family: Noto Sans KR, Noto Sans CJK KR, 맑은 고딕, Malgun Gothic,
    sans-serif;
  text-align: left;
  transition: background-color 0.1s;
`;

const StResultImg = styled.img`
  position: absolute;
  box-sizing: border-box;
  border-radius: 22px;
  border: 1px solid rgba(130, 140, 148, 0.33);
`;

const StResultBtn = styled.button`
  padding: 6px 15px;
  line-height: 20px;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.3px;
  text-align: center;
  color: #2f3438;
  background-color: #fff;
  border: 1px solid #dadde0;
  border-radius: 4px;
  transition: background-color 0.1s;
`;
