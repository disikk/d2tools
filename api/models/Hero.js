/**
 * Hero.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {
      type: 'string',
      required: true,
      unique: true
    },
    description: {
      type: 'string',
      required: false
    },
    primaryCharacteristic: {
      type: 'string',
      enum: ['str', 'agi', 'int'],
      required: true
    },
    skills: {
      collection: 'skill',
      via: 'owner'
    }
  }
};

