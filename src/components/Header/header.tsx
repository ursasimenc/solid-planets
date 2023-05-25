import { Component } from "solid-js";
import "./header.scss";

const Header: Component = () => {
	const showMobileMenu = (e: any) => {
		const bottom = document.querySelector(".bottom") as HTMLElement;
		const burger = document.querySelector("#g") as HTMLElement;
		burger.classList.toggle("active");
		bottom.classList.toggle("active");
	};

	return (
		<header>
			<nav>
				<div class="top">
					<h1>the planets</h1>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="17" onClick={showMobileMenu}>
						<g fill="#FFF" fill-rule="evenodd" id="g">
							<path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
						</g>
					</svg>
				</div>
				<div class="bottom">
					<ul>
						<li id="Mercury">
							Mercury
							<svg xmlns="http://www.w3.org/2000/svg" width="6" height="8">
								<path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4" />
							</svg>
						</li>
						<li id="Venus">
							Venus
							<svg xmlns="http://www.w3.org/2000/svg" width="6" height="8">
								<path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4" />
							</svg>
						</li>
						<li id="Earth">
							Earth
							<svg xmlns="http://www.w3.org/2000/svg" width="6" height="8">
								<path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4" />
							</svg>
						</li>
						<li id="Mars">
							Mars
							<svg xmlns="http://www.w3.org/2000/svg" width="6" height="8">
								<path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4" />
							</svg>
						</li>
						<li id="Jupiter">
							Jupiter
							<svg xmlns="http://www.w3.org/2000/svg" width="6" height="8">
								<path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4" />
							</svg>
						</li>
						<li id="Saturn">
							Saturn
							<svg xmlns="http://www.w3.org/2000/svg" width="6" height="8">
								<path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4" />
							</svg>
						</li>
						<li id="Uranus">
							Uranus
							<svg xmlns="http://www.w3.org/2000/svg" width="6" height="8">
								<path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4" />
							</svg>
						</li>
						<li id="Neptune">
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
};

export default Header;
