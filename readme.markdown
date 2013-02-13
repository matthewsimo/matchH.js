#matchH

matchH is a simple little jQuery plugin that does what you might think,
& behaves how you might hope - ultimately it just matches element's heights.
It'll take an element or set of elements & set it's (or their) height
to a target element, or the tallest of the element's passed to it.

## Quick Example

$('#some_element').matchH('#target_element');

It's that easy! You might find it easier to "read" that line as: 
"Get #some_element and Match Height to #target_element."

## Another Quick Example

$('#item1, #item2, #item3, ..., #itemN').matchH();

This tells matchH to get all the items, and test for max height,
then apply that max height to all items in that collection.

## & One to Grow On

$('#item1, #item2, #item3, ..., #itemN').matchH('#target_element');

This tells matchH to get all the items, and apply #target_element's height
to the list of elements.

### See the code in demo for a closer look at an actual working example.


#### Caveats & Plans

If you tell matchH to apply the passed element's height to a target's height value,
but the target's height isn't tall enough to support an item in the list, matchH will
(and by will - I mean **should**) fallback to the tallest item in the list.

Future Plans:
- Support for multiple targets
- Speed/optimization testing
- Actually minify legitimately
- Maybe adding options to fine tune how matchH works (big maybe here) 
