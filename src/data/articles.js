import React from "react";

function article_1() {
	return {
		date: "20 Feb 2023",
		title: "The Benefits of Cloud Computing",
		description:
			"Cloud computing offers a range of benefits, including cost savings and increased flexibility. Find out why more businesses are turning to the cloud.",
		keywords: [
			"The Benefits of Cloud Computing",
			"Shimita",
			"Douglas",
			"Shimita Douglas",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph"></div>
					<img
						src="https://www.pngkey.com/png/detail/571-5715694_cloud-computing.png"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "7 May 2023",
		title: "Artificial In Intelligence HealthCare Centers and Many Other Institution",
		description:
			"AI is transforming the healthcare industry, from improving patient outcomes to streamlining operations. Discover the latest applications of this game-changing technology.",
		style: ``,
		keywords: [
			"The Benefits of Cloud Computing",
			"Shimita",
			"Douglas",
			"Shimita Douglas",
		],
		body: (
			<React.Fragment>
			
				{/* <h1>Content of article 2</h1> */}

				<div className="article-content">
					<div className="paragraph"></div>
					<img
						src="https://futureskillsprime.in/sites/default/files/inline-images/Blog%20Images_Internal_551x313_How%20to%20Learn%20Artificial%20Intelligence%20Blog%20Image%201_0.jpg"
						alt="random"
						className="randImage"
					/>
				</div>

			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
