"use strict";
const isLogin = (userName) => {
	if (userName === "reza") {
		return true;
	} else {
		return false;
	}
};

const test = () => false;

const register = (user) => {
	return true;
};

const getMe = (user) => {
	return "user";
};
const addCourse = (course) => {
	return true;
};
const ageCalc = (age) => {
	return 2025 - age;
};
const likePost = () => {
	return true;
}
const dissLikePost = () => {
	return false;
}
