
let productos = [
  { id: 1,
    nombre: "Mouse", 
    precio: 2500, 
    stock: 10 },

  { id: 2, 
    nombre: "Teclado", 
    precio: 4500, 
    stock: 5 },

  { id: 3, 
    nombre: "Monitor", 
    precio: 30000, 
    stock: 2 },

  { id: 4, 
    nombre: "Notebook", 
    precio: 150000, 
    stock: 1 },
  { id: 5, 
    nombre: "Auriculares", 
    precio: 3500, 
    stock: 8 }
];
// 2.1
// Imprimir la longitud del arrays productos
//console.log('Cantidad total de productos :', productos.length);

// 2.2
//console.log([productos[1]]);
//console.log([productos[3]]);

//3.1 
// for ( let producto of productos){
//   console.log( `Nombre: ${producto.nombre}, Precio: $${producto.precio}`);
//  };

//3.2 
productos.forEach(producto => {
    console.log(`Producto: ${producto.nombre}, Precio: $${producto.precio}`);
});


//4.1 
productos.push(
  { id: 6, nombre: "Impresora", precio: 220000, stock: 3 },
  { id: 7, nombre: "Tablet", precio: 250000, stock: 4 }
);
console.log(productos);

//4.2
let eliminado = productos.pop();
console.log(`Producto eliminado ${eliminado.nombre}`);

// 4. 3
productos.unshift({ id: 8, nombre: "Parlantes", precio: 150000, stock: 5 });
console.log(productos);

// 4. 4
eliminado = productos.shift();
console.log(`Producto eliminado ${eliminado.nombre}`);

// 4. 5
let productosConStock = productos.filter(producto => producto.stock > 0);
console.log(productosConStock);