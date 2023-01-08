import ISearchParam from './ISearchParam';
import productData from '../../productList';
import getItemsFiltered from './getItemsFiltered';
import getCheckboxChecked from './getCheckboxChecked';
import { IproductItem } from './IproductItem';
import filtersList from './filters';


function drawPageWithSearchParam() {
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
    objectFromCurrenQueryParams.big ? null : (objectFromCurrenQueryParams.big = 'true');
    console.log('objectFromCurrenQueryParams111', objectFromCurrenQueryParams);
    const filteredItemsTotal =  getItemsFiltered (objectFromCurrenQueryParams); 
    filtersList(filteredItemsTotal);
    getCheckboxChecked(objectFromCurrenQueryParams.category);
    getCheckboxChecked(objectFromCurrenQueryParams.brand);
   
}





function getNumberFoundItems (filteredItemsTotal: IproductItem[]){
    const arrayCategoryFound: string[] = filteredItemsTotal.map((e) => e.category);
    const arrayBrandFound: string[] = filteredItemsTotal.map((e) => e.category);
}

export default drawPageWithSearchParam;
