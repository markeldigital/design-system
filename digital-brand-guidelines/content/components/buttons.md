+++
date = "2015-12-21T14:41:07Z"
title = "Buttons"

+++

<button class="button-style-primary button--size-alpha">Primary</button>
<button class="button-style-secondary button--size-alpha">Secondary</button>
<button class="button-style-primary-subtle button--size-alpha">Primary subtle</button>
<button class="button-style-secondary-subtle button--size-alpha">Secondary subtle</button>
<button class="button-style-subtle button--size-alpha">Subtle</button>
<button class="button-style-subtle-2 button--size-alpha">Subtle 2</button>
<button class="button-style-link button--size-alpha">Link</button>

<button class="button-style-primary button--size-alpha hover">Primary</button>
<button class="button-style-secondary button--size-alpha hover">Secondary</button>
<button class="button-style-primary-subtle button--size-alpha hover">Primary subtle</button>
<button class="button-style-secondary-subtle button--size-alpha hover">Secondary subtle</button>
<button class="button-style-subtle button--size-alpha hover">Subtle</button>
<button class="button-style-subtle-2 button--size-alpha hover">Subtle 2</button>
<button class="button-style-link button--size-alpha hover">Link</button>

<button class="button-style-primary button--size-alpha active">Primary</button>
<button class="button-style-secondary button--size-alpha active">Secondary</button>
<button class="button-style-primary-subtle button--size-alpha active">Primary subtle</button>
<button class="button-style-secondary-subtle button--size-alpha active">Secondary subtle</button>
<button class="button-style-subtle button--size-alpha active">Subtle</button>
<button class="button-style-subtle-2 button--size-alpha active">Subtle 2</button>
<button class="button-style-link button--size-alpha active">Link</button>

<button class="button-style-primary button--size-alpha" disabled="">Primary</button>
<button class="button-style-secondary button--size-alpha" disabled="">Secondary</button>
<button class="button-style-primary-subtle button--size-alpha" disabled="">Primary subtle</button>
<button class="button-style-secondary-subtle button--size-alpha" disabled="">Secondary subtle</button>
<button class="button-style-subtle button--size-alpha disabled" disabled="">Subtle</button>
<button class="button-style-subtle-2 button--size-alpha" disabled="">Subtle 2</button>
<button class="button-style-link button--size-alpha" disabled="">Link</button>

<h2>Icon buttons</h2>

<button class="button-style-secondary button--size-alpha button--icon-right">Beta button with icon right<i class="icon-cross"></i></button>
<button class="button-style-secondary button--size-alpha button--icon-left"><i class="icon-cross"></i>Beta button with icon left</button>
<button class="button-style-secondary button--size-alpha button--icon-right button--icon-loading active">Alpha button with loading icon<i class="icon-cross"></i></button>


<h2>Button sizes</h2>

<button class="button-style-primary button--size-alpha">Primary style alpha size</button><br /><br />
<button class="button-style-primary button--size-jumbo">Primary style jumbo size</button>

<h2>Full width buttons</h2>

<p>
<button class="button-style-primary button-style-primary--block button--size-alpha">Primary</button>
<button class="button-style-secondary button-style-secondary--block button--size-alpha">Secondary</button>
<button class="button-style-primary-subtle button-style-primary-subtle--block button--size-alpha">Primary subtle</button>
<button class="button-style-secondary-subtle button-style-secondary-subtle--block button--size-alpha">Secondary subtle</button>
<button class="button-style-subtle button-style-subtle--block button--size-alpha">Subtle</button>
<button class="button-style-subtle-2 button-style-subtle-2--block button--size-alpha">Subtle 2</button>
<button class="button-style-link button-style-link--block button--size-alpha">Link</button>
</p>

<p>Buttons are used within the platform to take the user forward through the process and also to provide ways out if they come to a dead-end within a process (e.g. they are missing client information, or need to check the price with their client). There are 3 types of button used within the platform:</p>
<ol>
<li>Next button</li>
<li>Back button</li>
<li>Other button</li>
</ol>
<h2>Next button</h2>
<p>The next button is the primary button on each page, there should only be one of these. It takes the user to the next step of the process they are currently in.</p>
<div class="split-actions">
<button class="button-style-secondary button--size-alpha button--icon-right last-action">Instant quote<i class="icon-angle-right"></i></button>
</div>
<ul>
<li>Only one next button is allowed per page</li>
<li>The next button is the only button which is allowed to use the ‘&gt;’ icon</li>
<li>The next button is usually an action (see below)</li>
<li>The next button is only a view if the page is in an historical read only state and the button returns the user to the current active state (see below)</li>
<li>The next button always appears on the right side of the action bar</li>
</ul>
<h2>Back button</h2>
<p>The back button provides the user a way to go back to the previous step of the process. Whether a back button is present depends on the state of the quote or policy and the current page being displayed.</p>
<div class="split-actions">
<button class="button-style-secondary button--size-alpha button--icon-left first-action"><i class="icon-angle-left"></i>Disclosure questions</button>
</div>
<ul>
<li>Back buttons should always appear on the left side of the action bar</li>
<li>There is only one back button allowed per page</li>
<li>Back button labels should include the name of the page they are returning to</li>
<li>A back button is a view, never an action (see below)</li>
</ul>
<h2>Other button</h2>
<p>The other button provides a link to other useful pages if they are relevant to the state of the quote or policy and the current page.</p>
<ul>
<li>Other buttons can be actions or views</li>
<li>Other buttons should appear on the left side of the action bar after the back button (if present)</li>
</ul>
<h2>General usage rules</h2>
<p>The following rules should be followed for all buttons:</p>
<ul>
<li>There should be no more than 3 buttons within the action bar at the end of a page</li>
<li>There should only be 1 next button per page</li>
<li>Keep the button label as short as possible, 2 or 3 words is more than enough</li>
<li>Button labels should be written in sentence case</li>
<li>The ‘&gt;’ icon should only be used for a next button</li>
</ul>
<h2>Actions versus views</h2>
<p>A button can either be an action or a view depending on the outcome of clicking. An action actually performs a task (e.g. start a new quote or bind a policy) a view takes the user to another page (e.g. viewing all quotes and policies or viewing the disclosure questions for an existing quote).</p>
<ul>
<li>Actions always start with a action word that describes the action that will happen, e.g. Bind, New, Start, Confirm, Change. Followed by a description of the outcome, e.g. quote, policy.</li>
<li>Views only ever contain the name of page to be viewed, never containing an action</li>
</ul>
<p><strong>Examples:</strong></p>
<p>Get quote NOT Submit</p>
<p>Application NOT View disclosure answers</p>
<p>All quotes &amp; policies NOT All Quotes and Policies</p>


