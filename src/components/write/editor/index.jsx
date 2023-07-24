import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

export default function Editor( ) {
    const [content, setContent] = useState('')

    const contentHandaller = (value)=>{
        console.log(value)
        setContent(value);
    }

  return (
    <>
    <ReactQuill
    value={content}
    onChange={contentHandaller}
    modules={modules}
    />
    </>
  )
}

export const modules = {
    toolbar: {
        container: [
          [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
          ['bold', 'italic', 'underline'],
          [{ 'color': ['#000000', '#e60000',  '#00ffff',] }, { 'background': [] }],
          [{ 'align': [] }],
          [{ 'list': 'ordered' }, { 'list': 'bullet' }, 'link'],
          ['image'] 
        ],
    }
}
