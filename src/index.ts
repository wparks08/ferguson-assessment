interface Message {
    content: string;
    author: string;
}

const message: Message = {
    content: "Hello World",
    author: "Me",
};

console.log(message.content);
console.log("     -- " + message.author);
