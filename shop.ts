/*function add(num1: number, num2: number): number {
    return num1 + num2;
  }
  
  // Example usage:
  const result = add(5, 3); // This will return 8
  console.log(result); // Output: 8*/
  /*function checkEvenOrOdd(num: number): string {
    if (num % 2 === 0) {
      return `${num} is even`;
    } else {
      return `${num} is odd`;
    }
  }

  
  // Example usage:
  console.log(checkEvenOrOdd(5)); // Output: "5 is odd"
  console.log(checkEvenOrOdd(10)); // Output: "10 is even"
  */
  /*function calculateArea(length: number, width: number): number {
    return length * width;
  }
  
  // Example usage:
  const length = 5;
  const width = 10;
  const area = calculateArea(length, width);
  console.log(`The area of the rectangle with length ${length} and width ${width} is: ${area}`);*/
  /*interface Item {
    name: string;
    price: number;
    availableQuantity: number;
  }
  
  class ShoppingCart {
    items: Item[];
  
    constructor() {
      this.items = [];
    }
  
    addItem(item: Item, quantity: number) {
      if (item.availableQuantity >= quantity) {
        const index = this.items.findIndex((i) => i.name === item.name);
        if (index !== -1) {
          this.items[index].availableQuantity -= quantity;
        } else {
          const newItem = { ...item };
          newItem.availableQuantity = quantity;
          this.items.push(newItem);
        }
        console.log(`${quantity} ${item.name}(s) added to the cart.`);
      } else {
        console.log(`Sorry, only ${item.availableQuantity} ${item.name}(s) available.`);
      }
    }
  
    removeItem(itemName: string, quantity: number) {
      const index = this.items.findIndex((item) => item.name === itemName);
      if (index !== -1) {
        if (this.items[index].availableQuantity >= quantity) {
          this.items[index].availableQuantity += quantity;
          console.log(`${quantity} ${itemName}(s) removed from the cart.`);
        } else {
          console.log(`You don't have ${quantity} ${itemName}(s) in your cart.`);
        }
      } else {
        console.log(`${itemName} is not in your cart.`);
      }
    }
  
    getTotalPrice(): number {
      let totalPrice = 0;
      this.items.forEach((item) => {
        totalPrice += item.price * (item.availableQuantity || 0);
      });
      return totalPrice;
    }
  
    displayCart() {
      console.log("Items in your cart:");
      this.items.forEach((item) => {
        console.log(`${item.availableQuantity} ${item.name}(s) - $${item.price} each`);
      });
      console.log(`Total price: $${this.getTotalPrice()}`);
    }
  }
  
  // Sample items
  const items: Item[] = [
    { name: "Shirt", price: 20, availableQuantity: 10 },
    { name: "Jeans", price: 35, availableQuantity: 5 },
    { name: "Shoes", price: 50, availableQuantity: 8 },
  ];
  
  // Create a shopping cart
  const cart = new ShoppingCart();
  
  // Adding items to the cart
  cart.addItem(items[0], 2);
  cart.addItem(items[1], 1);
  cart.addItem(items[2], 3);
  
  // Displaying the cart
  cart.displayCart();
  
  // Removing items from the cart
  cart.removeItem("Shirt", 1);
  cart.removeItem("Socks", 2);
  
  // Displaying the cart after removal
  cart.displayCart();*/
  /*interface Item {
    name: string;
    price: number;
  }
  
  // Function to simulate buying groceries
  function buyGroceries(choice: string): number {
    const fruits: Item[] = [
      { name: 'Apple', price: 2 },
      { name: 'Banana', price: 1.5 },
      { name: 'Orange', price: 3 },
    ];
  
    const vegetables: Item[] = [
      { name: 'Carrot', price: 1.8 },
      { name: 'Tomato', price: 2.5 },
      { name: 'Spinach', price: 2 },
    ];
  
    let totalBill = 0;
  
    if (choice === 'fruits') {
      console.log('Available fruits:');
      fruits.forEach((fruit) => console.log(`${fruit.name}: $${fruit.price}`));
      totalBill = calculateBill(fruits);
    } else if (choice === 'vegetables') {
      console.log('Available vegetables:');
      vegetables.forEach((veg) => console.log(`${veg.name}: $${veg.price}`));
      totalBill = calculateBill(vegetables);
    } else {
      console.log('Invalid choice!');
    }
  
    return totalBill;
  }
  
  // Function to calculate the bill
  function calculateBill(items: Item[]): number {
    let total = 0;
    items.forEach((item) => (total += item.price));
    return total;
  }
  
  // Function to apply discounts based on total bill
  function applyDiscount(totalBill: number): number {
    let discountedTotal = totalBill;
    if (totalBill > 10) {
      discountedTotal *= 0.9; // Apply a 10% discount
    }
    return discountedTotal;
  }
  
  // Simulate the checkout process
  function checkoutProcess(paymentMethod: string) {
    console.log(`Total amount to pay: $${paymentMethod}`);
    console.log(`Thank you for shopping with us using ${paymentMethod}!`);
  }
  
  // Scenario 1 - Buying Groceries
  const groceriesChoice = 'fruits'; // Change this to 'vegetables' to test vegetables
  const bill = buyGroceries(groceriesChoice);
  console.log(`Total bill: $${bill}`);
  
  // Scenario 2 - Applying Discounts
  const discountedAmount = applyDiscount(bill);
  console.log(`Discounted amount: $${discountedAmount.toFixed(2)}`);
  
  // Scenario 3 - Checkout Process
  const paymentMethod = 'credit card'; // Change this to 'cash' or 'debit card' to test different payment methods
  checkoutProcess(paymentMethod);*/
 /* function reverseString(inputString: string): string {
    return inputString.split('').reverse().join('');
  }
  
  // Example usage:
  const originalString = 'Hello, world!';
  const reversedString = reverseString(originalString);
  console.log(reversedString); // Output: '!dlrow ,olleH'*/
 /* function convertCelsiusToFahrenheit(celsius: number): number {
    return (celsius * 9/5) + 32;
  }
  
  // Example usage:
  const celsiusTemperature = 25;
  const fahrenheitTemperature = convertCelsiusToFahrenheit(celsiusTemperature);
  console.log(`${celsiusTemperature}°C is equal to ${fahrenheitTemperature}°F`);*/
  // Initialize an array with some initial elements
