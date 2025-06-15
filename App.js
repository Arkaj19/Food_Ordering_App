const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h2", {}, "I am a nested React H2"),
    React.createElement("h2", {}, "I am a nested React H2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h2", {}, "I am a nested React H2"),
    React.createElement("h2", {}, "I am a nested React H2"),
  ]),
]);

console.log(parent);

// const heading = React.createElement(
//   React.Fragment,
//   null,
//   React.createElement("h1", { id: "heading" }, " Hello World from React"),
//   React.createElement("p", {}, " lorem ipsum")
// );

// const heading = React.createElement("h1", {}, " Hello World from React")
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
