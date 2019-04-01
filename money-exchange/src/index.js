module.exports = function makeExchange(currency) {
  let result = {};
  if (currency > 10000){
    return {error: "You are rich, my friend! We don't have so much coins for exchange"};
  }
  else if (currency == 0) {
    return {};
  }
  else {
    let hqdnp = ["H", "Q", "D", "N", "P"];
    let arr = [50, 25, 10, 5, 1];
    for (let i = 0; i < arr.length; i++){
      if (Math.trunc(currency/arr[i]) > 0){
        result[hqdnp[i]] = Math.trunc(currency/arr[i]);
        currency -= arr[i] * Math.trunc(currency/arr[i]);
      }
    }
  }
  return result;
}
