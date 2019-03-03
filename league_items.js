'use strict';

const items_dump = document.getElementById('items_dump');
const item_count = document.getElementById('item_count');
var basicItemData;
var itemData = {};
let itemInventory = [null, null, null, null, null, null]

const cdn = 'https://ddragon.leagueoflegends.com/cdn';
const locale = 'en_US';

function downloadStaticItems(version) {
    const url = `${cdn}/${version}/data/${locale}/item.json`;
    console.log(`Fetching: ${url}`)
    fetch(url)
        .then(function (response) {
            while (items_dump.firstChild) {
                items_dump.removeChild(items_dump.firstChild);
            }
            if (response.ok) {
                return response.json();
            }
            items_dump.appendChild(document.createTextNode('Error'));
            throw new Error('Network response was not ok.');
        })
        .then(function (itemJson) {
            basicItemData = itemJson.basic;
            let listHtml = "";

            Object.keys(itemJson.data).forEach(key => {
                const item = itemJson.data[key];
                let newItem = item;
                newItem.key = key;
                const tags = item.tags.join(' ');
                newItem.search = [
                    item.name.toLowerCase(),
                    item.colloq.split(';'),
                    // item.description.toLowerCase(),
                ].flat();
                newItem.searchExact = tags.toLowerCase().split(' ');

                newItem.requiredChampion = item.requiredChampion;
                newItem.gold = item.gold;
                newItem.stats = item.stats;
                newItem.nonRift = !item.maps['12'];

                // For sprite images
                newItem.imgRender = `style="background: url('${cdn}/${version}/img/sprite/${item.image.sprite}') -${item.image.x}px -${item.image.y}px; width:${item.image.w}px; height:${item.image.h}px;" width="${item.image.w}" height="${item.image.h}"`

                // For full images - Eg: <img src="http://ddragon.leagueoflegends.com/cdn/9.4.1/img/item/3092.png" width="64" height="64">
                newItem.imageFull = `${cdn}/${version}/img/item/${item.image.full}`

                let statsRender = [];
                for (let i in item.stats) {
                    statsRender.push(`
                    <div><a>${i}:</a>
                    <a style="color:#8AC88A;">+${item.stats[i]}</a></div>`);
                }
                let fromRender = [];
                for (let i in item.from) {
                    const other = itemJson.data[item.from[i]];
                    fromRender.push(`<img data-key="${other.key}" style="zoom: 66.66666%; background: url('${cdn}/${version}/img/sprite/${other.image.sprite}') -${other.image.x}px -${other.image.y}px" width="${other.image.w}" height="${other.image.h}"/> + `);
                }
                if (fromRender.length > 0) {
                    fromRender =
                        `<div class="item-recipe">Recipe: 
                    ${fromRender.join("")}
                    <img src="/images/Gold.png" />
                    <span class="gold">${item.gold.base}</span>
                    </div>`
                } else {
                    fromRender = '<div class="item-recipe"></div>';
                }
                
                let intoRender = [];
                let intoRenderSmall = [];
                for (let i in item.into) {
                    const other = itemJson.data[item.into[i]];
                    intoRender.push(`<img data-key="${other.key}" style="background: url('${cdn}/${version}/img/sprite/${other.image.sprite}') -${other.image.x}px -${other.image.y}px" width="${other.image.w}" height="${other.image.h}"/>`);
                    intoRenderSmall.push(`<img data-key="${other.key}" style="zoom: 66.66666%; background: url('${cdn}/${version}/img/sprite/${other.image.sprite}') -${other.image.x}px -${other.image.y}px" width="${other.image.w}" height="${other.image.h}"/>`);
                }
                if (intoRender.length > 0) {
                    intoRender = intoRender.join("");
                    intoRenderSmall =
                        `<div class="item-builds">Builds Into: 
                    ${intoRenderSmall.join("")}
                    </div>`
                } else {
                    intoRender = `<img data-key="Empty" style="zoom: 100%; background: url('') -0px -0px" width="48" height="48"/>`;
                    intoRenderSmall = '<div class="item-builds"></div>';
                }

                let total_cost;
                if (item.gold.purchasable)
                    total_cost = `<span class="gold">${item.gold.total == 0 ? 'Free' : item.gold.total}</span>`;
                else
                    total_cost = '<span class="red">Not for Sale</span>';

                
                newItem.intoRender = intoRender;
                let render = `
<div class="item tooltiplink item-container" id="shop_item_${key}" data-key="${key}">
    <div class="item-img-left " ${newItem.imgRender}></div>
    <span class="item-name">${item.name}</span>
    <span class="gold"><img src="/images/Gold.png" />${total_cost}</span>
    <div class="tooltipcontent">
        <div class="item-tooltip-container">
            <div class="item-header">
                <img class="item-img-left" ${newItem.imgRender}/>
                <span class="item-title">${item.name}</span> 
                <div style="float: right">
                <span class="gold"><img src="/images/Gold.png" />${total_cost}</span>
                </div>
            </div>
            <div class="item-underline"></div>
            <div class="item-stats-table table">
                ${statsRender.join('\n')}
            </div>
            <div class="item-description">
                ${item.description}
            </div>
            <div class="item-underline"></div>
            ${fromRender}
            ${intoRenderSmall}
            <div class="item-tags">Tags: 
            ${item.tags.join(' ')}
            </div>
        </div>
    </div>
</div>`
                // newItem.preRendered = render.trim();
                listHtml += render.trim();
                itemData[key] = newItem;
            });
            items_dump.innerHTML = listHtml;
            addTooltipEvents();
        });
}