/*let myArray: number[] = [1, 2, 3, 4, 5];

// push: Add new elements to the end of the array
myArray.push(6, 7);
console.log("After push:", myArray); // Output: [1, 2, 3, 4, 5, 6, 7]

// pop: Remove the last element from the array
const poppedElement = myArray.pop();
console.log("After pop:", myArray); // Output: [1, 2, 3, 4, 5, 6]
console.log("Popped Element:", poppedElement); // Output: 7

// shift: Remove the first element from the array
const shiftedElement = myArray.shift();
console.log("After shift:", myArray); // Output: [2, 3, 4, 5, 6]
console.log("Shifted Element:", shiftedElement); // Output: 1

// unshift: Add new elements to the beginning of the array
myArray.unshift(0, 1);
console.log("After unshift:", myArray); // Output: [0, 1, 2, 3, 4, 5, 6]*/
// Initialize an array with some initial elements
/*let myArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// splice: Create a subarray by removing elements from the original array
const removedElements = myArray.splice(2, 4); // Removes elements starting from index 2, up to 4 elements
console.log("After splice:", myArray); // Output: [1, 2, 7, 8, 9, 10]
console.log("Removed Elements:", removedElements); // Output: [3, 4, 5, 6]

// slice: Create a subarray without modifying the original array
const subArray = myArray.slice(2, 5); // Returns elements starting from index 2 to index 5 (not inclusive)
console.log("Original Array:", myArray); // Output: [1, 2, 7, 8, 9, 10]
console.log("Subarray using slice:", subArray); // Output: [7, 8, 9]*/