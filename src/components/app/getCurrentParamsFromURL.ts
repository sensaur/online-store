import ISearchParam from "./ISearchParam";
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

export default getCurrentParamsFromUrl;
