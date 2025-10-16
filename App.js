const heading = React.createElement(
  "div",
  { id: "parent", className: "parent" },
  React.createElement(
    "div",
    { id: "child1", className: "child1" },
    [
      React.createElement("h1", {}, "I am h1 tag inside child 1 div"),
      React.createElement("h2", {}, "I am h2 tag inside child 1 div"),
      React.createElement("h3", {}, "I am h3 tag inside child 1 div")
    ]
  ),
  React.createElement(
    "div",
    { id: "child2", className: "child2" },
    [
      React.createElement("h1", {}, "I am h1 tag inside child 2 div"),
      React.createElement("h2", {}, "I am h2 tag inside child 2 div"),
      React.createElement("h4", {}, "I am h3 tag inside child 2 div")
    ]
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
