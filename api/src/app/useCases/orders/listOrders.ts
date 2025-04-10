import { Request, Response } from "express";
import { Order } from "../../models/Order";

export async function listOrders(request: Request, response: Response) {
    try{
        const order = await Order.find()
        .sort({createdAt: 1})
        .populate('products.product');
        response.json(order);
    } catch {
        response.sendStatus(500);
    }
}