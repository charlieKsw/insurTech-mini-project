import { action, observable } from 'mobx';
import { removeAllLocalStorage, setLocalStorage } from '../utils';
import { history } from './router';

export class AuthStore {
	@observable twoFaQrCode: string = '';

	@action.bound
	async login(username: string, password: string) {
		const generalError = { success: false, error: 'general_error' };
		try {
			//Will call Api (POST request) if connect backend and use md5 to hash password
			// const result = await callApi('POST', url, { email: username, password: md5Pwd });
			if (username === 'admin' && password === 'MCC001!') {
				// Assumed name and password match db
				setLocalStorage('token', username);
				return { success: true, redirect: 'home' };
			}
			return generalError;
		} catch (e) {
			return generalError;
		}
	}

	@action.bound
	async logout() {
		removeAllLocalStorage();
		return history.push('/login');
	}
}

export const STORE_AUTH = 'authStore';
