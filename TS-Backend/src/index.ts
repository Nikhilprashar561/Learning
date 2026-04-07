import http from "node:http"
import { env } from "./env.js"
import { createExpressServer } from "./app/index.js"


async function main(){
    try {
        const server = http.createServer(createExpressServer())
        const PORT: number = env.PORT ? +env.PORT : 8080

        server.listen(PORT, () => {
            console.log(`Server Started at PORT ${PORT}`)
        })
    } catch (error) {
        throw error
    }
}

main()
