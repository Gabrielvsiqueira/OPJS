import { Request, Response } from "express";
import { Order } from "../../models/Order";

export async function changeOrderStatus(request: Request, response: Response) {
    try{
        const {orderId} = request.params;
        const {status} = request.body;

        if (!['WAITING', 'IN PRODUCTION', 'DONE'].includes(status)){
            response.status(400).json({error : "Status should be diferente these."})
        }

        await Order.findByIdAndUpdate(orderId, {status});

        response.sendStatus(204);
    } catch {
        response.sendStatus(500);
    }
}