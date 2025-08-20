const fs = require("fs");
console.log(fs);
//1.1-1.2-1.3
async function fetchProducts() {
  // Función para obtener todos los productos
  try {
    const response = await fetch(
      "https://fakestoreapi.com/products"
    ); /* solicitud GET, 
        alamacenando la respuesta en la variable response que es una constante */

    if (!response.ok) {
      throw new Error(
        `Sino es ok ${response.statusText}`
      ); /*utilizo un template string*/
    }
    const products = await response.json();

    console.log(products);
    const limiteProducts = products.slice(
      0,
      3
    ); /* Limitar  primeros 3 productos*/
    console.log(limiteProducts);

    fs.writeFileSync(
      "productos.json",
      JSON.stringify(limiteProducts, null, 2)
    ); /* Guardar los productos en el JSON*/
    console.log("Archivo creado correctamente!");
  } catch (error) {
    console.error(
      error
    ); /*Manejo de errores, mostrando el mensaje de error en la consola*/
  }
}

fetchProducts(); /*LLamo a la funcion*/

//1.4
async function agregarProducto() {
  /*Agrego producto con POST*/
  try {
    const response = await fetch("https://fakestoreapi.com/products", {
      method: "POST",
      body: JSON.stringify({
        title: "Remera Blanca",
        price: 30000,
        description: "xxxxxx",
        image: "xxx",
        category: "Indumentaria Femenina",
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) throw new Error(`Error en POST: ${response.statusText}`);

    const productoNuevo = await response.json();
    console.log("✅ Producto agregado:", productoNuevo);
  } catch (error) {
    console.error(error);
  }
}

agregarProducto();

async function EliminarProducto(id) {
  console.log("ID a eliminar:", id);

  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    });

    if (!response.ok) {
      throw new Error(`Error en DELETE: ${response.statusText}`);
    }

    const ProductoEliminado = await response.json();
    console.log("Producto eliminado:", ProductoEliminado);
  } catch (error) {
    console.error("Error:", error);
  }
}

EliminarProducto(1); 
