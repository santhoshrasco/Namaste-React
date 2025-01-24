import React from {ReactDOM}
const parent = React.createElement("div",{ id: "parent" },
  React.createElement("child",{ id: "child 1" },
     [
      React.createElement("h3", { id: "sibling1" }, "iam sibling 1"),
      React.createElement("h3", { id: "sibling1" }, "iam sibling 1"),
    ]
));

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(parent);
 