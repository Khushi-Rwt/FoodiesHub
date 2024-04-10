// const heading = React.createElement("h1",{id:"heading",xyz:"another_attribute"},"Hello React");

// console.log(heading); //object

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading); 


const parent = React.createElement(
    "div",
    {id:"parent"},
    [React.createElement("div",{id:"child1"},
        [React.createElement("div",{},"I'm a heading1"), React.createElement("div",{},"I'm a heading2")]
    ),
    React.createElement("div",{id:"child2"},
        [React.createElement("div",{},"I'm a para1"), React.createElement("div",{},"I'm a para2")]
    )
    ]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);       