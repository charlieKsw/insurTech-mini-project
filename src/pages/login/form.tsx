import React from 'react';
import { observer } from 'mobx-react';
import { history } from '../../stores';
import { message } from 'antd';

// Components
import { Line, Form } from '../../components';
import { fields } from './fields';

// Store
import { useAuthStore } from '../../stores';

// Style
import { colors } from '../../config/style';

// Type Model
import { LoginResult } from '../../models/auth';
import { Trans } from 'react-i18next';

const LoginForm = () => {
	const { login } = useAuthStore();
	const onFinish = async (values: any) => {
		const { username, password } = values;
		// Mock userId and Password
		// let username = 'admin';
		// let password = 'MCC001!';

		const result: LoginResult = await login(username, password);
		let responseTxt = <Trans i18nKey="header.login-success" />;
		if (result && result['success']) {
			if (result['redirect']) {
				message.success(responseTxt);
				return history.push(result['redirect']);
			}
			return message.error(`Login Failed - Incorrect Password / Email`);
		}
		return message.error(`Login Failed - Please contact admin`);
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo);
	};

	return (
		<div style={{ minWidth: 300 }}>
			<h2 style={{ color: colors.white }}>
				<Trans i18nKey="login">Login</Trans>
			</h2>
			<Line position={'center'} color={colors.white} height={2} />
			{/* Form */}
			<div style={{ maxWidth: 400 }}>
				<Form
					fields={fields}
					formName="login-form"
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
					submitBtnName="Login"
					submitBtnType="submit"
				/>
			</div>
		</div>
	);
};

export default observer(LoginForm);
