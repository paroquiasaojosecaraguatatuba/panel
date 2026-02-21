export const routeUtils = {
  isAuthRoute: (pathname: string): boolean => {
    const authRoutePatterns = [/^\/login\/?$/, /^\/confirm-code\/?$/];

    return authRoutePatterns.some((pattern) => pattern.test(pathname));
  },
};
