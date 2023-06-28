'use strict';

/**
 * cx-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cx-service.cx-service');
