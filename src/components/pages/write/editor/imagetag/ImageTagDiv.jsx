import React, { useState, useRef } from "react";
import Draggable from "react-draggable";
import { ImageTagModal } from "./tagmodal/ImageTagModal";
import styled from "styled-components";

function ImageTagDiv({ children }) {
  const [isEditing, setIsEditing] = useState(false);
  const addButtonRef = useRef(null);

  const [tagData, setTagData] = useState({
    tagsId: [],
    axisX: [],
    axisY: [],
    selectedItems: [],
  });

  const [modalVisible, setModalVisible] = useState([]);

  const addNewButton = (e) => {
    if (!isEditing || modalVisible.some((vis) => vis)) return;
    const divRect = addButtonRef.current.getBoundingClientRect();
    const x = e.clientX - divRect.x;
    const y = e.clientY - divRect.y;

    setTagData((prevData) => ({
      tagsId: [...prevData.tagsId, prevData.tagsId.length],
      axisX: [...prevData.axisX, x],
      axisY: [...prevData.axisY, y],
      selectedItems: [...prevData.selectedItems, null],
    }));

    setModalVisible((prevVisible) => [...prevVisible, true]);
  };

  const toggleModal = (index) => {
    setModalVisible((prevVisible) =>
      prevVisible.map((vis, idx) => (idx === index ? !vis : vis))
    );
  };

  const handleSelect = (index, item) => {
    setTagData((prevData) => ({
      ...prevData,
      selectedItems: prevData.selectedItems.map((val, idx) =>
        idx === index ? item : val
      ),
    }));
    toggleModal(index);
  };

  const handleDrag = (index, e, data) => {
    setTagData((prevData) => ({
      ...prevData,
      axisX: prevData.axisX.map((val, idx) => (idx === index ? data.x : val)),
      axisY: prevData.axisY.map((val, idx) => (idx === index ? data.y : val)),
    }));
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          backgroundColor: "lightgreen",
          position: "relative"
        }}
      >
        <div
          ref={addButtonRef}
          onClick={addNewButton}
          style={{
            height: "500px",
            width: "100%",
            position: "relative",
          }}
        >
          {children}
          {tagData.tagsId.map((tagId, index) => (
            <Draggable
              position={{ x: tagData.axisX[index], y: tagData.axisY[index] }}
              bounds="parent"
              onStop={(e, data) => handleDrag(index, e, data)}
              key={tagId}
              disabled={!isEditing}
            >
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  if (!modalVisible[index]) {
                    toggleModal(index);
                  }
                }}
              >
                <StTagButton
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleModal(index);
                  }}
                >
                  +
                </StTagButton>
                {modalVisible[index] && (
                  <ImageTagModal
                    closeModal={() => toggleModal(index)}
                    selectedItem={tagData.selectedItems[index]}
                    setSelectedItem={(item) => handleSelect(index, item)}
                  />
                )}
              </div>
            </Draggable>
          ))}
        </div>
        <StTagEditorButton onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? "편집완료" : "상품 태그 편집"}
        </StTagEditorButton>
      </div>
    </>
  );
}

export default ImageTagDiv;

const StTagButton = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  position: relative;
  left: calc(50% - 15px);
  bottom: calc(100% + 5px);
  color: white;
  background-color: rgba(53, 197, 240, 0.8);
  font-size: 13px;
  font-weight: 900;
`;

const StTagEditorButton = styled.button`
  position: absolute;
  padding: 7px 25px 9px;
  font-size: 14px;
  line-height: 20px;
  display: inline-block;
  color: rgb(255, 255, 255);
  background-color: rgba(0, 0, 0, 0.7);
  text-align: center;
  transition: background-color 0.1s ease 0s;
  right: 0;
  margin-top: 6px;
`;