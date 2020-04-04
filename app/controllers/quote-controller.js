import QuoteService from "../services/quote-service.js";
import store from "../store.js";


function drawQuote() {
  document.getElementById('quote').innerHTML = store.State.quote.Template
  console.log("THE quote SAYS:", store.State.quote);
}
export default class QuoteController {
  constructor() {
    store.subscribe("quote", drawQuote);
    QuoteService.getQuote();
  }
}
