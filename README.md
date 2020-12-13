# html2pdf
convert html template to hbs using handlebar and then to pdf

This is a simple example to convert html to pdf. 

This example uses html-pdf, express, ... libraries you can check them out on npm.

If your html is static and you want to convert it to pdf use "/create-pdf-static/:billTemplate" route.

If your html is dynamic then I had used handlebars template engine to build html and then converted it to pdf.

Plz go thought the code its simple. Also use postman to hit api's I have attached the postman code snippets.

Postman POST Request code snippet.
POST /create-pdf/billTemplate HTTP/1.1
Host: localhost:5000
Content-Type: application/json
Content-Length: 3202

{
    "from": "Info Inc.",
    "fromCity": "Shahdara",
    "fromState": "Delhi",
    "fromPin": "110032",
    "to": "Cloud Tech Pvt. Ltd",
    "toCity": "Gurugram",
    "totate": "Gurgaon",
    "toPin": "122102",
    "date": "2020-12-03T16:36:21.366Z",
    "aProduct": [{"name":"product name 1","ordered":54,"stock":93,"remark":"this is duummy remark no: 1"},{"name":"product name 2","ordered":61,"stock":10},{"name":"product name 3","ordered":8,"stock":0},{"name":"product name 4","ordered":87,"stock":38},{"name":"product name 5","ordered":19,"stock":34},{"name":"product name 6","ordered":91,"stock":6,"remark":"this is duummy remark no: 6"},{"name":"product name 7","ordered":26,"stock":25},{"name":"product name 8","ordered":26,"stock":42},{"name":"product name 9","ordered":9,"stock":58},{"name":"product name 10","ordered":96,"stock":61},{"name":"product name 11","ordered":85,"stock":18,"remark":"this is duummy remark no: 11"},{"name":"product name 12","ordered":8,"stock":59},{"name":"product name 13","ordered":39,"stock":79},{"name":"product name 14","ordered":49,"stock":81},{"name":"product name 15","ordered":49,"stock":87},{"name":"product name 16","ordered":77,"stock":98,"remark":"this is duummy remark no: 16"},{"name":"product name 17","ordered":99,"stock":42},{"name":"product name 18","ordered":51,"stock":41},{"name":"product name 19","ordered":75,"stock":62},{"name":"product name 20","ordered":83,"stock":35},{"name":"product name 21","ordered":5,"stock":83,"remark":"this is duummy remark no: 21"},{"name":"product name 22","ordered":30,"stock":65},{"name":"product name 23","ordered":13,"stock":5},{"name":"product name 24","ordered":79,"stock":83},{"name":"product name 25","ordered":62,"stock":77},{"name":"product name 26","ordered":61,"stock":23,"remark":"this is duummy remark no: 26"},{"name":"product name 27","ordered":98,"stock":67},{"name":"product name 28","ordered":21,"stock":73},{"name":"product name 29","ordered":14,"stock":78},{"name":"product name 30","ordered":36,"stock":6},{"name":"product name 31","ordered":47,"stock":60,"remark":"this is duummy remark no: 31"},{"name":"product name 32","ordered":11,"stock":98},{"name":"product name 33","ordered":23,"stock":55},{"name":"product name 34","ordered":77,"stock":97},{"name":"product name 35","ordered":89,"stock":31},{"name":"product name 36","ordered":44,"stock":37,"remark":"this is duummy remark no: 36"},{"name":"product name 37","ordered":99,"stock":93},{"name":"product name 38","ordered":89,"stock":46},{"name":"product name 39","ordered":11,"stock":99},{"name":"product name 40","ordered":10,"stock":42},{"name":"product name 41","ordered":71,"stock":13,"remark":"this is duummy remark no: 41"},{"name":"product name 42","ordered":73,"stock":59},{"name":"product name 43","ordered":98,"stock":42},{"name":"product name 44","ordered":71,"stock":53},{"name":"product name 45","ordered":76,"stock":54},{"name":"product name 46","ordered":40,"stock":82,"remark":"this is duummy remark no: 46"},{"name":"product name 47","ordered":26,"stock":31},{"name":"product name 48","ordered":16,"stock":95},{"name":"product name 49","ordered":18,"stock":19},{"name":"product name 50","ordered":44,"stock":4}]
}

thankyou...
