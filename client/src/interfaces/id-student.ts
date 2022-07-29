import { Student } from "../../../src/interfaces/student";

/**
 * Extends the Student interface with the ID property.
 */
export interface IdStudent extends Student {
    _id: string;
}