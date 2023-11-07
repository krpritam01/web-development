// Object containing items with names, categories, and price in USD

const items = [
    {
        name:"Iphone 15",
        category: "Mobile",
        priceUSD: 1999,
    },
    {
        name: "Macbook Air",
        category: "Laptops",
        priceUSD: 2299,
    },
    {
        name: "Macbook Air",
        category: "Laptops",
        priceUSD: 5599,
    },
];
const exchangeRate = 70;

function convertToINR(priceInUSD) {
    return priceInUSD * exchangeRate;
}

const itemsInINR = items.map((item) => ({
    ...item,
    priceINR: convertToINR(item.priceUSD),
}));

console.log(itemsInINR);

/*OUTPUT:
[
    {
      name: 'Iphone 15',
      category: 'Mobile',
      priceUSD: 1999,
      priceINR: 139930
    },
    {
      name: 'Macbook Air',
      category: 'Laptops',
      priceUSD: 2299,
      priceINR: 160930
    },
    {
      name: 'Macbook Air',
      category: 'Laptops',
      priceUSD: 5599,
      priceINR: 391930
    }
  ]
  */