import React, { useState } from 'react';
import { Button } from '..';
import { colors } from '../../config/style';
import { Trans } from 'react-i18next';

export function SwitchButton(props: any) {
	const { btnTxts, setBtnIdx, showActivatedStyle = true } = props;
	const [ switchIndex, setSwitchIndex ] = useState(0);

	const handleOnClick = (type: number, btnTxt: string) => {
		setSwitchIndex(type);
		setBtnIdx && setBtnIdx(type);
	};

	const activeButtonStyle = {
		flex: 1,
		fontWeight: 'bold',
		borderWidth: 1,
		backgroundColor: colors.tiffanyBlue,
		backgroundImage: 'linear-gradient(225deg, #21D4FD 0%, #B721FF 100%)',
		borderColor: colors.tiffanyBlue
	};

	const inActiveButtonStyle = {
		flex: 1,
		color: colors.darkBg,
		backgroundColor: colors.white,
		borderColor: colors.lightGreen
	};

	return (
		<div
			style={{
				flexDirection: 'row',
				display: 'flex',
				flex: 1,
				minHeight: 40
			}}
		>
			{btnTxts &&
				btnTxts.length > 0 &&
				btnTxts.map((btnTxt: string, i: number) => {
					return (
						<Button
							key={i}
							className="switch-button"
							style={showActivatedStyle && switchIndex === i ? activeButtonStyle : inActiveButtonStyle}
							onClick={() => handleOnClick(i, btnTxt)}
							buttonName={<Trans i18nKey={`components.switch-button-${btnTxt}`}>{btnTxt}</Trans>}
						/>
					);
				})}
		</div>
	);
}
