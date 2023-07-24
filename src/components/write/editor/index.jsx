import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { styled } from "styled-components";

export default function Editor() {
  const [content, setContent] = useState("");



  const contentHandaller = (value) => {
    console.log(value);
    setContent(value);
  };

  return (
    <EditorContainer>
      <ReactQuill
        value={content}
        onChange={contentHandaller}
        modules={modules}
        placeholder="내용을 입력해주세요"
      />
    </EditorContainer>
  );
}

export const modules =  ({
        toolbar: {
          container: [
            ["image"],
            [{ header: [false, 1, 2, 3] }],
            ["bold", "italic", "underline"],
            [{ color: ["#000000", "#e60000", "#00ffff"] }, { background: [] }],
            [{ align: [] }],
            [{ list: "ordered" }, { list: "bullet" }, "link"],
          ],
        },
        clipboard:{
          matchVisual: false
        }
      })

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