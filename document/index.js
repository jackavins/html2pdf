const fs = require('fs');
const handleBars = require("handlebars");
const moment = require("moment");

handleBars.registerHelper("moment", (date, format = "DD-MMM-YY") => moment(date).format(format));

handleBars.registerHelper("relativeTime", (date) => moment(date).fromNow());

handleBars.registerHelper("inc", (num) => num + 1);

handleBars.registerHelper("deriveCSSByQuantity", (ordered, stock) => {
    if (stock >= ordered)
        return "bold";

    if (stock > 0)
        return "italic";

    return "small";
});

module.exports = (filename, data = {}) => {
    const htmlTemplate = fs.readFileSync(__dirname + "/" + filename + ".hbs", { encoding: "utf8" });
    return handleBars.compile(htmlTemplate)(data);
}