import productData from "../../productList";
import drawPageWithSearchParam from "./drawPageWithSearchParam";




function addQueryParamsToUrl (valueParam : string, keyParam: string) {
    const currentUrl = new URL(window.location.href);
    let objectFromCurrenQueryParams: {[key: string]: string[]} = {};
    const searchKey = encodeURIComponent(keyParam);
    const searchValue = encodeURIComponent(valueParam);
    if (currentUrl.search){
        const currentQueryParamsString = decodeURIComponent(currentUrl.search).slice(1).split('&');
        const arFromCurrentQueryParams = currentQueryParamsString.map((e) =>{return e.split('=')});
        objectFromCurrenQueryParams = arFromCurrentQueryParams.reduce((obj: {[key: string]:string[]},  e)=>{ obj[e[0]] = e[1].split('↕'); return obj}, {});
        
        if (objectFromCurrenQueryParams[searchKey]){
            if (!objectFromCurrenQueryParams[searchKey].includes(searchValue)){
                objectFromCurrenQueryParams[searchKey].push(searchValue);
            } 
        } else {
            objectFromCurrenQueryParams[searchKey] =[searchValue];
        }
    } else {
        objectFromCurrenQueryParams[searchKey] =[searchValue];
    }

    const arrWithNewQueryParams = Object.entries(objectFromCurrenQueryParams);
    const stringWithNewQueryParams = arrWithNewQueryParams.reduce((res, e) => res + `${encodeURIComponent(e[0])}=${encodeURIComponent(e[1].join('↕'))}&`, '').slice(0, -1);


    //const newParams = new URLSearchParams(Object.entries(queryParams));
   // const newUrl = new URL(`${currentUrl.origin}${currentUrl.pathname}?${stringWithNewQueryParams}`);
   window.location.search = `?${stringWithNewQueryParams}`;
   drawPageWithSearchParam();
}

export default addQueryParamsToUrl;
