import { Component } from "solid-js";
import "./header.scss";

export default function Header(props: any) {
	const showMobileMenu = () => {
		const bottom = document.querySelector(".bottom") as HTMLElement;
		const burger = document.querySelector("#g") as HTMLElement;
		burger.classList.toggle("menu-active");
		bottom.classList.toggle("nav-link-active");
	};

	const clickLink = (planet: number) => {
		props.setPlanet(planet);
		showMobileMenu();
	};

	return (
		<header>
			<nav>
				<div class="top">
					<h1>the planets</h1>
					<div class="hamburger" onClick={showMobileMenu}>
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="17">
							<g fill="#FFF" fill-rule="evenodd" id="g">
								<path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
							</g>
						</svg>
					</div>
				</div>
				<div class="bottom">
					<ul>
						<li onClick={() => clickLink(0)} id="Mercury">
							Mercury
							<svg xmlns="http://www.w3.org/2000/svg" width="6" height="8">
								<path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4" />
							</svg>
						</li>
						<li onClick={() => clickLink(1)} id="Venus">
							Venus
							<svg xmlns="http://www.w3.org/2000/svg" width="6" height="8">
								<path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4" />
							</svg>
						</li>
						<li onClick={() => clickLink(2)} id="Earth">
							Earth
							<svg xmlns="http://www.w3.org/2000/svg" width="6" height="8">
								<path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4" />
							</svg>
						</li>
						<li onClick={() => clickLink(3)} id="Mars">
							Mars
							<svg xmlns="http://www.w3.org/2000/svg" width="6" height="8">
								<path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4" />
							</svg>
						</li>
						<li onClick={() => clickLink(4)} id="Jupiter">
							Jupiter
							<svg xmlns="http://www.w3.org/2000/svg" width="6" height="8">
								<path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4" />
							</svg>
						</li>
						<li onClick={() => clickLink(5)} id="Saturn">
							Saturn
							<svg xmlns="http://www.w3.org/2000/svg" width="6" height="8">
								<path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4" />
							</svg>
						</li>
						<li onClick={() => clickLink(6)} id="Uranus">
							Uranus
							<svg xmlns="http://www.w3.org/2000/svg" width="6" height="8">
								<path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4" />
							</svg>
						</li>
						<li onClick={() => clickLink(7)} id="Neptune">
							Neptune
							<svg xmlns="http://www.w3.org/2000/svg" width="6" height="8">
								<path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4" />
							</svg>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
}
