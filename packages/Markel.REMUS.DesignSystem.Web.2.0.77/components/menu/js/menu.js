ds = function(){
    var scope = this;
    scope.keyboard = {
        // Note: only use these with keyup...not keypress. See: http://www.javascripter.net/faq/keycodes.htm
        tab: 9,
        space: 32,
        enter: 13,
        up: 38,
        down: 40,
        left: 37,
        right: 39
    };

    scope.prefix = 'ds';
    scope.selectors = {
        openClass: scope.prefix + '-open',
        closedClass: scope.prefix + '-closed'
    };

    return scope;
}();

ds.menu = function(keyboard, openClass, closedClass){
    var scope = this;

    var prefix = ds.prefix + '-menu';
    var selectors = {
        menuDropdownClass: prefix,
        triggerClass: prefix + '-trigger',
        subMenuClass: prefix + '-items',
        menuItemClass: prefix + '-item',
        closedClass: closedClass,
        openClass: openClass
    };

    scope.closeAllSubMenus = function(){
        var subMenus = document.querySelectorAll('.' + selectors.subMenuClass);
        for(var i=0; i < subMenus.length; i++){
            scope.closeSubMenu(subMenus[i]);
        }
    };

    scope.respondToKeyboard = function(e) {
        if(keyboard.tab) {
            scope.closeAllSubMenus();
            if(e.currentTarget.parentNode.classList.contains(selectors.subMenuClass)){
                scope.openSubMenu(e.currentTarget.parentNode);
            } else if (e.currentTarget.parentNode.classList.contains(selectors.menuDropdownClass)){
                var parentDropdown = e.currentTarget.parentNode;
                var subMenu = parentDropdown.querySelector('.' + selectors.subMenuClass);
                scope.openSubMenu(subMenu);
            }
        }
    };

    scope.closeSubMenu = function(subMenu){
        subMenu.classList.remove(selectors.openClass);
        subMenu.classList.add(selectors.closedClass);
        subMenu.setAttribute('aria-hidden', 'true');
    };

    scope.openSubMenu = function(subMenu){
        subMenu.classList.remove(selectors.closedClass);
        subMenu.classList.add(selectors.openClass);
        subMenu.removeAttribute('aria-hidden');
    };

    scope.toggleSubMenu = function(e) {
        var subMenuID = '#' + e.currentTarget.getAttribute('aria-controls');
        var subMenu = document.querySelector(subMenuID);
        subMenu.classList.contains(selectors.openClass) ? scope.closeSubMenu(subMenu) : scope.openSubMenu(subMenu);
    };

    scope.setupEventHandlersOn = function(trigger, subMenu){
        trigger.onclick = function(e){ scope.toggleSubMenu(e); e.preventDefault(); };
        trigger.onkeyup = subMenu.onkeyup = function(e){ scope.respondToKeyboard(e); };
    };

    scope.setAccessibilityAttributesOn = function(trigger, subMenu, subMenuItems, dropDownSequenceNumber){
        // Show that there is a dropdown to non-visual devices
        trigger.setAttribute('aria-haspopup', 'true');
        subMenu.setAttribute('role', 'menu'); // Marks it as a sub-menu

        // Show which dropdown the trigger controls
        subMenu.setAttribute('id', 'ds-sub-menu-' + dropDownSequenceNumber);
        trigger.setAttribute('aria-controls', 'ds-sub-menu-' + dropDownSequenceNumber);

        // Set trigger to be the label for the dropdown
        trigger.setAttribute('id', 'ds-menu-trigger-' + dropDownSequenceNumber);
        subMenu.setAttribute('aria-labelledby', 'ds-menu-trigger-' + dropDownSequenceNumber);

        for (var j=0; j < subMenuItems.length; j++) {
            subMenuItems[j].setAttribute('role', 'menuitem');
        }
    };

    scope.setup = function(){
        var dropdowns = document.querySelectorAll('.' + selectors.menuDropdownClass);
        for(var i=0; i < dropdowns.length; i++){
            var trigger = dropdowns[i].querySelector('.' + selectors.triggerClass);
            var subMenu = dropdowns[i].querySelector('.' + selectors.subMenuClass);
            var subMenuItems = subMenu.querySelectorAll('.' + selectors.menuItemClass);

            scope.closeAllSubMenus();
            scope.setAccessibilityAttributesOn(trigger, subMenu, subMenuItems, i);
            scope.setupEventHandlersOn(trigger, subMenu);
        }
    };

    return scope;
}(ds.keyboard, ds.selectors.openClass, ds.selectors.closedClass);

ds.menu.setup();
