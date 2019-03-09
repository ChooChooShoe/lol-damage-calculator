import { el, list, mount, text } from 'https://redom.js.org/redom.es.min.js';
import { cdn, locale, version } from './league_data.js'

const items_dump = document.getElementById('items_dump');
const item_tooltips_div = document.getElementById('item_tooltips');
const item_count = document.getElementById('item_count');
var basicItemData;
var itemData = {};
let itemInventory = [null, null, null, null, null, null]

function queryAndAddEventAll(selector, event, method) {
    Array.from(document.querySelectorAll(selector)).forEach(element => {
        element.addEventListener(event, method);
    });
}

export class ItemToolTip {
    constructor() {
        this.el = el('div.tooltipcontent', {
            style: {
                display: 'none'
            }
        }, el('div.item-tooltip-container',

            el('.item-header',
                this.image = el('img.item-img-left'),
                this.title = el('span.item-title'),
                el('div', {
                        style: 'float: right'
                    },
                    this.gold = el('span.gold', el('img', {
                        src: '/images/Gold.png'
                    }), this.cost = text('Free'))),
            ),
            el('.item-underline'),
            this.stats = el('.item-stats-table.table'),
            this.desc = el('.item-description'),
            el('.item-underline'),
            this.from = el('.from-render'),
            this.into = el('.into-render'),
            this.tags = el('.item-tags'),

        ));
    }

    //                 // For sprite images
    //                 newItem.imgRender = `style="background: url('${cdn}/${version}/img/sprite/${item.image.sprite}') -${item.image.x}px -${item.image.y}px; width:${item.image.w}px; height:${item.image.h}px;" width="${item.image.w}" height="${item.image.h}"`

    //                 // For full images - Eg: <img src="http://ddragon.leagueoflegends.com/cdn/9.4.1/img/item/3092.png" width="64" height="64">
    //                 newItem.imageFull = `${cdn}/${version}/img/item/${item.image.full}`

    //                 let statsRender = [];
    //                 for (let i in item.stats) {
    //                     statsRender.push(`
    //                     <div><a>${i}:</a>
    //                     <a style="color:#8AC88A;">+${item.stats[i]}</a></div>`);
    //                 }
    //                 let fromRender = [];
    //                 for (let i in item.from) {
    //                     const other = itemJson.data[item.from[i]];
    //                     fromRender.push(`<img data-key="${other.key}" style="zoom: 66.66666%; background: url('${cdn}/${version}/img/sprite/${other.image.sprite}') -${other.image.x}px -${other.image.y}px" width="${other.image.w}" height="${other.image.h}"/> + `);
    //                 }
    //                 if (fromRender.length > 0) {
    //                     fromRender =
    //                         `<div class="item-recipe">Recipe: 
    //                     ${fromRender.join("")}
    //                     <img src="/images/Gold.png" />
    //                     <span class="gold">${item.gold.base}</span>
    //                     </div>`
    //                 } else {
    //                     fromRender = '<div class="item-recipe"></div>';
    //                 }

    //                 let intoRender = [];
    //                 let intoRenderSmall = [];
    //                 for (let i in item.into) {
    //                     const other = itemJson.data[item.into[i]];
    //                     intoRender.push(`<img data-key="${other.key}" style="background: url('${cdn}/${version}/img/sprite/${other.image.sprite}') -${other.image.x}px -${other.image.y}px" width="${other.image.w}" height="${other.image.h}"/>`);
    //                     intoRenderSmall.push(`<img data-key="${other.key}" style="zoom: 66.66666%; background: url('${cdn}/${version}/img/sprite/${other.image.sprite}') -${other.image.x}px -${other.image.y}px" width="${other.image.w}" height="${other.image.h}"/>`);
    //                 }
    //                 if (intoRender.length > 0) {
    //                     intoRender = intoRender.join("");
    //                     intoRenderSmall =
    //                         `<div class="item-builds">Builds Into: 
    //                     ${intoRenderSmall.join("")}
    //                     </div>`
    //                 } else {
    //                     intoRender = `<img data-key="Empty" style="zoom: 100%; background: url('') -0px -0px" width="48" height="48"/>`;
    //                     intoRenderSmall = '<div class="item-builds"></div>';
    //                 }

