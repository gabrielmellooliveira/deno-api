import { Application } from 'https://deno.land/x/oak@v4.0.0/mod.ts';
import router from './router.js';

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log('Rodando em http://localhost:3333');

await app.listen('localhost:3333');