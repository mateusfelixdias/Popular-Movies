import cors from "cors";
import express from "express";
import routes from "./routes";
import "./database/connectionMongoDb";

const app = express();
const PORT = process.env.PORT || 3003;

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(PORT, () => {
    console.log(`Servidor executando na porta ${PORT}.`);
});