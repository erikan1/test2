'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var uuids = {};

function isUniqueUUID(uuid) {
  return !(uuids[uuid] && uuids[uuid] == 'used');
}

function part() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

function generateUUID() {
  var uuid = part();
  return uuid;
}

function generateUniqueUUID(partString) {

  var uuid = generateUUID();
  if (partString) {
    uuid = uuid + partString;
  }

  var uniqueUUID = isUniqueUUID(uuid);
  if (uniqueUUID) {
    uuids[uuid] = 'used';
    return uuid;
  } else {
    var newuuid = generateUniqueUUID(uuid);
    return newuuid;
  }
}

var uuidmanager = function () {
  function uuidmanager() {
    _classCallCheck(this, uuidmanager);
  }

  _createClass(uuidmanager, [{
    key: 'generate',
    value: function generate() {
      // ensure guids are unique and only increase the length if a collision has been found
      var uuid = generateUniqueUUID();
      return uuid;
    }
  }]);

  return uuidmanager;
}();

var UUIDManager = new uuidmanager();
exports.UUIDManager = UUIDManager;