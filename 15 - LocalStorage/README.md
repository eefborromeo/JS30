# Day 15 - LocalStorage
The exercise involved building a simulated restuarant menu. Users should be able to add new dishes to the list without having to refresh the page. This exercise involved using `localStorage` so that when the page refreshes, the previously entered dishes would remain on the page.

## Struggles and Lessons Learned
I struggled returning the list items consecutively in the plates section because I did not attach the `Array.prototype.join()` method, which would concatenate the array into a string. Through this exericse I learned that forms have a built-in `HTMLFormElement.reset()` method which restores the form back to it's default value.
