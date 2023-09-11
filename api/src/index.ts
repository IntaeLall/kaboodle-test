import initApp from "./app";
import { database } from "./database";
import dbClient from "./database/client";

const port = 8000

const makeApp = async () => {
  const app = await initApp({
    database,
    dbClient
  })
  return app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  })
}

makeApp()
