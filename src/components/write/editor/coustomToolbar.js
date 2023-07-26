// EditorToolbar.js

import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { modules } from '.';

export default function EditorToolbar() {
  return <ReactQuill.Toolbar modules={modules} />;
}
