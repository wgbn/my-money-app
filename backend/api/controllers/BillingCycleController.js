/**
 * BillingCycleController
 *
 * @description :: Server-side logic for managing Billingcycles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

const async = require('../../node_modules/sails/node_modules/async');

module.exports = {

    count(req, res) {

        BillingCycle.count( (err, value) => {
            if (err) res.badRequest(err)
            else res.json({value})
        })

    },

    summary(req, res) {

        async.parallel({
            credit: getCredit,
            debt: getDebt,
        }, (err, results) => {
            if (err) return res.negotiate(err);
            res.json({
                credit: results.credit,
                debt: results.debt,
            })
        })

        // credit
        function getCredit(cb) {
            Credit.find({}).sum('value')
                .exec((err, count) => cb(null, count[0] ? count[0].value : 0) )
        }

        function getDebt(cb) {
            Debt.find({}).sum('value')
                .exec((err, count) => cb(null, count[0] ? count[0].value : 0) )
        }

    }

}

