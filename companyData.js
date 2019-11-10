var myAddress = "WTPU6CCKP5PUI73JDJYTQEVPQLAKYTCPKHYD6Y6ZM5AOWMYADVUJZO6WVU"; //maybe use a diff address for this purpose

var map2 = new Map();
function companyData(){
  //this is all for creating a wallet
  var keys = algosdk.generateAccount();
  var m = algosdk.secretKeyToMnemonic(keys.sk);
  console.log("keys: " + keys);
  console.log("m: " + m);
  var result = position + ", " + salary + ", and " + company + ".";
  console.log(result);
  var txn = {
    "to": myAddress,
    "fee": 10,
    "amount": 847,
    "firstRound": 51,//51
    "lastRound": 61,//61
    "genesisID": "devnet-v33.0",
    "genesisHash": btoa("JgsgCaCTqIaLeVhyV6XlRu3n7Rfk2FxMeK+wRSaQ7dI="),
    "closeRemainderTo": "IDUTJEUIEVSMXTU4LGTJWZ2UE2E6TIODUKU6UW3FU3UKIQQ77RLUBBBFLA",

    "note": new Uint8Array(result) //need to implement the user message
    //concatenate string based on commas or something
  };
  var signedTxn = algosdk.signTransaction(txn, keys.sk);

  let algodclient = algosdk.Algod(token, server, port);
  algosdk.sendRawTransaction(signedTxn.blob);
}
