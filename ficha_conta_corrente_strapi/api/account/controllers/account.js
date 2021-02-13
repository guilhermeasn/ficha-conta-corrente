'use strict';
const { sanitizeEntity } = require('strapi-utils');
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {

    async find(ctx) {

        let accounts = ctx.query._q
            ? await strapi.services.account.search(ctx.query)
            : await strapi.services.account.find(ctx.query);

        let inputs = await strapi.services.input.find()

        return accounts.map(account => {
            account.amount = 0;
            account.last_input = account.updated_at;
            inputs.forEach(input => {
                if(input.account.id = account.id) {
                    account.amount += input.Credit || 0;
                    account.amount -= input.Debit  || 0;
                    account.last_input = input.updated_at;
                }
            });
            return sanitizeEntity(account, { model: strapi.models.account })
        });
        
    }

};
