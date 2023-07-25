import React, { useState, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styled from "styled-components";
import api from "../../../../api/api";

export default function Editor() {
  const [content, setContent] = useState("");
  const quillRef = useRef(); // Create a Ref

  const contentHandler = (value) => {
    console.log(value);
    setContent(value);
  };

  const imageHandler = () => {
    console.log('에디터에서 이미지 버튼을 클릭하면 이 핸들러가 시작됩니다!');

    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.addEventListener('change', async () => {
      console.log('온체인지');
      const file = input.files[0];
      const formData = new FormData();
      formData.append('contentImage', file);

      try {
        const result = await api.post('api/article/contentImage', formData,{
          headers: {
            "Content-Type": "multipart/form-data"
          }
        });
        console.log('성공 시, 백엔드가 보내주는 데이터', result.data.url);
        const IMG_URL = result.data.url;

        const editor = quillRef.current.getEditor();
        const range = editor.getSelection();
        
        editor.insertEmbed(range.index, 'image', IMG_URL);

      } catch (error) {
        console.log('실패했어요ㅠ');
      }
    });
  }

  return (
    <EditorContainer>
      <ReactQuill
        ref={quillRef} // Pass the Ref
        value={content}
        onChange={contentHandler}
        modules={{
          toolbar: {
            container: [
              ["image"],
              [{ header: [false, 1, 2, 3] }],
              ["bold", "italic", "underline"],
              [{ color: ["#000000", "#e60000", "#00ffff"] }, { background: [] }],
              [{ align: [] }],
              [{ list: "ordered" }, { list: "bullet" }, "link"],
            ],
            handlers: {
              image : imageHandler,
            },
          },
        }}
        placeholder="내용을 입력해주세요"
      />
    </EditorContainer>
  );
}


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
