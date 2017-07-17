/**
 * Debt.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        name: { type: 'string', required: true },
        value: { type: 'float', required: true, min: 0 },
        status: { type: 'string', uppercase: true, enum: ['PAGO', 'PENDENTE', 'AGENDADO'] },
        //billing: { model: 'billingcycle' }
    }
};

