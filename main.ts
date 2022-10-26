interface Mountain {
  name: string;
  height: number;
}


const mountains: Mountain[] = [{ name: 'Kilimanjaro', height: 19341 }, { name: 'Everest', height: 29029 }, { name: 'Denali', height: 20310 }];

function findNameOfTallestMountain({ mountains }: { mountains: Mountain[]; }): string {
  let tallestMountain: Mountain = mountains[0];
  for (let i = 0; i < mountains.length; i++) {
    if (mountains[i].height > tallestMountain.height) {
      tallestMountain = mountains[i];
    }
  }

  return tallestMountain.name;
}


// Declare an interface called Product that contains the following properties:
// name - string
// price - number

interface Product {
  name: string;
  price: number;
}

// Declare an array of type Product called products that contains the following objects:


const products: Product[] = [
  { name: 'Playstation', price: 500 },
  { name: 'BasketBall', price: 19.50 },
  { name: 'Gym Shoes', price: 100 }
];



// Declare a function called calcAverageProductPrice. It should take an array of Product objects as an argument and return the average price of all the products as a number.

function calcAverageProductPrice(products: Product[]): number {
  let sum: number = 0;
  for (let i = 0; i < products.length; i++) {
    sum += products[i].price;
  }
  return sum / products.length;
}

// Declare an interface called InventoryItem that contains the following properties:
// product - Product(from above)
// quantity - number

interface InventoryItem {
  product: Product;
  quantity: number;
}

// Declare an array of type InventoryItem called inventory that contains the following objects:

const inventory: InventoryItem[] = [
  { product: { name: 'motor', price: 10.00 }, quantity: 10 },
  { product: { name: 'sensor', price: 12.50 }, quantity: 4 },
  { product: { name: 'LED', price: 1.00 }, quantity: 20 }
];

// Declare a function called calcInventoryValue. It should take an array of InventoryItem objects as an argument and return the total value of all the products in the array as a number.

function calcInventoryValue(inventory: InventoryItem[]): number {
  let sum: number = 0;
  for (let i = 0; i < inventory.length; i++) {
    sum += inventory[i].product.price * inventory[i].quantity;
  }
  return sum;
}


















