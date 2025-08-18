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

    } catch (error) {
        console.error(error);                     /*Manejo de errores, mostrando el mensaje de error en la consola*/
    }
};

fetchProducts();   /*LLamo a la funcion*/


