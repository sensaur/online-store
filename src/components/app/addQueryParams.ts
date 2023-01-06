import productData from "../../productList";
import { queryParams} from "../..";

function addQueryParamsToUrl (filterItemName : string, filterBlockName: string) {
    queryParams[filterBlockName] = filterItemName; 
    setNewQueryToUrl(queryParams);
}

export default addQueryParamsToUrl;
