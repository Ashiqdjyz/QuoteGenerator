import axios from "axios";
const BASE_URL = 'https://quotes15.p.rapidapi.com/quotes/random/'

const options = {
  method: 'GET',
  url: BASE_URL,
  headers: {
    'X-RapidAPI-Key': '931d187a2cmshb03fb063350d037p1d0e09jsn31dfc2919a9e',
    'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
  }
};

export const FetchFromAPI =async()=>{
   const data = await axios.get(BASE_URL,options)
   return data
     
}