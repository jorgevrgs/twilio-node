'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Q = require('q');  /* jshint ignore:line */
var _ = require('lodash');  /* jshint ignore:line */
var util = require('util');  /* jshint ignore:line */
var Page = require('../../../../../base/Page');  /* jshint ignore:line */
var deserialize = require(
    '../../../../../base/deserialize');  /* jshint ignore:line */
var values = require('../../../../../base/values');  /* jshint ignore:line */

var UserDefinedMessageSubscriptionList;
var UserDefinedMessageSubscriptionPage;
var UserDefinedMessageSubscriptionInstance;
var UserDefinedMessageSubscriptionContext;

/* jshint ignore:start */
/**
 * Initialize the UserDefinedMessageSubscriptionList
 *
 * @constructor Twilio.Api.V2010.AccountContext.CallContext.UserDefinedMessageSubscriptionList
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {string} accountSid - Account SID.
 * @param {string} callSid - Call SID.
 */
/* jshint ignore:end */
UserDefinedMessageSubscriptionList = function
    UserDefinedMessageSubscriptionList(version, accountSid, callSid) {
  /* jshint ignore:start */
  /**
   * @function userDefinedMessageSubscriptions
   * @memberof Twilio.Api.V2010.AccountContext.CallContext#
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Api.V2010.AccountContext.CallContext.UserDefinedMessageSubscriptionContext}
   */
  /* jshint ignore:end */
  function UserDefinedMessageSubscriptionListInstance(sid) {
    return UserDefinedMessageSubscriptionListInstance.get(sid);
  }

  UserDefinedMessageSubscriptionListInstance._version = version;
  // Path Solution
  UserDefinedMessageSubscriptionListInstance._solution = {accountSid: accountSid, callSid: callSid};
  UserDefinedMessageSubscriptionListInstance._uri = `/Accounts/${accountSid}/Calls/${callSid}/UserDefinedMessageSubscriptions.json`;
  /* jshint ignore:start */
  /**
   * create a UserDefinedMessageSubscriptionInstance
   *
   * @function create
   * @memberof Twilio.Api.V2010.AccountContext.CallContext.UserDefinedMessageSubscriptionList#
   *
   * @param {object} opts - Options for request
   * @param {string} opts.callback -
   *          The URL we should call to send user defined messages.
   * @param {string} opts.method - HTTP method used with the callback.
   * @param {string} [opts.idempotencyKey] -
   *          A unique string value to identify API call. This should be a unique string value per API call and can be a randomly generated.
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed UserDefinedMessageSubscriptionInstance
   */
  /* jshint ignore:end */
  UserDefinedMessageSubscriptionListInstance.create = function create(opts,
      callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameter "opts" missing.');
    }
    if (_.isUndefined(opts['callback'])) {
      throw new Error('Required parameter "opts[\'callback\']" missing.');
    }
    if (_.isUndefined(opts['method'])) {
      throw new Error('Required parameter "opts[\'method\']" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({
      'Callback': _.get(opts, 'callback'),
      'Method': _.get(opts, 'method'),
      'IdempotencyKey': _.get(opts, 'idempotencyKey')
    });

    var promise = this._version.create({uri: this._uri, method: 'POST', data: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new UserDefinedMessageSubscriptionInstance(
        this._version,
        payload,
        this._solution.accountSid,
        this._solution.callSid,
        this._solution.sid
      ));
    }.bind(this));

    promise.catch(function(error) {
      deferred.reject(error);
    });

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    return deferred.promise;
  };

  /* jshint ignore:start */
  /**
   * Constructs a user_defined_message_subscription
   *
   * @function get
   * @memberof Twilio.Api.V2010.AccountContext.CallContext.UserDefinedMessageSubscriptionList#
   *
   * @param {string} sid - User Defined Message Subscription SID.
   *
   * @returns {Twilio.Api.V2010.AccountContext.CallContext.UserDefinedMessageSubscriptionContext}
   */
  /* jshint ignore:end */
  UserDefinedMessageSubscriptionListInstance.get = function get(sid) {
    return new UserDefinedMessageSubscriptionContext(
      this._version,
      this._solution.accountSid,
      this._solution.callSid,
      sid
    );
  };

  /* jshint ignore:start */
  /**
   * Provide a user-friendly representation
   *
   * @function toJSON
   * @memberof Twilio.Api.V2010.AccountContext.CallContext.UserDefinedMessageSubscriptionList#
   *
   * @returns Object
   */
  /* jshint ignore:end */
  UserDefinedMessageSubscriptionListInstance.toJSON = function toJSON() {
    return this._solution;
  };

  UserDefinedMessageSubscriptionListInstance[util.inspect.custom] = function
      inspect(depth, options) {
    return util.inspect(this.toJSON(), options);
  };

  return UserDefinedMessageSubscriptionListInstance;
};


/* jshint ignore:start */
/**
 * Initialize the UserDefinedMessageSubscriptionPage
 *
 * @constructor Twilio.Api.V2010.AccountContext.CallContext.UserDefinedMessageSubscriptionPage
 *
 * @param {V2010} version - Version of the resource
 * @param {Response<string>} response - Response from the API
 * @param {UserDefinedMessageSubscriptionSolution} solution - Path solution
 *
 * @returns UserDefinedMessageSubscriptionPage
 */
/* jshint ignore:end */
UserDefinedMessageSubscriptionPage = function
    UserDefinedMessageSubscriptionPage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(UserDefinedMessageSubscriptionPage.prototype, Page.prototype);
UserDefinedMessageSubscriptionPage.prototype.constructor = UserDefinedMessageSubscriptionPage;

