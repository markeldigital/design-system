ds.tabsFeatureManagementLiability = (function(){
    var scope = {};

    var prefix = ds.prefix + '-tab';
    var selectors = {
        tabsSelector: prefix + "s-management-liability",
        triggerClass: prefix + '-trigger',
        tabContentClass: prefix + '-content',
        triggerCurrentClass: prefix + '-trigger--current',
        closedClass: prefix + '-closed',
        openClass: prefix + '-open'
    };

    scope.desktopTabs = (function(){
        var scope2 = {};
        scope2.makeDefaultTabActiveOnPageLoad = function(tabsSelector, tabTriggerSelector, tabContentSelector) {
            var tabTriggers = document.querySelectorAll(tabsSelector + " " + tabTriggerSelector);
            var tabContentContainers = document.querySelectorAll(tabsSelector + " " + tabContentSelector);

            for (var i = 0; i < tabTriggers.length; i++) {
                if (tabTriggers[i].classList.contains('ds-tab-trigger--current')) {
                    tabContentContainers[i].style.display = "block";
                }
            }
        };

        scope2.hideAllTabs = function(tabContentContainers, tabTriggers) {
            for (var i = 0; i < tabContentContainers.length; i++) {
                tabContentContainers[i].style.display = "none";
            }
            for (var j = 0; j < tabTriggers.length; j++) {
                tabTriggers[j].classList.remove("ds-tab-trigger--current");
            }
        };

        scope2.findClickedTabInParents = function(clickedElement) {
            while (clickedElement.getAttribute('href') === null && clickedElement.parentNode !== null) {
                clickedElement = clickedElement.parentNode;
            }
            return clickedElement;
        };

        scope2.setTabAsActive = function(e) {
            var clickedElement = e.target || e.srcElement;
            var clickedTab = findClickedTabInParents(clickedElement);
            clickedTab.classList.add('ds-tab-trigger--current');
            var contentToShowSelector = clickedTab.getAttribute('href');
            var contentToShow = document.querySelector(contentToShowSelector);
            contentToShow.style.display = "block";
        };

        scope2.switchTabs = function(e, tabsSelector, tabTriggerSelector, tabContentSelector) {
            var tabTriggers = document.querySelectorAll(tabsSelector + " " + tabTriggerSelector);
            var tabContentContainers = document.querySelectorAll(tabsSelector + " " + tabContentSelector);

            hideAllTabs(tabContentContainers, tabTriggers);
            setTabAsActive(e);
        };

        scope2.setupTabsClickHandlers = function(tabsSelector, tabTriggerSelector, tabContentSelector) {
            for (var i = 0; i < document.querySelectorAll(tabTriggerSelector).length; i++) {
                document.querySelectorAll(tabsSelector + " " + tabTriggerSelector)[i].addEventListener('click', function (e) {
                    if (e.preventDefault) {
                        e.preventDefault();
                    } else {
                        e.returnValue = false; // IE8 fallback
                    }
                    switchTabs(e, tabsSelector, tabTriggerSelector, tabContentSelector);
                });
            }
        };

        return scope2;
    })();


    scope.mobileExpanders = (function(){
        var scope2 = {};

        scope2.setupClickHandlers = function(tabsSelector, tabTriggerSelector, tabContentClass, openClass, closedClass){
            for (var i = 0; i < document.querySelectorAll(tabTriggerSelector).length; i++) {
                document.querySelectorAll(tabsSelector + " " + tabTriggerSelector)[i].addEventListener('click', function (e) {
                    if (e.preventDefault) {
                        e.preventDefault();
                    } else {
                        e.returnValue = false; // IE8 fallback
                    }
                    var tabContentElement = e.parentNode.querySelector(tabContentClass);
                    if(tabContentElement.classList.contains(openClass)){
                        tabContentElement.classList.add(closedClass);
                    } else {
                        tabContentElement.classList.add(openClass);
                    }
                });
            }
        };

        return scope2;
    })();

    scope.setup = function(){
        ds.respondToPalmVsLapAndDesk(function(){
            //scope.mobileExpanders.setupClickHandlers(selectors.tabsSelector, selectors.triggerClass, selectors.tabContentClass, selectors.openClass, selectors.closedClass);
        }, function(){
            //scope.desktopTabs.makeDefaultTabActiveOnPageLoad(selectors.tabsSelector, selectors.triggerClass, selectors.tabContentClass);
            //scope.desktopTabs.setupTabsClickHandlers(selectors.tabsSelector, selectors.triggerClass, selectors.tabContentClass);
        });
    };

    return scope;
})();

window.addEventListener("load", function () {
    ds.tabsFeatureManagementLiability.setup();
});
