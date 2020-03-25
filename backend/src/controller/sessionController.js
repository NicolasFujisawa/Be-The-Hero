const connection = require('../database/connection');

module.exports = {

    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;

        // criando id customizado
        const {id} = request.body;
    
        const ong = await connection('ong')
            .where('id', id)
            .select('name')
            .first();

        if(!ong) {
            return response.status(400).json({ error: 'No Ong found with this id.'});
        }
        return response.json(ong);
    }
}