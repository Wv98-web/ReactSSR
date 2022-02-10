import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";

export default [
	{
		path: "/",
		exact: true,
		component: Home,
		loadData: Home.loadData,
	},
	{
		path: "/login",
		exact: true,
		component: Login,
	},
];
