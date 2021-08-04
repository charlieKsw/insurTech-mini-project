import React, { useEffect, useState } from 'react';

// Components
import { Button } from '..';
import { Avatar, Dropdown, Menu, message } from 'antd';
import { history } from '../../stores/router';

//Style
import { colors, brandXsLogo } from '../../config/style';
import LanguageMenu from './languageMenu';
import { Trans } from 'react-i18next';

// Assets
const LOGO = `assets/${brandXsLogo}`;

export const Header = (props: any) => {
	const { executeScroll, isAuth, setIsAuth } = props;
	const [ lastNameChar, setLastNameChar ] = useState('A');

	useEffect(() => {
		const lastName = localStorage.getItem('lastName');
		lastName && lastName[0] && setLastNameChar(lastName[0].toUpperCase());
	}, []);

	const toPage = (page: string) => {
		let redirection = null;
		let responseTxt = <Trans i18nKey="header.logout-success" />;
		switch (page) {
			case 'logout':
				setIsAuth(false);
				localStorage.clear();
				message.success(responseTxt);
				redirection = `/`;
				break;
			default:
		}

		return redirection && history.push(redirection);
	};

	const settingMenu = (
		<Menu>
			<Menu.Item key="3" onClick={() => toPage('logout')}>
				{<Trans i18nKey="home.logout">Logout</Trans>}
			</Menu.Item>
		</Menu>
	);
	return (
		<div className="header">
			{/* Logo */}
			<div style={{ flex: 1, alignContent: 'center', lineHeight: 1 }}>
				<img src={LOGO} height={40} width={40} alt={'header-logo'} />
				<span
					style={{
						paddingLeft: 5,
						fontSize: 14,
						color: colors.white,
						fontWeight: 'bold',
						textShadow: '1px 1px #0D282F'
					}}
				>
					MediChainCharm
				</span>
			</div>

			{/* Button Group */}
			<div
				style={{
					display: 'flex',
					justifyContent: 'flex-end',
					alignItems: 'center',
					flex: 1
				}}
			>
				<LanguageMenu />
				{!isAuth && (
					<Button
						onClick={() => history.push('login')}
						buttonName={<Trans i18nKey="home.login">Login</Trans>}
						style={{
							width: 120,
							fontWeight: 'bold',
							borderColor: '#08aeea',
							backgroundColor: colors.background,
							borderRadius: 5,
							marginLeft: '12px'
						}}
					/>
				)}
				<Button
					onClick={executeScroll}
					buttonName={<Trans i18nKey="home.get-quote">Get a quote</Trans>}
					style={{
						width: 120,
						height: 35,
						fontWeight: 'bold',
						borderColor: colors.tiffanyBlue,
						backgroundColor: colors.tiffanyBlue,
						backgroundImage: 'linear-gradient(22deg, rgb(33, 212, 253) 5%, rgb(183, 33, 255) 95%)',
						margin: '0 10px',
						borderRadius: 5
					}}
				/>

				{/* Avatar */}
				{isAuth && (
					<Dropdown isAuth={isAuth} overlay={settingMenu} trigger={[ 'click' ]}>
						<Avatar className="avatar" size="default">
							{lastNameChar}
						</Avatar>
					</Dropdown>
				)}
			</div>
		</div>
	);
};
