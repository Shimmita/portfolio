import Django from "../images/django.png";
import Docker from "../images/docker.png";
import FastAPI from "../images/fastAPI.png";
import Flutter from "../images/flutter.png";
import GitActions from "../images/g_actions.png";
import GCPFirebase from "../images/gcp_1.png";
import Javascript from "../images/javascript.png";
import Kotlin from "../images/Kotlin.png";
import Material from "../images/maui.png";
import Android from "../images/mobile_andro.png";
import MongoDB from "../images/mongo.png";
import MySQL from "../images/mysql.png";
import Nextjs from "../images/nextjs.png";
import Nodjs from "../images/node.png";
import Numpy from "../images/numpy.png";
import Pandas from "../images/pandas.png";
import PostgreSQL from "../images/postgres.png";
import Python from "../images/python.jpeg";
import React from "../images/react.png";
import Reddis from "../images/redis.png";
import Redux from "../images/redux.png";
import Scikit from "../images/scikit.png";
import Sqlite from "../images/sqlite.png";
import Tailwind from "../images/tailcss.png";
import Tensorflow from "../images/tensor.png";
import Typescript from "../images/typescript.png";
import WebRTC from "../images/webrtc.png";
import Socket from "../images/socket.jpeg";
import RestAPI from "../images/restful.jpeg";

const skills = {
	programming: [
		{ title: "Kotlin", image: Kotlin },
		{ title: "JavaScript", image: Javascript },
		{ title: "Python", image: Python },
		{ title: "Typescript", image: Typescript },
	],
	databases: [
		{ title: "Mongo", image: MongoDB },
		{ title: "MySQL", image: MySQL },
		{ title: "PostgreSQL", image: PostgreSQL },
		{ title: "Sqlite", image: Sqlite },
		{ title: "Reddis", image: Reddis },
		{ title: "Firebase", image: GCPFirebase },
	],

	containersation: [{ title: "Docker", image: Docker }],
	devops: [{ title: "GitHub Actions", image: GitActions }],

	frontend: [
		{ title: "React", image: React },
		{ title: "Redux", image: Redux },
		{ title: "Next", image: Nextjs },
		{ title: "Tailwind CSS", image: Tailwind },
		{ title: "Material UI", image: Material },
	],
	backend: [
		{ title: "Python Django", image: Django },
		{ title: "Nodejs", image: Nodjs },
		{ title: "Python FastAPI", image: FastAPI },
		{ title: "REST APIs", image: RestAPI },
		{ title: "Socket Programming", image:Socket },
		{ title: "WebRTC", image: WebRTC },
	],
	mobile: [],
	other: [
		{ title: "Android", image: Android },
		{ title: "Flutter", image: Flutter },
		{ title: "GitHub Actions", image: GitActions },
		{ title: "Docker", image: Docker },
		{ title: "Tensorflow", image: Tensorflow },
		{ title: "Scikit", image: Scikit },
		{ title: "Pandas", image: Pandas },
		{ title: "Numpy", image: Numpy },
	],
};

export default skills;
