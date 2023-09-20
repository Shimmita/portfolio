import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Curriculum Vitae`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={50} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									{INFO.about.title}
								</div>

								<div className="subtitle about-subtitle">
									{INFO.about.description}
								</div>

								<div
									style={{
										border: ".5px solid whitesmoke",
										padding: "1rem",
										borderRadius: "1rem",
										boxShadow: "0 0 2px",
										marginRight: "2rem",
									}}
								>
									<div className="body-cv">
										
										<div
											style={{
												display: "flex",
												justifyContent: "center",
												alignItems: "center",
											}}
										>
											<h3>PERSONAL DETAILS</h3>
										</div>

										<div>
											<label>
												FULL NAME:
												<span
													style={{
														marginLeft: "2rem",
													}}
												>
													DOUGLAS SHIMITA OUNDO
												</span>
											</label>
										</div>

										<div>
											<label>
												PHONE NO:
												<span
													style={{
														marginLeft: "2rem",
													}}
												>
													{" "}
													<a href="tel:+254757450727">
														{" "}
														<span
															style={{
																letterSpacing:
																	"1px",
																fontWeight:
																	"bold",
															}}
														>
															+254757450727
														</span>
													</a>
												</span>
											</label>
										</div>
										<div>
											<label>
												RESIDENCE:
												<span
													style={{
														marginLeft: "2rem",
													}}
												>
													MOMBASA COUNTY
												</span>
											</label>
										</div>
										<div>
											<label>
												LANGUAGES:
												<span
													style={{
														marginLeft: "1.8rem",
													}}
												>
													ENGLISH AND KISWAHILI
												</span>
											</label>
										</div>
										<div>
											<label>
												NATIONALITY:
												<span
													style={{
														marginLeft: "1.8rem",
													}}
												>
													KENYAN
												</span>
											</label>
										</div>

										<div
											style={{
												display: "flex",
												justifyContent: "center",
												alignItems: "center",
											}}
										>
											<h3>CAREER OBJECTIVE</h3>
										</div>
										<div>
											<p>
												A competent software developer
												by profession in conjunction
												with enthusiastic rendering of
												quality services to the end
												users.
											</p>
										</div>

										<div
											style={{
												display: "flex",
												justifyContent: "center",
												alignItems: "center",
											}}
										>
											<h3>EDUCATION BACKGROUND</h3>
										</div>
										<div>
											2020-PRESENT : Bsc. INFORMATION
											TECHNOLOGY (Bsc. I.T)
											<span
												style={{
													color: "",
													marginLeft: "6.3rem",
												}}
											>
												<a
													href="https://sci.maseno.ac.ke/home-information-technology"
													style={{
														textDecoration: "none",
													}}
												>
													MASENO UNIVERSITY
												</a>
											</span>
											<br />
											<div>
												SCORE:{" "}
												<span
													style={{
														fontWeight: "bold",
													}}
												>
													____
												</span>{" "}
											</div>
										</div>

										<br />
										<div>
											2015-2019 : KENYA CERTIFICATE OF
											SECONDARY EDUCATION (K.C.S.E)
											<span
												style={{
													color: "blue",
													marginLeft: "1rem",
												}}
											>
												{" "}
												NDIVISI BOYS HIGH SCHOOL
											</span>
											<br />
											<div>
												SCORE:{" "}
												<span
													style={{
														fontWeight: "bold",
													}}
												>
													B
												</span>{" "}
											</div>
										</div>

										<div
											style={{
												display: "flex",
												justifyContent: "center",
												alignItems: "center",
											}}
										>
											<h3>WORK EXPERIENCE</h3>
										</div>

										<div>
											<ul>
												<h3>
													Information Technology
													Attachee at Mombasa Apparel
													(three-months-training)
												</h3>
												<li>
													Gaining familiarity with
													Mobile and Web Development
													strategic designs and good
													code development practices
													that are entailed to meet
													the expected and desired end
													user experience such as:
													user data abstraction in
													that the database (Backend)
													is prevented from direct
													interaction with the
													frontend part and the
													intereaction is only
													permitted by an Api (REST
													api) mechanism. This
													enhances the overal security
													to the application and also
													safeguarding the
													organisation's or
													Individual's data in the
													database from hacking
													threats like the SQL
													injection.
												</li>
												<br />
												<li>
													Gaining experience with
													integrated development
													environments (IDEs:VsCode,
													Android Studio and WebStorm
													and Pycharm), version
													control systems, and other
													software development tools
													commonly used for
													programming in the industry.
												</li>
												<br />
												<li>
													Gaining familiarity with
													network protocols such as
													TCP/IP, DNS, DHCP, and HTTP,
													and understanding how they
													operate in a real-world
													network environment.
												</li>
												<br />
												<li>
													{" "}
													Providing technical
													assistance and support to
													employees or end-users
													involving troubleshooting
													hardware and software
													issues, helping with printer
													problems, setting up and
													configuring computers, and
													resolving network
													connectivity issues
												</li>
												<br />
												<li>
													Collaborating with IT team
													members and other
													departments to solve
													technical challenges and
													contribute to the
													organization's overall IT
													strategy.
												</li>{" "}
												<br />
												<li>
													Conducting training sessions
													for employees or end-users
													on how to use IT systems and
													software effectively and
													securely.
												</li>
												<br />
												<li>
													Assisting in the
													configuration of routers,
													switches, and other network
													devices to maintain a stable
													and secure network
													infrastructure.
												</li>
												<br />
											</ul>


											<div
												style={{
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
												}}
											>
												<h3>SKILLS</h3>
											</div>
											<div>
												<ol type="i">
													<li>
														Android Mobile
														Application Development
													</li>{" "}
													<br />
													<li>
														Flutter Mobile
														Application Development
													</li>{" "}
													<br />
													<li>
														ReacNative Mobile
														Application Development{" "}
													</li>{" "}
													<br />
													<li>
														React Web Application
														Development
													</li>{" "}
													<br />
													<li>
														PHP Laravel Web
														Application Development
													</li>{" "}
													<br />
													<li>
														Node.js Express
														technology for Backend
														Application Development
													</li>{" "}
													<br />
													<li>
														Springoot technology for
														Backend Application
														Development
													</li>{" "}
													<br />
													<li>
														Proficiency in MongoDB,
														Firebase, MySQL and
														PostgresSQL
													</li>{" "}
													<br />
													<li>
														Programmming languages :
														KOTLIN, JAVA
														,JAVASCRIPT, TYPESCRIPT,
														DART, PYTHON and C++.
													</li>{" "}
													<br />
													<li>
														Computer Networking :
														Router and Switch
														Configurations, IP
														address Subnetting and
														management, DHCP, DNS,
														NAT and Network
														troubleshooting issues.
													</li>{" "}
													<br />
												</ol>
												<div
													style={{
														fontWeight: "bold",
													}}
												>
													The skills above have been
													used in the development of
													my projects and final
													applications as demonstrated
													in{" "}
													<span>
														<a
															href="/projects"
															style={{
																fontWeight:
																	"bold",
																textDecoration:
																	"none",
															}}
														>
															my projects section
														</a>
													</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="logo.jpg"
											alt="about"
											className="about-image"
										/>
									</div>
								</div>

								<div className="about-socials">
									<Socials />
								</div>
							</div>
						</div>
						<div className="about-socials-mobile">
							<Socials />
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

export default About;
