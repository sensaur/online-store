import productData from "../../productList";
import { queryParams} from "../..";



function addQueryParamsToUrl (filterItemName : string, filterBlockName: string) {
    const currentUrl = new URL(window.location.href);
    const currentQueryParamsString = decodeURIComponent(currentUrl.search).slice(1).split('&');
    const arFromCurrentQueryParams = <[string, string[]]>currentQueryParamsString.map((e) =>{return e.split('=')});
    const objectFromCurrenQueryParams: {[key: string]: string[]} = arFromCurrentQueryParams.reduce((obj: {[key: string]:string[]},  e)=>{ obj[e[0]] = e[1].split('↕'); return obj}, {});
    if (objectFromCurrenQueryParams[filterBlockName]){
       const previousParam = objectFromCurrenQueryParams[filterBlockName];
       objectFromCurrenQueryParams[filterBlockName].push(filterItemName);
    } else {
        objectFromCurrenQueryParams[filterBlockName] =[filterItemName];
    }
    const arrWithNewQueryParams = Object.entries(objectFromCurrenQueryParams);
    const stringWithNewQueryParams = arrWithNewQueryParams.reduce((res, e) => res + `${encodeURIComponent(e[0])}=${encodeURIComponent(e[1].join('↕'))}&`, '').slice(0, -1);
    

    //const newParams = new URLSearchParams(Object.entries(queryParams));
    const newUrl = new URL(`${currentUrl.origin}${currentUrl.pathname}?${stringWithNewQueryParams}`);
    window.location.search = `?${stringWithNewQueryParams}`;

}

export default addQueryParamsToUrl;
