import { db } from "../../db.js";

export const resolvers = {
  Query: {
    products: () => db.products,
    product: (parent: any, args: { productId: string }, context: any) => {
      const result = db.products.find((pd) => pd.id === args.productId);
      return result;
    },
    categories: () => db.categories,
    category: (parent: any, args: { categoryId: string }, context: any) => {
      return db.categories.find((category) => category.id === args.categoryId);
    },
  },
  Product: {
    category: ({ categoryId }, args: any, context: any) => {
      const result = db.categories.find(
        (category) => (category.id = categoryId)
      );
      return result;
    },
    reviews: ({ id }, args: any, context: any) => {
      return db.reviews.filter((review) => review.productId === id);
    },
  },
  Category: {
    products: ({ id }: any, args: any, context: any) => {
      const result = db.products.filter((product) => product.categoryId === id);
      return result;
    },
  },
};
