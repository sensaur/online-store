import drawPageWithSearchParam from './drawPageWithSearchParam';
import resetFilters from './resetFilters';

function removeQueryParamsFromUrl(valueParam: string, keyParam: string) {
    const currentUrl = new URL(window.location.href);
    let objectFromCurrenQueryParams: { [key: string]: string[] } = {};
    const searchKey = encodeURIComponent(keyParam);
    const searchValue = encodeURIComponent(valueParam);
    const currentQueryParamsString = decodeURIComponent(currentUrl.search).slice(1).split('&');
    const arFromCurrentQueryParams = currentQueryParamsString.map((e) => {
        return e.split('=');
    });
    objectFromCurrenQueryParams = arFromCurrentQueryParams.reduce((obj: { [key: string]: string[] }, e) => {
        obj[e[0]] = e[1].split('↕');
        return obj;
    }, {});
    objectFromCurrenQueryParams[searchKey] = objectFromCurrenQueryParams[searchKey].filter((e) => e !== searchValue);
    const arrWithNewQueryParams = Object.entries(objectFromCurrenQueryParams);
    const stringWithNewQueryParams = arrWithNewQueryParams
        .reduce((res, e) => {
            if (e[1].length !== 0) {
                res = res + `${encodeURIComponent(e[0])}=${encodeURIComponent(e[1].join('↕'))}&`;
            }
            return res;
        }, '')
        .slice(0, -1);
    //const newParams = new URLSearchParams(Object.entries(queryParams));
    // const newUrl = new URL(`${currentUrl.origin}${currentUrl.pathname}?${stringWithNewQueryParams}`);
    window.location.search = `?${stringWithNewQueryParams}`;
    drawPageWithSearchParam();
}

export default removeQueryParamsFromUrl;
