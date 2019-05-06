const {createConnection} = require('mysql2');
const inquire = require('inquire');


const db = createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'bamazon',
});

db.connect(e => {
    if (e ) { console.log(e)}
    db.query('SELECT * FROM products',(e, data) => {
        if (e) { console.log(e)}
        data.forEach(({ item_id, product_name, department_name, price, stock_quantity}) => 
        console.log(`
            Item ID: ${item_id}
            Name of Product: ${product_name}
            Department of Product: ${department_name}
            Price: $${price}
            Quantity in Stock: ${stock_quantity}
        `))
        process.exit()
        
        // console.log(data)
        // console.log(e)
        // console.log('---------')
        // console.log(results)
        // console.log('--------')
        // console.log(field)
        // console.log('---------')
    })  
})


   // e ? console.log(e) : console.log('sucessful connection ...')


