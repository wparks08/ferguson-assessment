import { Student } from "../interfaces/student";

/**
 * The StudentCollection class is a wrapper around a list of students.
 *
 * It is meant to mimic the API used by the MongoDB driver for the `students` collection, as a convenience
 * for better dev experience. See [studentDb.ts](src/components/student/studentDb.ts), specifically the `find()` function,
 * for a usage example.
 */
export class StudentCollection {
    _students: Student[];
    _skip = 0;
    _limit = 0;

    constructor(students: Student[]) {
        this._students = students;
    }

    skip(offset: number) {
        this._skip = offset;
        return this;
    }

    limit(limit: number) {
        this._limit = limit;
        return this;
    }

    sort({ sortBy, order }: { sortBy?: keyof Student; order: "asc" | "desc" }) {
        if (!sortBy) {
            return this;
        }
        this._students.sort((a, b) => {
            if (order === "asc") {
                return a[sortBy] > b[sortBy] ? 1 : -1;
            } else {
                return a[sortBy] < b[sortBy] ? 1 : -1;
            }
        });
        return this;
    }

    _applyPagination() {
        if (this._limit) {
            this._students = this._students.slice(this._skip, this._skip + this._limit);
        }
        if (this._skip) {
            this._students = this._students.slice(this._skip);
        }
    }

    toArray() {
        this._applyPagination();
        return this._students;
    }
}
