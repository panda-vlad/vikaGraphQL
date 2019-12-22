// Authors и Posts получают данные в виде
// JSON массивов с соответствующих файлов
const Book = require('./data/book');
const Product = require('./data/product');
const User = require('./data/user');
const _ = require('lodash');

let {
    // Здесь базовые типы GraphQL, которые нужны в этом уроке
    GraphQLString,
    GraphQLList,
    GraphQLObjectType,
    /* Это необходимо для создания требований
       к полям и аргументам */
    GraphQLNonNull,
    // Этот класс нам нужен для создания схемы
    GraphQLSchema
} = require('graphql');

const BookType = new GraphQLObjectType({
    name: "Book",
    description: "This represent a book",
    fields: () => ({
        id: { type: new GraphQLNonNull(GraphQLString)},
        type: { type: new GraphQLNonNull(GraphQLString)},
    })
});

const ProductType = new GraphQLObjectType({
    name: "Product",
    description: "This represent a product",
    fields: () => ({
        id: { type: new GraphQLNonNull(GraphQLString)},
        type: { type: new GraphQLNonNull(GraphQLString)},
    })
});

const UserType = new GraphQLObjectType({
    name: "User",
    description: "This represent an user",
    fields: () => ({
        id: { type: new GraphQLNonNull(GraphQLString)},
        name: { type: new GraphQLNonNull(GraphQLString)},
        email: { type: new GraphQLNonNull(GraphQLString)},
    })
});

const BlogQueryRootType = new GraphQLObjectType({
    name: "BlogAppSchema",
    description: "Blog Application Schema Query Root",
    fields: () => ({
        book: {
            type: new GraphQLList(BookType),
            description: "List of all Book",
            resolve: function() {
                return Book
            }
        },
        products: {
            type: new GraphQLList(ProductType),
            description: "List of all Product",
            resolve: function() {
                return Product
            }
        },
        user: {
            type: new GraphQLList(UserType),
            description: "List of all Product",
            resolve: function() {
                return User
            }
        }
    })
});


const BlogAppSchema = new GraphQLSchema({
    query: BlogQueryRootType
    /* Если вам понадобиться создать или 
       обновить данные, вы должны использовать
       мутации. 
       Мутации не будут изучены в этом посте.
       mutation: BlogMutationRootType
    */
})

module.exports = BlogAppSchema;