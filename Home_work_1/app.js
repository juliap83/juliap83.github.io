
let productsCountE1 = document.getElementById("products-count");
console.log(productsCountE1)

let addToCartButtons = document.querySelectorAll(".add-to-cart")
console.log(addToCartButtons)

for(let i = 0;i < addToCartButtons.length;i++) {
	addToCartButtons[i].addEventListener("click",function() {
		let prevProductsCount = +productsCountE1.textContent;
		productsCountE1.textContent = prevProductsCount + 1
	})
}

let blueHeartButtons = document.getElementsByClassName("blue_heart");
console.log(blueHeartButtons);

for(let i = 0;i < blueHeartButtons.length;i++) { 
	blueHeartButtons.addEventListener("click",function like() {
 	addClass("like") .removeClass("blue_heart")
 })
	
like()
}
