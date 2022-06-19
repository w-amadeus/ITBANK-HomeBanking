const card= ({image,name,buyPrice,sellPrice,variation}) => {
    const date = new Date();
    let dolrVariation= ''
    if (variation != undefined) {
        dolarVariation= `${variation}%`;
    }        else{
            dolarVariation= 'no hay datos'
        }

    const template = `
    
    
    
    `;
    return template;

        
    }
    export default card;
