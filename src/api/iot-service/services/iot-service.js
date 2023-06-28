'use strict';

/**
 * iot-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::iot-service.iot-service');
