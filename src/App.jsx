import React from "react";
// import ReactDOM from "react-dom/client";

export const App = () => {
  // return React.createElement("h1", { id: "heading" }, "Hello World from React!");
  
  // JSX is not HTML inside JS.
  // It is a syntax extension for JavaScript that looks similar to HTML.
  const heading = <h1 className = "id1"> Hi there from React 🚀</h1>;
  return (
    <div>
      < Headingcomponent />
      < Headingcomponent />
      < Headingcomponent />
      { heading}
    </div>
  )
}

// React Functional Components

const Headingcomponent = () => <h1> Namaste Fucntional Components</h1>
