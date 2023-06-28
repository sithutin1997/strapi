'use strict';

/**
 * custom-service controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::custom-service.custom-service');
