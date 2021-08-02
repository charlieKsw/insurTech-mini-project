import React, { useRef } from 'react';
import { Trans } from 'react-i18next';

// Components
import { Button, Header } from '../../components';
import { colors, backgroundImg } from '../../config/style';
import { withTrans } from '../../i18n/withTrans';

const BACKGROUND_IMAGE = `assets/${backgroundImg}`;

interface MainContainerProps {
	child?: any;
	styles?: object;
	isAuth?: boolean;
	setIsAuth?: Function;
}
const scrollToRef = (ref: any) => window.scrollTo({ top: ref.current.offsetTop, behavior: 'smooth' });

export const MainContainer = (props: MainContainerProps) => {
	const { child, styles, isAuth, setIsAuth } = props;
	const myRef = useRef(null);
	const executeScroll = () => scrollToRef(myRef);

	return (
		<div
			style={{
				scrollBehavior: 'smooth'
			}}
			className="main-container"
		>
			{/* Header */}
			<Header isAuth={isAuth} setIsAuth={setIsAuth} myRef={myRef} executeScroll={executeScroll} />
			<div
				style={{
					scrollBehavior: 'smooth',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					width: '100vw',
					height: '100vh',
					backgroundSize: 'cover',
					maxHeight: 520,
					backgroundRepeat: 'no-repeat',
					backgroundImage: `url(${BACKGROUND_IMAGE})`
				}}
			>
				<h1 style={{ color: colors.white, fontSize: 25 }}>
					<Trans i18nKey="home.header"># The 1st Blockchain Medical Ecosystem</Trans>
				</h1>
				<h3 style={{ color: colors.white, fontSize: 16, marginBottom: 15 }}>
					<Trans i18nKey="home.subheader">All-in-one app solution to get your medical expenses covered</Trans>
				</h3>
				<Button
					onClick={executeScroll}
					buttonName={<Trans i18nKey="home.get-quote" />}
					className="quote-price-button"
				/>
			</div>

			<div className="side">
				<div ref={myRef} style={{ padding: '40px 60px', flex: 1, display: 'flex', ...styles }}>
					{child ? child() : null}
				</div>
			</div>
		</div>
	);
};

export default withTrans(MainContainer);
