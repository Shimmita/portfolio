import React from "react";
import { Link } from "react-router-dom";

import "./styles/project.css";

const Project = (props) => {
	const { logos, title, description, link } = props;

	return (
		<React.Fragment>
			<div className="project">
				<Link to={link}>
					<div className="project-container">
						<div className="project-title">
							<h5>{title}</h5>
						</div>
						<div
							className="project-description"
							style={{
								textTransform: "lowercase",
								maxWidth: "280px",
							}}
						>
							{description}
						</div>
						<div
							className="project-logo"
							style={{
								display: "flex",
								paddingTop: "2rem",
								alignItems: "center",
							}}
						>
							{logos?.map((logo, index) => (
								<img
									key={index}
									src={logo}
									alt="logo"
									style={{
										width: "70",
										marginRight: "1rem",
									}}
								/>
							))}
						</div>
					</div>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default Project;
