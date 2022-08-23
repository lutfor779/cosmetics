require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
const fileUpload = require("express-fileupload");

const port = process.env.PORT || 8000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(fileUpload());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.8qcwn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	serverApi: ServerApiVersion.v1,
});

async function run() {
	try {
		await client.connect();
		const database = client.db("cosmetics");
		const grooming = database.collection("grooming");
		const makeup = database.collection("makeup");

		console.log("database connection ok");

		app.post("/product", async (req, res) => {
			// create a document to insert
			const doc = {
				title: "Record of a Shriveled Datum",
				content: "No bytes, no problem. Just insert a document, in MongoDB",
			};
			const result = await grooming.insertOne(doc);
			console.log(`A document was inserted with the _id: ${result.insertedId}`);
		});

		app.post("/products", async (req, res) => {
			const data = req.body;
			const image = req.files.image;

			const imageData = image.data;
			const encodedImage = imageData.toString("base64");
			const imageBuffer = Buffer.from(encodedImage, "base64");

			const product = {
				picture: imageBuffer,
			};

			const result = await grooming.insertOne(product);
			console.log(`A document was inserted with the _id: ${result.insertedId}`);

			res.json(result);
		});
	} finally {
		// Ensures that the client will close when you finish/error
		// await client.close();
	}
}
run().catch(console.dir);

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
