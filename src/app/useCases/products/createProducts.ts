import { Request, Response } from "express";

import { Product } from "../../models/Product";

export async function createProducts(request: Request, response: Response) {
    try {
        const {name, description, imagePatch, price, ingredients, category} = request.body;
        const product = await Product.create({name, description, imagePatch, price, ingredients, category});
        response.status(201).json(product);
    } catch {
        response.sendStatus(500);
    }
}