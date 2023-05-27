import { Component, createSignal } from "solid-js";
import "./App.scss";
import Header from "./components/Header/header";
import Planet from "./components/Planet/Planet";

const App: Component = () => {
	const [planet, setPlanet] = createSignal(0);
	return (
		<div class="wrapper">
			<Header setPlanet={setPlanet} />
			<Planet planet={planet()} />
		</div>
	);
};

export default App;
