const API_URL = "http://localhost/";

async function loadProducts(){
    const container = document.getElementById("product-list");
    container.textContent = "Chargement ...";

    try{
        const reponse = await fetch(API_URL);
        if(!reponse.ok){
            throw new Error("Erreur HTTP : " + reponse.status);
        }
        const product = await reponse.json()
        displayProducts(product);
    }
    catch(e){
        console.error(e);
        container.textContent = "Impossible de charger les produits"
    }
}

function displayProducts(product){
    const container = document.getElementById('product-list');
    container.textContent = "";

    if (product.length === 0){
        container.textContent = "Aucun produit disponible";
        return;
    }
    product.forEach((p) =>{
        const card = document.createElement("div");
        card.className = "products";

        const title = document.createElement("h2");
        title.textContent = p.nom;

        const desc = document.createElement("p");
        desc.textContent = p.description;

        const price = document.createElement("p");
        price.className = "price";
        // Le toFixed(2) permet d'avoir 2 chiffres après la virgule 
        price.textContent = Number(p.price).toFixed(2) + "€";

        card.append(title, desc, price);
        container.appendChild(card);
    })
};

// Ligne qui permet de dire qu'on attend que la page soit prête avant de pouvoir intéragir avec.
document.addEventListener("DOMContentLoaded", loadProducts);