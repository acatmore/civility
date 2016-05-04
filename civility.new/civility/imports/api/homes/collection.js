// model file
import {Mongo} from 'meteor/mongo';

export const Homes = new Mongo.Collection('homes');

Homes.allow({
  insert(userId, home) {
    return userId && home.owner === userId;
  },
  update(userId, home, fields, modifier) {
    return userId && home.owner === userId;
  },
  remove(userId, home) {
    return userId && home.owner === userId;
  }
});