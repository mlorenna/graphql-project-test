import { userMutations } from "./UserMutation.js";

const Mutation = `
type Mutation {
${userMutations}
}`;

export { Mutation };
