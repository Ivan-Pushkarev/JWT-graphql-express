import {ApolloServer} from '@apollo/server';
import {startStandaloneServer} from '@apollo/server/standalone';
import mongoConnection from "./mongoConnection";

mongoConnection()

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
# Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

# This "Book" type defines the queryable fields for every book in our data source.
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

# The "Query" type is special: it lists all of the available queries that
# clients can execute, along with the return type for each. In this
# case, the "books" query returns an array of zero or more Books (defined above).
type Query {
    users: [User]
}

type Mutation {
    createUser(input: UserInput): User
}
`;

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
        users: () => users,
    },
    Mutation: {
        createUser: (parent, args) => {
            const newUser = {
                _id: users.length + 1,
                ...args.input,
            };
            users.push(newUser);
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

console.log(`🚀  Server ready at: ${url}`);
