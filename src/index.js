import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { TodoApp } from "./components/TodoApp/TodoApp";

document.body.className = "bg-dark bg-gradient text-light";
document.body.style = "min-height: 100vh";

ReactDOM.render(<TodoApp />, document.getElementById("root"));
