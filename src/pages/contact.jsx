import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							Lets Connect
						</div>

						<div className="subtitle contact-subtitle">
							Thank you for your interest in getting in touch with
							me. I welcome your feedback, questions, and
							suggestions. If you have a specific question or
							comment, please feel free to email me directly at
							&nbsp;{" "}
							<a href={`mailto:${INFO.main.email}`} style={{ textDecoration:'none', color:'#14b8a6', fontWeight:'bold',}}>
								{INFO.main.email}
							</a>
							. You can also reach out to me via{" "}
							<span
								style={{
									marginLeft: ".5rem",
									
									
								}}
							>
								{" "}
								<a href={`${INFO.socials.linkedin}`} style={{ textDecoration:'none', color:'#14b8a6', fontWeight:'bold',  }}>
									Linkedin 
								</a> 
							</span>{" "}  &nbsp;
							  where i usually post updates on
							software development, Cybersecurity and many more other fields of Information Technology (IT World)  on linkedin. Thanks again for your
							interest, and I look forward to hearing from you!
							<p>Call : <a href="tel:+254757450727" style={{ textDecoration:'none', color:'#14b8a6', fontWeight:'bold'  }}>+254757450727</a></p>
						</div>
					</div>

					<div className="socials-container">
						<div className="contact-socials">
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

export default Contact;
