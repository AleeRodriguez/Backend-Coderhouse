/*class ProductManager {
    constructor(){
        this.products = [];
    }
    static id = 0;
    addProduct(title, description, price, image, code, stock){
        for(let i = 0; i < this.products.length; i++){
            if(this.products[i].code === code){
                console.log(`The code ${code} it repeated`);
                break;
            }
        }
        
        const newProduct = { title, description, price, image, code, stock,
        }
        if(!Object.values(newProduct).includes(undefined)){
            ProductManager.id++;
            this.products.push({ ...newProduct, 
                id:ProductManager.id});
            } else{
                console.log("All fields are required");
            }
    }
    getProduct(){
        return this.products;
    }
    exists(id){
        return this.products.find((products)=> products.id === id);
    }
    getProductById(id){
     !this.exists(id)? console.log ("Not found") : console.log(this.exists(id));
    };
}


const products = new ProductManager;
//empty array (First Call) 
console.log(products.getProduct())

// add products in array 
products.addProduct('testProduct1', 'description1', 100, 'img1', 'abc123', 25);
products.addProduct('testProduct2', 'description2', 200, 'img2', 'abc124', 25);

//array with products (Second Call) 
console.log(products.getProduct());

//id exists 
products.getProductById(1);

//not found 
products.getProductById(3);

//repeated product 
products.addProduct('testProduct3', 'description3', 300, 'img3', 'abc124', 25);*/