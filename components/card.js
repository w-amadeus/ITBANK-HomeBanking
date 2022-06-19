const card = ({ image, name, buyPrice, sellPrice, variation }) => {
    const date = new Date();
    let dolarVariation = ''
    if (variation !== undefined) {
        dolarVariation = `${variation}%`;
    } else {
        dolarVariation = 'No hay datos'
    }
	const template = `
    <div class="bg-primary bg-opacity-25 p-4 mb-2 w-50 h-60 container-fluid border ">
                <div class="row">
                    <img src="${image}" alt="">
                    <p class="fw-bolder text-info bg-dark text-center">${name}</p>
                    <p class="fw-bold border text-primary fs-4 bg-opacity-25 text-center text-opacity-70">Para la compra ${buyPrice}
                    </p>
                    <p class="fw-bold border text-primary fs-4 bg-opacity-25 text-center text-opacity-70">Para la venta ${sellPrice}</p>
                    <p class="fw-bold border text-primary fs-4 bg-opacity-25 text-center text-opacity-70">Variacion ${dolarVariation}</p>
                </div>
            </div>
    `;

	return template;
};
export default card;

