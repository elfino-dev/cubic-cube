import * as CookieConsent from 'vanilla-cookieconsent';

const config: CookieConsent.CookieConsentConfig = {
	categories: {
		necessary: {
			enabled: true,
			readOnly: true
		},
		analytics: {
			autoClear: {
				cookies: [
					{
						name: /^_ga/ // regex: match all cookies starting with '_ga'
					},
					{
						name: '_gid' // string: exact cookie name
					}
				]
			},

			// https://cookieconsent.orestbida.com/reference/configuration-reference.html#category-services
			services: {
				ga: {
					label: 'Google Analytics',
					onAccept: () => {},
					onReject: () => {}
				},
				another: {
					label: 'Another service',
					onAccept: () => {},
					onReject: () => {}
				}
			}
		},
		ads: {}
	},

	onFirstConsent: ({ cookie }) => {
		console.log('onFirstConsent fired', cookie);
	},

	onConsent: ({ cookie }) => {
		console.log('onConsent fired!', cookie, CookieConsent.getUserPreferences());
	},

	onChange: ({ changedCategories, changedServices }) => {
		console.log('onChange fired!', changedCategories, changedServices);
	},

	onModalReady: ({ modalName }) => {
		console.log('ready:', modalName);
	},

	onModalShow: ({ modalName }) => {
		console.log('visible:', modalName);
	},

	onModalHide: ({ modalName }) => {
		console.log('hidden:', modalName);
	},

	guiOptions: {
		consentModal: {
			layout: 'box inline',
			position: 'bottom left',
			equalWeightButtons: true,
			flipButtons: false
		},
		preferencesModal: {
			layout: 'box',
			equalWeightButtons: true,
			flipButtons: false
		}
	},

	language: {
		default: 'de',
		translations: {
			en: {
				consentModal: {
					title: 'CubicCookies!',
					description:
						'Working hard? You need some cookies! Do you accept our cookies?',
					acceptAllBtn: 'Accept all',
					acceptNecessaryBtn: 'Reject all',
					showPreferencesBtn: 'Manage Individual preferences'
				},
				preferencesModal: {
					title: 'Manage cookie preferences',
					acceptAllBtn: 'Accept all',
					acceptNecessaryBtn: 'Reject all',
					savePreferencesBtn: 'Accept current selection',
					closeIconLabel: 'Close modal',
					sections: [
						{
							title: 'Your Privacy Choices',
							description: `In this panel you can express some preferences related to the processing of your personal information. You may review and change expressed choices at any time by resurfacing this panel via the provided link. To deny your consent to the specific processing activities described below, switch the toggles to off or use the “Reject all” button and confirm you want to save your choices.`
						},
						{
							title: 'Strictly Necessary',
							description:
								'These cookies are essential for the proper functioning of the website and cannot be disabled.',

							//this field will generate a toggle linked to the 'necessary' category
							linkedCategory: 'necessary'
						},
						{
							title: 'More information',
							description:
								'For any queries in relation to out cookie policy and your choices, please <a href="/kontakt#kontaktFrame">contact</a> us.'
						}
					]
				}
			},
			de: {
				consentModal: {
					title: 'CubicCookies!',
					description:
						'Wer hart arbeitet, braucht auch Cookies zur Stärkung. Cookies akzeptieren?',
					acceptAllBtn: 'Alle akzeptieren',
					acceptNecessaryBtn: 'Alle ablehnen',
					showPreferencesBtn: 'Cookie-Präferenzen einstellen'
				},
				preferencesModal: {
					title: 'Cookie-Präferenzen einstellen',
					acceptAllBtn: 'Alle akzeptieren',
					acceptNecessaryBtn: 'Alle ablehnen',
					savePreferencesBtn: 'Aktuelle Auswahl beibehalten',
					closeIconLabel: 'Close modal',
					sections: [
						{
							title: 'Ihre Privatsphären-Einstellungen',
							description: `In dieser übersicht können Sie die aktuellen Einstellungen einsehen und verwalten.`
						},
						{
							title: 'Essentiell wichtige Cookies.',
							description:
								'Diese Cookies sind essentiell wichtig für die Nutzung der Website - ohne diese kann die Website nicht benutzt werden.',

							//this field will generate a toggle linked to the 'necessary' category
							linkedCategory: 'necessary'
						},
						{
							title: 'Mehr Informationen',
							description:
								'Sie können gerne mit uns über unsere <a href="/kontakt#kontaktFrame">Kontaktseite</a> mit uns in Kontakt treten.'
						}
					]
				}
			}
		}
	}
};

export default config;
