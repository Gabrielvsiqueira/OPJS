import { Router } from "express";
import { listCategories } from "./app/useCases/categories/listCategories";
import { createCategories } from "./app/useCases/categories/createCategory";
import { listProducts } from "./app/useCases/products/listProducts";
import { createProducts } from "./app/useCases/products/createProducts";

export const router = Router();

//list categories
router.get('/categories', listCategories);

//Create categories
router.post('/categories', createCategories);

//list products
router.get('/products', listProducts);

//create products
router.post('/products', createProducts);

//Get products by categories
router.post('/categories/:categoryId/products', (request, response) => {
    response.send('OK');
});

//List Orders
router.get('/orders', (request, response) => {
    response.send('OK');
});

//Create Order
router.post('/orders', (request, response) => {
    response.send('OK');
});

//Change order status
router.patch('/orders/:orderId', (request, response) => {
    response.send('OK');
});

//Delete / cancel order
router.delete('/orders/:orderId', (request, response) => {
    response.send('OK');
});