function addTooltipEvents() {
    const tooltiplinks = items_dump.getElementsByClassName('tooltiplink');
    for (let item of tooltiplinks) {
        item.addEventListener('mousemove', e => {
            const tip = e.currentTarget.getElementsByClassName('tooltipcontent')[0];
            tip.style.left = e.clientX + 10 + 'px';
            tip.style.top = e.clientY + 10 + 'px';
            tip.style.display = 'block';
        });
        item.addEventListener('mouseout', e => {
            const tip = e.currentTarget.getElementsByClassName('tooltipcontent')[0];
            tip.style.display = 'none';
        });
        item.addEventListener('click', e => {
            showInfo(item.getAttribute('data-key'));
        });
        item.addEventListener('dblclick', e => {
            buyItem(item.getAttribute('data-key'));
        });
        item.addEventListener('contextmenu', e => {
            showInfo(item.getAttribute('data-key'));
            buyItem(item.getAttribute('data-key'));
            e.preventDefault();
        });
    }
}


// Get the modal
const item_shop_model = document.getElementById('item_shop_model');
const iteminfo = document.getElementById('item_shop_iteminfo');

function openShopModel(form) {
    item_shop_model.style.display = null;
    item_shop_search.focus();
    item_shop_search.value = '';
    filterShop();
}

function byClass(a, b) {
    return a.getElementsByClassName(b)[0]
}

function showInfo(itemKey) {
    const el = document.getElementById(`shop_item_${itemKey}`);
    const item = itemData[itemKey];

    byClass(iteminfo, 'item-img-left').style.background = byClass(el, 'item-img-left').style.background;
    byClass(iteminfo, 'item-title').innerText = byClass(el, 'item-title').innerText;
    byClass(iteminfo, 'item-description').innerHTML = byClass(el, 'item-description').innerHTML;
    byClass(iteminfo, 'item-stats-table').innerHTML = byClass(el, 'item-stats-table').innerHTML;
    byClass(iteminfo, 'item-tags').innerHTML = byClass(el, 'item-tags').innerHTML;
    byClass(iteminfo, 'item-recipe').innerHTML = byClass(el, 'item-recipe').innerHTML;

    byClass(iteminfo, 'item-builds').innerHTML = '';
    for(let i in item.into) {
        const otherItem = itemData[item.into[i]];
        const cloned = document.getElementById(`shop_item_${item.into[i]}`).cloneNode(true);
        cloned.className = "item tooltiplink item-container icon";
        cloned.id = '';
        byClass(iteminfo, 'item-builds').appendChild(cloned);
    }

    window.shoppingCardItem = itemKey;
}

Array.from(document.getElementsByClassName('clear_items')).forEach(function (element) {
    element.addEventListener('click', e => {
        for (let i = 0; i < 6; i++) {
            sellItem(i);
        }
    });
});

document.getElementById('item_shop_model_close').addEventListener('click', function () {
    item_shop_model.style.display = "none";
});

document.getElementById('shop_buy_item').addEventListener('click', e => {
    buyItem(window.shoppingCardItem);
});

function buyItem(item) {
    console.log(item);
    let openIndex = 0;
    for (; openIndex < 6; openIndex++) {
        if (itemInventory[openIndex] === null)
            break;
    }
    if (openIndex > 5)
        openIndex = 5;
    const els = document.getElementsByClassName(`item-inventory-${openIndex}`);

    for (var i = 0; i < els.length; i++) {
        const items = els[i].getElementsByClassName('full-image')[0];
        items.src = itemData[item].imageFull;
    }
    itemInventory[openIndex] = item;
    onItemsUpdated();
}

function sellItem(itemNumber) {
    const els = document.getElementsByClassName(`item-inventory-${itemNumber}`);

    for (var i = 0; i < els.length; i++) {
        const items = els[i].getElementsByClassName('full-image')[0];
        items.src = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
    }
    itemInventory[itemNumber] = null;
    onItemsUpdated();
}

function onItemsUpdated() {
    let total_cost = 0;
    for(let i = 0; i < 6; i++) {
        if(itemInventory[i]) {
            total_cost += itemData[itemInventory[i]].gold.total;
        }
    }
    document.getElementById('item_total_cost').value = total_cost;
}

window.onclick = function (event) {
    if (event.target == item_shop_model) {
        item_shop_model.style.display = "none";
    }
}

// lets filters it
const item_shop_search = document.getElementById('item_shop_search');
const item_shop_rift_only = document.getElementById('item_shop_rift_only')

function filterShop(event) {
    const keyword = item_shop_search.value.toLowerCase();
    let count = 0;
    Object.keys(itemData).forEach(key => {
        const item = itemData[key];
        const el = document.getElementById(`shop_item_${key}`);

        let order = item.requiredChampion === window.playerChamption ? -1 : 0;
        el.style.order = order;

        if (item_shop_rift_only.checked && item.nonRift) {
            el.style.display = 'none';
            return;
        }

        const lazySearch = itemData[key].search.some(e => {
            return e.indexOf(keyword) > -1;
        });
        if (lazySearch || itemData[key].searchExact.includes(keyword)) {
            el.style.display = null;
            count++;
        } else {
            el.style.display = 'none';
        }
    });
    item_count.value = count;
}

item_shop_search.addEventListener('input', filterShop);
item_shop_rift_only.addEventListener('input', filterShop);