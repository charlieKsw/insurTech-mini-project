import React from 'react';
import { Trans } from 'react-i18next';

export const dataSource = [
	{
		key: '1',
		name: 'Benefit Limit',
		information: 'HKD $420,000 / Month'
	},
	{
		key: '2',
		name: 'Prescribed Diagnostic',
		information: 'HKD $20,000 / Month'
	},
	{
		key: '3',
		name: 'Supplementary major',
		information: 'No'
	},
	{
		key: '4',
		name: 'Price',
		information: 'HKD $180 / Month'
	}
];

export const columns = [
	{
		title: '',
		dataIndex: 'name',
		key: 'name',
		render: (value: string, items: any) => {
			return <Trans i18nKey={`components.submitForm.standard-plan-information-${items['key']}`}>{value}</Trans>;
		},
		width: 310
	},
	{
		title: <Trans i18nKey="components.submitForm.standard-plan">Standard Plan</Trans>,
		dataIndex: 'information',
		key: 'information',
		render: (value: string, items: any) => {
			return <Trans i18nKey={`components.submitForm.standard-plan-content-${items['key']}`}>{value}</Trans>;
		},
		width: 310
	}
];

export const dataSource2 = [
	{
		key: '1',
		name: 'Benefit Limit',
		information: 'HKD $60,000 / Month'
	},
	{
		key: '2',
		name: 'Prescribed Diagnostic',
		information: 'HKD $45,000 / Month'
	},
	{
		key: '3',
		name: 'Supplementary major',
		information: 'Yes'
	},
	{
		key: '4',
		name: 'Price',
		information: 'HKD $350 / Month'
	}
];

export const columns2 = [
	{
		title: '',
		dataIndex: 'name',
		key: 'name',
		render: (value: string, items: any) => {
			return <Trans i18nKey={`components.submitForm.premium-plan-information-${items['key']}`}>{value}</Trans>;
		},
		width: 310
	},
	{
		title: <Trans i18nKey="components.submitForm.premium-plan">Premium Plan</Trans>,
		dataIndex: 'information',
		key: 'information',
		render: (value: string, items: any) => {
			return <Trans i18nKey={`components.submitForm.premium-plan-content-${items['key']}`}>{value}</Trans>;
		},
		width: 310
	}
];
