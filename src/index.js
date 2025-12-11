if (!window.Buffer) {
  window.Buffer = require("buffer/").Buffer;
}
window.process = window.process || { env: {} };

import "./polyfills";  // <--- 这一行保留，不要删！
import React from "react";
import ReactDOM from "react-dom/client";
import InboxPage from "./Page";

import "./index.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <InboxPage isPWA={window.innerWidth <= 700} />
  </React.StrictMode>,
);
