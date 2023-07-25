import React, { useState, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styled from "styled-components";
import api from "../../../../api/api";
import ImageTagDiv from "./imagetag/ImageTagDiv";

export default function ParentComponent() {
  const [content, setContent] = useState("");
  const quillRef = useRef();
  const [tagData, setTagData] = useState([]);

  const imageHandler = async () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      const formData = new FormData();
      formData.append('contentImage', file);

      const editor = quillRef.current.getEditor();
      let range = editor.getSelection();
      let index = range ? range.index : editor.getLength();

      try {
        const result = await api.post('/article/contentImage', formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        });

        const IMG_URL = result.data.url;
        // Insert an image placeholder
        editor.insertText(index, `[Image: ${IMG_URL}]`);

        setTagData(oldData => [...oldData, { url: IMG_URL, tags: [] }]);
      } catch (error) {
        console.log('Upload failed');
      }
    };
  }

  const handleUpdateTags = (url, newTags) => {
    setTagData(oldData => oldData.map(data => data.url === url ? { url, tags: newTags } : data));
  }

  return (
    <div>
      <button onClick={imageHandler}>Upload Image</button>
      <Editor content={content} setContent={setContent} quillRef={quillRef} />
      {tagData.map(data => 
        <ImageTagDiv key={data.url} url={data.url} tags={data.tags} onUpdateTags={handleUpdateTags}>
          <Imgwall src={data.url} alt="Uploaded content" />
        </ImageTagDiv>
      )}
    </div>
  )
}

const Editor = ({ content, setContent, quillRef }) => {
  const contentHandler = (value) => {
    console.log(value);
    setContent(value);
  };

  return (
    <EditorContainer>
      <ReactQuill
        ref={quillRef}
        value={content}
        onChange={contentHandler}
        modules={{
          toolbar: {
            container: [
              [{ header: [false, 1, 2, 3] }],
              ["bold", "italic", "underline"],
              [{ color: ["#000000", "#e60000", "#00ffff"] }, { background: [] }],
              [{ align: [] }],
              [{ list: "ordered" }, { list: "bullet" }, "link"],
            ],
          },
        }}
        placeholder="내용을 입력해주세요"
      />
    </EditorContainer>
  );
}

// Your existing styled component

const EditorContainer = styled.div`
  .ql-toolbar.ql-snow {
    top: 2px;
    position: fixed;
    z-index: 600;
    right: 151px;
    left: auto;
    padding: 24px;
    border: none;
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
`