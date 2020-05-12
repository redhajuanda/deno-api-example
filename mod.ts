import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import {books} from "./resource.ts";

const app = new Application();
const router = new Router();

app.use(router.routes());
app.use(router.allowedMethods());

router.get("/book", ctx => {
    ctx.response.body = Array.from(books.values());
})

router.get("/book/:id", ctx => {
    if (ctx.params && ctx.params.id && books.has(ctx.params.id)) {
        ctx.response.body = books.get(ctx.params.id);
    }
})

await app.listen({ port: 8000 });