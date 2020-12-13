const pdf = require("html-pdf");

module.exports = (template, filename) => {
    return new Promise((resolve, reject) => {
        pdf.create(template, {
            "header": {
                "height": "20mm"
            },
            "footer": {
                "height": "15mm",
                "contents": {
                    default: `
            <div class="footer-page-index">
                <div class="text-right">
                    <div class="bold">mypin.ai</div>
                    <div class="">page {{page}} of {{pages}}</div>
                </div>
            </div>
            `
                }
            }
        }).toFile(`./public/${filename}`, function (err, res) {
            if (err) return reject(err);
            resolve(res)
        });
    });
};