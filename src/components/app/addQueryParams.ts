// import productData from '../../productList';
import ISearchParam from './ISearchParam';
import getCurrentParamsFromUrl from './getCurrentParamsFromURL';

function addQueryParamsToUrl(valueParam: string, keyParam: string) {
    let objectFromCurrenQueryParams: ISearchParam = {};
    const currentUrl = window.location.href;
    const pathUrl = window.location.pathname;

    if (currentUrl !== pathUrl) {
        objectFromCurrenQueryParams = getCurrentParamsFromUrl();
    }

    const searchKey: string = encodeURIComponent(keyParam);
    let searchValue: string;

    if (searchKey === 'stock' || searchKey === 'price' || searchKey === 'sort') {
        searchValue = valueParam;
        objectFromCurrenQueryParams[searchKey] = [searchValue];
    } else if (searchKey === 'brand' || searchKey === 'category') {
        const arrayPrevious = objectFromCurrenQueryParams[searchKey];
        searchValue = encodeURIComponent(valueParam);
        if (arrayPrevious) {
            arrayPrevious.push(searchValue);
            objectFromCurrenQueryParams[searchKey] = arrayPrevious;
        } else {
            objectFromCurrenQueryParams[searchKey] = [searchValue];
        }
    } else if (searchKey === 'big') {
        searchValue = valueParam;
        objectFromCurrenQueryParams[searchKey] = [searchValue];
    }

    window.location.search = `?${getNewUrlWithAllParams(objectFromCurrenQueryParams)}`;
}

function getNewUrlWithAllParams(objectFromCurrenQueryParams: ISearchParam) {
    const arrWithNewQueryParams = Object.entries(objectFromCurrenQueryParams);
    console.log(objectFromCurrenQueryParams);
    const stringWithNewQueryParams = arrWithNewQueryParams
        .reduce((res, e) => {
            if (e[0]) {
                if (typeof e[1] === 'string') {
                    res += `${encodeURIComponent(e[0])}=${encodeURIComponent(e[1])}&`;
                } else {
                    res += `${encodeURIComponent(e[0])}=${encodeURIComponent(e[1].join('↕'))}&`;
                }
            }
            return res;
        }, '')
        .slice(0, -1);
    return stringWithNewQueryParams;
}

export default addQueryParamsToUrl;
