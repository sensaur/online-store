function resetFilters() {
    window.location.href = `${window.location.pathname}`;
    localStorage.clear();
}
export default resetFilters;

//window.location.href = `${location.origin}/dist/card.html`;