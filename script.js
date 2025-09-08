// Load Categories
const loadCategory = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((data) => displayCategory(data.categories));
};
// Display Category
const displayCategory = (categories) => {
  categories.forEach((category) => {
    categoryContainer.innerHTML += `
      <li id="${category.id}" class="hover:bg-green-600 hover:text-white p-1">${category.category_name}s</li>
    `;
  });
};