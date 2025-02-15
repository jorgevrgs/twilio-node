'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var _ = require('lodash');  /* jshint ignore:line */
var Domain = require('../base/Domain');  /* jshint ignore:line */
var V1 = require('./oauth/V1');  /* jshint ignore:line */


/* jshint ignore:start */
/**
 * Initialize oauth domain
 *
 * @constructor Twilio.Oauth
 *
 * @property {Twilio.Oauth.V1} v1 - v1 version
 * @property {Twilio.Oauth.V1.OauthList} oauth - oauth resource
 * @property {Twilio.Oauth.V1.OpenidDiscoveryList} openidDiscovery -
 *          openidDiscovery resource
 * @property {Twilio.Oauth.V1.TokenList} token - token resource
 * @property {Twilio.Oauth.V1.UserInfoList} userInfo - userInfo resource
 *
 * @param {Twilio} twilio - The twilio client
 */
/* jshint ignore:end */
function Oauth(twilio) {
  Domain.prototype.constructor.call(this, twilio, 'https://oauth.twilio.com');

  // Versions
  this._v1 = undefined;
}

_.extend(Oauth.prototype, Domain.prototype);
Oauth.prototype.constructor = Oauth;

Object.defineProperty(Oauth.prototype,
  'v1', {
    get: function() {
      this._v1 = this._v1 || new V1(this);
      return this._v1;
    }
});

Object.defineProperty(Oauth.prototype,
  'oauth', {
    get: function() {
      return this.v1.oauth;
    }
});

Object.defineProperty(Oauth.prototype,
  'openidDiscovery', {
    get: function() {
      return this.v1.openidDiscovery;
    }
});

Object.defineProperty(Oauth.prototype,
  'token', {
    get: function() {
      return this.v1.token;
    }
});

Object.defineProperty(Oauth.prototype,
  'userInfo', {
    get: function() {
      return this.v1.userInfo;
    }
});

module.exports = Oauth;
