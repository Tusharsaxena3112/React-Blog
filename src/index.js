import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
		<div>
			Hello World!!
		</div>, document.getElementById("root"));

serviceWorker.unregister();
