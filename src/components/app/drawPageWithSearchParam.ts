import ISearchParam from './ISearchParam';
import productData from '../../productList';
import getItemsFiltered from './getItemsFiltered';


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
    getCheckboxChecked(objectFromCurrenQueryParams.category);
    getCheckboxChecked(objectFromCurrenQueryParams.brand);
    getItemsFiltered(objectFromCurrenQueryParams);
    
}

function getCheckboxChecked(blockCheckboxName: string[] | undefined) {
    if (blockCheckboxName) {
        blockCheckboxName.forEach((e) => {
            const checkbox = document.getElementById(e);
            if (checkbox instanceof HTMLInputElement) {
                checkbox.checked = true;
            }
        });
    }
}



function getNumberFound (blockCheckboxName: string[] | undefined){
    if (blockCheckboxName) {
        let counter = 0;
        productData.filter((e) => {if (blockCheckboxName.includes(e.category)){
            return e
        }});
        return counter;
    }
}

export default drawPageWithSearchParam;
