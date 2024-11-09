function initScrollGradient(direction = 'down')
{
    direction = (direction === 'right' ? 'right' : 'down');
    let options = {
        classes: {
            main: 'js-scroll-gradient',
            direction: 'scroll-gradient--' + direction,
            scrollable: 'js-scroll-gradient__scrollable',
            init: 'scroll-gradient-init',
            active: 'scroll-gradient-active',
        }
    }
    
    let gradientScrollHandler = function(e)
    {
        updateGradientView(e.target.parentNode);
    }

    let updateGradientView = function(element)
    {
        let requried = false;
        let scrollableContainer = queryScrollableContainer(element);
        if (direction === 'right') {
            requried = isHorizontalNeeded(scrollableContainer);
        } else {
            requried = isVerticalNeeded(scrollableContainer);
        }
        enableGradient(element, requried);
    }

    let isVerticalNeeded = function(element)
    {
        return !(element.scrollTop === (element.scrollHeight - element.offsetHeight));
    }

    let isHorizontalNeeded = function(element)
    {
        return !(element.scrollLeft === (element.scrollWidth - element.offsetWidth));
    }
    
    let enableGradient = function(element, enable = true)
    {
        if (enable) {
            element.classList.add(options.classes.active);
        } else {
            element.classList.remove(options.classes.active);
        }
    }

    let queryScrollableContainer = function(element)
    {
        return element.querySelector('.' + options.classes.scrollable);
    }

    let items = document.querySelectorAll('.' + options.classes.main);
    for (let i = 0; i < items.length; i ++) {
        if (items[i].classList.contains(options.classes.init)) {
            continue;
        }
        items[i].classList.add(options.classes.init);
        items[i].classList.add(options.classes.direction);

        let scrollableContainer = queryScrollableContainer(items[i]);
        updateGradientView(items[i]);
        scrollableContainer.removeEventListener('scroll', gradientScrollHandler);
        scrollableContainer.addEventListener('scroll', gradientScrollHandler);
    }
}