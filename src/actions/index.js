import axios from 'axios';

const URL = "https://api.coinmarketcap.com/v1/ticker";

export function userlist(){
  const request = axios.get('https://api.coinmarketcap.com/v1/ticker/?limit=10')
  return{
    type: 'USER',
    payload: request
  }
}
//https://api.coinmarketcap.com/v1/ticker/bitcoin/
export function showdetails(id) {
  const request = axios.get(`${URL}/${id}/`);
  return {
    type: 'SHOWDETAILS',
    payload: request
  }
}