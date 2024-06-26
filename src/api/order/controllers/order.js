'use strict';

/**
 * order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order',()=>({
    async paymentOrder(context){
        context.body = "no mms wey"
    }
}));
