import { superoak } from "../deps_dev.ts"
import {app} from "@root/src/app.ts"
import { stopsMocks } from "./mocks/stops.mock.ts";

Deno.test("it should return stops", async () => {
    const linea = '11'
    const request = await superoak(app);
    await request.get(`/stops/${linea}`).expect(200).expect(stopsMocks);
  });

Deno.test("it should return stops 404", async () => {
const linea = 'invalid-linea'
const request = await superoak(app)
await request.get(`/stops/${linea}`).expect(404)
});