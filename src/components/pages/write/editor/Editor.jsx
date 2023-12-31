import React, { useState, useRef, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styled from "styled-components";
import api from "../../../../api/api";
import ImageTagDiv from "./imagetag/ImageTagDiv";
import { useData } from "../hooks/useData";

export default function ParentComponent() {
  const [content, setContent] = useState("");
  const quillRef = useRef();
  const [tagData, setTagData] = useState([]);
  const [showEditor, setShowEditor] = useState(true);
  const [activeImage, setActiveImage] = useState(null);
  console.log(content);
  const imageHandler = async () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      const formData = new FormData();
      formData.append("contentImage", file);

      try {
        const result = await api.post("/article/contentImage", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        const IMG_URL = result.data.url;
        const quill = quillRef.current.getEditor();

        const range = quill.getSelection();
        const position = range ? range.index : quill.getLength();

        // 이미지 url 에디터에 넣기
        const imgTag = `<img src="${IMG_URL}" />\n`;

        quill.insertText(position, imgTag);

        setTagData((oldData) => [...oldData, { url: IMG_URL, tags: [] }]);
      } catch (error) {
        console.log("Upload failed");
      }
    };
  };

  const handleUpdateTags = (url, newTags) => {
    setTagData((oldData) =>
      oldData.map((data) => (data.url === url ? { url, tags: newTags } : data))
    );
  };

  useEffect(() => {
    setActiveImage(null);
  }, [tagData]);
  return (
    <div>
      <StContentImage onClick={imageHandler}>IMG</StContentImage>
      <Editor
        content={content}
        setContent={setContent}
        quillRef={quillRef}
        show={showEditor}
      />
      {tagData.map((data) => (
        <ImageTagDiv
          key={data.url}
          id={data.url}
          url={data.url}
          tags={data.tags}
          onUpdateTags={handleUpdateTags}
          isActive={activeImage === data.id}
          onClick={() => setActiveImage(data.url)}
        >
          <Imgwall src={data.url} alt="Uploaded content" />
        </ImageTagDiv>
      ))}
    </div>
  );
}

const Editor = ({ content, setContent, quillRef, show }) => {
  const { data, setData } = useData();
  const contentHandler = (newContent) => {
    setContent(newContent);
    setData({ ...data, content: content });
  };

  return (
    <EditorContainer style={{ display: show ? "block" : "none" }}>
      <ReactQuill
        ref={quillRef}
        value={content}
        onChange={contentHandler}
        modules={{
          toolbar: {
            container: [
              [{ header: [false, 1, 2, 3] }],
              ["bold", "italic", "underline"],
              [
                { color: ["#000000", "#e60000", "#00ffff"] },
                { background: [] },
              ],
              [{ align: [] }],
              [{ list: "ordered" }, { list: "bullet" }, "link"],
            ],
          },
        }}
        placeholder="내용을 입력해주세요"
      />
    </EditorContainer>
  );
};

const EditorContainer = styled.div`
  .ql-toolbar.ql-snow {
    position: fixed;
    top: 40px;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 0px 0px 0px 15px;
    border: none;
    z-index: 600;
  }

  .ql-container {
    margin: 3px -3px;
    padding: 0px 3px;
    font-size: 15px;
    font-weight: normal;
    line-height: 28px;
    min-height: 28px;
    border: none;
  }

  .ql-editor.ql-blank::before {
    color: rgb(204, 204, 204);
    font-style: normal;
  }

  .ql-editor {
    overflow-wrap: break-word;
    transition: background-color 0.1s ease 0s;
    margin: 2px -3px;
    padding: 0px 3px;
    color: rgb(41, 41, 41);
    font-size: 16px;
    font-weight: normal;
    line-height: 28px;
    min-height: 28px;
  }
`;

const Imgwall = styled.img`
  width: 100%;
  height: 100%;
`;

const StContentImage = styled.button`
  /* position: fixed;
    top: 7%;
    left: 23%; */
  transform: translate(-50%, -50%);
  padding: 0px 0px 0px 15px;
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  z-index: 600;
  width: 40px;
  height: 40px;
  padding: 6px;
  border-radius: 12px;
  color: white;
  cursor: pointer;
  border: 1px solid transparent;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
    filter: brightness(2.2);
  }
`;
