# Practice Problems: Traversing and Accessing Attributes

## Exercise 5

Use [this Wikipedia page](https://en.wikipedia.org/wiki/Polar_bear).

Count the images on the page, then count the PNG images. Log both results.

### Answer

```
var images = [];
var pngImages = [];
walk(document, function(node) {
    if (node.nodeName === 'IMG') {
        images.push(node);
    }
});
images.forEach(function(image) {
  var imageType = image.src.split('.').reverse()[0];
  if (imageType.toLowerCase() === 'png') {
    pngImages.push(image);
  }
});
console.log(images.length);
console.log(pngImages.length);
```
