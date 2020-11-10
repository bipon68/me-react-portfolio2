// const express = require ("express");
import express from 'express';


const router = express.Router()

import {GetUsers, CreateUser} from '../Services/user.services.js'

router.get('/', GetUsers)

router.post('/', CreateUser)


export default router;