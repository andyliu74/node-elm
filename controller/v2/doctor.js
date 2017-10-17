'use strict';

import DoctorModel from '../../models/v2/doctor'
import DoctorInfoModel from '../../models/v2/doctorInfo'

class Doctor {
	constructor(){

	}
	async getDoctor(req, res, next){
		try{
			const doctors = await DoctorModel.find({});
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

	async getDoctorInfo(req, res, next){
		try{
			const doctor = await DoctorInfoModel.findOne({"did": req.params.id});
			res.send(doctor);
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