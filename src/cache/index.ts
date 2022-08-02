import NodeCache from "node-cache";
import { State } from "../interfaces/state";
import { Student } from "../interfaces/student";
import log from "../log";

const options = {
    stdTTL: 60 * 60 * 24,
};

const keys = {
    states: "states",
    students: "students",
};

/**
 * Initialize node-cache
 */
log.info("[Cache] Initializing cache with options:", { options });
const cache = new NodeCache(options);

/**
 * Get a list of all states from the cache
 */
export const getAllStates = async () => {
    log.info("[Cache] Getting all states from cache");
    const states = cache.get<State[]>(keys.states);
    if (!states) {
        log.error(
            "[Cache] States not found in cache, please call setAllStates() first. Ensure that cache is initialized with verifyAllStates()."
        );
        throw new Error("States not found in cache");
    }
    log.info(`[Cache] Found ${states.length} states in cache`);
    return cache.get<State[]>(keys.states);
};

/**
 * Set a list of all states in the cache
 */
export const setAllStates = async (states: State[]) => {
    log.info(`[Cache] Setting ${states.length} states in cache`);
    return cache.set(keys.states, states);
};

/**
 * Verify a list of all states exists in the cache
 */
export const verifyAllStates = async () => {
    log.info("[Cache] Verifying all states exist in cache");
    const exists = cache.has(keys.states);
    log.info(`[Cache] States exist in cache: ${exists}`);
    return exists;
};

/**
 * Get a list of all students from the cache
 */
export const getAllStudents = async () => {
    log.info("[Cache] Getting all students from cache");
    const students = cache.get<Student[]>(keys.students);
    if (!students) {
        log.error(
            "[Cache] Students not found in cache, please call setAllStudents() first. Ensure that cache is initialized with verifyAllStudents()."
        );
        throw new Error("Students not found in cache");
    }
    log.info(`[Cache] Found ${students.length} students in cache`);
    return cache.get<Student[]>(keys.students);
};

/**
 * Set a list of all students in the cache
 */
export const setAllStudents = async (students: Student[]) => {
    log.info(`[Cache] Setting ${students.length} students in cache`);
    cache.set(keys.students, students);
};

/**
 * Verify a list of all students exists in the cache
 */
export const verifyAllStudents = async () => {
    log.info("[Cache] Verifying all students exist in cache");
    const exists = cache.has(keys.students);
    log.info(`[Cache] Students exist in cache: ${exists}`);
    return exists;
};

/**
 * Invalidate student cache
 */
export const invalidateStudentCache = async () => {
    log.info("[Cache] Invalidating student cache");
    cache.del(keys.students);
};
