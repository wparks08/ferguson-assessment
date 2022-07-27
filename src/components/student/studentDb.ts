import { Student } from "../../interfaces/student";
import db from "../../db";
import { ObjectId } from "mongodb";

const collection = db.collection<Student>("students");

export default {
    create: async (student: Student) => {
        console.log("inserting student...");
        return await collection.insertOne(student);
    },
    find: async ({
        limit = 0,
        offset = 0,
        sortBy,
        order = "asc",
    }: {
        limit?: number;
        offset?: number;
        sortBy?: keyof Student;
        order?: "asc" | "desc";
    }) => {
        console.log("finding students...");
        return await collection
            .find()
            .limit(limit)
            .skip(offset)
            .sort(sortBy as string, order)
            .toArray();
    },
    get: async (id: string) => {
        console.log("getting student...");
        return await collection.findOne({ _id: new ObjectId(id) });
    },
    update: async (id: string, student: Student) => {
        console.log("updating student...");
        return await collection.updateOne({ _id: new ObjectId(id) }, { $set: student });
    },
    delete: async (id: string) => {
        console.log("deleting student...");
        return await collection.deleteOne({ _id: new ObjectId(id) });
    },
};
