/**
 * BillingCycle.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

const Credit = require('./Credit');
const Debt = require('./Debt');

module.exports = {

    attributes: {
        name: { type: 'string', required: true },
        month: { type: 'string', required: true, min: 1, max: 12 },
        year: { type: 'int', required: true, min: 1970, max: 2100 },
        /*credits: { type: 'array' },
        debts: { type: 'array' }*/
        credits: {
            collection: 'credit',
            via: 'billing'
        },
        debts: {
            collection: 'debt',
            via: 'billing'
        }
    }
};

