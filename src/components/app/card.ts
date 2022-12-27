const slider = function () {
    //// SLIDER
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const slider = document.getElementsByClassName('sliderBlock_items');
    const slides = document.getElementsByClassName('sliderBlock_items__itemPhoto');
    const next = document.getElementsByClassName('sliderBlock_controls__arrowForward')[0];
    const previous = document.getElementsByClassName('sliderBlock_controls__arrowBackward')[0];
    const items = document.getElementsByClassName('sliderBlock_positionControls')[0];
    const currentSlideItem = document.getElementsByClassName('sliderBlock_positionControls__paginatorItem');

    let currentSlide = 0;
    const slideInterval = setInterval(nextSlide, 5000); /// Delay time of slides

    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    function previousSlide() {
        goToSlide(currentSlide - 1);
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    function goToSlide(n) {
        slides[currentSlide].className = 'sliderBlock_items__itemPhoto';
        items.children[currentSlide].className = 'sliderBlock_positionControls__paginatorItem';
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].className = 'sliderBlock_items__itemPhoto sliderBlock_items__showing';
        items.children[currentSlide].className =
            'sliderBlock_positionControls__paginatorItem sliderBlock_positionControls__active';
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    next.onclick = function () {
        nextSlide();
    };
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    previous.onclick = function () {
        previousSlide();
    };

    function goToSlideAfterPushTheMiniBlock() {
        for (let i = 0; i < currentSlideItem.length; i++) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            currentSlideItem[i].onclick = function (i) {
                const index = Array.prototype.indexOf.call(currentSlideItem, this);
                goToSlide(index);
            };
        }
    }

    goToSlideAfterPushTheMiniBlock();
};

export default slider;
