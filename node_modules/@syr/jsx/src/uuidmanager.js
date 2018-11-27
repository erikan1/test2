let uuids = {};

function isUniqueUUID(uuid) {
  return !(uuids[uuid] && uuids[uuid] == 'used');
}

function part() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

function generateUUID() {
  let uuid = part();
  return uuid;
}

function generateUniqueUUID(partString) {
  
  let uuid = generateUUID();
  if(partString) {
    uuid = uuid + partString;
  }

  let uniqueUUID = isUniqueUUID(uuid);
  if(uniqueUUID) {
    uuids[uuid] = 'used';
    return uuid;
  } else {
    let newuuid = generateUniqueUUID(uuid);
    return newuuid;
  }
}

class uuidmanager {
  generate() {
    // ensure guids are unique and only increase the length if a collision has been found
    let uuid = generateUniqueUUID();
    return uuid;
  }
}

let UUIDManager = new uuidmanager();
export { UUIDManager };