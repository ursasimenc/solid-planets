import { Component, createSignal } from "solid-js";
import "./App.scss";
import Header from "./components/Header/header";

const App: Component = () => {
	return (
		<div class="wrapper">
			<Header />
		</div>
	);
};

export default App;
