import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import {
	faFacebookMessenger,
	faGithub,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faHand } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Logo from "../components/common/logo";
import NavBar from "../components/common/navBar";

import SEO from "../data/seo";
import INFO from "../data/user";

import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import Footer from "../components/common/footer";
import skills from "../data/skills";
import "./styles/homepage.css";

const currentYear = new Date().getFullYear();
const startedYear = new Date("2022").getFullYear();
const yearsOfExperience = currentYear - startedYear;
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
						<div
							className="homepage-socials"
							style={{ paddingLeft: "2rem" }}
						>
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
								href={INFO.socials.linkedin}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faLinkedin}
									className="homepage-social-icon"
								/>
							</a>

							<a
								href={`mailto:${INFO.main.email}`}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faFacebookMessenger}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.phone}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faPhone}
									className="homepage-social-icon"
									style={{ width: "24px", height: "24px" }}
								/>
							</a>
						</div>
					</div>

					<div className="homepage-container">
						<div
							className="homepage-first-area"
							style={{ marginBottom: "3rem" }}
						>
							<div className="homepage-first-area-left-side">
								{/* top details about me was here */}
								<div className="subtitle">
									<p
										style={{
											margin: "0px",
											padding: "0px",
											textAlign: "center",
											marginBottom: "5px",
										}}
									>
										Programming Languages
									</p>

									<div
										style={{
											padding: "5px",
											borderRadius: "5px",
											border: "1px solid lightgray",
										}}
									>
										<ul
											style={{
												listStyle: "none",
												display: "flex",
												flexWrap: "wrap",
												justifyContent: "space-around",
											}}
										>
											{skills?.programming.map(
												(data, index) => (
													<li
														key={index}
														style={{
															display: "flex",
															alignItems:
																"center",
															padding: "10px",
														}}
													>
														<img
															src={data.image}
															alt=""
															style={{
																width: "50px",
																borderRadius:
																	"50%",
															}}
														/>

														<span
															style={{
																marginLeft:
																	"10px",
																fontWeight:
																	"bold",
															}}
														>
															{data.title}
														</span>
													</li>
												)
											)}
										</ul>
									</div>
								</div>

								<div className="subtitle">
									<p
										style={{
											margin: "0px",
											padding: "0px",
											textAlign: "center",
											marginBottom: "5px",
										}}
									>
										Frontend Development
									</p>

									<div
										style={{
											padding: "5px",
											borderRadius: "5px",
											border: "1px solid lightgray",
										}}
									>
										<ul
											style={{
												listStyle: "none",
												display: "flex",
												flexWrap: "wrap",
												justifyContent: "space-around",
											}}
										>
											{skills?.frontend.map(
												(data, index) => (
													<li
														key={index}
														style={{
															display: "flex",
															alignItems:
																"center",
															padding: "10px",
														}}
													>
														<img
															src={data.image}
															alt=""
															style={{
																width: "50px",
																borderRadius:
																	"50%",
															}}
														/>

														<span
															style={{
																marginLeft:
																	"10px",
																fontWeight:
																	"bold",
															}}
														>
															{data.title}
														</span>
													</li>
												)
											)}
										</ul>
									</div>
								</div>

								<div className="subtitle">
									<p
										style={{
											margin: "0px",
											padding: "0px",
											textAlign: "center",
											marginBottom: "5px",
										}}
									>
										Backend Development
									</p>

									<div
										style={{
											padding: "5px",
											borderRadius: "5px",
											border: "1px solid lightgray",
										}}
									>
										<ul
											style={{
												listStyle: "none",
												display: "flex",
												flexWrap: "wrap",
												justifyContent: "space-around",
											}}
										>
											{skills?.backend.map(
												(data, index) => (
													<li
														key={index}
														style={{
															display: "flex",
															alignItems:
																"center",
															padding: "10px",
														}}
													>
														<img
															src={data.image}
															alt=""
															style={{
																width: "50px",
																borderRadius:
																	"50%",
															}}
														/>

														<span
															style={{
																marginLeft:
																	"10px",
																fontWeight:
																	"bold",
															}}
														>
															{data.title}
														</span>
													</li>
												)
											)}
										</ul>
									</div>
								</div>

								<div className="subtitle">
									<p
										style={{
											margin: "0px",
											padding: "0px",
											textAlign: "center",
											marginBottom: "5px",
										}}
									>
										Database Technologies
									</p>

									<div
										style={{
											padding: "5px",
											borderRadius: "5px",
											border: "1px solid lightgray",
										}}
									>
										<ul
											style={{
												listStyle: "none",
												display: "flex",
												flexWrap: "wrap",
												justifyContent: "space-around",
											}}
										>
											{skills?.databases.map(
												(data, index) => (
													<li
														key={index}
														style={{
															display: "flex",
															alignItems:
																"center",
															padding: "10px",
														}}
													>
														<img
															src={data.image}
															alt=""
															style={{
																width: "50px",
																borderRadius:
																	"50%",
															}}
														/>

														<span
															style={{
																marginLeft:
																	"10px",
																fontWeight:
																	"bold",
															}}
														>
															{data.title}
														</span>
													</li>
												)
											)}
										</ul>
									</div>
								</div>

								<div className="subtitle">
									<p
										style={{
											margin: "0px",
											padding: "0px",
											textAlign: "center",
											marginBottom: "5px",
										}}
									>
										More Tools and Frameworks
									</p>

									<div
										style={{
											padding: "5px",
											borderRadius: "5px",
											border: "1px solid lightgray",
										}}
									>
										<ul
											style={{
												listStyle: "none",
												display: "flex",
												flexWrap: "wrap",
												justifyContent: "space-around",
											}}
										>
											{skills?.other.map(
												(data, index) => (
													<li
														key={index}
														style={{
															display: "flex",
															alignItems:
																"center",
															padding: "10px",
														}}
													>
														<img
															src={data.image}
															alt=""
															style={{
																width: "50px",
																borderRadius:
																	"50%",
															}}
														/>

														<span
															style={{
																marginLeft:
																	"10px",
																fontWeight:
																	"bold",
															}}
														>
															{data.title}
														</span>
													</li>
												)
											)}
										</ul>
									</div>
								</div>
							</div>

							<div>
								<div className="homepage-image-wrapper">
									<img src="logo.jpg" alt="developerimage" />
								</div>
								<div>
									<div className="title homepage-title">
										<div>
											<h5
												style={{
													fontSize: "medium",
													fontWeight: "bold",
												}}
											>
												<span
													style={{
														marginRight: "3px",
													}}
												>
													<FontAwesomeIcon
														icon={faHand}
														color="orange"
														style={{
															width: "20px",
															height: "20px",
														}}
													/>
												</span>{" "}
												Hi, I'm <br /> <br />
												{INFO.main.title}
												<p
													style={{
														fontSize: "small",
														color: "gray",
														fontWeight: "bold",
													}}
												>
													- Mombasa &nbsp; &middot;
													Kenya
												</p>{" "}
											</h5>
										</div>

										<div
											style={{
												marginTop: "3rem",
												marginBottom: "3rem",
											}}
										>
											<h5
												style={{
													fontSize: "medium",
												}}
											>
												Robust {INFO.homepage.title}{" "}
												<p
													style={{
														fontSize: "small",
														marginBottom: "1.5rem",
													}}
												>
													( From 2022 - Current |{" "}
													{yearsOfExperience}+ years )
												</p>
												<p
													style={{
														fontSize: "small",
														color: "gray",
														fontWeight: "bold",
													}}
												>
													- Fullstack Web Developer{" "}
													<br /> <br />
													- Android And Flutter
													Developer <br /> <br />
													- Embracing Machine Learning
													<br /> <br />- Embracing
													DevOps Engineering
												</p>
											</h5>
										</div>

										<div>
											<h5
												style={{
													fontSize: "medium",
												}}
											>
												{INFO.homepage.degree}{" "}
												<p
													style={{
														fontSize: "small",
														marginBottom: "1.5rem",
													}}
												>
													( Cohort 2020 - 2024 |
													Graduated )
												</p>
												<p
													style={{
														fontSize: "small",
														color: "gray",
														fontWeight: "bold",
													}}
												>
													- Maseno University &nbsp;
													&middot; Kenya
													<br /> <br />
													- 2nd Class Honors Upper Div.
													
													<br /> <br />
													<p
														style={{
															fontSize: "small",
															color: "black",
														}}
													>
														( Degree Relevant Coursework)
													</p>
													- Software Engineering
													<br /> <br />
													- Machine Learning and A.I
													<br /> <br /> - Data
													Structures and Algorithms
													<br /> <br /> - Cloud
													Computing Infrastructure
													<br /> <br />- Database
													Management Systems
													<br /> <br />- Computer
													Security and Networking
													<br /> <br />- Python,
													JavaScript , Java , HTML ,
													PHP
												</p>
											</h5>
										</div>
									</div>
								</div>
							</div>
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
