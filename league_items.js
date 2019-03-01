'use strict';

const items_dump = document.getElementById('items_dump');
const item_count = document.getElementById('item_count');
var basicItemData;
var itemData = {};

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

            Object.keys(itemJson.data).forEach(key => {
                const item = itemJson.data[key];
                var newItem = {};
                const tags = item.tags.join(' ');
                newItem.search = [
                    item.name.toLowerCase(),
                    item.colloq.split(';'),
                ].flat();
                newItem.searchExact = tags.toLowerCase().split(' ');

                newItem.requiredChampion = item.requiredChampion;
                newItem.nonRift = !item.maps['12'];

                var maps = [];
                for (let i in item.maps)
                    if (item.maps[i] === true)
                        maps.push(i);

                newItem.imgRender = `style="background: url('${cdn}/${version}/img/sprite/${item.image.sprite}') -${item.image.x}px -${item.image.y}px" width="${item.image.w}" height="${item.image.h}"`
                
                var statsRender = [];
                for(let i in item.stats) {
                    statsRender.push(`
                    <div><a>${i}:</a>
                    <a style="color:#8AC88A;">+${item.stats[i]}</a></div>`);
                }
                var fromRender = [];
                for(let i in item.from) {
                    const other = itemJson.data[item.from[i]];
                    fromRender.push(`<img style="zoom: 66.66666%; background: url('${cdn}/${version}/img/sprite/${other.image.sprite}') -${other.image.x}px -${other.image.y}px" width="${other.image.w}" height="${other.image.h}"/> + `);
                }
                if (fromRender.length > 0){
                    fromRender =
                    `<div class="item-recipe">Recipe: 
                    ${fromRender.join("")}
                    ${item.gold.base}<img src="/images/Gold.png" />
                    </div>`
                } else {
                    fromRender = "";
                }

                var render = `
<div class="item tooltiplink item-tooltip-container">
<div>
    <img ${newItem.imgRender}/>
    <span class="item-title">${item.name}</span>
</div>
<div class="tooltipcontent">
    <div class="item-tooltip-container">
        <div>
            <img ${newItem.imgRender}/>
            <span class="item-title">${item.name}</span>
            <div style="float: right">
            ${item.gold.total}
            <img src="/images/Gold.png" />
            </div>
        </div>
        <div class="item-underline"></div>
        <!--div class="item-stats-table table">
            ${statsRender.join('\n')}
        </div-->
        <div class="item-description">
            ${item.description}
        </div>
        <div class="item-underline"></div>
        ${fromRender}
        <div class="item-tags">Tags: 
        ${item.tags.join(' ')}
        </div>
    </div>
</div>
</div>`
                newItem.preRendered = render.trim();
                itemData[key] = newItem;
            });
            render_lists(itemData, '');
        });
}

// Get the modal
const item_shop_model = document.getElementById('item_shop_model');

function openShopModel(form) {
    item_shop_model.style.display = "block";
    item_shop_search.focus();
    item_shop_search.value = '';
    filterShop();
}


document.getElementById('item_shop_model_close').addEventListener('click', function () {
    item_shop_model.style.display = "none";
});

window.onclick = function (event) {
    if (event.target == item_shop_model) {
        item_shop_model.style.display = "none";
    }
}

function render_lists(listOfItems, champion) {
    var listHtml = "";
    for (var index in listOfItems) {
        const item = listOfItems[index];

        if (item.requiredChampion === champion)
            listHtml = item.preRendered + listHtml;
        else
            listHtml += item.preRendered;
    }
    items_dump.innerHTML = listHtml;
    item_count.innerText = 'Item Count: ' + Object.keys(listOfItems).length;
    addTooltipEvents();
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
    }
}


// lets filters it
const item_shop_search = document.getElementById('item_shop_search');
const item_shop_rift_only = document.getElementById('item_shop_rift_only')

function filterShop(event) {
    const keyword = item_shop_search.value.toLowerCase();

    const filterd = Object.keys(itemData).filter(key => {
        const item = itemData[key];
        if (item_shop_rift_only.checked && item.nonRift)
            return false;
        const lazySearch = itemData[key].search.some(e => {
            return e.indexOf(keyword) > -1;
        });
        if (lazySearch)
            return true;
        else
            return itemData[key].searchExact.includes(keyword);
    }).reduce((obj, key) => {
        obj[key] = itemData[key];
        return obj;
    }, {});

    render_lists(filterd, window.playerChamption);
}

item_shop_search.addEventListener('input', filterShop);
item_shop_rift_only.addEventListener('input', filterShop);