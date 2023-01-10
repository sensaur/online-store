import addQueryParamsToUrl from './addQueryParams';

function getSearchStringValue() {
    if (document.getElementById('search')) {
        const input = document.getElementById('search');
        input?.addEventListener('input', (event: Event) => {
            const target = event.target as HTMLInputElement;
            console.log(target.value);
            // console.log(target.onkeydown);
            // console.log(event);

            // addQueryParamsToUrl(target.value, 'search');
        });
        // input?.addEventListener('onkeydown', (event: Event) => {
        //     const target = event.target as HTMLInputElement;
        //     console.log(target);
        // });
        //
    }
}

export default getSearchStringValue;
