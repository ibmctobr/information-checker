const request = require('request');

module.exports = {
    async check_boleto(req, response){
        const {boleto, valor} = req.body;
        let text;

        request.post(
            'https://www.crefisa.com.br/validadordeboletos/validar', 
            {
                form: {
                    boleto: boleto,
                    valor: valor
                }                    
            }, (err, res) => {
                text = JSON.parse(res.body).message;
                if(text.includes('<br>')){
                    text = text.replace('<br>', '');
                }
                
                return response.json({'text': text});
            }
        );
    }
}