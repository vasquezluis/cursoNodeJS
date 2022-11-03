import fetch from "node-fetch";

try {
  const response = await fetch(
    "https://inventario-api-f3if.onrender.com/api/products"
  );
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.log(error);
}
