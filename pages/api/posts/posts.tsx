import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/client";
import { UpdateProps, CreatedProps } from "./typePosts";
import { IncomingForm } from "formidable";

export const config = {
    api: {
        bodyParser: false
    }
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "GET") {
        try {

            const id = req.query.id as string;

            if (id) {
                const data = await prisma.post.findUnique({
                    where: {
                        id: Number(id),
                    },
                })
                return res.status(200).json(data);
            } else {
                const data = await prisma.post.findMany();
                return res.status(200).json(data);
            }
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    if (req.method === "POST") {
        try {
            const form = new IncomingForm();

            form.parse(req, async (err, fields, files) => {
                if (err) {
                    console.error("Error parsing form:", err);
                    return res.status(500).json({ error: "An error occurred while parsing form" });
                }

                const title = fields.title[0] as string;
                const content = fields.content[0] as string;

                const postData = {
                    title: title || "",
                    content: content || "",
                };

                if (!postData.title) {
                    return res.status(400).json({ error: "Title is required" });
                }

                try {
                    const createdPost = await prisma.post.create({
                        data: {
                            title: postData.title,
                            content: postData.content,
                        },
                    });

                    console.log(createdPost)

                    return res.status(201).json(createdPost);
                } catch (error) {
                    console.error("Error creating post:", error);
                    return res.status(500).json({ error: "Error creating post" });
                }
            });
        } catch (error) {
            console.error("Error in API handler:", error);
            return res.status(500).json({ error: "An error occurred" });
        }
    }

    if (req.method === "PUT") {

        try {
            const form = new IncomingForm();

            form.parse(req, async (err, fields, files) => {
                if (err) {
                    console.error("Error parsing form:", err);
                    return res.status(500).json({ error: "An error occurred while parsing form" });
                }

                const id = Number(fields.id[0] as unknown);
                const title = fields.title[0] as string;
                const content = fields.content[0] as string;

                const postData = {
                    title: title || "",
                    content: content || "",
                };

                if (!postData.title) {
                    return res.status(400).json({ error: "Title is required" });
                }

                try {
                    const updatedPost = await prisma.post.update({
                        where: { id: id },
                        data: {
                            title: postData.title,
                            content: postData.content,
                        },
                    });

                    return res.status(201).json(updatedPost);
                } catch (error) {
                    console.error("Error creating post:", error);
                    return res.status(500).json({ error: "Error creating post" });
                }
            });
        } catch (error) {
            console.error("Error in API handler:", error);
            return res.status(500).json({ error: "An error occurred" });
        }
    }

    if (req.method === "DELETE") {
        try {
            const id = req.query.id as string;
            const deletePost = await prisma.post.delete({
                where: { id: Number(id) },
            });
            return res.status(204).json(deletePost);
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}
