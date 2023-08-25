// types.ts
export type UpdateProps = {
    id: number
    title?: string
    content?: string
    published?: boolean
};

export type CreatedProps = {
    title?: string
    content?: string
    published?: boolean
};

export interface FormData {
    title: string
    content: string
    published: string
}
