import { log } from "console";
import fs from "fs";

const route = "./files/products.json"

const dataRead = fs.readFile(
    route,
    "utf-8",
    (error, success) => {
        if (error) {
            console.log(error);

        } else {
            console.log(success);
            const data = { title: "new product 1", price: 40 }
            const parsedData = JSON.parse(success)
            parsedData.push(data)
            const dataString = JSON.stringify(parsedData, null, 2)

            fs.writeFile(
                route,
                dataString,
                error => {
                    if (error) {
                        console.log(error);

                    } else {
                        console.log("created");

                    }
                })
        }
    }
)

