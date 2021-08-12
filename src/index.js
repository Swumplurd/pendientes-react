import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { TodoApp } from "./components/TodoApp/TodoApp";

ReactDOM.render(
    <div class="container">
        <div class="row">
            <div class="col">
                <TodoApp />
            </div>
        </div>
    </div>,
    document.getElementById("root")
);
