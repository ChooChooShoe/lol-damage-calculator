
        var config = {
            content: [{
                type: 'row',
                content: [{
                    type: 'component',
                    componentName: 'testComponent',
                    componentState: {
                        label: 'A'
                    }
                }, {
                    type: 'column',
                    content: [{
                        type: 'component',
                        componentName: 'testComponent',
                        componentState: {
                            label: 'B'
                        }
                    }, {
                        type: 'component',
                        componentName: 'testComponent',
                        componentState: {
                            label: 'C'
                        }
                    }]
                }]
            }]
        };
        var myLayout, savedState = localStorage.getItem('GoldenLayout_savedState');

        if (savedState !== null) {
            myLayout = new GoldenLayout(JSON.parse(savedState), $('#layoutContainer'));
        } else {
            myLayout = new GoldenLayout(config, $('#layoutContainer'));
        }

        var addMenuItem = function (text) {
            var element = $('<button>' + text + '</button>');
            $('#menuContainer').append(element);

            //insertion code will go here
        };
        addMenuItem('Spell Q');
        addMenuItem('Spell W');

        myLayout.registerComponent('testComponent', function (container, state) {
            container.getElement().html('<h2>' + state.label + '</h2>');

            // Create the input
            var input = $('<input type="text" />');

            // Set the initial / saved state
            if (state.label) {
                input.val(state.label);
            }

            // Store state updates
            input.on('change', function () {
                container.extendState({
                    label: input.val()
                });
            });

            // Append it to the DOM
            container.getElement().append(input);
        });

        myLayout.on('stateChanged', function () {
            var state = JSON.stringify(myLayout.toConfig());
            localStorage.setItem('GoldenLayout_savedState', state);
        });

        myLayout.init();

        var calc_spell = function (form) {
            var base_magic_damage = parseFloat(form.base_magic_damage.value),
                ap = parseFloat(form.champs_ap.value),
                apscale = parseFloat(form.ap_ratio.value),
                cooldown = parseFloat(form.cooldown.value);



            var percent_pen = form.champs_void_staff.checked ? 0.40 : 0.0;
            var mr = parseFloat(form.target_mr.value) * (1.0 - percent_pen) - parseFloat(form.champs_pen.value);

            var damage = (base_magic_damage + (ap * apscale));
            var dmg_onhit = damage  * (100 / (100 + mr));
            var dmg_dps = dmg_onhit * (1 / cooldown);

            form.dmg_premitigation.value = damage;
            form.dmg_onhit.value = dmg_onhit;
            form.dmg_dps.value = dmg_dps;
        }