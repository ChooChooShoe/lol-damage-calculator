'use strict';

const items_dump = document.getElementById('items_dump');
var basicItemData;

function downloadStaticItems(version) {
    const cdn = 'https://ddragon.leagueoflegends.com/cdn';
    const locale = 'en_US';
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
                var el = document.createElement('div');
                const html = `
                <div class="item">
                <img style="background: url('${cdn}/${version}/img/sprite/${item.image.sprite}') -${item.image.x}px -${item.image.y}px" width="${item.image.w}" height="${item.image.h}"/>
               
                <h2>${item.name}</h2>
                 ${item.description}
                Cost: <span class="cost">${item.gold.total}</span>
                Cost: <span class="tags">${item.tags}</span>
                </div>`;
                el.innerHTML = html;
                items_dump.appendChild(el);
            });
        });
}