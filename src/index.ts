import {ApolloServer} from '@apollo/server';
import {startStandaloneServer} from '@apollo/server/standalone';
import {mongoConnection} from "./mongoConnection";
import User from "./Model";

mongoConnection()

const typeDefs = `#graphql
 type User {
    _id: ID!
    firstName: String
    lastName: String
    email: String
    password: String
}

input UserInput {
    firstName: String
    lastName: String
    email: String
    password: String
}
type Query {
    users: [User]
}

type Mutation {
    createUser(input: UserInput): User
}
`;
console.log('start')
const users = [
    {
        _id: '1',
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@doe.com',
        password: '123456',
    },
    {
        _id: '2',
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'jane@doe.com',
        password: '123456',
    }
];

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
    Query: {
        users: async () => User.find(),
    },
    Mutation: {
        createUser: async (parent, args) => {
           const newUser = await User.create({...args.input})
            return newUser;
        }
    }
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const {url} = await startStandaloneServer(server, {
    listen: {port: 4000},
});

console.log(`Server ready at: ${url}`);
