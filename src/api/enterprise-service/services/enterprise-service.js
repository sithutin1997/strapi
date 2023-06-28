'use strict';

/**
 * enterprise-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::enterprise-service.enterprise-service');
