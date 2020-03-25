const crypto = require('crypto');
const connection = require('./../database/connection');
module.exports = {
    async create (req, res) {
        const { title, description, value } = req.body;
        const ong_id = req.headers.authorization;
    
        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id
        })
        res.json({ id });

    },
    
    async show (req, res) {
        const { page = 1 } = req.query;
        const [count] = await connection('incidents').count();
        const incidents = await connection('incidents')
        .limit(5)
        .offset((page - 1) * 5)
        .select('*');

        res.header('X-Total-Count', count['count(*)']);
        res.json(incidents);
    },
    
    async delete (req, res) {
        try {
            const { id } = req.params;
            const ong_id = req.headers.authorization;

            const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();

            if(incident.ong_id != ong_id) {
                return res.status(401).json({error: 'Operationm not permitted.'})
            }

            await connection('incidents').where('id', id).delete();

            res.status(204).send();
        } catch (error) {
            console.log(error);
            res.status(500).json({error: error.message});
        }
    },

}