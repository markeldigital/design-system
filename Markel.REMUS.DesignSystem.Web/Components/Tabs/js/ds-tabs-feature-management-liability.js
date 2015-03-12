ds.tabsFeatureManagementLiability = (function(){
    var scope = {};

    var prefix = ds.prefix + '-tab';
    var selectors = {
        tabsModuleClass: prefix + "s-management-liability",
        triggerClass: prefix + '-trigger',
        tabContentClass: prefix + '-content'
    };

    scope.desktopTabs = (function(){
        var scope2 = {};

        scope2.findFirstTabsModule = function(){
            return document.querySelectorAll('.' + selectors.tabsModuleClass)[0];
        };

        scope2.findAllTabs = function(){
            return scope2.findFirstTabsModule().querySelectorAll('.' + selectors.triggerClass);
        };

        scope2.findTabNumber = function(tabNumber){
            return scope2.findFirstTabsModule().querySelectorAll('.' + selectors.triggerClass)[tabNumber];
        };

        scope2.findTabContentForTabNumber = function(tabNumber){
            return scope2.findFirstTabsModule().querySelectorAll('.' + selectors.tabContentClass)[tabNumber];
        };

        scope2.hideTabNumber = function(tabNumber){
            scope2.findTabNumber(tabNumber).classList.remove('ds-tab-trigger--current');
            scope2.findTabContentForTabNumber(tabNumber).classList.remove('ds-tab-content--current');
        };

        scope2.showTabNumber = function(tabNumber){
            scope2.findTabNumber(tabNumber).classList.add('ds-tab-trigger--current');
            scope2.findTabContentForTabNumber(tabNumber).classList.add('ds-tab-content--current');
        };

        scope2.showTab = function(tab){
            tab.classList.add('ds-tab-trigger--current');
            var contentToShowSelector = tab.getAttribute('href');
            var contentToShow = document.querySelector(contentToShowSelector);
            contentToShow.classList.add('ds-tab-content--current');
        };

        scope2.makeFirstTabActive = function() {
            scope2.showTabNumber(0);
        };

        scope2.hideAllTabs = function() {
            var tabTriggers = scope2.findAllTabs();
            for (var i = 0; i < tabTriggers.length; i++) {
                scope2.hideTabNumber(i);
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
            var clickedTab = scope2.findClickedTabInParents(clickedElement);
            scope2.showTab(clickedTab);
        };

        scope2.toggleTab = function(e, tabsModuleClass, tabTriggerClass, tabContentClass) {
            scope2.hideAllTabs();
            scope2.setTabAsActive(e);
        };

        scope2.handleClick = function (e) {
            e.preventDefault ? e.preventDefault() : e.returnValue = false /* IE8 fallback */;
            scope2.toggleTab(e, selectors.tabsModuleClass, selectors.triggerClass, selectors.tabContentClass);
        };

        scope2.setupTabsClickHandlers = function() {
            for (var i = 0; i < scope2.findAllTabs().length; i++) {
                scope2.findTabNumber(i).addEventListener('click', scope2.handleClick);
            }
        };

        return scope2;
    })();


    scope.mobileExpanders = (function(){
        var scope2 = {};

        var openClass = 'ds-palm-tabs--open';
        var trigger = 'ds-tab-trigger';
        var triggeredContent = 'ds-tab-content';

        scope2.toggleExpander = function(tabTrigger){
            var tabContentElement = tabTrigger.parentNode.querySelector('.' + triggeredContent);
            if(tabTrigger.classList.contains(openClass)){
                tabTrigger.classList.remove(openClass);
                tabContentElement.classList.remove(openClass);
            } else {
                tabTrigger.classList.add(openClass);
                tabContentElement.classList.add(openClass);
            }
        };

        scope2.handleClick = function(e){
            e.preventDefault ? e.preventDefault() : e.returnValue = false /* IE8 fallback */;
            scope2.toggleExpander(e.currentTarget);
        };

        scope2.setupClickHandlers = function(tabsModuleClass, tabTriggerClass){
            for (var i = 0; i < document.querySelectorAll('.' + tabTriggerClass).length; i++) {
                document.querySelectorAll('.' + tabsModuleClass + " " + '.' + tabTriggerClass)[i].removeEventListener('click', scope2.handleClick); // remove any pre-existing events
                document.querySelectorAll('.' + tabsModuleClass + " " + '.' + tabTriggerClass)[i].addEventListener('click', scope2.handleClick);
            }
        };

        return scope2;
    })();

    scope.setup = function(){
        var moduleOccursOnThisPage = document.querySelectorAll('.' + selectors.tabsModuleClass).length > 0;
        if(moduleOccursOnThisPage){
            ds.respondToPalmVsLapAndDesk(function(){
                scope.mobileExpanders.setupClickHandlers(selectors.tabsModuleClass, selectors.triggerClass);
            }, function(){
                scope.desktopTabs.makeFirstTabActive(selectors.tabsModuleClass, selectors.triggerClass, selectors.tabContentClass);
                scope.desktopTabs.setupTabsClickHandlers(selectors.tabsModuleClass, selectors.triggerClass, selectors.tabContentClass);
            });
        }
    };

    return scope;
})();

window.addEventListener("load", function () {
    ds.tabsFeatureManagementLiability.setup();
});
window.addEventListener("resize", function () {
    ds.tabsFeatureManagementLiability.setup();
});