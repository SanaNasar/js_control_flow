var data = require("./products.json")
var items = data['items'];

// Question 1:
// Find all results that have 'kind' of 'shopping#product'

var instances = 0;

for (i = 0; i < items.length; i += 1) {
if (items[i]['kind'] === 'shopping#product') {
instances += 1;
	}
 }

	console.log(instances);

// Question 2:
// Find all items with a 'backorder' availability in 'inventories'

var backorder = 0;
for (i = 0; i < items.length; i += 1) {
if (items[i]['product']['inventories'][0]['availability'] === 'backorder') {
	backorder += 1;
}
}
console.log(backorder);

// Question 3:
// Find all items with a 'backorder' availability in 'inventories'

var imageLink = 0;
for (i = 0; i < items.length; i += 1) {
if (items[i]['product']['images'].length > 1) {
	imageLink += 1;
}
 
}
console.log(imageLink);

// Question 4:
// Find all canon products in the items

var can = 0;
for (i = 0; i < items.length; i += 1) {
if (items[i]['product']['brand'] === 'Canon') {
	can += 1;
}
 
}
console.log(can);

// Question 5:
// Find all items that have the product author name 'eBay' and the brand 'Canon'

var ebayCanonProducts = 0;

for (i = 0; i < items.length; i += 1) {
	if (items[i]['product']['author']['name'] === 'eBay' && items[i]['product']['brand'] === 'Canon') {
		console.log(items[i]);
		ebayCanonProducts += 1;
	}
}
console.log(ebayCanonProducts + ' item has the product author name eBay and the brand Canon.');

// Question 6:
// Print all the products with their brand, price, and an image link

for (i = 0; i < items.length; i += 1) {
	console.log((i + 1) + '.');
	console.log('Brand: '+ items[i]['product']['brand']);
	console.log('Price: $'+ items[i]['product']['inventories'][0]['price']);
	console.log('Image link: ' + items[i]['product']['images'][0]['link']);








 



