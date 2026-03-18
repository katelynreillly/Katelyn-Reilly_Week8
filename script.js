const menuItems = ["Latte", "Espresso", "Green Tea", "Muffin", "Iced Coffee"];

const menuList = document.getElementById("menu-list");

// Display menu items
menuItems.forEach(function(item) {
  const li = document.createElement("li");
  li.textContent = item;
  menuList.appendChild(li);
});

// Daily special feature
const button = document.getElementById("show-special");
const display = document.getElementById("daily-special");

button.addEventListener("click", () => {
  const randomItem = menuItems[Math.floor(Math.random() * menuItems.length)];
  display.textContent = `Today's Special: ${randomItem}`;
});
