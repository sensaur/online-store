import { IproductItem } from "./IproductItem";
import ISearchParam from "./ISearchParam";

function getItemsSorted(sortName: string, filteredItemsTotal: IproductItem[]) {
    console.log(sortName)
    switch(sortName){
        case 'price-ASC':
            return filteredItemsTotal.sort((a, b) => a.price - b.price);
        case 'price-DESC':
            return filteredItemsTotal.sort((a, b) => b.price - a.price);;
        case 'rating-ASC':
            return filteredItemsTotal.sort((a, b) => a.rating - b.rating);
        case 'rating-DESC':
            return filteredItemsTotal.sort((a, b) => b.rating - a.rating);;
    }  
}

export default getItemsSorted;


