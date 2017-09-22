'use strict';

import mongoose from 'mongoose'
import entryData from '../../InitData/doctor'

const Schema = mongoose.Schema;

const entrySchema = new Schema({
	name: String,
	did: Number,
	desc: String,
});

const Doctor = mongoose.model('Doctor', entrySchema)

Doctor.findOne((err, data) => {
	if (!data) {
		for (let i = 0; i < entryData.length; i++) {
			Doctor.create(entryData[i]);
		}
	}
})

export default Doctor