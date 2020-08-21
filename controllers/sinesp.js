const sinesp = require('sinesp-api');

module.exports = {
    async check_sinesp (req, res){
        const { placa } = req.body;

        if(!module.exports.validateFormat(placa)){
            return res.json({'Erro': 'Placa inválida'});
        }
        
        sinesp.search(placa).then(data => {
            res.send(data);
        }).catch(err => {
            res.json({'Erro': 'Ocorreu um erro. Tente novamente'});
        })
    },

    validateFormat(placa){
        const regexPlaca = /^[a-zA-Z]{3}[0-9]{4}$/;
        const regexPlacaMercosulCarro = /^[a-zA-Z]{3}[0-9]{1}[a-zA-Z]{1}[0-9]{2}$/;       
        const regexPlacaMercosulMoto = /^[a-zA-Z]{3}[0-9]{2}[a-zA-Z]{1}[0-9]{1}$/;

        return regexPlaca.test(placa) || regexPlacaMercosulCarro.test(placa) || regexPlacaMercosulMoto.test(placa);
    }
}