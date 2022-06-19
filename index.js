import card from './components/card.js';
import spinner from './components/spinner.js';

const $ = (selector) => document.querySelector(selector);

const dollarApiUrl =
	'https://www.dolarsi.com/api/api.php?type=valoresprincipales';

const getApiData = async (url) => {
	const response = await fetch(url);
	const data = await response.json();
    return data
};

const card = $('#card');
const spinner = $('#spinner');
spinner.innerHTML = spinner();
let cards = '';

(async () => {
	const data = await getApiData(dollarApiUrl);
	for (const result of data) {
		const { compra, nombre, variacion, venta } = result.casa;
        if (nombre === 'Dolar') continue
        if (nombre === 'Argentina') continue
        if (nombre === 'Dolar Soja') continue

		cards += card({
			name: nombre,
			buyPrice: compra,
			sellPrice: venta,
			variation: variacion,
		});
	}
	card.innerHTML = cards;
    spinner.innerHTML = ''
})();