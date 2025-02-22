import React from "react";
import Cloud from "../images/cloud.png";
import MachineLearning from "../images/Ai.png";

const cloudComputingBenefits = [
	{
		title: "Cost Efficiency",
		descr: "Cloud computing reduces costs by eliminating the need for physical servers.",
		example:
			"A startup uses AWS Lambda for serverless computing, paying only for execution time.",
	},
	{
		title: "Scalability",
		descr: "Cloud services allow businesses to scale resources up or down based on demand.",
		example:
			"Netflix dynamically scales its AWS infrastructure to handle peak streaming hours.",
	},
	{
		title: "Flexibility & Remote Access",
		descr: "Cloud platforms enable remote access to applications and data from anywhere.",
		example:
			"A development team collaborates on Google Cloud from different time zones.",
	},
	{
		title: "Automatic Software Updates",
		descr: "Cloud providers handle software updates and security patches.",
		example:
			"Microsoft Office 365 updates automatically via Azure, ensuring users have the latest features.",
	},
	{
		title: "Improved Security",
		descr: "Cloud providers offer robust security features like encryption and threat detection.",
		example: "Banks use AWS Shield to protect against DDoS attacks.",
	},
	{
		title: "Disaster Recovery",
		descr: "Cloud backups prevent data loss during system failures.",
		example:
			"Hospitals use Google Cloud Backup to store patient records for recovery after cyberattacks.",
	},
	{
		title: "Enhanced Collaboration",
		descr: "Teams can collaborate on projects in real time using cloud-based tools.",
		example:
			"Slack and Google Drive allow employees to edit documents together remotely.",
	},
	{
		title: "Better Performance & Reliability",
		descr: "Cloud services distribute workloads to maintain uptime.",
		example:
			"Shopify uses distributed cloud servers to handle Black Friday traffic spikes.",
	},
	{
		title: "Eco-Friendliness & Energy Efficiency",
		descr: "Cloud providers optimize energy use and promote sustainability.",
		example:
			"AWS data centers run on renewable energy, reducing business carbon footprints.",
	},
	{
		title: "Faster Deployment & Innovation",
		descr: "Cloud services enable rapid application deployment.",
		example:
			"Startups use Kubernetes on Google Cloud to launch MVPs faster.",
	},
];

const machineLearningBenefits = [
	{
		title: "Disease Diagnosis & Prediction",
		descr: "ML models analyze medical data to detect diseases early and predict potential health risks.",
		example:
			"IBM Watson analyzes patient records and suggests possible diagnoses for doctors.",
	},
	{
		title: "Personalized Treatment Plans",
		descr: "ML helps doctors create customized treatment plans based on a patient’s medical history and genetic profile.",
		example:
			"AI-powered tools like Tempus analyze cancer patients’ genetic data to recommend personalized therapies.",
	},
	{
		title: "Medical Imaging & Radiology",
		descr: "ML enhances the accuracy of interpreting medical images such as X-rays, MRIs, and CT scans.",
		example:
			"Google’s DeepMind AI detects eye diseases in retinal scans with accuracy similar to human doctors.",
	},
	{
		title: "Drug Discovery & Development",
		descr: "ML accelerates drug research by analyzing molecular structures and predicting potential drug candidates.",
		example:
			"Pfizer uses ML to identify promising compounds for new medications, reducing development time.",
	},
	{
		title: "Patient Monitoring & Predictive Analytics",
		descr: "ML-powered wearables and IoT devices track patient vitals and predict health issues in real-time.",
		example:
			"Apple Watch detects irregular heart rhythms and alerts users about potential atrial fibrillation.",
	},
	{
		title: "Automation of Tasks",
		descr: "Machine learning automates repetitive tasks, reducing human effort.",
		example: "Gmail’s spam filter categorizes emails as spam or important.",
	},
	{
		title: "Improved Decision-Making",
		descr: "ML analyzes vast datasets for better decision-making.",
		example:
			"Banks use ML to assess loan eligibility through credit scoring.",
	},
	{
		title: "Enhanced Customer Experience",
		descr: "ML personalizes user experiences based on behavior.",
		example: "Netflix recommends movies based on viewing history.",
	},
	{
		title: "Fraud Detection",
		descr: "ML detects suspicious activities in real-time.",
		example:
			"PayPal identifies fraudulent transactions by analyzing spending patterns.",
	},
	{
		title: "Predictive Maintenance",
		descr: "ML helps predict equipment failures before they occur.",
		example: "Manufacturing firms use ML to reduce machinery downtime.",
	},
	{
		title: "Healthcare Advancements",
		descr: "ML assists in disease diagnosis and treatment suggestions.",
		example: "IBM Watson analyzes medical records to recommend treatments.",
	},
	{
		title: "Personalized Marketing",
		descr: "ML enhances targeted advertising.",
		example:
			"Amazon suggests products based on users’ past purchases and browsing history.",
	},
	{
		title: "Image & Speech Recognition",
		descr: "ML powers facial and voice recognition technologies.",
		example:
			"Google Photos categorizes images, and Siri understands voice commands.",
	},
	{
		title: "Self-Driving Technology",
		descr: "ML enables autonomous driving by analyzing road conditions.",
		example: "Tesla's autopilot system assists in self-driving features.",
	},
	{
		title: "Cybersecurity & Threat Detection",
		descr: "ML detects and prevents cyber threats in real-time.",
		example:
			"Darktrace uses ML to identify and neutralize security breaches.",
	},
];

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
				<img
					src={Cloud}
					style={{ width: "70px", height: "70px" }}
					alt=""
				/>
				<div className="article-content">
					<div className="paragraph">
						{cloudComputingBenefits.map((data, index) => (
							<div key={index} style={{ padding: "1rem" }}>
								<div style={{ color: "#4CC6B9" }}>
									{data.title}:
								</div>
								<div>- {data.descr}</div>
								<div>- {data.example}</div>
							</div>
						))}
					</div>
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
				<img
					src={MachineLearning}
					style={{ width: "70px", height: "70px" }}
					alt=""
				/>

				<div className="article-content">
					<div className="paragraph">
						{machineLearningBenefits.map((data, index) => (
							<div style={{ padding: "1rem" }}>
								<div key={index} style={{ color: "#4CC6B9" }}>
									{data.title}:
								</div>
								<div>- {data.descr}</div>
								<div>- {data.example}</div>
							</div>
						))}
					</div>
				</div>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
