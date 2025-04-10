import { Request, Response } from "express";
import { Order } from "../../models/Order";

export async function deleteOrders(request: Request, response: Response) {
    try {
        const {orderId} = request.params;
        await Order.findByIdAndDelete(orderId);
        response.sendStatus(204);
    }  catch {
        response.status(500);
    }

}