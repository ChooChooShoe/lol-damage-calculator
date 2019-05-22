var itemData = {};
let itemInventory = [null, null, null, null, null, null,null, null, null, null, null, null];
let currentOffset = 0;

function queryAndAddEventAll(selector, event, method) {
    Array.from(document.querySelectorAll(selector)).forEach(element => {
        element.addEventListener(event, method);
    });
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
        
        if (item.gold.purchasable || item.gold != 0)
            this.cost.textContent = item.gold.total == 0 ? 'Free' : item.gold.total;
        else {
            this.cost.textContent = 'Not In Shop';
            this.gold.className = 'red';
        }
        this.el.setAttribute('data-key', data);
        this.el.id = `shop_item_${data}`;


        let intoRender = [];
        let intoRenderSmall = [];
        for (let i in item.into) {
            const other = context[item.into[i]];
            intoRender.push(`<img data-key="${other.key}" style="background: url('${cdn}/${version}/img/sprite/${other.image.sprite}') -${other.image.x}px -${other.image.y}px" width="${other.image.w}" height="${other.image.h}"/>`);
            intoRenderSmall.push(`<img data-key="${other.key}" style="zoom: 66.66666%; background: url('${cdn}/${version}/img/sprite/${other.image.sprite}') -${other.image.x}px -${other.image.y}px" width="${other.image.w}" height="${other.image.h}"/>`);
        }
        if (intoRender.length > 0) {
            item.intoRender = intoRender.join("");
            item.intoRenderSmall =
                `<div class="item-builds">Builds Into: 
            ${intoRenderSmall.join("")}
            </div>`
        } else {
            item.intoRender = `<img data-key="Empty" style="zoom: 100%; background: url('') -0px -0px" width="48" height="48"/>`;
            item.intoRenderSmall = '<div class="item-builds"></div>';
        }

        let fromRender = [];
        let fromRenderSmall = [];
        for (let i in item.from) {
            const other = context[item.from[i]];
            fromRender.push(`<img data-key="${other.key}" style="background: url('${cdn}/${version}/img/sprite/${other.image.sprite}') -${other.image.x}px -${other.image.y}px" width="${other.image.w}" height="${other.image.h}"/>`);
            fromRenderSmall.push(`<img data-key="${other.key}" style="zoom: 66.66666%; background: url('${cdn}/${version}/img/sprite/${other.image.sprite}') -${other.image.x}px -${other.image.y}px" width="${other.image.w}" height="${other.image.h}"/>`);
        }
        if (fromRender.length > 0) {
            item.fromRender = fromRender.join("");
            item.fromRenderSmall =
                `<div class="item-builds">Builds from: 
            ${fromRenderSmall.join("")}
            </div>`
        } else {
            item.fromRender = `<img data-key="Empty" style="zoom: 100%; background: url('') -0px -0px" width="48" height="48"/>`;
            item.fromRenderSmall = '<div class="item-builds"></div>';
        }
        this.name.textContent = item.name;
        item.imageStyle = `background: url('${cdn}/${version}/img/sprite/${item.image.sprite}') -${item.image.x}px -${item.image.y}px; width:${item.image.w}px; height:${item.image.h}px;`;
        this.img.style = item.imageStyle;
    }
}

export class ShopItemInfo {
    constructor() {
        this.lastItem = null;
        this.el = el('div.item',
            this.from = el('.from-render'),
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


        this.into.innerHTML = item.intoRenderSmall;
        this.from.innerHTML = item.fromRender;
        this.title.textContent = item.name + ' / ' + data;
        this.desc.innerHTML = item.description;
        this.tags.textContent = 'Tags: ' + item.tags.join(', ');
        // this.image.src = `${cdn}/${version}/img/item/${item.image.full}`;
        this.image.style = item.imageStyle

    }
}

const shopItemInfo = new ShopItemInfo();
mount(document.getElementById('item_shop_iteminfo'), shopItemInfo);

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


function byClass(a, b) {
    return a.getElementsByClassName(b)[0]
}

function showInfo(itemKey, ) {
    shopItemInfo.update(itemKey, itemData[itemKey]);
    window.shoppingCardItem = itemKey;
}

queryAndAddEventAll('#item_shop_model_close', 'click', _e => item_shop_model.style.display = "none");
queryAndAddEventAll('#shop_buy_item', 'click', _e => buyItem(window.shoppingCardItem));

export function buyItem(item) {
    console.log('Buying item: ' + item);
    let openIndex = 0;
    for (; openIndex < 6; openIndex++) {
        if (itemInventory[openIndex + currentOffset] === null)
            break;
    }
    if (openIndex >= 5){
        openIndex = 5;
        document.querySelector('#shop_buy_item').disabled = true;
    }
    let openIndexInv = openIndex + currentOffset;

    
    const els = document.querySelectorAll(`.item-inventory-${openIndexInv}, .item-shop-${openIndex}`);
    for (const el of els) {
        el.setAttribute('data-key', item);
        const image = el.querySelector('.full-image');
        image.src = itemData[item].imageFull;
        addToolTipEvents(el)
    }
    itemInventory[openIndexInv] = item;
    onItemsUpdated();
}

function onItemsUpdated() {
    const data = getItemData(currentOffset);
    document.getElementById('item_total_cost').value = data.totalCost;

    let statsRender = [];
    for (let i in data.stats) {
        statsRender.push(`
        <div><a>${i}:</a>
        <a style="color:#8AC88A;">+${data.stats[i]}</a></div>`);
    }
    const els = document.querySelectorAll(`.stats-total-${currentOffset}, .stats-total-shop`);
    for (const el of els) {
        el.innerHTML = `
    <div class="item-stats-table table">
        ${statsRender.join('\n')}
    </div>`
    }
}
export function getItemData(offset) {
    const stats = {};
    let total_cost = 0;
    for (let i = 0; i < 6; i++) {
        if (itemInventory[i + offset]) {
            const item = itemData[itemInventory[i + offset]];
            total_cost += item.gold.total;
            Object.keys(item.stats).forEach(key => {
                if (stats[key])
                    stats[key] = stats[key] + item.stats[key];
                else
                    stats[key] = item.stats[key];
            });
        }
    }
    return {
        'totalCost': total_cost,
        'stats': stats
    };
}

window.onclick = function (event) {
    if (event.target == item_shop_model) {
        item_shop_model.style.display = "none";
    }
}