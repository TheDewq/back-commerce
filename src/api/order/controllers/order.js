'use strict';

/**
 * order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order',()=>({
    async newOrder(ctx){
        // @ts-ignore
        const {order_type} = ctx.request.body;

        if(order_type == "cod"){ //cod == cash on delivery
            cod_order(ctx)
        }else if(order_type == "prepay"){// prepay == prepayment
            prepay_order(ctx)
        }else{
            ctx.badRequest("invalid type xd")
        }

    }

    
}));

function cod_order(ctx){
    ctx.body = "listo";
}

function prepay_order(ctx){
    ctx.body = "listones";
}
