'use strict';

/**
 * iot-service controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::iot-service.iot-service');
