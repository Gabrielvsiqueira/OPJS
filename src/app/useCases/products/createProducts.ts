import { Request, Response } from "express";
import { Product } from "../../models/Product";

export async function createProducts(request: Request, response: Response) {
    try {
        const imagePatch = request.file?.filename;
        console.log(request.file);
        console.log(request.body);
        const {name, description, price, ingredients, category} = request.body;

        const product = await Product.create({
            name,
            description,
            price: Number(price),
            imagePatch,
            ingredients: ingredients ? JSON.parse(ingredients) : [],
            category,
        });
        response.status(201).json(product);
    } catch {
        response.sendStatus(500);
    }
}