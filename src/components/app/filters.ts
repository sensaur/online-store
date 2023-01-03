import productData from '../../productList';
import FilterCheckboxList from './FilterCheckboxList';

const  FiltersList = () => {

    const arrayDataCategory = Array.from(new Set(productData.map((e) => e.category)));
    const filterCategoryBlock = document.querySelector('.filter__list_category');

    if (filterCategoryBlock instanceof HTMLElement) {
        const filterCategory = new FilterCheckboxList(filterCategoryBlock, arrayDataCategory);
        filterCategory.drawFilterList();
    }

    const arrayDataBrand = Array.from(new Set(productData.map((e) => e.brand)));;
    const filterBrandBlock = document.querySelector('.filter__list_brand');
    
    if (filterBrandBlock instanceof HTMLElement) {
        const filterBrand = new FilterCheckboxList(filterBrandBlock, arrayDataBrand);
        filterBrand.drawFilterList();
    }

}

export default FiltersList;

