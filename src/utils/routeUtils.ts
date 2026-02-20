export const routeUtils = {
  isProtectedRoute: (pathname: string): boolean => {
    const publicRoutePatterns = [
      /\/login\/?$/, // termina com /login
      /\/confirm-code\/?$/, // termina com /confirm-code
    ];

    const isPublic = publicRoutePatterns.some((pattern) =>
      pattern.test(pathname),
    );

    return !isPublic;
  },
  isAuthRoute: (pathname: string): boolean => {
    const authenticationRoutePatterns = [/\/login\/?$/, /\/confirm-code\/?$/];

    const isAuth = authenticationRoutePatterns.some((pattern) =>
      pattern.test(pathname),
    );

    return !isAuth;
  },
};
