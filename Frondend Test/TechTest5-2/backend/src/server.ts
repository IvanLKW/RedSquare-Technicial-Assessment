import express from "express";
import cors from "cors";
import { categories, products, users } from "./data";
import jwt from "jsonwebtoken";

const app = express();
app.use(express.json());

app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

app.get("/api/products", (req,res) => {
    res.send(products);
})

app.get("/api/products/search/:searchTerm", (req,res) => {
    const searchTerm = req.params.searchTerm;
    const request = products.filter(product => product.title.toLowerCase().includes(searchTerm.toLowerCase()));
    res.send(request);
})

app.get("/api/products/categories", (req,res) => {
    res.send(categories);
})

app.get("/api/products/category/:categoryName", (req,res) => {
    const categoryName = req.params.categoryName;
    const request = products.filter(product => product.category?.includes(categoryName));
    res.send(request);
})

app.get("/api/products/:productId", (req,res) => {
    const productId = req.params.productId;
    const request = products.find(product => product.id == productId);
    res.send(request);
})

app.post("/api/users/login", (req,res) => {
    const {email, password} = req.body;
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        res.send(generateTokenResponse(user))
    }
    else {
        res.status(400).send("Email or password is not valid!")
    }
})

const generateTokenResponse = (user:any) => {
    const token = jwt.sign({
        email: user.email, isAdmin:user.isAdmin
    },"Ecommerce", {
        expiresIn:"30d"
    });

    user.token = token;
    return user;
}

const port = 5000;
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
})
