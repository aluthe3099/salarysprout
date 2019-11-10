"use strict";

const algod_address = "http://hackathon.algodev.network";
  const token = "ef920e2e7e002953f4b29a8af720efe8e4ecc75ff102b165e0472834b25832c1";
  const algod_client = new algosdk.Algod(token, algod_address, "9100");
  (async () => {
    console.log(await algod_client.status());
  })().catch(e => {
      console.log(e);
  });
const server = "http://127.0.0.1";
const port = 8080;
var myAddress = "WTP  U6CCKP5PUI73JDJYTQEVPQLAKYTCPKHYD6Y6ZM5AOWMYADVUJZO6WVU";//you need to put the address here

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
function whoGetsRaise()
{
  var hasMostVotes = "";
  var highestValue = -1;
  for (const k of map1.values())
  {
    if((next = k.get())>highestValue)
    {
      hasMostVotes = map1.get(k);
      highestValue = next;
    }
  }
  return hasMostVotes;
  console.log(map1.getKey(hasMostVotes) + " has " + map1.get(highestValue));
}
 //algod.sendRawTransaction();
