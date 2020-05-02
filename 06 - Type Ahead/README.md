# Day 6 - Type Ahead
This challenge required fetching data and highlighting the matching text provided by the user through the `input` element.

## Struggles and Lessons Learned
I had a hard time displaying the matched data on the DOM. I realized my mistake was trying to put everything into one function which was using the `Array.prototype.filter()` method on the data. I learned that both steps needed to be separated since I would need to use the `Array.prototype.map()` method through the returned filtered array. 

I also struggled with reaching for the matched data. My solution was to call the `wordMatch()` function from the event listener, put it in a `const` variable called `matchedCity`, and use the `Array.prototype.map()` method through the contents of the variable. I attached this to another variable called `listItems` and updated `suggestions.innerHTML`.

This challenge allowed me to practice using the `WindowOrWorkerGlobalScope.fetch()`, `Array.prototype.filter()`, `Array.prototype.map()`, and `Array.prototype.join()` methods.
