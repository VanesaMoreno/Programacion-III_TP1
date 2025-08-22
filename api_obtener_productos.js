const fs = require('fs');
console.log(fs);
 //1.1-1.2-1.3 
 async function fetchProducts() {        // Función para obtener todos los productos
    try {
        const response = await fetch('https://fakestoreapi.com/products');  /* solicitud GET, 
        alamacenando la respuesta en la variable response que es una constante */
        
         if (!response.ok) {
            throw new Error(`Sino es ok ${response.statusText}`);     /*utilizo un template string*/
        }
        const products = await response.json();            
        
        console.log(products);
        const limiteProducts = products.slice(0, 3);     /* Limitar  primeros 3 productos*/
        console.log(limiteProducts);    

        fs.writeFileSync("productos.json", JSON.stringify(limiteProducts, null, 2));/* Guardar los productos en el JSON*/
        console.log("Archivo creado correctamente!");


    } catch (error) {
        console.error(error);                     /*Manejo de errores, mostrando el mensaje de error en la consola*/
    }
};

fetchProducts();   /*LLamo a la funcion*/


//1.4 
async function agregarProducto() {            /*Agrego producto con POST*/
  try {
    const response = await fetch("https://fakestoreapi.com/products", {
      method: "POST",
      body: JSON.stringify({
        title: "Remera Blanca",
        price: 30000,
        description: "xxxxxx",
        image: "xxx",
        category: "Indumentaria Femenina"
      }),
      headers: { "Content-Type": "application/json" }
    });

    if (!response.ok) throw new Error(`Error en POST: ${response.statusText}`);

    const productoNuevo = await response.json();
    console.log("Producto agregado:", productoNuevo);
  } catch (error) {
    console.error(error);
  }
}

agregarProducto();

//1.5 Se busca producto por id
async function buscarProductoPorId(id) { 
  try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`); 
      
      if (!response.ok) {
          throw new Error(`Error al buscar producto: ${response.statusText}`);
      }
      
      const producto = await response.json();
      console.log(`Producto encontrado con ID ${id}:`, producto);
      
  } catch (error) {
      console.error(error);
  }
}

buscarProductoPorId(5); 

//1.6 Se elimina producto
async function borrarProductoPorId(id) {
  try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
          method: "DELETE" 
      });

      if (!response.ok) {
          throw new Error(`Error al eliminar producto: ${response.statusText}`);
      }

      const productoEliminado = await response.json();
      console.log(`Producto con ID ${id} eliminado:`, productoEliminado);

  } catch (error) {
      console.error(error);
  }
}

borrarProductoPorId(6); 


//1.7 Modificar los datos de un producto (UPDATE).

async function actualizarProducto(id, nuevosDatos) {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "PUT",
      body: JSON.stringify(nuevosDatos),
      headers: { "Content-Type": "application/json" }
    });

    if (!response.ok) throw new Error(`Error al actualizar: ${response.statusText}`);

    const productoActualizado = await response.json();
    console.log(`Producto actualizado`, productoActualizado);

  } catch (error) {
    console.error(error);
  }
}

actualizarProducto(7, {
  title: "Zapatillas negras",
  price: 45000,
  description: "Actualizado",
  image: "xxx",
  category: "Calzado"
});

// FileSystem
// Agregar producto al archivo local

function agregarProdLocal(producto) {         
  try {
    
    let data = JSON.parse(fs.readFileSync("productos.json", "utf8"));
    data.push(producto);

    fs.writeFileSync("productos.json", JSON.stringify(data, null, 2));
    console.log("Producto agregado al archivo local");
  } catch (error) {
    console.error("Error al agregar producto", error.message);
  }
}

async function main() {
  await fetchProducts(); // Espera a que termine de crear productos.json porque sino no lo ejecuta
  agregarProdLocal({
    id: 1001,
    title: "Cartera",
    price: 25000,
    description: "Agregado manualmente al archivo",
    image: "xxx",
    category: "Carteras"
  });
}

main();
