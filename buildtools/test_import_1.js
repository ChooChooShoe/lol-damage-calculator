const data = `<!--Edit these paramater values when they get changed
-->{{#vardefine:b1|10}}<!--First Swing Base Rank 1 Damage
-->{{#vardefine:b2|90}}<!--First Swing Base Rank 5 Damage
-->{{#vardefine:r1|60}}<!--First Swing Ratio Rank 1 Damage
-->{{#vardefine:r2|80}}<!--First Swing Ratio Rank 5 Damage
-->{{{{{1<noinclude>|Ability data</noinclude>}}}|The Darkin Blade|{{{2|}}}|{{{3|}}}|{{{4|}}}|{{{5|}}}
|champion     = Aatrox
|skill        = Q
|icon         = The Darkin Blade.png
|blurb        = 
|description  = {{sbc|Active:}} '''Aatrox''' swings his greatsword in the target direction, striking enemies in a line. ''The Darkin Blade'' can then be reactivated twice within 4 seconds, with each cast refreshing the timer. The second cast strikes enemies in a cone and the third in the target area. There's a 1 second cooldown between each cast.
|icon2         = The Darkin Blade 2.png
|description2 = Each strike deals {{as|physical damage}}, reduced to 40% against {{tip|minions}}. All units take 25% increased damage on the second cast and 50% on the third.
|leveling2    = {{st|First Swing Damage|{{ap|{{#var:b1}} to {{#var:b2}}}} {{as|(+ {{ap|{{#var:r1}} to {{#var:r2}}}}% AD)}}|Second Swing Damage|{{ap|{{#var:b1}}*1.25 to {{#var:b2}}*1.25}} {{as|(+ {{ap|{{#var:r1}}*1.25 to {{#var:r2}}*1.25}}% AD)}}|Third Swing Damage|{{ap|{{#var:b1}}*1.5 to {{#var:b2}}*1.5}} {{as|(+ {{ap|{{#var:r1}}*1.5 to {{#var:r2}}*1.5}}% AD)}}}}
|icon3         = The Darkin Blade 3.png
|description3 = Hitting enemies at the far end of the first two casts and the center of the third deals 50% '''bonus''' damage and {{tip|airborne|knocks up}} enemies for {{fd|0.25}} seconds, doubled to {{fd|0.5}} seconds against {{tip|monsters}}.
|leveling3    = {{st|Amplified First Swing Damage|{{ap|{{#var:b1}}*1.5 to {{#var:b2}}*1.5}} {{as|(+ {{ap|{{#var:r1}}*1.5 to {{#var:r2}}*1.5}}% AD)}}|Amplified Second Swing Damage|{{ap|{{#var:b1}}*1.25*1.5 to {{#var:b2}}*1.25*1.5}} {{as|(+ {{ap|{{#var:r1}}*1.25*1.5 to {{#var:r2}}*1.25*1.5}}% AD)}}|Amplified Third Swing Damage|{{ap|{{#var:b1}}*1.5*1.5 to {{#var:b2}}*1.5*1.5}} {{as|(+ {{ap|{{#var:r1}}*1.5*1.5 to {{#var:r2}}*1.5*1.5}}% AD)}}|Maximum Non-Minion Damage|{{ap|{{#var:b1}}*3.75*1.5 to {{#var:b2}}*3.75*1.5}} {{as|(+ {{ap|{{#var:r1}}*3.75*1.5 to {{#var:r2}}*3.75*1.5}}% AD)}}}}
|target range = {{tt|650|First cast}} / {{tt|525|Second cast}} / {{tt|200|Third cast center}} / {{tt|120|Empowered range offset}}
|width        = {{tt|200|First cast}}
|angle        = {{tt|70{{degree}}|Second cast}}
|effect radius= {{tt|300|Third cast}}
|cast time    = 0.6
|inner radius = 
|cooldown     = {{tt|{{ap|14 to 6}}|Begins on last activated cast}}
|targeting    = Direction
|affects      = Enemies
|damagetype   = Physical
|spellshield  = True
|spelleffects = Area of effect
|projectile   = 
|grounded     = 
|knockdown    = 
|notes        = 
* Each cast of the ''The Darkin Blade'' has a small channel time, during which '''Aatrox''' cannot move and cast abilities, except for {{ai|Umbral Dash|Aatrox}} and {{si|Flash}}.
* All damage modifiers stack multiplicatively.
|yvideo       = Aatrox - Q
}}
`
wikiaSourceToObj(data)

function wikiaSourceToObj(data) {
  console.assert(data.length > 3);
  let obj = new Object();
  const dataSplit = data.trim().slice(2, data.length - 3).split("\n|");
  let isFirstLine = true;
  for (const line of dataSplit) {
    if (isFirstLine) {
      // line === "{{{{{1<noinclude>|Ability data</noinclude>}}}|Terrashape|{{{2|}}}|{{{3|}}}|{{{4|}}}|{{{5|}}}"
      const match = line.match(/noinclude>}}}\|([^|]*)\|/);
      obj["name"] =  match[1];
      console.log("Setting name from to",  match[1]);
      isFirstLine = false;
    } else {
      const parts = line.split('=');
      let key = parts[0].trim().replace(/\W/g, '_');
      let value = parts.slice(1).join('=').trim();
      obj[key] = autoCast(value);
      // console.log("key", key, ", value", value)
    }
  }
  return obj;
}
function autoCast(value) {return value;}