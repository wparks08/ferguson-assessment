/**
 * @description - Holds all versioned URLs for the application.
 */
export const urls = {
    v1: {
        status: {
            /**
             * @description - The health check endpoint.
             */
            healthCheck: "/v1/status/health-check",
            /**
             * @description - The memory usage endpoint.
             */
            memoryUsage: "/v1/status/memory-usage",
        },
        student: {
            /**
             * @description - Endpoint to create a new student record.
             */
            create: "/v1/student",
            /**
             * @description - Endpoint to get a student record by id.
             */
            get: "/v1/student/:id",
            /**
             * @description - Endpoint to get all student records.
             */
            find: "/v1/student",
            /**
             * @description - Endpoint to update a student record by id.
             */
            update: "/v1/student/:id",
            /**
             * @description - Endpoint to delete a student record by id.
             */
            delete: "/v1/student/:id",
        },
    },
};
