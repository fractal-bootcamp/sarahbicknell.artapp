import { clerkMiddleware, createRouteMatcher} from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher([
  '/artbuilder(.*)',
]);

export default clerkMiddleware((auth, req) => {
  console.log("using clerkMiddleware")
  if (isProtectedRoute(req)) auth().protect();
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};