import React, { useEffect, useState } from 'react';
import { Form as AntdForm, message } from 'antd';
import { dataSource, dataSource2 } from './mockData';

// Type
import { ButtonHtmlType } from '../button/types';

// Style
import { Button } from '..';
import { CustomTable } from './customTable';
import { Trans } from 'react-i18next';

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
						buttonName={<Trans i18nKey="components.submitForm.submit-button">{submitBtnName}</Trans>}
						htmlType={submitBtnType}
						onClick={() => submitForm(formType)}
					/>
					<div style={{ margin: '20px auto' }}>
						<span style={{ fontWeight: 'bold' }}>
							<Trans i18nKey="components.submitForm.remarks">Remarks</Trans>
						</span>
						<p>
							<Trans i18nKey="components.submitForm.footer-note-1" />
						</p>
						<p>
							<Trans i18nKey="components.submitForm.footer-note-2" />
						</p>
						<p>
							<Trans i18nKey="components.submitForm.footer-note-3" />
						</p>
						<p>
							<Trans i18nKey="components.submitForm.footer-note-4" />
						</p>
					</div>
				</AntdForm.Item>
			</AntdForm>
		</div>
	);
};
