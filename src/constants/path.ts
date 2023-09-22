const path = {
  home: "/",
  login: "/login",
  logout: "/logout",
  register: "/register",
  orders: "/orders",
  users: "/users",
  usersNew: "/users/new",
  usersDetail: "/users/:userId",
  products: "/products",
  productsDetail: "/products/:productId",
  productNew: "/products/new",
} as const;

export default path;
