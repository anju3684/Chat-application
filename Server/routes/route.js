import express  from "express";
import {addUser,getUsers}  from "../controller/user-controller.js";
const Route=express.Router();

Route.post('/add',addUser)
Route.get('/users',getUsers)
export default Route