import { BasicResult } from './general';

export interface LoginResult extends BasicResult {
	redirect?: string;
}

export interface CreateMfaResult extends BasicResult {
	mfaImg?: string;
}
