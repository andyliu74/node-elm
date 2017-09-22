'use strict';

import DoctorModel from '../../models/v2/doctor'

class Doctor {
	constructor(){

	}
	async getDoctor(req, res, next){
		try{
			const doctors = await DoctorModel.find({}, '-_id');
			res.send(doctors);
		}catch(err){
			console.log('获取数据失败');
			res.send({
				status: 0,
				type: 'ERROR_DATA',
				message: '获取数据失败'
			})
			return
		}
	}
}

export default new Doctor()