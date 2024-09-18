import fs from "fs"

const path = "./files/products.json"

const exists = fs.existsSync(path)
console.log(exists);

if (!exists) {
    const data = JSON.stringify([])
    fs.writeFileSync(path, data)

}

const productsData = JSON.parse(fs.readFileSync(path, "utf-8"))
//console.log(productsData);

const product1 = { title: "product 1", price: 40 };
const product2 = { title: "product 2", price: 30 };
productsData.push(product1);
productsData.push(product2);

fs.writeFileSync(path, JSON.stringify(productsData, null, 1));
console.log(productsData);

//Para borrar siempre se verifica si existe el archivo

if (exists) {
    fs.unlinkSync(path);
}