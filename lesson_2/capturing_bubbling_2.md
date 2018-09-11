# Capturing and Bubbling (2)

## Problem 1

### Answer

Two event listeners, both attached to `div#elem1`, fire during the bubbling phase when `main#elem4` is clicked. The first creates an alert showing the `target` element (`main`), the second creates and alert showing the `currentTarget` (`div`) that the event listener is attached to.

## Problem 2

### Answer

Two event listeners, both attached to `div#elem1`, fire when `main#elem4` is clicked.

  1. The first fires during the `capturing` phase, since `useCapture` param of that listener is set to `true`. This creates an alert which says `'capturing'`.
  2. The second fires during the `bubbling` phase. This creates an alert which says `'bubbling'`.

## Problem 3

### Answer

Four event listeners will fire:

  1. The event listener attached to `div#elem1` will fire on the bubbling phase when `div#elem1` is clicked. This will create an alert with the `target.tagName`, but the `setTimeout` will delay this by 7 seconds.
  2. The event listener attached to `document` will fire on the bubbling phase when the `q` is pressed (note this key can be pressed anywhere, it doesn't need to be in the input box). This will create an alert with the `code` property of the `keypress` event object, but the `setTimeout` will delay this by 7 seconds.
  3. The event listener attached to `document` will fire on the bubbling phase when the `w` is pressed (note this key can be pressed anywhere, it doesn't need to be in the input box). This will create an alert with the `code` property of the `keypress` event object, but the `setTimeout` will delay this by 7 seconds.
  1. The event listener attached to `div#elem1` will fire on the bubbling phase when `main#elem4` is clicked. This will create an alert with the `target.tagName`, but the `setTimeout` will delay this by 7 seconds.
