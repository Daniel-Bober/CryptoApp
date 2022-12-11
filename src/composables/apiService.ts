import axios from "axios";
import {reactive} from "vue";


export const getCryptocurrencyListRequest = async () => {
    const response = (await axios.get('https://proxy.cryptoapp.workers.dev/?apiurl=https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=15', {
        headers: {
            'X-CMC_PRO_API_KEY': 'a0eeedd6-d4b6-406f-b362-9a31b8e6f7a2',
        },
    })).data.data;

    return reactive(response);
}