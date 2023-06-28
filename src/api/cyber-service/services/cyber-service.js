'use strict';

/**
 * cyber-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cyber-service.cyber-service');
