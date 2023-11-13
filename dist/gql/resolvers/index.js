import { db } from "../../db.js";
export const resolvers = {
    Query: {
        products: () => db.products,
        product: (parent, args, context) => {
            const result = db.products.find((pd) => pd.id === args.productId);
            return result;
        },
        categories: () => db.categories,
        category: (parent, args, context) => {
            return db.categories.find((category) => category.id === args.categoryId);
        },
    },
    Product: {
        category: ({ categoryId }, args, context) => {
            const result = db.categories.find((category) => (category.id = categoryId));
            return result;
        },
        reviews: ({ id }, args, context) => {
            return db.reviews.filter((review) => review.productId === id);
        },
    },
    Category: {
        products: ({ id }, args, context) => {
            const result = db.products.filter((product) => product.categoryId === id);
            return result;
        },
    },
};
