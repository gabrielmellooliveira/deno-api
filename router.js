import { Router } from 'https://deno.land/x/oak@v4.0.0/mod.ts';

const router = new Router();

router.get('/', (context) => {
    const usuario = {
        nome: 'Gabriel Mello',
        email: 'gabrielmello@gmail.com'
    }

    context.response.body = usuario;
})

export default router;