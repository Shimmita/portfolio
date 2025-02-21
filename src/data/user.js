import Bootstrap from "../images/bootsrap.jpeg";
import Django from "../images/django.png";
import Flutter from "../images/flutter.png";
import GCPFirebase from "../images/gcp_1.png";
import Javascript from "../images/javascript.png";
import Kotlin from "../images/Kotlin.png";
import LinuxOS from "../images/linux.jpeg";
import Material from "../images/maui.png";
import Android from "../images/mobile_andro.png";
import MongoDB from "../images/mongo.png";
import MySQL from "../images/mysql.png";
import Nextjs from "../images/nextjs.png";
import Nodjs from "../images/node.png";
import Numpy from "../images/numpy.png";
import Pandas from "../images/pandas.png";
import PHP from "../images/php_1.png";
import Python from "../images/python.jpeg";
import React from "../images/react.png";
import Reddis from "../images/redis.png";
import Redux from "../images/redux.png";
import Renders from "../images/render.png";
import Sqlite from "../images/sqlite.png";
import Tailwind from "../images/tailcss.png";
import Tensorflow from "../images/tensor.png";
import Typescript from "../images/typescript.png";
import Vercel from "../images/vercel.png";

const INFO = {
	main: {
		title: "DOUGLAS SHIMITA OUNDO",
		name: "Shimita Douglas",
		email: "shimitadouglas@gmail.com",
		logo: "../logo.jpg",
	},

	socials: {
		github: "https://github.com/Shimmita",
		linkedin: "https://www.linkedin.com/in/douglas-oundo-aa1b35255",
		instagram: "https://instagram.com/",
		stackoverflow:
			"https://stackoverflow.com/users/21065934/shimita-douglas",
		facebook: "https://facebook.com/",
		email: "mailto:shimitadouglas@gmail.com",
		phone: "tel:+254757450727",
	},

	homepage: {
		title: "Software Engineer",
		degree: "BSc. Information Technology",
	},

	about: {
		title: "My Curriculum Vitae (C.V)",
		description: "",
	},

	articles: {
		title: "Artificial Intelligence Is Transforming the World",
		description:
			"below are my thoughts on artificial intelligence (A.I) and how it could be used to solve real world problems which various individual, society or organisation face.",
	},

	projects: [
		// javascript
		{
			title: "Next Ride Market Platform",
			description:
				"full stack web application that provides functionalities of uploading vehicles on the platform by the owners, leasing and buying. take it like a virtual show room for vehicles. provided the best transition moment of exposure from bare react javascript to full stack next with typescript. typescript skills have been improvised greatly and use of server side rendering capabilities of nextjs makes it good for development of robust progressive full stack web applications.",
			logos: [Nextjs, Typescript, Tailwind, MongoDB],
			link: "https://github.com/Shimmita/RideMarket-Nexjs-App",
		},

		{
			title: "React Metatron Dev Platform ",
			description:
				"Socio-tech platform which bridges the gap between the prodigy and noob tech enthusiasts into one common location to foster interaction through, instant messaging, posting tech articles and milestones, participating in live software development events, job application from a diverse pool of sources, access to free and paid courses from the the tech experts so that you could learn at your pace!. the app uses react, redux toolkit, redux-persist, bootsrap and material ui for the frontend.",
			logos: [React, Redux, Bootstrap, Material],
			link: "https://github.com/Shimmita/metatron-dev-platform",
		},
		{
			title: "Nodejs Metatron Dev Platform",
			description:
				"Backend application that powers metatron dev platform frontend. app follows nodejs best practices and designs using MVC approach. reddis for temporary caching of frequently accessed data to reduce overwhelming of the database, uses cloudinary, supabase, firabase and mongodb atlas for storage of data. embedded media compression capabilities using ffmpeg, sharp for converting images to webp formats. all these have ensured reduced upload and download size of the media thus high performance.",
			logos: [Nodjs, Reddis, GCPFirebase, MongoDB],
			link: "https://github.com/Shimmita/metatron-backend-node",
		},

		{
			title: "React Blood Bank MS",
			description:
				"An interesting project that facilitated award of my bachelor's degree at Maseno University. This was my fourth Year project that was aimed to cater challanges involved in the blood donations and distribution during the times of blood crisis. manages donor records and timely appointments for blood donation, tracks available blood levels in the registered blood bank centers, provides statistics and analytics of current blood banks for future insights. uses locations for locating nearest blood bank centers",
			logos: [React, Bootstrap, Nodjs, MongoDB],
			link: "https://github.com/Shimmita/Blood-Bank-Management-System",
		},
		{
			title: "React My Digital Potfolio",
			description:
				"Yes, this portfolio you are scrolling its content to know about my experise is backed by this project, haa haa!. learning the intricacies of react, bootstrap and web hosting triggered my curiosity to develop my awsome portfolio that could contain my expetise information on the fly. during the development i honed my skills and proficiency in the use of react and how very time saving the libray is aimed to create articulated UI for frontend. The project is hosted on vercel cloud provider and can be accessed anywhere globally.",
			logos: [Javascript, React, Vercel],
			link: "https://github.com/Shimmita/portfolio ",
		},

		{
			title: "Nodejs JobsAPI254",
			description:
				"Backend platform that can be integrated by any frontend to fetch information about jobs that are availbale globally specifically in tech industry. app uses puppeteer javascript to traverse through diverse job application sites and collects the information for saving in MongoDB Atlas. the app uses modern MVC architecture. Its hosted on Renders platform, and maintainance i does continuously whenever applicable to ensure seamless flow of information that is updated.",
			logos: [Nodjs, Javascript, MongoDB, Renders],
			link: "https://github.com/Shimmita/jobsAPI254 ",
		},

		// androids

		{
			title: "Android Full Gospel Ministry ",
			description:
				"mobile application crafted for the management of church services and activities such as member registration, daily prayer posting, weekly verse posting, naturing church talents through advertising one's uniquely content, live tv for streaming ongoing events and previously conducted events. It brings members to one common location where they can interact and be able to track the ongoing church activities get updated timely. uses jetpakcompose and firebase.",
			logos: [Kotlin, Android, GCPFirebase],
			link: "https://github.com/Shimmita/full_gospel_android_app",
		},

		{
			title: "Android JobWave ",
			description:
				"cutting-edge android app built with jetpakcompose. It is powered by a nodejs backend ( jobsAPI254 ). during the development of this app i made use of coroutines for handling asynchronous request to and fro the backend using retrofit library. added functionality of rate limiting and timeouts with api calls for proper utilisation of resources. Honed skills in integration of rest apis with mobile apps and the overall use of kotlin ecosystem in android development.",
			logos: [Kotlin, Android, Nodjs],
			link: "https://github.com/Shimmita/JobWave",
		},

		{
			title: "Android Market CM",
			description:
				"e-commerce mobile app that facilitates the virtual exhibition of goods and sevices to the end users. the application makes use of kotlin 90% and Java 10%. users can post their products and attached prices and wait for approval from the admin. Makes use of firebase for realtime data updates, image compression for light bandwidth uploads and downloads. this app transformed my entire migration journey from Java to Kotlin successfully. ",
			logos: [Kotlin, Android, GCPFirebase],
			link: "https://github.com//Shimmita/Marketing-App",
		},

		{
			title: "Android School MS ",
			description:
				"application that helps in automation of various school activities such as sending messages to the parent, progressive tracking of student performance and analytical insights, school events calendar management. student, teacher and parent registration. The app has the capacity of displaying to the parents if their child or son in school is suspended or not. This ensures that the parent monitors their child closely in terms of schooling.",
			logos: [Kotlin, GCPFirebase, Android],
			link: "https://github.com/Shimmita/School-Management-System",
		},

		// flutters

		{
			title: "Flutter Paperpedia ",
			description:
				"sleek designed app utilising material theming that aims to cater for quality pastpaper exams to students from different educational institutions. the role purpose of the app is to provide a robust learning environment for students in universities, collages, and high schools to have an easy way of revising past examination questions. most exams keep repeating questions from previous exams or exams from different institutions, paperpedia ensures that students have access to these resources effectively.",
			logos: [Flutter, Sqlite, GCPFirebase],
			link: "https://github.com//Shimmita/paperpedia_flutter",
		},

		// pythons
		{
			title: "ML/AI Image Classification",
			description:
				"Machine learning model that is used to classify images into two categories i.e happy or sad, male or female etc. it makes use of convolutional neural networks. made use of this model to distinguish between sad and happy faces. tools used include, tensorflow for grouping the dataset into batches of training, validation and testing, jupyter notebook for providing enviroment where to run the code just like VSCode, openCV for precise extraction of image pixels, pandas and numpy for handling of large arrays of pixels.",
			logos: [Python, Tensorflow, Pandas, Numpy],
			link: "https://github.com/Shimmita/ML-Image-Classifier-CNN",
		},

		{
			title: "ML/AI Sentiment Analysis",
			description:
				"have you ever wondered how most digital platforms are able to figure out a particular comment or message from users and flag it or delete it?. yes then the answer to that is sentiment analysis which makes it easier. this model uses specifically long short term memory or lstm that emanates from recurrent neural networks. the modal is able to analyse the previous context of a message with the proceeding one and conclude if a comments meets a set threshold i.e toxic, obscene, threat etc. used tensorflow, pandas and numpy.",
			logos: [Python, Tensorflow, Pandas, Numpy],
			link: "https://github.com/Shimmita/ML-Sentiment-Analysis-RNN",
		},

		{
			title: "Python Web Socket and Auth",
			description:
				"Utilised python web socket and multithreading functionality to come up with a software which simulates client-server architecture responsible for measuring the efficiency of different search algorithms in finding a string predicate or search string. Facilitated by digital signed certifcate for allowing authentication between the client and server. Finally making the app to run like Linux daemon or service. Locate Readme.md file in GitHub for more info about installation procedure.",
			logos: [Python, LinuxOS],
			link: "https://github.com/Shimmita/python_websocket_project",
		},

		{
			title: "Django Rental Management ",
			description:
				"A complete full stack web application utilising django's battery included features of authentication, templating engine, and ORM for management of rentals by landlords or landladies and guest users in a particular town or area who are seeking vacant guest houses and rooms. users can search for places and locate nearby vacant rooms with their corresponding rental fee. vacant guest houses can also be uploaded and wait for approval from the Admin.",
			logos: [Python, Django, MySQL],
			link: "https://github.com/Shimmita/django_rental_management_system",
		},

		{
			title: "Django REST Framework",
			description:
				"Put Django REST framework into practice. utilised Mixins and Generics in creating Restful APIs, use of authentication and protection routes from unauthorised access. mastered the intricate features of django rest framework and how it is powerful in building progressive web applications especially backend. Based on my exposure i recommend this technology for building scalable and complex applications, not good choice for small projects.",
			logos: [Python, Django, MySQL],
			link: "https://github.com//Shimmita/django_REST_framwork_lab ",
		},

		// PHPs

		{
			title: "PHP E-Commerce App",
			description:
				"practical application that helped me to visualize the concepts gained during the study of php programming course into practical implementation. involves the use of mysqli function that connects with mysql database for backend. the concepts of hashing user passord using cryptographic algorithm such as MD5 digets were applied for any user that creates their account, their passoword is hashed for security reasons. made use of raw mysql queries in management of the records. this honed my mysql skills.",
			logos: [PHP, MySQL],
			link: "https://github.com//Shimmita/Marketing-App-Vanilla-PHP ",
		},
	],
};

export default INFO;
