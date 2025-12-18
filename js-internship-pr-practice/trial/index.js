import express from "express"

const app = express();
const PORT = 3000;
app.use(express.json())


app.use("/", async (req, res) => {
    console.log("Hello from harsh!")

})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})