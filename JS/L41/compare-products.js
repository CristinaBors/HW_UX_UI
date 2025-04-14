

//product 1 data
const product_1_name     = "Table Space Y"
const product_1_price    = 1000  // USD
const product_1_diagonal = 5.2   // inch

//product 2 data
const product_2_name     = "Table Aero 11"
const product_2_price    = 900  // USD
const product_2_diagonal = 4.9  // inch


//Comparison

let firstProdScreenBigger = product_2_diagonal < product_1_diagonal
let firstProdCheaper = product_1_price < product_2_price
let screenCompareOut = "no"
let priceCompareOut = "no"


if ( firstProdScreenBigger ) {
    screenCompareOut = "yes"
}

if ( firstProdCheaper ) {
    priceCompareOut = "yes"
}

result.innerHTML = "First tablet has bigger screen ? <br>" + screenCompareOut + "<br>" 
result.innerHTML = result.innerHTML + "First tablet is cheaper ? </br>" + priceCompareOut