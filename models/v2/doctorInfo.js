'use strict';

import mongoose from 'mongoose'
import entryData from '../../InitData/doctorInfo'

const Schema = mongoose.Schema;

const entrySchema = new Schema({
	name: String,
	did: Number,
	desc: String,
	image_url: String,
	address: String,
	age: Number,
	phone: String,
});

const DoctorInfo = mongoose.model('DoctorInfo', entrySchema)

DoctorInfo.findOne((err, data) => {
	if (!data) {
		for (let i = 0; i < entryData.length; i++) {
			DoctorInfo.create(entryData[i]);
		}
	}
})

export default DoctorInfo