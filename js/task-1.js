const categoriesList = document.querySelector('#categories');
console.log(`Numbers of categories: ${categoriesList.children.length}`)
const items = document.querySelectorAll('.item')
items.forEach(element => {
    const categoriesNames = element.querySelector('h2').textContent;
    const categoriesQantity = element.querySelectorAll('li').length;
    console.log(`Category: ${categoriesNames}`);
    console.log(`Elements: ${categoriesQantity}`);
});
