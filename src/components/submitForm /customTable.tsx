import React from 'react';
import { Table } from 'antd';
import { dataSource, dataSource2, columns, columns2 } from './mockData';

export interface iForm {
	key?: number | string;
	name?: string;
	information?: string;
}

interface TableItemsProps {
	value: Array<iForm>;
	formType: number;
}

const customPlanInfo = (value: any, formType: number) => {
	switch (formType) {
		case 0: // Standard-plan
			return <Table value={value} dataSource={dataSource} columns={columns} pagination={false} />;
		case 1: // Premium-plan
			return <Table value={value} dataSource={dataSource2} columns={columns2} pagination={false} />;
		default:
	}
};

export const CustomTable = (props: TableItemsProps) => {
	const { value, formType } = props;

	return <div>{customPlanInfo(value, formType)}</div>;
};
