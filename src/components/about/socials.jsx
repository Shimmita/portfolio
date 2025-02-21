import {
	faFacebookMessenger,
	faGithub,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import INFO from "../../data/user";

import "./styles/socials.css";

const Socials = () => {
	return (
		<div className="socials">
			<div className="social">
				<a href={INFO.socials.phone} rel="noreferrer">
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faPhone}
							className="social-icon"
						/>
					</div>
					<div className="social-text">Call</div>
				</a>
			</div>

			<div className="social">
				<a href={INFO.socials.email} rel="noreferrer">
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faFacebookMessenger}
							className="social-icon"
						/>
					</div>
					<div className="social-text">Email </div>
				</a>
			</div>

			<div className="social">
				<a href={INFO.socials.github} target="_blank" rel="noreferrer">
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faGithub}
							className="social-icon"
						/>
					</div>
					<div className="social-text">GitHub</div>
				</a>
			</div>

			<div className="social">
				<a
					href={INFO.socials.linkedin}
					target="_blank"
					rel="noreferrer"
				>
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faLinkedin}
							className="social-icon"
						/>
					</div>
					<div className="social-text">LinkedIn</div>
				</a>
			</div>
		</div>
	);
};

export default Socials;
