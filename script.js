const categoryContainer = document.getElementById("categoryContainer");
const cardContainer = document.getElementById("cardContainer");
const modalContainer = document.getElementById("modalContainer");
const cartContainer = document.getElementById("cartContainer");
const priceContainer = document.getElementById("priceContainer");
const totalPriceEl = document.getElementById("totalPrice");
let totalPrice = 0;
const loadingSpinner = document.getElementById("loadingSpinner");
const allItem = document.getElementById("allItem");

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

// Load All Plants
const loadAllPlants = () => {
  manageSpinner(true);
  fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((data) => displayAllPlants(data.plants));
};
// Display all Plants
const displayAllPlants = (allPlants) => {
  cardContainer.innerHTML = "";
  allPlants.forEach((plant) => {
    cardContainer.innerHTML += `
      <div class="bg-white p-2 rounded space-y-2 flex flex-col justify-between">
        <img class="w-full h-52 object-cover rounded" src="${plant.image}" alt="tree image" />
        <button onclick="loadPlantDetails(${plant.id})" class='font-semibold'>${plant.name}</button>
        <p class='text-sm'>${plant.description}</p>
        <div class="flex justify-between items-center">
          <button class=" bg-[#bed9c7] text-green-800 text-sm p-1 md:py-2 px-3 rounded-3xl">${plant.category}</button>
          <p><i class="fa-solid fa-bangladeshi-taka-sign"></i><span>${plant.price}</span></p>
        </div>
        <button class="w-full bg-green-800 text-white p-2 rounded-2xl">Add to Cart</button>
      </div>
    `;
  });
  manageSpinner(false);
};



