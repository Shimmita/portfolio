import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import {
	faGithub,
	faInstagram,
	faStackOverflow,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import NavBar from "../components/common/navBar";

import SEO from "../data/seo";
import INFO from "../data/user";

import "./styles/homepage.css";

const Homepage = () => {
	const [stayLogo, setStayLogo] = useState(false);
	const [logoSize, setLogoSize] = useState(100);
	const [oldLogoSize, setOldLogoSize] = useState(80);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(
		(x) => {
			const handleScroll = () => {
				let scroll = Math.round(window.pageYOffset, 2);

				let newLogoSize = 80 - (scroll * 4) / 10;

				if (newLogoSize < oldLogoSize) {
					if (newLogoSize > 40) {
						setLogoSize(newLogoSize);
						setOldLogoSize(newLogoSize);
						setStayLogo(false);
					} else {
						setStayLogo(true);
					}
				} else {
					setLogoSize(newLogoSize);
					setStayLogo(false);
				}
			};

			window.addEventListener("scroll", handleScroll);
			return () => window.removeEventListener("scroll", handleScroll);
		},
		[logoSize, oldLogoSize]
	);

	const currentSEO = SEO.find((item) => item.page === "home");

	const logoStyle = {
		display: "flex",
		position: stayLogo ? "fixed" : "relative",
		top: stayLogo ? "3vh" : "auto",
		zIndex: 999,
		border: stayLogo ? "1px solid white" : "none",
		borderRadius: stayLogo ? "50%" : "none",
		boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
	};

	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="home" />
				<div className="content-wrapper">
					<div className="homepage-logo-container">
						<div style={logoStyle}>
							<Logo width={logoSize} link={false} />
						</div>
					</div>

					<div className="homepage-container">
						<div className="homepage-first-area">
							<div className="homepage-first-area-left-side">
								<div className="title homepage-title">
									<div>
										<h3> {INFO.main.title}</h3>
									</div>

									<div>
										<h5 style={{ color: "grey" }}>
											{INFO.homepage.title}
										</h5>
									</div>
								</div>

								<div className="subtitle homepage-subtitle">
									{INFO.homepage.description}
									<ul>
										<li>Android</li>
										<li>Flutter </li>
										<li>React Native</li>
										<li>React.js</li>
										<li>Node.js Express</li>
										<li>SpringBoot </li>
										<li>Php Laravel</li>
									</ul>
									<div>
									Welcome visitor, you can check{" "}
										<a
											href="/projects"
											style={{
												margin: "4px",
												textDecoration: "none",
												fontWeight: "bold",
												color: "cadetblue",
											}}
										>
											my projects sections
										</a>
										and explore the amazing scalable software
										projects that i have worked on using the
										aforementioned technologies which are in
										my github repository. Furthermore, you
										are highly welcomed to contribute to
										any of the projects even if it's a mere kind
										a suggestion. Thanks in advance.
									</div>
								</div>
							</div>

							<div className="homepage-first-area-right-side">
								<div className="homepage-image-container">
									<div className="homepage-image-wrapper">
										<img
											src="logo.jpg"
											alt="developerimage"
											className="homepage-image"
										/>
									</div>
								</div>
							</div>
						</div>

						<div className="homepage-socials">
							<a
								href={INFO.socials.twitter}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faTwitter}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.github}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faGithub}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.stackoverflow}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faStackOverflow}
									className="homepage-social-icon"
								/>
							</a>
							
							<a
								href={`mailto:${INFO.main.email}`}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faMailBulk}
									className="homepage-social-icon"
								/>
							</a>
						</div>

						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;
