'use strict';

/**
 * custom-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::custom-service.custom-service');
