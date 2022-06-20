const card = ({ image, name, buyPrice, sellPrice, variation }) => {
    const date = new Date();
    let dolarVariation = ''
    if (variation !== undefined) {
        dolarVariation = `${variation}%`;
    } else {
        dolarVariation = 'No hay datos'
    }
	const template = `
    <div class="row border-dolar my-0 py-1 mx-auto">
        <div class="col-3 img-center py-0 pe-1 d-flex align-items-center">
            <img src="https://i.ibb.co/jMg9Tw9/png-transparent-dollar-sign-illustration-united-states-dollar-icon-design-icon-dollar-sign-text-logo.png" class="img-dolar rounded-5 p-0">
        </div>
        <div class="col-9">
            <div class="row px-2">
                <div class="col-6 col-sm-3 datos px-0 fw-bold text-dolar d-flex align-items-center"> ${name} </div>
                <div class="col-6 col-sm-3 datos px-0 fw-bold text-dolar text-end"> Compra: <br> ${buyPrice} </div>
                <div class="col-6 col-sm-3 datos px-0 fw-bold text-dolar"> Var: <br> ${dolarVariation} </div>
                <div class="col-6 col-sm-3 datos px-0 fw-bold text-dolar text-end"> Venta: <br> ${sellPrice} </div>
            </div>
        </div>
    </div>
    `;

	return template;
};
export default card;

