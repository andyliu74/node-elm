'use strict';

import express from 'express';
import Doctor from '../controller/v2/doctor'
import Entry from '../controller/v2/entry'
import CityHandle from '../controller/v1/cities'
import User from '../controller/v2/user'
const router = express.Router();

router.get('/index_doctor', Doctor.getDoctor);
router.get('/index_entry', Entry.getEntry);
router.get('/pois/:geohash', CityHandle.pois);
router.post('/login', User.login);
router.get('/signout', User.signout);
router.post('/changepassword', User.chanegPassword);


export default router