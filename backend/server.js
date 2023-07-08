import app from "./app.js"
import mongoose from "mongoose";
import 'dotenv/config';



const port = process.env.PORT


mongoose.connect(process.env.MONGODB_KEY)
    .then(() => {
        console.log('Connecté à la base de données MongoDB')
        app.listen(port, () => {
            console.log(`Listening on port: ${port}`)
        })
    })
    .catch((error) => {
        console.error('Erreur de connexion à la base de données', error)
    })


