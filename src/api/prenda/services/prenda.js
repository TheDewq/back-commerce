'use strict';

/**
 * prenda service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::prenda.prenda');
