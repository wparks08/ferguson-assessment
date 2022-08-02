import { Student } from "../../interfaces/student";
import db from "../../db";
import { ObjectId } from "mongodb";
import { verifyAllStudents, getAllStudents, setAllStudents, invalidateStudentCache } from "../../cache";
import { StudentCollection } from "../../classes/StudentCollection";

const collection = db.collection<Student>("students");

export default {
    create: async (student: Student) => {
        console.log("inserting student...");
        await invalidateStudentCache();
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
        if (await verifyAllStudents()) {
            console.log("students found in cache");
            const cachedStudents = await getAllStudents();

            if (!cachedStudents) {
                throw new Error("students not found in cache after verification succeeded");
            }

            const students = new StudentCollection(cachedStudents).skip(offset).limit(limit);

            if (sortBy) {
                students.sort({ sortBy, order });
            }

            return students.toArray();
        } else {
            console.log("students not found in cache");
            const students = await collection
                .find()
                .skip(offset)
                .limit(limit)
                .sort({ [sortBy as string]: order })
                .toArray();
            await setAllStudents(students);
            return students;
        }
    },
    get: async (id: string) => {
        console.log("getting student...");
        return await collection.findOne({ _id: new ObjectId(id) });
    },
    update: async (id: string, student: Student) => {
        console.log("updating student...");
        await invalidateStudentCache();
        return await collection.updateOne({ _id: new ObjectId(id) }, { $set: student });
    },
    delete: async (id: string) => {
        console.log("deleting student...");
        await invalidateStudentCache();
        return await collection.deleteOne({ _id: new ObjectId(id) });
    },
};
