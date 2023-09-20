import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Projects | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="projects-container">
						<div className="title projects-title">Developed Apps</div>
						<div className="projects-list">
							<AllProjects />
						</div>

						<div className="subtitle projects-subtitle">
							<li
								style={{
									border: "1px solid lightgrey",
									padding: "1rem",
									borderRadius: "1rem",
									boxShadow: "0 0 2px",
									marginBottom: ".5rem",
								}}
							>
								Having worked on couple of projects verging from
								Mobile application development to Web
								application development, mastery of software
								development techniques and learning new
								Technologies in addition to linkling-up with
								individuals and organisation across the world
								has been my Aspiration in Software Development
								Industry.
								<ol>
									{" "}
									<span
										style={{
											color: "black",
											textDecoration: "underline",
										}}
									>
										ANDROID
									</span>
									<li>
										Strong Foundation Skills in Kotlin and
										Java
									</li>
									<li>Android Studio and Android SDK </li>
									<li>Android JetpackCompose and XML (UI)</li>
									<li>
										Gradle File for managing android
										dependecies
									</li>
									<li>SQlite, Firebase, SharedPreferences</li>
									<li>
										MultiThreading(Java) and
										Coroutines(Kotlin)
									</li>
									<li>Android Activities and Lifecycle</li>
									<li>REST Api and Retrofit</li>
									<li>MVVM and MVC Android Achitectures</li>
								</ol>
							</li>

							<li
								style={{
									border: "1px solid lightgrey",
									padding: "1rem",
									borderRadius: "1rem",
									boxShadow: "0 0 2px",
								}}
							>
								Cross-platform mobile application development
								(ANDROID & IOS) using frameworks Flutter and
								ReactNative. Skills gained include:
								<ol>
									<span
										style={{
											color: "black",
											textDecoration: "underline",
										}}
									>
										FLUTTER
									</span>
									<li>Strong Foundation Skills in Dart</li>
									<li>
										Stateless and Stateful widgets creation
										and usage
									</li>
									<li>
										Pubspec YAML file for external
										dependecies management
									</li>
									<li>Widget tree and Structure</li>
									<li>Flutter Navigation</li>
									<li>SQlite, Firebase and REST APi</li>
								</ol>
								<ol>
									<span
										style={{
											color: "black",
											textDecoration: "underline",
										}}
									>
										REACTNATIVE
									</span>
									<li>
										Strong Foundation Skills in Javascript
										and Typescript
									</li>
									<li>React Native Components and Views</li>
									<li>ReactNative Navigation</li>
									<li>ReactNative Expo</li>
									<li>Flutter Navigation</li>
									<li>
										Asynchronous Storage, SQlite,
										Firebase,REST Api{" "}
									</li>
								</ol>
							</li>

							<li
								style={{
									border: "1px solid lightgrey",
									padding: "1rem",
									borderRadius: "1rem",
									boxShadow: "0 0 2px",
									marginTop: ".5rem",
								}}
							>
								Website Application Development, I've got skills
								in React.js And PHP Laravel with strong
								foundation skills in Javascript, Typescript, and
								PHP. In addition to that the unique ability to
								develop friendly user interface using CSS, and
								Bootsrap is Invincible!
								<ol>
									{" "}
									<span
										style={{
											color: "black",
											textDecoration: "underline",
										}}
									>
										REACT Js
									</span>
									<li>
										React Components and Arrow Functions
									</li>
									<li>
										React
										Navigation,BrowserNavigation,Routes,Route,Links
									</li>
									<li>React Hooks and Redux </li>
									<li>
										Firebase and MongoDB (NOSQL), MySQL and
										PosgresSQL(SQL) Database
									</li>
									<li>
										Axios and Fetch Apis for Http Requests
									</li>
									<li>React MVC Architecture in General</li>
									<li>
										React Search Engine Optimisation (SEO)
									</li>
								</ol>
								<ol>
									{" "}
									<span
										style={{
											color: "black",
											textDecoration: "underline",
										}}
									>
										PHP LARAVEL
									</span>
									<li>
										Master In usage of PHP Artisan and
										Composer
									</li>
									<li>
										Laravel Views, Controllers, Models and
										the MVC Architecure
									</li>
									<li>
										Firebase and MongoDB (NOSQL), MySQL and
										PosgresSQL(SQL) Database
									</li>
									<li>
										Larevel Authentication and User Session
										Management
									</li>
									<li>Laravel Blade Template Engine</li>
								</ol>
							</li>

							<li
								style={{
									border: "1px solid lightgrey",
									padding: "1rem",
									borderRadius: "1rem",
									boxShadow: "0 0 2px",
									marginTop: ".5rem",
								}}
							>
								Backend Technologies which I exceedingly hold
								reputation in are :{" "}
								<span style={{ color: "black" }}>
									NODE.js Express
								</span>{" "}
								,{" "}
								<span style={{ color: "black" }}>
									SpringBoot
								</span>{" "}
								and{" "}
								<span style={{ color: "black" }}>Firebase</span>
								. with this technologies Developing RESTful Web
								services has been my favourite technique when it comes
								to Backend since the frontend part is controlled
								from direct access and manipulation of the
								database and that it can only communicate via
								REST Api. Thus this provides an Abstraction
								layer of Security to the entire database.
							</li>
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Projects;
