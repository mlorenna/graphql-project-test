import { userQueries } from "./UserQueries.js";
const Query = `
    type Query {
        ${userQueries}
    }
`;

export { Query };
