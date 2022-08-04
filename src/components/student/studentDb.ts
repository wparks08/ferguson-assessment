import { Student } from "../../interfaces/student";
import db from "../../db";
import { ObjectId } from "mongodb";
import { getAllStudents, invalidateStudentCache, setAllStudents, verifyAllStudents } from "../../cache";
import { StudentCollection } from "../../classes/StudentCollection";
import log from "../../log";

const collection = db.collection<Student>("students");

export default {
    create: async (student: Student) => {
        log.info(`[StudentDb] Creating student: ${JSON.stringify(student)}`);
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
        log.info("[StudentDb] Getting all students");
        if (await verifyAllStudents()) {
            log.info("[StudentDb] Found students in cache");
            const cachedStudents = await getAllStudents();

            if (!cachedStudents) {
                throw new Error("students not found in cache after verification succeeded");
            }

            return new StudentCollection(cachedStudents).skip(offset).limit(limit).sort({ sortBy, order }).toArray();
        } else {
            log.info("[StudentDb] Students not found in cache, retrieving from database");
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
        log.info(`[StudentDb] Getting student with id: ${id}`);
        return await collection.findOne({ _id: new ObjectId(id) });
    },
    update: async (id: string, student: Student) => {
        log.info(`[StudentDb] Updating student with id ${id}: `, student);
        await invalidateStudentCache();
        return await collection.updateOne({ _id: new ObjectId(id) }, { $set: student });
    },
    delete: async (id: string) => {
        log.info(`[StudentDb] Deleting student with id: ${id}`);
        await invalidateStudentCache();
        return await collection.deleteOne({ _id: new ObjectId(id) });
    },
};
