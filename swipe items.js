let itemUspCount = 0;
const itemUsp = [...document.querySelectorAll('.item')];
const itemsLength = itemUsp.length - 1;
const changeItem = () => {
    itemUsp.map((item, i) => {
        if (itemUspCount === i) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })
    itemUspCount === itemsLength ?
        itemUspCount = 0 :
        itemUspCount++;

};

setInterval(() => {
    if (window.innerWidth <= 1350) {
        changeItem();
    }
}, 2000);
