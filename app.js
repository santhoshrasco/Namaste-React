import React from "react"
import ReactDOM from "react-dom/client"
const parent = React.createElement("div",{ id: "parent" },
  React.createElement("Child",{ id: "child 1" },
     [
      React.createElement("h3", { id: "sibling1" }, "iam sibling"),
      React.createElement("h3", { id: "sibling1" }, "iam sibling 1"),
    ]
));

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(parent);
 