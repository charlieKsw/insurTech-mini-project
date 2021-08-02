import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { message } from 'antd';

// Components
import { MainContainer, SubmitForm } from '../../components';
import { SwitchButton } from '../../components/switchButton';
import { Trans } from 'react-i18next';
import { withTrans } from '../../i18n/withTrans';

const onFinishFailed = (errorInfo: any) => {
	console.log('Failed:', errorInfo);
};

const onFinish = async (values: any) => {
	let responseSuccessTxt = <Trans i18nKey="home.submit-success" />;
	let responseFailedTxt = <Trans i18nKey="home.submit-failed" />;
	if (values && values.length > 0) {
		return message.success(responseSuccessTxt);
	}
	return message.error(responseFailedTxt);
};

const renderChild = ({ isAuth, setIsAuth, formType, setFormType }: any) => {
	return (
		<div className="flex-column">
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center'
				}}
			>
				<h1 style={{ fontSize: 28 }}>
					<Trans i18nKey="home.plan-title">Which plan should I choose?</Trans>
				</h1>
				<h3 style={{ fontSize: 16 }}>
					<Trans i18nKey="home.plan-subtitle">
						Explanations provided by actuaries, doctors, and claims officers
					</Trans>
				</h3>
			</div>

			{/* Form */}
			<div style={{ width: '100%', marginTop: 20, flexWrap: 'wrap' }}>
				<SwitchButton
					className="switch-button"
					fromPage="home"
					showActivatedStyle={true}
					btnTxts={[ 'Standard', 'Premium' ]}
					setBtnIdx={setFormType}
				/>
				<SubmitForm
					isAuth={isAuth}
					setIsAuth={setIsAuth}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
					formType={formType}
					setFormType={setFormType}
					submitBtnName="Submit"
					submitBtnType="submit"
				/>
			</div>
		</div>
	);
};

const HomePage = () => {
	const [ formType, setFormType ] = useState(0);
	const [ isAuth, setIsAuth ] = useState(false);

	useEffect(
		() => {
			const token = localStorage.getItem('token');
			token && setIsAuth(true);
		},
		[ isAuth, setIsAuth ]
	);

	return (
		<MainContainer
			isAuth={isAuth}
			setIsAuth={setIsAuth}
			child={() => renderChild({ data: [], isAuth, setIsAuth, formType, setFormType })}
		/>
	);
};

export default observer(withTrans(HomePage));
