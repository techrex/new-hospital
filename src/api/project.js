import webgisRest from './webgisRest'

/**
 * @api 获取医院列表
 * @param <cancelToken> cancelToken
 */
const fetchAllHospitals = (cancelToken) => webgisRest.post('bfhkckcontrller/test', {
  cancelToken
}).then(res => res.data)

/**
 * @api 搜索医院
 * @param <String> hospitalName 医院名称
 * @param <cancelToken> cancelToken
 */
const searchHospital = (hospitalName, cancelToken) => webgisRest.post('bfhkckcontrller/test1', new URLSearchParams({
  name: hospitalName
}), {
  cancelToken
}).then(res => res.data)

/**
 * @api 获取医生列表
 * @param <String> ks 科室
 * @param <cancelToken> cancelToken
 */
const fetchAllDoctors = (ks, cancelToken) => webgisRest.post('bfhkckcontrller/hz', new URLSearchParams({
  KS: ks
}), {
  cancelToken
}).then(res => res.data)

/**
 * @api 获取预约列表
 * @param <cancelToken> cancelToken
 */
const fetchAllAppointments = (cancelToken) => webgisRest.post('bfhkckcontrller/yyxx', {
  cancelToken
}).then(res => res.data)

/**
 * @api 预约医生
 * @param <String> doctorId 医生ID
 * @param <String> realName 患者姓名
 * @param <String> tel 患者联系方式
 * @param <String> hospital 治疗医院
 * @param <cancelToken> cancelToken
 */
const appointmentDoctor = (doctorId, realName, tel, hospital, cancelToken) => webgisRest.post('bfhkckcontrller/hzqr', new URLSearchParams({
  ID: doctorId,
  NAME: realName,
  SJHM: tel,
  yy: hospital
}), {
  cancelToken
}).then(res => res.data)

/**
 * @api 预约医院
 * @param <String> hospitalId 医院ID
 * @param <String> realName 患者姓名
 * @param <String> tel 患者联系方式
 * @param <String> isNeedCar 是否用车
 * @param <String> isNeedAccompany 是否陪护
 * @param <String> bz 备注
 * @param <String> hospital 治疗医院
 * @param <cancelToken> cancelToken
 */
const appointmentHospital = (hospitalId, realName, tel, isNeedCar, isNeedAccompany, bz, hospital, cancelToken) => webgisRest.post('bfhkckcontrller/yy', new URLSearchParams({
  ID: hospitalId,
  NAME: realName,
  SJHM: tel,
  SFYC: isNeedCar,
  SFPH: isNeedAccompany,
  BZ: bz,
  ZLYY: hospital
}), {
  cancelToken
}).then(res => res.data)

export default {
  fetchAllHospitals,
  searchHospital,
  fetchAllDoctors,
  fetchAllAppointments,
  appointmentDoctor,
  appointmentHospital
}
