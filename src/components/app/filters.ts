import productData from '../../productList';
import FilterCheckboxList from './FilterCheckboxList';

const  FiltersList = () => {

    const arrayDataCategory = productData.map((e) => e.category);
    const filterCategoryBlock = document.querySelector('.filter__list_category');
    

    if (filterCategoryBlock instanceof HTMLElement) {
        filterCategoryBlock.setAttribute('id', 'category');
        const filterCategory = new FilterCheckboxList(filterCategoryBlock, arrayDataCategory);
        filterCategory.drawFilterList();
    }

    const arrayDataBrand = productData.map((e) => e.brand);
    const filterBrandBlock = document.querySelector('.filter__list_brand');
    
    if (filterBrandBlock instanceof HTMLElement) {
        filterBrandBlock.setAttribute('id', 'brand');
        const filterBrand = new FilterCheckboxList(filterBrandBlock, arrayDataBrand);
        filterBrand.drawFilterList();
    }

}

export default FiltersList;

