const totalCustomers = document.querySelector('#totalCustomers');
const productPrice = document.querySelector('#productPrice');
const tamButton = document.querySelector('#tamButton');
const unitsSold = document.querySelector('#unitsSold');
const sellingPrice = document.querySelector('#sellingPrice');
const aspButton = document.querySelector('#aspButton');
const aspLabel = document.querySelector('#aspLabel');
const tamLabel = document.querySelector('#tamLabel');

tamButton.onclick = () => {
    tam(parseFloat(totalCustomers.value), parseFloat(productPrice.value));
}

aspButton.onclick = () => {
    asp(parseFloat(unitsSold.value),parseFloat(sellingPrice.value));
}

const tam = (customers, price) =>{
    var calcTam = customers * price;
    tamLabel.innerText = "Your TAM is " + calcTam;
};

const asp = (soldUnits, price) =>{
    var totalRevenue = soldUnits * price;
    var averageSellingPrice = totalRevenue/soldUnits
    aspLabel.innerText = "Your average selling price is " + averageSellingPrice;
};