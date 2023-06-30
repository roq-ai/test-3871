const mapping: Record<string, string> = {
  carts: 'cart',
  'cart-products': 'cart_product',
  products: 'product',
  users: 'user',
  vendors: 'vendor',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
