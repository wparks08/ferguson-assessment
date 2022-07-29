import { useEffect, useMemo, useState } from "react";
import { IdStudent } from "../interfaces/id-student";
import { urls } from "../config/urls";

interface ListStudentsParams {
    limit?: number;
    offset?: number;
    sortBy?: keyof IdStudent;
    order?: "asc" | "desc";
}

/**
 * Hook to handle listing students
 *
 * @param {Object | undefined} options - Options to filter the list of students
 * @param {number | undefined} options.limit - Maximum number of students to return
 * @param {number | undefined} options.offset - Offset from the start of the list
 * @param {string | undefined} options.sortBy - Key to sort the list by
 * @param {string | undefined} options.order - Order to sort the list by
 * @returns {Promise<Array<IdStudent>>} - List of students
 */
export const useListStudents = (options?: ListStudentsParams) => {
    const { limit, offset, sortBy, order } = options || {};
    const [students, setStudents] = useState<IdStudent[]>([]);
    const queryString = useMemo(() => {
        const query = new URLSearchParams();
        if (limit) {
            query.append("limit", limit.toString());
        }
        if (offset) {
            query.append("offset", offset.toString());
        }
        if (sortBy) {
            query.append("sortBy", sortBy);
        }
        if (order) {
            query.append("order", order);
        }
        return query.toString();
    }, [limit, offset, sortBy, order]);

    useEffect(() => {
        fetch(`${urls.v1.students.find}?${queryString}`)
            .then((response) => response.json())
            .then((data: IdStudent[]) => setStudents(data));
    }, [queryString]);

    const refetchStudents = () => {
        fetch(`${urls.v1.students.find}?${queryString}`)
            .then((response) => response.json())
            .then((data: IdStudent[]) => setStudents(data));
    };

    return { students, refetchStudents };
};
