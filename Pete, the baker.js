/* Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. 
Can you help him to find out, how many cakes he could bake considering his recipes?

Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). 
For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). 
Ingredients that are not present in the objects, can be considered as 0. */

cakes({flour: 500, sugar: 200, eggs: 1, meat: 11}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200})

function cakes(recipe, available) {
    let arr = [];
for (v in recipe) {
        if (!Object.hasOwn(available, v)) {
         return 0;
        } else {
        arr.push(available[v] / recipe[v])
        } 
}   
return Math.floor(Math.min(...arr))
}

   
