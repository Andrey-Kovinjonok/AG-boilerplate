export function fetchQuote(symbol) {
  // requestQuote(symbol);
  return fetch(`http://www.google.com/finance/info?q=${symbol}`)
  .then(req => req.json())
  .then(json => showCurrentQuote(symbol, json))
  .catch(error => ({error}))
}
