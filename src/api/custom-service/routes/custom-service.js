'use strict';

/**
 * custom-service router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::custom-service.custom-service');
