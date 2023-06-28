'use strict';

/**
 * enterprise-service router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::enterprise-service.enterprise-service');
