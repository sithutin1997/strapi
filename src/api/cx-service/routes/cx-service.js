'use strict';

/**
 * cx-service router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::cx-service.cx-service');
