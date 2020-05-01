# Day 2 - JS and CSS Clock
The project provided the elements and styling needed for the clock. The challenge was to write the Javascript code necessary to show the present time.

## Struggles and Lessons Learned
I learned about the difference between `setInterval` and `setTimeout`. 

- **_`setInterval`_** will execute a function _repeatedly_ after a fixed time
- **_`setTimeout`_** will execute a function _only once_ after a fixed time

I struggled a lot with the CSS transition and transform rules. I also learned about the CSS property, `transform-origin`, which changes the point where the element's transformation should be applied.

```css
.hand {
  transform-origin: 100%;
  transform: rotate(90deg);
}
```
By applying `transform-origin`, the `.hand` div elements rotate from the right side of div instead of from the center.
