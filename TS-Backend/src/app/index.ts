import express from "express"
import type { Application } from "express"
import todoRouter from "./todo/routes.js"

export function createExpressServer(): Application{
    const app = express()

   //#region //*=========== Routes ===========
   app.use("/todos", todoRouter)
   //#endregion //*=========== Routes ===========
   
    return app
}
