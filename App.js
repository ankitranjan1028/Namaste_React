{/* <div id="parent">
    <div id="child">
        <h1>"Hi! I am an h1 tag"</h1>
        <h2>"Hi! I am an h2 tag</h2>
    </div>
     <div id="child">
        <h1>"Hi! I am an h1 tag"</h1>
        <h2>"Hi! I am an h2 tag</h2>
    </div>
</div> */}

//React element is an object => HTML that browser understands

const parent = React.createElement("div",
{id:"parent"},
    [React.createElement("div",{id:"child"},
    [React.createElement("h1",{},"Hi! I am an h1 tag"),
    React.createElement("h2",{},"Hi! I am an h2 tag")]
    ),
    React.createElement("div",{id:"child2"},
    [React.createElement("h1",{},"Hi! I am an h1 tag"),
    React.createElement("h2",{},"Hi! I am an h2 tag")]
    )]
    );




// const heading = React.createElement("h1",
//     {id:"heading"},
//     "Hello World from React !!");
//     console.log(heading); //return object
console.log(parent);

    const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(parent);