    //                 let total_cost;
    //                 if (item.gold.purchasable)
    //                     total_cost = `<span class="gold">${item.gold.total == 0 ? 'Free' : item.gold.total}</span>`;
    //                 else
    //                     total_cost = '<span class="red">Not In Shop</span>';


    //                 newItem.intoRender = intoRender;

    //                 let tooltipContent = 

    update(data, index, items, context) {
        const item = context[data];
        // console.log(data, index, item.name);

        if (item.inStore === false) {
            //TODO something
        }
        if (item.hideFromAll === true) {
            //TODO something
        }
        if (item.gold.purchasable || item.gold != 0)
            this.cost.textContent = item.gold.total == 0 ? 'Free' : item.gold.total;
        else {
            this.cost.textContent = 'Not In Shop';
            this.gold.className = 'red';
        }
        this.el.setAttribute('data-key', data);
        this.el.id = `tooltipcontent_item_${data}`;
    }
}

export class Item {
    constructor() {
        this.el = el('div.item.tooltiplink.item-container',
            this.img = el('div.item-img-left'),
            this.name = el('span.item-name'),
            this.gold = el('span.gold', el('img', {
                src: '/images/Gold.png'
            }), this.cost = text('Free')),
        );
        addToolTipEvents(this.el);
        this.el.addEventListener('click', e => {
            let key = e.currentTarget.getAttribute('data-key');
            showInfo(key);
        });
        this.el.addEventListener('dblclick', e => {
            let key = e.currentTarget.getAttribute('data-key');
            buyItem(key);
            e.preventDefault();
        });
        this.el.addEventListener('contextmenu', e => {
            let key = e.currentTarget.getAttribute('data-key');
            showInfo(key);
            buyItem(key);
            e.preventDefault();
        });
    }

    update(data, index, items, context) {
        const item = context[data];
        // console.log(data, index, item.name);

        if (item.inStore === false) {
            //TODO something
        }
        if (item.hideFromAll === true) {
            //TODO something
        }
        if (item.gold.purchasable || item.gold != 0)
            this.cost.textContent = item.gold.total == 0 ? 'Free' : item.gold.total;
        else {
            this.cost.textContent = 'Not In Shop';
            this.gold.className = 'red';
        }
        this.el.setAttribute('data-key', data);
        this.el.id = `shop_item_${data}`;

        this.name.textContent = item.name;
        this.img.style = `background: url('${cdn}/${version}/img/sprite/${item.image.sprite}') -${item.image.x}px -${item.image.y}px; width:${item.image.w}px; height:${item.image.h}px;`;

    }
}

export class ShopItemInfo {
    constructor() {
        this.lastItem = null;
        this.el = el('div.item',
            el('.item-header',
                this.image = el('img.item-img-left'),
                this.title = el('span.item-title'),
                this.gold = el('span.gold', el('img', {
                    src: '/images/Gold.png'
                }), this.cost = text('Free')),
                el('div', {
                        style: 'float: right'
                    },
                    el('input.buy-item-btn#shop_buy_item', {
                        type: 'button',
                        value: 'BUY'
                    })
                ),
            ),
            el('.item-underline'),
            this.stats = el('.item-stats-table.table'),
            this.desc = el('.item-description'),
            el('.item-underline'),
            this.from = el('.from-render'),
            this.into = el('.into-render'),
            this.tags = el('.item-tags'),
        );
    }

    update(data, item) {
        if (this.lastItem === data)
            return;
        this.lastItem = data;

        if (item.inStore === false) {
            //TODO something
        }
        if (item.hideFromAll === true) {
            //TODO something
        }
        if (item.gold.purchasable || item.gold != 0)
            this.cost.textContent = item.gold.total == 0 ? 'Free' : item.gold.total;
        else {
            this.cost.textContent = 'Not In Shop';
            this.gold.className = 'red';
        }
        this.el.setAttribute('data-key', data);
        this.el.id = `shop_item_info_${data}`;

        this.title.textContent = item.name;
        this.desc.innerHTML = item.description;
        // this.image.src = `${cdn}/${version}/img/item/${item.image.full}`;
        this.image.style = `background: url('${cdn}/${version}/img/sprite/${item.image.sprite}') -${item.image.x}px -${item.image.y}px; width:${item.image.w}px; height:${item.image.h}px;`;

    }
}

