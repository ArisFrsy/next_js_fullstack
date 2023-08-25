import { UpdateProps } from "./posts/typePosts";

const API_URL = "/api/your-endpoint";

export async function fetchPosts(): Promise<any[]> {
    try {
        const response = await fetch(API_URL, {
            method: "GET",
        });

        if (!response.ok) {
            throw new Error("Failed to fetch posts");
        }

        const data = await response.json();
        return data;
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(`Error fetching posts: ${error.message}`);
        } else {
            throw new Error(`Unknown error occurred while fetching posts`);
        }
    }
}

export async function createPost(postData: UpdateProps): Promise<any> {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(postData),
        });

        if (!response.ok) {
            throw new Error("Failed to create post");
        }

        const data = await response.json();
        return data;
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(`Error fetching posts: ${error.message}`);
        } else {
            throw new Error(`Unknown error occurred while fetching posts`);
        }
    }
}

export async function updatePost(id: number, updateData: UpdateProps): Promise<any> {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateData),
        });

        if (!response.ok) {
            throw new Error("Failed to update post");
        }

        const data = await response.json();
        return data;
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(`Error fetching posts: ${error.message}`);
        } else {
            throw new Error(`Unknown error occurred while fetching posts`);
        }
    }
}

export async function deletePost(id: number): Promise<void> {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: "DELETE",
        });

        if (!response.ok) {
            throw new Error("Failed to delete post");
        }

        // No need to parse JSON for DELETE
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(`Error fetching posts: ${error.message}`);
        } else {
            throw new Error(`Unknown error occurred while fetching posts`);
        }
    }
}
