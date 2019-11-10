var map1 = new Map();
function updateVotes(key) {
  if(!map1.has(key))
  {
    map1.set(key, 1);
  }
  else {
    map1.set(key, map.get(key)+1);
  }
  console.log("the key: "key " has " map1.get(key) " votes");
}
