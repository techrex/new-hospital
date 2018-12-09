import webgisRest from './webgisRest'
import URLSearchParams from 'url-search-params'

/**
 * @api 用户登录
 * @param <String> userName 用户名
 * @param <String> password 密码
 * @param <cancelToken> cancelToken
 */
const login = (userName, password, cancelToken) => webgisRest.post('bfhkckcontrller/dl', new URLSearchParams({
  username: userName,
  password
}), {
  noLogin: true,
  cancelToken
}).then(res => res.data)

/**
 * @api 用户注册
 * @param <String> userName 用户名
 * @param <String> password 密码
 * @param <String> telp 电话
 * @param <String> yy 医院
 * @param <String> ks 科室
 * @param <String> zc 职称
 * @param <String> idc 出生日期
 * @param <cancelToken> cancelToken
 */
const register = (userName, password, telp, yy, ks, zc, idc, cancelToken) => webgisRest.post('bfhkckcontrller/zcyh', new URLSearchParams({
  username: userName,
  password,
  telp,
  yy,
  ks,
  zc,
  idc
}), {
  noLogin: true,
  cancelToken
}).then(res => res.data)

export default { login, register }
