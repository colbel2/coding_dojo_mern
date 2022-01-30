//import the controller file and give it a variable name to reference
const ProductController = require("../controllers/controller")



//these are your backend routes---AKA api endpoints
module.exports = (app)=>{

    app.get("/api/products", ProductController.findAllProducts)


    app.post("/api/products", ProductController.createNewProduct)

    app.get("/api/products/:id", ProductController.findOneProduct)

    app.put("/api/products/:id", ProductController.updateProduct)
    
    app.delete("/api/products/:id", ProductController.deleteProduct)
    
    
    

}