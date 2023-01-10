import productData from '../../productList';
import ISearchParam from './ISearchParam';
import { IproductItem } from './IproductItem';
import addQueryParamsToUrl from './addQueryParams';
import drawProductItems from './drawProductItems';

function getItemsFiltered(objectFromCurrenQueryParams: ISearchParam) {
    if (productData) {
        productData.filter((e) => {
            if (objectFromCurrenQueryParams.category) {
                objectFromCurrenQueryParams.category.includes(e.category);
            }
        });
    }

    try {
        //filtering items
        const filterByBrand = () => {
            if (!objectFromCurrenQueryParams.brand) {
                return productData;
            } else {
                return productData.filter((el) => {
                    if (objectFromCurrenQueryParams.brand) {
                        if (objectFromCurrenQueryParams.brand.includes(encodeURI(el.brand))) {
                            return el;
                        }
                    }
                });
            }
        };
        const filteredByBrand = filterByBrand();
        // console.log('filteredByBrand', filteredByBrand);

        const filterByCategory = () => {
            if (!objectFromCurrenQueryParams.category) {
                return filteredByBrand;
            } else {
                return filteredByBrand.filter((el) => {
                    if (objectFromCurrenQueryParams.category) {
                        if (objectFromCurrenQueryParams.category.includes(el.category.toLowerCase())) {
                            return el;
                        }
                    }
                });
            }
        };

        const filteredByCategory = filterByCategory();

        const filterByPrice = () => {
            if (!objectFromCurrenQueryParams.price) {
                return filteredByCategory;
            } else {
                const min = parseInt(objectFromCurrenQueryParams.price[0]);
                const max = parseInt(objectFromCurrenQueryParams.price[1]);
                return filteredByCategory.filter((el) => el.price >= min && el.price <= max);
            }
        };

        const filteredByPrice = filterByPrice();

        const filterByStock = () => {
            if (!objectFromCurrenQueryParams.stock) {
                return filteredByPrice;
            } else {
                const min = parseInt(objectFromCurrenQueryParams.stock[0]);
                const max = parseInt(objectFromCurrenQueryParams.stock[1]);
                return filteredByPrice.filter((el) => el.price >= min && el.price <= max);
            }
        };
        
        // getting result
        const filteredItemsTotal = filterByStock();

        // filtering
        // console.log('filteredItemsTotal=>', filteredItemsTotal);

        const sortByPriceASCResult = sortByPriceASC(filteredItemsTotal);
        // console.log('sortByPriceASCResult==>', sortByPriceASCResult);

        const sortByPriceDESCResult = [...filteredItemsTotal].sort((a, b) => b.price - a.price);
        // console.log('sortByPriceDESCResult==>', sortByPriceDESCResult);

        const sortByRatingASC = [...filteredItemsTotal].sort((a, b) => a.rating - b.rating);
        // console.log('sortByRatingASC==>', sortByRatingASC);

        const sortByRatingDESC = [...filteredItemsTotal].sort((a, b) => b.rating - a.rating);
        // console.log('sortByRatingDESC==>', sortByRatingDESC);

        // rendering filtered or card
        // console.log('111', objectFromCurrenQueryParams);
        let isBig: boolean;
         if (objectFromCurrenQueryParams.big && objectFromCurrenQueryParams?.big === 'true') {
            isBig = true;
        } else {
            isBig = false;
        }
      //  drawProductItems(filteredItemsTotal, isBig);
        return filteredItemsTotal;
    } catch (err) {
        console.log("Issues with Parsing URL Parameter's - " + err);
    }
}



function sortByPriceASC(arr: IproductItem[]) {
    return [...arr].sort((a: IproductItem, b: IproductItem) => a.price - b.price);
}

function sortByPriceDESC(arr: IproductItem[]) {
    return [...arr].sort((a: IproductItem, b: IproductItem) => b.price - a.price);
}

export default getItemsFiltered;
