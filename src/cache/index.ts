import NodeCache from "node-cache";
import { State } from "../interfaces/state";
import { Student } from "../interfaces/student";

/**
 * Initialize node-cache
 */
const cache = new NodeCache({ stdTTL: 60 * 60 * 24 });

/**
 * Get a list of all states from the cache
 */
export const getAllStates = async () => {
    return cache.get<State[]>("states");
};

/**
 * Set a list of all states in the cache
 */
export const setAllStates = async (states: State[]) => {
    return cache.set("states", states);
};

/**
 * Verify a list of all states exists in the cache
 */
export const verifyAllStates = async () => {
    return cache.has("states");
};

/**
 * Get a list of all students from the cache
 */
export const getAllStudents = async () => {
    return cache.get<Student[]>("students");
};

/**
 * Set a list of all students in the cache
 */
export const setAllStudents = async (students: Student[]) => {
    cache.set("students", students);
};

/**
 * Verify a list of all students exists in the cache
 */
export const verifyAllStudents = async () => {
    return cache.has("students");
};

/**
 * Invalidate student cache
 */
export const invalidateStudentCache = async () => {
    cache.del("students");
};
