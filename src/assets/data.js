import { nanoid } from "nanoid";

export const data = [
    {
        id: nanoid(),
        title: "Hello React.js",
        body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, et.",
        createdAt: Date.now(),
        author: "Anna",
    },
    {
        id: nanoid(),
        title: "HelloJS",
        body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, et.",
        createdAt: Date.now(),
        author: "Artem",
    },
]