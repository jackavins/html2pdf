const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const util = require("./pdfUitl");
const document = require("./document");

const app = express();

const port = process.env.port || 5000;
const filename = "html2pdf.pdf";

app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/create-pdf/:filename", (req, res) => {
    util(document(req.params.filename, req.body), filename)
        .then(() => {
            res.status(200).json({
                url: `http://localhost:${port}/${filename}`
            });
        });
});

app.listen(port, () => console.log("server up on port:", port));