/* jshint ignore:start */
/**
 * Build an instance of UserDefinedMessageSubscriptionInstance
 *
 * @function getInstance
 * @memberof Twilio.Api.V2010.AccountContext.CallContext.UserDefinedMessageSubscriptionPage#
 *
 * @param {UserDefinedMessageSubscriptionPayload} payload -
 *          Payload response from the API
 *
 * @returns UserDefinedMessageSubscriptionInstance
 */
/* jshint ignore:end */
UserDefinedMessageSubscriptionPage.prototype.getInstance = function
    getInstance(payload) {
  return new UserDefinedMessageSubscriptionInstance(
    this._version,
    payload,
    this._solution.accountSid,
    this._solution.callSid
  );
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Api.V2010.AccountContext.CallContext.UserDefinedMessageSubscriptionPage#
 *
 * @returns Object
 */
/* jshint ignore:end */
UserDefinedMessageSubscriptionPage.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

UserDefinedMessageSubscriptionPage.prototype[util.inspect.custom] = function
    inspect(depth, options) {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the UserDefinedMessageSubscriptionContext
 *
 * @constructor Twilio.Api.V2010.AccountContext.CallContext.UserDefinedMessageSubscriptionInstance
 *
 * @property {string} accountSid - Account SID.
 * @property {string} callSid - Call SID.
 * @property {string} sid - User Defined Message Subscription SID.
 * @property {Date} dateCreated -
 *          The date this User Defined Message Subscription was created.
 * @property {string} uri -
 *          The URI of the User Defined Message Subscription Resource, relative to `https://api.twilio.com`.
 *
 * @param {V2010} version - Version of the resource
 * @param {UserDefinedMessageSubscriptionPayload} payload - The instance payload
 * @param {sid} accountSid - Account SID.
 * @param {sid} callSid - Call SID.
 * @param {sid} sid - User Defined Message Subscription SID.
 */
/* jshint ignore:end */
UserDefinedMessageSubscriptionInstance = function
    UserDefinedMessageSubscriptionInstance(version, payload, accountSid,
    callSid, sid) {
  this._version = version;

  // Marshaled Properties
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.callSid = payload.call_sid; // jshint ignore:line
  this.sid = payload.sid; // jshint ignore:line
  this.dateCreated = deserialize.rfc2822DateTime(payload.date_created); // jshint ignore:line
  this.uri = payload.uri; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {accountSid: accountSid, callSid: callSid, sid: sid || this.sid, };
};

Object.defineProperty(UserDefinedMessageSubscriptionInstance.prototype,
  '_proxy', {
    get: function() {
      if (!this._context) {
        this._context = new UserDefinedMessageSubscriptionContext(
          this._version,
          this._solution.accountSid,
          this._solution.callSid,
          this._solution.sid
        );
      }

      return this._context;
    }
});

/* jshint ignore:start */
/**
 * remove a UserDefinedMessageSubscriptionInstance
 *
 * @function remove
 * @memberof Twilio.Api.V2010.AccountContext.CallContext.UserDefinedMessageSubscriptionInstance#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed UserDefinedMessageSubscriptionInstance
 */
/* jshint ignore:end */
UserDefinedMessageSubscriptionInstance.prototype.remove = function
    remove(callback) {
  return this._proxy.remove(callback);
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Api.V2010.AccountContext.CallContext.UserDefinedMessageSubscriptionInstance#
 *
 * @returns Object
 */
/* jshint ignore:end */
UserDefinedMessageSubscriptionInstance.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

UserDefinedMessageSubscriptionInstance.prototype[util.inspect.custom] = function
    inspect(depth, options) {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the UserDefinedMessageSubscriptionContext
 *
 * @constructor Twilio.Api.V2010.AccountContext.CallContext.UserDefinedMessageSubscriptionContext
 *
 * @param {V2010} version - Version of the resource
 * @param {sid} accountSid - Account SID.
 * @param {sid} callSid - Call SID.
 * @param {sid} sid - User Defined Message Subscription SID.
 */
/* jshint ignore:end */
UserDefinedMessageSubscriptionContext = function
    UserDefinedMessageSubscriptionContext(version, accountSid, callSid, sid) {
  this._version = version;

  // Path Solution
  this._solution = {accountSid: accountSid, callSid: callSid, sid: sid, };
  this._uri = `/Accounts/${accountSid}/Calls/${callSid}/UserDefinedMessageSubscriptions/${sid}.json`;
};

/* jshint ignore:start */
/**
 * remove a UserDefinedMessageSubscriptionInstance
 *
 * @function remove
 * @memberof Twilio.Api.V2010.AccountContext.CallContext.UserDefinedMessageSubscriptionContext#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed UserDefinedMessageSubscriptionInstance
 */
/* jshint ignore:end */
UserDefinedMessageSubscriptionContext.prototype.remove = function
    remove(callback) {
  var deferred = Q.defer();
  var promise = this._version.remove({uri: this._uri, method: 'DELETE'});

  promise = promise.then(function(payload) {
    deferred.resolve(payload);
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Api.V2010.AccountContext.CallContext.UserDefinedMessageSubscriptionContext#
 *
 * @returns Object
 */
/* jshint ignore:end */
UserDefinedMessageSubscriptionContext.prototype.toJSON = function toJSON() {
  return this._solution;
};

UserDefinedMessageSubscriptionContext.prototype[util.inspect.custom] = function
    inspect(depth, options) {
  return util.inspect(this.toJSON(), options);
};

module.exports = {
  UserDefinedMessageSubscriptionList: UserDefinedMessageSubscriptionList,
  UserDefinedMessageSubscriptionPage: UserDefinedMessageSubscriptionPage,
  UserDefinedMessageSubscriptionInstance: UserDefinedMessageSubscriptionInstance,
  UserDefinedMessageSubscriptionContext: UserDefinedMessageSubscriptionContext
};
