import React from "react";
import {createRoot} from "react-dom/client";
import {App} from "./App";
import {BrowserRouter} from "react-router-dom";
import {Spin} from "antd";
import {Spinner} from "react-bootstrap";
import {AuthProvider} from "./contexts";
import "assets/styles/index.css";
import "assets/styles/layout/index.scss";
import "assets/styles/bone/style.scss"
import "assets/styles/home/style.scss"

const container = document.getElementById("root");

if (!container) {
	throw Error("Root element not found for ReactDOM");
}

Spin.setDefaultIndicator(<Spinner />);
const root = createRoot(container);
// axios.defaults.headers.common["Authorization"] = cookies.get("token") ? `Bearer ${cookies.get("token")}` : false;

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<AuthProvider>
					<App />
			</AuthProvider>
		</BrowserRouter>
	</React.StrictMode>,
);
