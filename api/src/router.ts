import { Router } from "express";
import multer from "multer";
import path from 'node:path';
import { listCategories } from "./app/useCases/categories/listCategories";
import { createCategories } from "./app/useCases/categories/createCategory";
import { listProducts } from "./app/useCases/products/listProducts";
import { createProducts } from "./app/useCases/products/createProducts";
import { listOrders } from "./app/useCases/orders/listOrders";
import { listProductsByCategories } from "./app/useCases/products/listProductsByCategory";
import { createOrder } from "./app/useCases/orders/createOrder";
import { changeOrderStatus } from "./app/useCases/orders/changeOrderStatus";
import { deleteOrders } from "./app/useCases/orders/deleteOrder";

export const router = Router();

    const upload = multer({
        storage: multer.diskStorage({
            destination(request, file, callback) {
                callback(null, path.resolve(__dirname, '..', 'uploads'));
            },
            filename(req, file, callback) {
                callback(null, `${Date.now()}-${file.originalname}`);
            },
        }),
    });

//list categories
router.get('/categories', listCategories);

//Create categories
router.post('/categories', createCategories);

//list products
router.get('/products', listProducts);

//create products
router.post('/products', upload.single('image'), createProducts);

//Get products by categories
router.get('/categories/:categoryId/products', listProductsByCategories);

//List Orders
router.get('/orders', listOrders);

//Create Order
router.post('/orders', createOrder)

//Change order status
router.patch('/orders/:orderId', changeOrderStatus);

//Delete / cancel order
router.delete('/orders/:orderId', deleteOrders);