const shopItemsList = list(items_dump, Item);
const itemTooltipsList = list(document.getElementById('item_tooltips'), ItemToolTip);
const shopItemInfo = new ShopItemInfo();
mount(document.getElementById('item_shop_iteminfo'), shopItemInfo);

export function downloadStaticItems(version) {
    const url = `${cdn}/${version}/data/${locale}/item.json`;
    console.log(`Fetching: ${url}`)
    fetch(url)
        .then(function (response) {
            shopItemsList.update();
            if (response.ok) {
                return response.json();
            }
            throw new Error('Network response was not ok.');
        })
        .then(function (itemJson) {
            basicItemData = itemJson.basic;
            itemData = itemJson.data;

            Object.keys(itemData).forEach(key => {
                const item = itemData[key];

                const tags = item.tags.join(' ');
                item.search = [
                    item.name.toLowerCase(),
                    item.colloq.toLowerCase().split(';'),
                    // item.description.toLowerCase(),
                ].flat();

                item.nonRift = !item.maps['11'];
                item.searchExact = tags.toLowerCase().split(' ');

                item.isKnownEventItem = known_event_items.includes(key);

                item.imageFull = `${cdn}/${version}/img/item/${item.image.full}`;
            });


            shopItemsList.update(Object.keys(itemData), itemData);
            itemTooltipsList.update(Object.keys(itemData), itemData);
            // console.log(itemData);

            return;
            let listHtml = "";
            let tooltipsHtml = "";

            Object.keys(itemJson.data).forEach(key => {

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
                    total_cost = '<span class="red">Not In Shop</span>';


                newItem.intoRender = intoRender;

                let tooltipContent = `
<div class="tooltipcontent" id="tooltipcontent_item_${key}">
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
</div>`;


                let render = `
<div class="item tooltiplink item-container" id="shop_item_${key}" data-key="${key}">
    <div class="item-img-left " ${newItem.imgRender}></div>
    <span class="item-name">${item.name}</span>
    <span class="gold"><img src="/images/Gold.png" />${total_cost}</span>
</div>`
                // newItem.preRendered = render.trim();
                listHtml += render.trim();
                tooltipsHtml += tooltipContent.trim();
                itemData[key] = newItem;
            });
            items_dump.innerHTML = listHtml;
            item_tooltips_div.innerHTML = tooltipsHtml;
            addEvents();
        });
}

function addToolTipEvents(element) {
    element.addEventListener('mousemove', e => {
        let key = e.currentTarget.getAttribute('data-key');
        const tip = document.getElementById('tooltipcontent_item_' + key);
        tip.style.left = e.clientX + 10 + 'px';
        tip.style.top = e.clientY + 10 + 'px';
        tip.style.display = 'block';
    });
    element.addEventListener('mouseout', e => {
        let key = e.currentTarget.getAttribute('data-key');
        const tip = document.getElementById('tooltipcontent_item_' + key);
        tip.style.display = 'none';
    });
}


// Get the modal
const item_shop_model = document.getElementById('item_shop_model');
const iteminfo = document.getElementById('item_shop_iteminfo');

export function openShopModel(_form) {
    item_shop_model.style.display = null;
    item_shop_search.focus();
    item_shop_search.value = '';
    filterShop();
}

function byClass(a, b) {
    return a.getElementsByClassName(b)[0]
}

function showInfo(itemKey, ) {

    shopItemInfo.update(itemKey, itemData[itemKey]);
    window.shoppingCardItem = itemKey;
    return;

    const el = document.getElementById(`shop_item_${itemKey}`);
    const item = itemData[itemKey];

    if (!item.showInfoRender) {

    }


    byClass(iteminfo, 'item-img-left').style.background = byClass(el, 'item-img-left').style.background;
    byClass(iteminfo, 'item-title').innerText = item.name;
    byClass(iteminfo, 'item-description').innerHTML = item.description;
    // byClass(iteminfo, 'item-stats-table').innerHTML = byClass(el, 'item-stats-table').innerHTML;
    byClass(iteminfo, 'item-tags').innerHTML = item.tags;
    byClass(iteminfo, 'item-recipe').innerHTML = item.fromRender;
    byClass(iteminfo, 'item-builds').innerHTML = item.intoRenderl;

    window.shoppingCardItem = itemKey;
}

