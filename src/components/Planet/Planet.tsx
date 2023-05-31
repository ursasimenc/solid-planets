import { createEffect, createSignal, Show } from "solid-js";
import data from "../../data/data.json";
import Mercury from "../../assets/planet-mercury.svg";
import MercuryInternal from "../../assets/planet-mercury-internal.svg";
import MercuryGeology from "../../assets/geology-mercury.png";
import Venus from "../../assets/planet-venus.svg";
import VenusInternal from "../../assets/planet-venus-internal.svg";
import VenusGeology from "../../assets/geology-venus.png";
import Earth from "../../assets/planet-earth.svg";
import EarthInternal from "../../assets/planet-earth-internal.svg";
import EarthGeology from "../../assets/geology-earth.png";
import Mars from "../../assets/planet-mars.svg";
import MarsInternal from "../../assets/planet-mars-internal.svg";
import MarsGeology from "../../assets/geology-mars.png";
import Jupiter from "../../assets/planet-jupiter.svg";
import JupiterInternal from "../../assets/planet-jupiter-internal.svg";
import JupiterGeology from "../../assets/geology-jupiter.png";
import Saturn from "../../assets/planet-saturn.svg";
import SaturnInternal from "../../assets/planet-saturn-internal.svg";
import SaturnGeology from "../../assets/geology-saturn.png";
import Uranus from "../../assets/planet-uranus.svg";
import UranusInternal from "../../assets/planet-uranus-internal.svg";
import UranusGeology from "../../assets/geology-uranus.png";
import Neptune from "../../assets/planet-neptune.svg";
import NeptuneInternal from "../../assets/planet-neptune-internal.svg";
import NeptuneGeology from "../../assets/geology-neptune.png";

export default function Planet(props: any) {
	const [name, setName] = createSignal();
	const [rotation, setRotation] = createSignal();
	const [revolution, setRevolution] = createSignal();
	const [radius, setRadius] = createSignal();
	const [temperature, setTemperature] = createSignal();
	const [section, setSection] = createSignal("overview");
	const [content, setContent] = createSignal();
	const [link, setLink] = createSignal();

	createEffect(() => {
		setName(data[props.planet].name);
		setRotation(data[props.planet].rotation);
		setRevolution(data[props.planet].revolution);
		setRadius(data[props.planet].radius);
		setTemperature(data[props.planet].temperature);
		setContent(data[props.planet].overview.content);
		setLink(data[props.planet].overview.source);

		setSection("overview");
	});

	const planetImage = () => {
		switch (name()) {
			case "Mercury":
				return Mercury;
			case "Venus":
				return Venus;
			case "Earth":
				return Earth;
			case "Mars":
				return Mars;
			case "Jupiter":
				return Jupiter;
			case "Saturn":
				return Saturn;
			case "Uranus":
				return Uranus;
			case "Neptune":
				return Neptune;
			default:
				return;
		}
	};

	const planetInternalImage = () => {
		switch (name()) {
			case "Mercury":
				return MercuryInternal;
			case "Venus":
				return VenusInternal;
			case "Earth":
				return EarthInternal;
			case "Mars":
				return MarsInternal;
			case "Jupiter":
				return JupiterInternal;
			case "Saturn":
				return SaturnInternal;
			case "Uranus":
				return UranusInternal;
			case "Neptune":
				return NeptuneInternal;
			default:
				return;
		}
	};

	const planetGeologyImage = () => {
		switch (name()) {
			case "Mercury":
				return MercuryGeology;
			case "Venus":
				return VenusGeology;
			case "Earth":
				return EarthGeology;
			case "Mars":
				return MarsGeology;
			case "Jupiter":
				return JupiterGeology;
			case "Saturn":
				return SaturnGeology;
			case "Uranus":
				return UranusGeology;
			case "Neptune":
				return NeptuneGeology;
			default:
				return;
		}
	};

	const getImage = () => {
		switch (section()) {
			case "overview":
				setContent(data[props.planet].overview.content);
				setLink(data[props.planet].overview.source);
				return planetImage();
			case "structure":
				setContent(data[props.planet].structure.content);
				setLink(data[props.planet].structure.source);
				return planetInternalImage();
			case "surface":
				setContent(data[props.planet].geology.content);
				setLink(data[props.planet].geology.source);
				return planetImage();
			default:
				return "";
		}
	};

	return (
		<div id="planet">
			<div class="mobile-tabs" id={`${name()}`}>
				<button onClick={() => setSection("overview")} id={section() === "overview" ? "active" : ""}>
					overview
				</button>
				<button onClick={() => setSection("structure")} id={section() === "structure" ? "active" : ""}>
					structure
				</button>
				<button onClick={() => setSection("surface")} id={section() === "surface" ? "active" : ""}>
					surface
				</button>
			</div>
			<div id="planet-content">
				<div id="planet-image">
					<img src={getImage()} alt={`${name()}`} id={`${name()}`} />
					<Show when={section() === "surface"}>
						<img src={planetGeologyImage()} alt={`${name()}`} id={`${name()}-geology`} class="geology" />
					</Show>
				</div>

				<div id="planet-parent-info">
					<div id="planet-info">
						<h2>{`${name()}`}</h2>
						<p>{`${content()}`}</p>
						<div class="link">
							<span>Source:</span>{" "}
							<a href={`${link()}`}>
								Wikipedia
								<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12">
									<path
										fill="#FFF"
										d="M11.34.66C10.9.22 10.37 0 9.75 0h-7.5C1.63 0 1.1.22.66.66.22 1.1 0 1.63 0 2.25v7.5c0 .62.22 1.15.66 1.59.44.44.97.66 1.59.66h7.5c.62 0 1.15-.22 1.59-.66.44-.44.66-.97.66-1.59v-7.5c0-.62-.22-1.15-.66-1.59zM10 6.25a.467.467 0 01-.305.46.544.544 0 01-.195.04.465.465 0 01-.352-.149L8.023 5.476 3.852 9.648a.481.481 0 01-.352.149.48.48 0 01-.352-.149l-.796-.797a.48.48 0 01-.149-.351.48.48 0 01.149-.352l4.172-4.172-1.125-1.125c-.162-.15-.198-.333-.11-.546A.467.467 0 015.75 2H9.5c.135 0 .253.05.352.148A.48.48 0 0110 2.5v3.75z"
										opacity=".5"
									/>
								</svg>
							</a>
						</div>
					</div>
					<div class="tabs" id={`${name()}`}>
						<button onClick={() => setSection("overview")} id={section() === "overview" ? "active" : ""}>
							<span>01</span> overview
						</button>
						<button onClick={() => setSection("structure")} id={section() === "structure" ? "active" : ""}>
							<span>02</span> structure
						</button>
						<button onClick={() => setSection("surface")} id={section() === "surface" ? "active" : ""}>
							<span>03</span> surface
						</button>
					</div>
				</div>
				<div id="planet-stats">
					<div class="stat">
						<h3>rotation time</h3>
						<h2>{`${rotation()}`}</h2>
					</div>
					<div class="stat">
						<h3>revolution time</h3>
						<h2>{`${revolution()}`}</h2>
					</div>
					<div class="stat">
						<h3>radius</h3>
						<h2>{`${radius()}`}</h2>
					</div>
					<div class="stat">
						<h3>average temp.</h3>
						<h2>{`${temperature()}`}</h2>
					</div>
				</div>
			</div>
		</div>
	);
}
