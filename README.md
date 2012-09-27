jquery-identify
===============
A jQuery port of Prototype's `identify()`. Some ideas from [a SO answer](http://stackoverflow.com/a/470818/372654).

Basic Usage
-----------

	<div class="etc">Lorem ipsum</div>

	$(".etc").identify();
	// -> anonymous_element_0

	$(".etc").identify({prefix: "my-fancy-pf", pfSeparator: "-"});
	// -> my-fancy-pf-0