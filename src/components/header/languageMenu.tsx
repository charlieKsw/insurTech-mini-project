import React, { useState } from 'react';
import ReactFlagsSelect from 'react-flags-select';
import i18n from 'i18next';
import { Trans } from 'react-i18next';

const LanguageMenu = (props: any) => {
	const [ selected, setSelected ] = useState('');
	const [ value, setValues ] = useState({
		language: 'en'
	});

	function handleChange(country: any) {
		let lang: string = 'en';

		switch (country) {
			case 'US':
				lang = 'en';
				break;
			case 'CN':
				lang = 'zh';
				break;
			default:
				lang = 'en';
				break;
		}

		setValues((oldValues) => ({
			...oldValues,
			language: lang || value['language']
		}));

		setSelected(country);
		i18n.changeLanguage(lang);
	}

	return (
		<ReactFlagsSelect
			defaultCountry="US"
			selected={selected}
			countries={[ 'US', 'CN' ]}
			customLabels={{ US: 'English', CN: '繁体中文' }}
			placeholder={<Trans i18nKey="home.select-country">Select Country</Trans>}
			onSelect={(country: any) => handleChange(country)}
		/>
	);
};

export default LanguageMenu;
