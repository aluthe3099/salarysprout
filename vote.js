"use strict";

const token = "Your algod API token";
const server = "http://127.0.0.1";
const port = 8080;
var myAddress = "WTPU6CCKP5PUI73JDJYTQEVPQLAKYTCPKHYD6Y6ZM5AOWMYADVUJZO6WVU";

var map1 = new Map();
function updateVotes(key) {
  if(!map1.has(key))
  {
    map1.set(key, 1);
  }
  else {
    map1.set(key, map1.get(key)+1);
  }
  console.log("the key: " + key + " has " +  map1.get(key) + " votes");
}

function vote(){
  //this is all for creating a wallet
  var keys = algosdk.generateAccount();
  var m = algosdk.secretKeyToMnemonic(keys.sk);
  console.log("keys: " + keys);
  console.log("m: " + m);
  var txn = {
    "to": myAddress,
    "fee": 10,
    "amount": 847,
    "firstRound": 51,//51
    "lastRound": 61,//61
    "genesisID": "devnet-v33.0",
    "genesisHash": btoa("JgsgCaCTqIaLeVhyV6XlRu3n7Rfk2FxMeK+wRSaQ7dI="),
    "closeRemainderTo": "IDUTJEUIEVSMXTU4LGTJWZ2UE2E6TIODUKU6UW3FU3UKIQQ77RLUBBBFLA",

    "note": new Uint8Array("bob") //need to implement the user message
  };
  var signedTxn = algosdk.signTransaction(txn, keys.sk);
  console.log(signedTxn);
  updateVotes(txn.note);

  let algodclient = algosdk.Algod(token, server, port);
  algosdk.sendRawTransaction(signedTxn.blob);
}
 //algod.sendRawTransaction();
