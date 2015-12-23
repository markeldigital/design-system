+++
date = "2015-12-21T14:41:07Z"
title = "Menus"

+++
        <p>Drop-downs that are flexible enough to work with different types of call-to-action (links buttons etc)</p>

<h3>Plain menus make them more flexible</h3>
<p>By default, menus do not have a styled trigger. This makes it easier to give the trigger whatever style you need. Also, the dropdown contents fill the full width of their parent container.</p>
<div class="ds-menu" tabindex="-1">
<a class="ds-menu-trigger" href="" aria-haspopup="true" aria-controls="ds-sub-menu-4" id="ds-menu-trigger-4"><span>Menu</span><i class="icon-caret-down"></i></a>
<ul class="ds-menu-items" role="menu" id="ds-sub-menu-4" aria-labelledby="ds-menu-trigger-4">
<li class="ds-menu-item" role="menuitem">
<a href="#">
<span>An action</span>
</a>
</li>
<li class="ds-menu-item" role="menuitem">
<a href="#">
<span>An action</span>
</a>
</li>
</ul>
</div>

<h3>Adding sensible defaults</h3>
<p>If you want sensible default styles you can style the trigger by using a class on the trigger called 'ds-menu-trigger--style'. You can also make the menu only as wide as it's contents when it opens by making it's parent display inline-block.</p>
<div style="display: inline-block">
<div class="ds-menu" tabindex="-1">
<a class="ds-menu-trigger ds-menu-trigger--style" href="" aria-haspopup="true" aria-controls="ds-sub-menu-5" id="ds-menu-trigger-5"><span>Menu</span><i class="icon-caret-down"></i></a>
<ul class="ds-menu-items" role="menu" id="ds-sub-menu-5" aria-labelledby="ds-menu-trigger-5">
<li class="ds-menu-item" role="menuitem">
<a href="#">
<span>An action</span>
</a>
</li>
<li class="ds-menu-item" role="menuitem">
<a href="#">
<span>An action</span>
</a>
</li>
</ul>
</div>
</div>

<h3>Use anything as a trigger</h3>
<p>You can use anything pretty much as the trigger. For example, a button.</p>
<nav>
<ul>
<li class="ds-menu" tabindex="-1">
<a class="ds-menu-trigger button-style-primary button--size-alpha button--icon-right" href="" aria-haspopup="true" aria-controls="ds-sub-menu-6" id="ds-menu-trigger-6"><span>File</span><i class="icon-caret-down"></i></a>
<ul class="ds-menu-items" role="menu" id="ds-sub-menu-6" aria-labelledby="ds-menu-trigger-6">
<li class="ds-menu-item" role="menuitem">
<a href="#">
<span>New</span>
</a>
</li>
<li class="ds-menu-item" role="menuitem">
<a href="#">
<span>Open</span>
</a>
</li>
<li class="ds-menu-item" role="menuitem">
<a href="#">
<span>Save</span>
</a>
</li>
</ul>
</li>
<li class="ds-menu" tabindex="-1">
<a class="ds-menu-trigger button-style-secondary button--size-alpha button--icon-right" href="" aria-haspopup="true" aria-controls="ds-sub-menu-7" id="ds-menu-trigger-7"><span>Edit</span><i class="icon-caret-down"></i></a>
<ul class="ds-menu-items" role="menu" id="ds-sub-menu-7" aria-labelledby="ds-menu-trigger-7">
<li class="ds-menu-item" role="menuitem">
<a href="#">
<span>Cut</span>
</a>
</li>
<li class="ds-menu-item" role="menuitem">
<a href="#">
<span>Copy</span>
</a>
</li>
<li class="ds-menu-item" role="menuitem">
<a href="#">
<span>Paste</span>
</a>
</li>
</ul>
</li>
<li class="ds-menu" tabindex="-1">
<a class="ds-menu-trigger button-style-subtle-2 button--size-alpha button--icon-right" href="" aria-haspopup="true" aria-controls="ds-sub-menu-8" id="ds-menu-trigger-8"><span>View</span><i class="icon-caret-down"></i></a>
<ul class="ds-menu-items" role="menu" id="ds-sub-menu-8" aria-labelledby="ds-menu-trigger-8">
<li class="ds-menu-item" role="menuitem">
<a href="#">
<span>An action</span>
</a>
</li>
<li class="ds-menu-item" role="menuitem">
<a href="#">
<span>An action</span>
</a>
</li>
</ul>
</li>
</ul>
</nav>
<p>Also, menus can be combined with the menu bar component.</p>