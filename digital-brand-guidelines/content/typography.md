+++
date = "2015-12-21T14:40:11Z"
title = "Typography"

+++
<div class="design-system-library-screen">
<div class="typography-hierarchy">
<h3 class="design-system-headline">Typography hierarchy</h3>
<p>Our typography scales according to the screen size. We have several scales to suit different needs.</p>
<p class="design-system-dev-notes"><strong>Developer notes:</strong> always use plain tag names such as <code>&lt;h1&gt;</code> or the <code>@include set-text-as()</code> mixin...never define typography for yourself. The class names used in the markup here will not work outside of this page.</p>

<h3>The Regular typography scale. Please use these in preference over the reduced versions.</h3>
<!-- Tech notes: The size of text is not tied to the HTML element but you should use an appropriate html tag eg. an H1 for main page headers. -->
<!-- Tech notes: Set the size of text using Sass mixins not using these class names -->
<div class="panel-inverse">
<p class="jumbo">Jumbo</p>
<p class="alpha">Largest (Alpha)</p>
<p class="beta">Large (Beta)</p>
<p class="gamma">Medium (Gamma)</p>
<p class="delta">Smaller than medium. Standard body content text size (Delta/Body)</p>
<p class="epsilon">Small (epsilon)</p>
</div>

<h3>The reduced scale. Only use these if one of the sizes above is not appropriate. In general we prefer using the regular scale.</h3>
<div class="panel-inverse">
<p class="jumbo reduced">Jumbo</p>
<p class="alpha reduced">Largest (Alpha)</p>
<p class="beta reduced">Large (Beta)</p>
<p class="gamma reduced">Medium (Gamma)</p>
<p class="delta reduced">Smaller than medium. Standard body content text size (Delta/Body)</p>
<p class="epsilon reduced">Small (epsilon)</p>
</div>


<h3>The weak hierarchy. Use this where you need <span class="gamma weak">contrast</span> with surrounding copy. Use this to make the type recede and appear less important than surrounding text of the same size.</h3>
<div class="panel-inverse">
<p class="jumbo weak">Jumbo</p>
<p class="alpha weak">Largest (Alpha)</p>
<p class="beta weak">Large (Beta)</p>
<p class="gamma weak">Medium (Gamma)</p>
<p class="delta weak">Smaller than medium. Standard body content text size (Delta/Body)</p>
<p class="epsilon weak">Small (epsilon)</p>
</div>


<h3>The strong hierarchy. Use this where you need <span class="gamma strong">contrast</span> with surrounding copy. Use this make the type stand out and appear more important than surrounding text of the same size.</h3>
<div class="panel-inverse">
<p class="jumbo strong">Jumbo</p>
<p class="alpha strong">Largest (Alpha)</p>
<p class="beta strong">Large (Beta)</p>
<p class="gamma strong">Medium (Gamma)</p>
<p class="delta strong">Smaller than medium. Standard body content text size (Delta/Body)</p>
<p class="epsilon strong">Small (epsilon)</p>
</div>

<h3>The typography scales all together to show the contrast.</h3>
<div class="panel-inverse">
<p class="jumbo">Regular<span class="jumbo strong">Strong</span><span class="jumbo weak">Weak</span></p>
<p class="alpha">Regular<span class="alpha strong">Strong</span><span class="alpha weak">Weak</span></p>
<p class="beta">Regular<span class="beta strong">Strong</span><span class="beta weak">Weak</span></p>
<p class="gamma">Regular<span class="gamma strong">Strong</span><span class="gamma weak">Weak</span></p>
<p class="delta">Regular<span class="delta strong">Strong</span><span class="delta weak">Weak</span></p>
<p class="epsilon">Regular<span class="epsilon strong">Strong</span><span class="epsilon weak">Weak</span></p>
</div>
</div>
</div>