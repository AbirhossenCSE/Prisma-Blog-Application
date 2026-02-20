import { Request, Response } from "express";
import { postService } from "./post.service";

const createPost = (req: Request, res: Response) => {
    try {
        const result = postService.createPost(req.body);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: "Failed to create post" });
    }

}

export const postController = {
    createPost
};