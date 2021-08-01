import React, { useEffect, useState } from 'react';
import { Form as AntdForm, Checkbox, message } from 'antd';
import { dataSource, dataSource2 } from './mockData';

// Type
import { ButtonHtmlType } from '../button/types';

// Style
import { Button } from '../';
import { colors } from '../../config/style';
import { CustomTable } from './customTable';

interface FormProps {
	isAuth: boolean;
	setIsAuth: Function;
	formStyle?: object;
	formType: number;
	setFormType: any;
	onFinish: any;
	onFinishFailed?: any;
	submitBtnName: string;
	submitBtnType: ButtonHtmlType;
	submitBtnClass?: string;
}

export const SubmitForm = (props: FormProps) => {
	const { isAuth, setIsAuth, formType, setFormType, onFinish, onFinishFailed, submitBtnType, submitBtnName } = props;
	const [ form ] = AntdForm.useForm();
	const [ data, setData ] = useState(dataSource);

	useEffect(
		() => {
			setFormType(formType);
		},
		[ formType, setFormType ]
	);
	useEffect(
		() => {
			setData(data);
		},
		[ setData, data ]
	);

	useEffect(
		() => {
			setIsAuth(isAuth);
		},
		[ setIsAuth, isAuth ]
	);

	const submitForm = (formType: number) => {
		if (!isAuth) return message.warning(`Please login to continue`);
		switch (formType) {
			case 0: // Standard-plan
				isAuth && onFinish && onFinish(dataSource);
				formType && setData(dataSource);
				break;
			case 1: // Premium-plan;
				isAuth && onFinish && onFinish(dataSource2);
				formType && setData(dataSource2);
				break;
			default:
		}
		form.resetFields();
	};
	return (
		<div>
			<AntdForm form={form} onFinishFailed={onFinishFailed || undefined}>
				<AntdForm.Item>
					<div style={{ margin: '20px auto' }}>
						<CustomTable value={data} formType={formType} />
					</div>
					<Button
						className="form-submit-button"
						style={{
							backgroundColor: colors.white,
							borderColor: colors.tiffanyBlue,
							color: colors.darkBg,
							borderRadius: 8,
							padding: '8px'
						}}
						buttonName={submitBtnName}
						htmlType={submitBtnType}
						onClick={() => submitForm(formType)}
					/>
					<div style={{ margin: '20px auto' }}>
						<span style={{ fontWeight: 'bold' }}>Remarks:</span>
						<p>(1) Age refers to the attained age of the Insured Person as of his or her last birthday.</p>
						<p>
							(2) Except for psychiatric treatments, rehabilitative care and medical negligence benefit,
							all benefits shall be applicable worldwide.
						</p>
						<p>
							(3) Except for benefit item supplementary major medical benefit as stated in the Benefit
							Schedule, all benefits are not subject to any restriction in the choice of ward class in
							hospital.
						</p>
						<p>
							(4) MCC guarantees that you can renew your policy every year, up to age 100. However, if you
							do not pay premiums within 31 days after the premium due date, your policy will be
							terminated and you may lose the coverage of this policy.
						</p>
					</div>
				</AntdForm.Item>
			</AntdForm>
		</div>
	);
};
