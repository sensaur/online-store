// import productData from '../../productList';
import ISearchParam from './ISearchParam';

function addQueryParamsToUrl(valueParam: string, keyParam: string) {
    let objectFromCurrenQueryParams: ISearchParam = {};
    const currentUrl = window.location.href;
    const pathUrl = window.location.pathname;

    if (currentUrl !== pathUrl) {
        objectFromCurrenQueryParams = getCurrentParamsFromUrl();
    }

    const searchKey: string = encodeURIComponent(keyParam);
    let searchValue: string;

    if (searchKey === 'stock' || searchKey === 'price') {
        searchValue = valueParam;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        objectFromCurrenQueryParams[searchKey] = [searchValue];
    } else {
        if (searchKey === 'category' || searchKey === 'brand') {
            searchValue = encodeURIComponent(valueParam);
            const arrPreviousValue = objectFromCurrenQueryParams[searchKey];
            if (arrPreviousValue) {
                arrPreviousValue.push(searchValue);
            } else {
                objectFromCurrenQueryParams[searchKey] = [searchValue];
            }
        }
    }

    // window.history.pushState(objectFromCurrenQueryParams, '', currentUrl);
    window.location.search = `?${getNewUrlWithAllParams(objectFromCurrenQueryParams)}`;
}

function getCurrentParamsFromUrl() {
    const currentUrl = new URL(window.location.href);
    let objectFromCurrenQueryParams: ISearchParam = {};
    const currentQueryParamsString = decodeURIComponent(currentUrl.search).slice(1).split('&');
    const arFromCurrentQueryParams = currentQueryParamsString.map((e) => {
        return e.split('=');
    });
    objectFromCurrenQueryParams = arFromCurrentQueryParams.reduce((obj: { [key: string]: string[] }, e) => {
        obj[e[0]] = e[1]?.split('↕');
        return obj;
    }, {});

    return objectFromCurrenQueryParams;
}

function getNewUrlWithAllParams(objectFromCurrenQueryParams: ISearchParam) {
    const arrWithNewQueryParams = Object.entries(objectFromCurrenQueryParams);
    console.log(objectFromCurrenQueryParams);
    const stringWithNewQueryParams = arrWithNewQueryParams
        .reduce((res, e) => {
            if (e[0]) {
                res += `${encodeURIComponent(e[0])}=${encodeURIComponent(e[1].join('↕'))}&`;
            }
            return res;
        }, '')
        .slice(0, -1);
    return stringWithNewQueryParams;
}

export default addQueryParamsToUrl;
