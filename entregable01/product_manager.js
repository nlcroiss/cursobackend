// Construimos la clase con un arreglo vacio

class ProductManager {
    constructor() {
        this.products = [];
        this.id = 0;
    }

    addProduct(product){

        if (!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock) {
            console.log("Todos los campos son obligatorios");
            console.log("**********************************************");
            return;
        }

        if (this.products.some(p => p.code === product.code)) {
            console.log("EL codigo ingresado ya existe");
            console.log("**********************************************");
            return;
        }


        this.id++;
        this.products.push({ ...product, id: this.id });
    }


    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(p => p.id === id);

        if (!product) {
            console.log("**********************************************");
            console.log(`No se encontró el producto con el id ${id}`);
            console.log("**********************************************");
            return;
        }
        console.log("**********************************************");
        console.log(`Muestro el producto con el id ${id}`);
        return product;
    }
}


const ejercicio = new ProductManager();

// Inicio el test

console.log("******************* Inicio Test *******************");
console.log("Se muestran todos los poductos, pero aun no hay nada");  
console.log(ejercicio.getProducts());
console.log("**********************************************");

// agrego el primer producto

ejercicio.addProduct({
    title: "producto 1",
    description: "Este es un producto nro 1",
    price: 2500,
    thumbnail: "Sin imagen",
    code: "abc0001",
    stock: 25,
});

// muestro el primer producto

console.log("Busco todos los productos, deberia mostrar el producto que agregue");
console.log(ejercicio.getProducts()); 
console.log("**********************************************");

// agrego el segundo producto

ejercicio.addProduct({
    title: "producto 2",
    description: "Este es un producto nro 2",
    price: 3600,
    thumbnail: "Sin imagen",
    code: "abc0002",
    stock: 5,
});

// muestro el segundo producto

console.log("Busco todos los productos, deberia mostrar los dos productos que agregue");
console.log(ejercicio.getProducts()); 
console.log("**********************************************");

// ERROR 1
// agrego el tercer producto pero le falta un campo debe informar que todos los campos son obligatorios
console.log("Agrero un tercer producto sin un campo, deberia mostrar el error");
console.log("**********************************************");

ejercicio.addProduct({
    title: "producto 3",
    description: "Este es un producto nro 3",
    price: 120000,
    thumbnail: "Sin imagen",
    code: "abc0003",
    
});

// busco producto con id igual a 1
console.log("**********************************************")

console.log("Busco un producto por id:1 -- que está")
console.log(ejercicio.getProductById(1));

console.log("**********************************************")

console.log("Busco un producto por id:4 -- que no está")
console.log(ejercicio.getProductById(4));

// ERROR 2
// agrego el cuarto producto pero tiene el code repetido
console.log("**********************************************");
console.log("Agrero un cuarto producto con el campo code repetido, deberia mostrar el error");
console.log("**********************************************");

ejercicio.addProduct({
    title: "producto 4",
    description: "Este es un producto nro 4",
    price: 9870,
    thumbnail: "Sin imagen",
    code: "abc0001",
    stock: 50,
});