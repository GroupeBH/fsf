// middleware.js
export function middleware(request: any) {
    console.log('Middleware executed', request);
    return new Response('OK');
  }