import React, { useState, useRef } from "react";
import Draggable from "react-draggable";
import { ImageTagModal } from "./tagmodal";
import { styled } from "styled-components";

function DraggableButtonInCard() {
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
        }}
      >
        <div
          ref={addButtonRef}
          onClick={addNewButton}
          style={{
            height: "500px",
            width: "100%",
            position: "relative",
            backgroundColor: "green",
          }}
        >
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
      </div>
      <button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? "편집완료" : "태그편집하기"}
      </button>
    </>
  );
}

export default DraggableButtonInCard;

const StTagButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  position: relative;
  left: calc(50% - 15px);
  bottom: calc(100% + 5px);
`;
