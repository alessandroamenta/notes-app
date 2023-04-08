//structure of the note type that we receive from the backend and use in the frontend
export interface Note {
    _id: string,
    title: string,
    text?: string,
    createdAt: string,
    updatedAt: string,
}