import axios from "axios";
import {reactive} from "vue";

const apiKey = {
    'X-CMC_PRO_API_KEY': 'a0eeedd6-d4b6-406f-b362-9a31b8e6f7a2',
}

export const getCryptocurrencyListRequest = async () => {
    const response = (await axios.get('https://proxy.cryptoapp.workers.dev/?apiurl=https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=10', {
        headers: apiKey,
    })).data.data;

    return reactive(response);
}

export const getCryptocurrencyLogoListRequest = async (ids: Array<number>) => {
    const idsParam = ids.join(',');

    const response = (await axios.get('https://proxy.cryptoapp.workers.dev/?apiurl=https://pro-api.coinmarketcap.com/v2/cryptocurrency/info?id=' + idsParam, {
        headers: apiKey,
    })).data.data;

    return reactive(response);
}