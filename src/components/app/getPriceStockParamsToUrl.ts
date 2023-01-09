import addQueryParamsToUrl from './addQueryParams';

function getPriceStockParamsToUrl(minValue: string, maxValue: string, isPrice: boolean) {
    const min = parseInt(minValue);
    const max = parseInt(maxValue);
    let keyParam: string;
    if (isPrice) {
        keyParam = 'price';
    } else {
        keyParam = 'stock';
    }
    const valueParam = `${minValue}↕${maxValue}`;
    console.log(valueParam);
    addQueryParamsToUrl(valueParam, keyParam);
}

export default getPriceStockParamsToUrl;
