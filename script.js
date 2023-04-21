const glutenFreeList = ["rice", "quinoa", "potato", "corn", "buckwheat", "oats", "amaranth", "tapioca", "millet", "arrowroot", "sorghum", "teff", "chickpea", "soy"];
const form = document.querySelector("form");
const result = document.querySelector("#result");
form.addEventListener("submit", () => {
const productName = document.querySelector("#product-name").value.trim().toLowerCase();
if (productName.length === 0) {
    result.textContent = "Please enter a product name.";
    return;
}
if (glutenFreeList.includes(productName)) {
    result.textContent = `${productName} is gluten-free! 🎉`;
} else {
    result.textContent = `${productName} contains gluten. 😢`;
}
})

