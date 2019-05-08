const {createConnection} = require('mysql2');
const promt = require('prompt');
const inquirer = require('inquirer');



const db = createConnection({
    host:'localhost',
    user:'root',
    password:'Kim2019@',
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
        
    })  
});

inquirer.prompt([
    {
        type:'input',
        name:'q1',
        message:`

                                        ***** Welcome to Bamazon ****

            The above product description is the list of items that are currently available in our stock!!

                                    what product woul you like to purchase today?
        `
    },
])
    .then(answer => console.log(answers))
    .catch(e => console.log(e))








   // e ? console.log(e) : console.log('sucessful connection ...')


