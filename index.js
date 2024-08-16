// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta", "Crumbed Mushrooms"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara", "Cheddermelt Steak"],
    Desserts: ["Tiramisu", "Cheesecake", "Brownie"]
};

// Function to display menu items by category
function displayMenuItems(menu) {
    // Get the menu container element from the HTML
     const menuContainer = document.getElementById('menu');
     if (!menuContainer){
        console.error('Menu container not found');
        return
     }

    // Loop through each category and its items in the menu object      
    for (const category in menu) {
        // Create an element to represent the category
        const categoryElement = document.createElement('h3');
        categoryElement.textContent = category;
        menuContainer.appendChild(categoryElement);

        // Create an element to represent a list of items
        const itemList = document.createElement('ul');
        // Append a list of items element to the menu container
        //menuContainer.appendChild(listElement);

        // Loop through the items in the category and create list items
            menu[category].forEach(item => {
                // Create a list item element
                const listItem = document.createElement('li');
                // Set the text content of the list item element to the item name
                listItem.textContent = item;
                // Attach a click event listener to the list item to add it to the order
                listItem.addEventListener('click', () => addToOrder(item));
                // Append the list item to the list of items
                itemList.appendChild(listItem);
            });
    };
    
          
}

// Callback function for adding an item to the order
function addToOrder(itemName) {
    // Get the order items list and the order total element from the HTML
    const orderItems = document.getElementById('order-items');
    const orderTotalElement = document.getElementById('order-total');

    // Create a list item for the order
    const orderItem = document.createElement('li');
    // Set the text content of the list item to the item name
    orderItem.textContent = itemName;
    // Append the list item to the order items list
    orderItems.appendChild(orderItem);
    // Item prices
    const prices = {
        "Garlic Bread": 25,
        "Bruschetta": 30,
        "Crumbed Mushrooms": 40,
        "Margherita Pizza": 50,
        "Spaghetti Carbonara": 65,
        "Cheddermelt Steak": 105,
        "Tiramisu": 40,
        "Cheesecake": 45,
        "Brownie": 30,
    }
    // Calculate and update the total price
    const price = 10.00;
    const currentTotal = parseFloat(orderTotalElement.textContent);
    const newTotal = currentTotal + price;

    // Update the text content of the order total element with the new total
    orderTotalElement.textContent = newTotal.toFixed(2);
}

// Function to initialize the menu system
function initMenuSystem(menu) { 
    displayMenuItems(menu); // Call the function to display menu items
}

// Start the menu system by calling the init function
initMenuSystem(menu);
