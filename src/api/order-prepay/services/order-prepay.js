'use strict';

/**
 * order-prepay service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::order-prepay.order-prepay');