queryAndAddEventAll('.clear_items', 'click', sellAllItems);
queryAndAddEventAll('#item_shop_model_close', 'click', _e => item_shop_model.style.display = "none");
queryAndAddEventAll('#shop_buy_item', 'click', _e => buyItem(window.shoppingCardItem));
queryAndAddEventAll('.open-shop-btn', 'click', e => openShopModel(e.currentTarget.form));


export function buyItem(item) {
    console.log('Buying item: ' + item);
    let openIndex = 0;
    for (; openIndex < 6; openIndex++) {
        if (itemInventory[openIndex] === null)
            break;
    }
    if (openIndex > 5)
        openIndex = 5;
    const els = document.getElementsByClassName(`item-inventory-${openIndex}`);

    for (var i = 0; i < els.length; i++) {
        const itemEl = els[i];
        itemEl.setAttribute('data-key', item);
        const image = itemEl.querySelector('.full-image');
        image.src = itemData[item].imageFull;
        addToolTipEvents(itemEl)
    }
    itemInventory[openIndex] = item;
    onItemsUpdated();
}

export function sellAllItems() {
    for (let i = 0; i < 6; i++) {
        sellItem(i);
    }
}

export function sellItem(itemNumber) {
    console.log('Selling item: #' + itemNumber);
    const els = document.getElementsByClassName(`item-inventory-${itemNumber}`);

    for (var i = 0; i < els.length; i++) {
        const items = els[i].getElementsByClassName('full-image')[0];
        items.src = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
    }
    itemInventory[itemNumber] = null;
    onItemsUpdated();
}

function onItemsUpdated() {
    const stats = {};
    let total_cost = 0;
    for (let i = 0; i < 6; i++) {
        if (itemInventory[i]) {
            const item = itemData[itemInventory[i]];
            total_cost += item.gold.total;
            Object.keys(item.stats).forEach(key => {
                if (stats[key])
                    stats[key] = stats[key] + item.stats[key];
                else
                    stats[key] = item.stats[key];
            });
        }
    }
    document.getElementById('item_total_cost').value = total_cost;
    console.log(stats);


    let statsRender = [];
    for (let i in stats) {
        statsRender.push(`
        <div><a>${i}:</a>
        <a style="color:#8AC88A;">+${stats[i]}</a></div>`);
    }
    Array.from(document.getElementsByClassName('stats_total')).forEach(e => {
        e.innerHTML = `
    <div class="item-stats-table table">
        ${statsRender.join('\n')}
    </div>`
    });
}

window.onclick = function (event) {
    if (event.target == item_shop_model) {
        item_shop_model.style.display = "none";
    }
}

// lets filters it
const item_shop_search = document.getElementById('item_shop_search');
const item_shop_rift_only = document.getElementById('item_shop_rift_only')
const item_shop_hide_event = document.getElementById('item_shop_hide_event')
const known_event_items = [];

item_shop_search.addEventListener('input', filterShop);
item_shop_rift_only.addEventListener('input', filterShop);
item_shop_hide_event.addEventListener('input', filterShop);


function filterShop(_event) {
    const keyword = item_shop_search.value.toLowerCase();
    let count = 0;
    Object.keys(itemData).forEach(key => {
        const item = itemData[key];
        const el = document.getElementById(`shop_item_${key}`);

        let show;
        if (item.search.some(e => e.indexOf(keyword) > -1))
            show = true;
        else
            show = (itemData[key].searchExact.includes(keyword));


        if (window.playerChamption && (item.requiredChampion === window.playerChamption || item.requiredAlly === window.playerChamption)) {
            el.style.order = -10;
        }

        if (item_shop_rift_only.checked && item.nonRift) {
            show = false;
        } else if (item_shop_hide_event.checked && item.isKnownEventItem) {
            show = false;
        }

        if (show) {
            el.style.display = null;
            count++;
        } else {
            el.style.display = 'none';
        }
    });
    item_count.value = count;
}