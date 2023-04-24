const fs = require("fs");

class ProductManager {
  constructor() {
    this.path = "./products.json";
    this.productos = [];
  }

  static id = 0;

  addProduct = async (title, description, price, image, code, stock) => {
    ProductManager.id++;

    let newProduct = {
      title,
      description,
      price,
      code,
      stock,
      id: ProductManager.id,
    };

    this.products.push(newProduct);

    await fs.promises.writeFile(this.path, JSON.stringify(this.products));
  };
  readProducts = async () => {
    let respuesta = await fs.promises.readFile(this.path, "utf-8");
    return JSON.parse(respuesta);
  };

  getProducts = async () => {
    let answer2 = await this.readProducts();
    return console.log(answer2);
  };
  getProductsById = async (id) => {
    let answer2 = await this.readProducts();
    if (!answer2.find((products) => products.id === id)) {
      console.log("Producto no encontrado");
    } else {
      console.log(respuesta2.find((products) => products.id === id));
    }
  };
  deleteProductById = async (id) => {
    let answer3 = await this.readProducts();
    let productFilter = answer3.filter((products) => products.id != id);
    await fs.promises.writeFile(this.path, JSON.stringify(productFilter));
    console.log("Producto eliminado");
  };
  updateProducts = async({id, ...products}) =>{
    await this.deleteProductById(id); 
    let oldProd = await this.readProducts();
    let modifiedProd = [
     {...products, id},
     ...oldProd];  
     await fs.promises.writeFile(this.path, JSON.stringify(modifiedProd))
};
}

const products = new ProductManager();

/*
products.addProduct("Iphone 12","64gb Black","700USD","Image","1","10")
products.addProduct("Iphone 12 Pro","256gb Red","875USD","Image","2","15")
products.addProduct("Iphone 13","128gb White","850USD","Image","3","20")
products.addProduct("Iphone 13 Mini","128gb White","750USD","Image","4","10")
products.addProduct("Iphone 13 Pro","256gb Gray","1050USD","Image","5","15")
products.addProduct("Iphone 14","128gb Gray","900USD","Image","6","20")
products.addProduct("Iphone 14 Pro","256gb Gray","1200USD","Image","7","10")
products.addProduct("Iphone 14 Pro Max","512gb Gray","1500USD","Image","8","15")
products.addProduct("Iphone 14 plus","256gb White","1000USD","Image","9","20")
*/


//products.getProducts();
//products.getProductsById(20)
//products.deleteProductById(2)
/*products.updateProducts({title: 'Iphone 14 plus',
    description: '256gb White',
    price: '1200USD',
    code: '9',
    stock: '20',
    id: 9});*/
