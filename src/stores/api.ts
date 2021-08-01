import { AuthStore } from './auth';
import axios, { Method } from 'axios';
import { action } from 'mobx';
import { getLocalStorage } from '../utils';
import { message } from 'antd';

export class ApiStore {
	@action.bound
	callApi(method: Method, url: string, params: any = null) {
		return new Promise(async (resolve, reject) => {
			try {
				const token = await getLocalStorage('token');
				let response = await axios({
					method: method,
					url: url,
					data: params,
					headers: {
						authorization: `bearer ${token}` || null
					}
				});
				return resolve(response ? response.data : null);
			} catch (e) {
				const { status, data } = (e && e.response) || {};
				if (status === 401) {
					message.error('Please login again');
					const { logout } = new AuthStore();
					logout();
					return reject({ code: 401, message: 'Please login again', data });
				}
				return reject({ code: 500, message: 'Please try again later', data: null });
			}
		});
	}
}

export const STORE_API = 'apiStore';
