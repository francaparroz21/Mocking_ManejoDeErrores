export const generateProductErrorInfo = (product) => {
    return `
        Una o mas propiedad fueron incompletas o invalidas.
       Lista de las propiedades requeridas:
        * name : String : ${product.name}
        * description : String : ${product.description}
        * category : String : ${product.category}
        * code : String : ${product.code}
        * price : Number : ${product.price}
        * stock : Number : ${product.stock}
    `
};

export const generateProductExistsInfo = (product) => {
    return `
    Un producto con la propiedad "code" ya existe en la base de datos
    * code: ${product.code}
    `
};