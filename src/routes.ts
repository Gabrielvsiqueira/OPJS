import { Router } from "express";

export const router = Router();

//list categories
router.get('/categories', (request, response) => {
    response.send('OK');
});

//Create categories
router.post('/categories', (request, response) => {
    response.send('OK');
});

//list products
router.get('/categories', (request, response) => {
    response.send('OK');
});

//create categories
router.post('/categories', (request, response) => {
    response.send('OK');
});

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
