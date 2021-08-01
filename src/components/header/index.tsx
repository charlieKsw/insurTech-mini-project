import React, { useEffect, useState } from 'react';

// Components
import { Button } from '..';
import { Avatar, Dropdown, Menu, message } from 'antd';
import { history } from '../../stores/router';

//Style
import { colors, logo } from '../../config/style';

// Assets
const LOGO = `assets/${logo}`;

export const Header = (props: any) => {
	const { executeScroll, isAuth, setIsAuth } = props;
	const [ lastNameChar, setLastNameChar ] = useState('A');

	useEffect(() => {
		const lastName = localStorage.getItem('lastName');
		lastName && lastName[0] && setLastNameChar(lastName[0].toUpperCase());
	}, []);

	const toPage = (page: string) => {
		let redirection = null;
		switch (page) {
			case 'logout':
				setIsAuth(false);
				localStorage.clear();
				message.success(`Logout Success`);
				redirection = `/`;
				break;
			default:
		}

		return redirection && history.push(redirection);
	};

	const settingMenu = (
		<Menu>
			<Menu.Item key="3" onClick={() => toPage('logout')}>
				Logout
			</Menu.Item>
		</Menu>
	);
	return (
		<div className="header">
			{/* Logo */}
			<div>
				<img src={LOGO} height={'auto'} width={100} alt={'header-logo'} />
			</div>

			{/* Button Group */}
			<div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', flex: 1 }}>
				<div style={{ color: colors.white, margin: 'auto 15px' }}>
					<span>EN</span> | <span>中文</span>
				</div>
				{!isAuth && (
					<Button
						onClick={() => history.push('login')}
						buttonName="Login"
						style={{
							width: 120,
							fontWeight: 'bold',
							borderColor: '#08aeea',
							backgroundColor: colors.background,
							borderRadius: 5
						}}
					/>
				)}
				<Button
					onClick={executeScroll}
					buttonName="Get a quote"
					style={{
						width: 120,
						fontWeight: 'bold',
						borderColor: colors.tiffanyBlue,
						backgroundColor: colors.tiffanyBlue,
						backgroundImage: 'linear-gradient(22deg, rgb(33, 212, 253) 5%, rgb(183, 33, 255) 95%)',
						margin: 'auto 8px',
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
