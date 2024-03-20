import React from "react";

import ReactDom from  "react-dom/client";

//html using react
const head=React.createElement("div",{id:"one"},[
    React.createElement("h1",{},"iam a header"),
    React.createElement("div",{},"iam a container"),
    React.createElement("div",{},"iam div 2")
])
const r=ReactDom.createRoot(document.getElementById("root"));
r.render(head);

const h=(<div id="one">
    <h1>iam header using </h1>
    <h2>iam header2</h2>
    <h3>iam header3</h3>
    <div><h2>iam header in div</h2></div>
</div>)
r.render(h);