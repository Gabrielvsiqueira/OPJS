import { Request, Response } from "express";
import { Category } from "../../models/Category";

export async function createCategories(request: Request, response: Response) {
    try {
        const {icon, name} = request.body;
    const category = await Category.create({icon, name});

    response.status(201).json(category);

    response.json(category);
    } catch {
        response.send(500);
    }
}