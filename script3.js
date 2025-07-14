const products = [
  { name: "Smartphone", category: "Electronics", price: 15000 },
  { name: "Jeans", category: "Clothing", price: 1200 },
  { name: "Laptop", category: "Electronics", price: 45000 },
  { name: "T-shirt", category: "Clothing", price: 500 },
];

function renderProducts() {
  const category = document.getElementById("categoryFilter").value;
  const sort = document.getElementById("sortFilter").value;

  let filtered = products.slice();

  if (category !== "All") {
    filtered = filtered.filter(p => p.category === category);
  }

  if (sort === "priceLow") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === "priceHigh") {
    filtered.sort((a, b) => b.price - a.price);
  }

  const container = document.getElementById("productList");
  container.innerHTML = "";

  filtered.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <h3>${p.name}</h3>
      <p>Category: ${p.category}</p>
      <p>Price: ₹${p.price}</p>
    `;
    container.appendChild(div);
  });
}

renderProducts();
