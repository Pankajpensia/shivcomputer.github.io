 let ProductSection = document.getElementById("ProductSection");
	
	  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
	  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-analytics.js";
	  import { getDatabase, ref, onValue, remove, set, push } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";
	  // TODO: Add SDKs for Firebase products that you want to use
	  // https://firebase.google.com/docs/web/setup#available-libraries

	  // Your web app's Firebase configuration
	  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
	 const firebaseConfig = {
  apiKey: "AIzaSyDlMh1nW65TSixHJqf5eztacnIh4gY7kik",
  authDomain: "shiv-computer-f9447.firebaseapp.com",
  projectId: "shiv-computer-f9447",
  storageBucket: "shiv-computer-f9447.appspot.com",
  messagingSenderId: "173874985306",
  appId: "1:173874985306:web:cb8ee29262df1252d39b63",
  measurementId: "G-1E9D53LRQ5"
};
	  // Initialize Firebase
	  const app = initializeApp(firebaseConfig);
	  const analytics = getAnalytics(app);
	  const database = getDatabase(app);
	  
	window.addEventListener('load', () => {


  // Assume "Mobile" is the user identifier
    let UserName = "Products"


    onValue(ref(database, UserName), (snapshot) => {
      // Clear DocPage before appending new data
      ProductSection.innerHTML = '';

      snapshot.forEach((childSnapshot) => {
        const childData = childSnapshot.val();
        const Name = childData.ProductName;
        const Price = childData.ProductPrice;
		const Image = childData.ProductImage;
        const documentId = childSnapshot.key;
        console.log(Name, Price, documentId);
        // Display data in the HTML
        ProductSection.innerHTML += `<div class="grid-item Apple border">
                 <div class="item py-2" style="width: 200px;">
                  <div class="product font-rale">
                    <a href="#"><img src="${Image}" alt="product" class="img-fluid"></a>
                    <div class="text-center">
                      <h6>${Name}</h6>
                      <div class="rating text-warning font-size-12">
                        <span><i class="fas fa-star"></i></span>
                        <span><i class="fas fa-star"></i></span>
                        <span><i class="fas fa-star"></i></span>
                        <span><i class="fas fa-star"></i></span>
                        <span><i class="far fa-star"></i></span>
                      </div>
                      <div class="price py-2">
                        <span>${Price}</span>
                      </div>
                      <button type="submit" id="BuyBtn" class="btn btn-warning font-size-12">Add to Cart</button>
                    </div>
                  </div>
                </div>
                </div>`;
      });
     

      // Add click event listener to delete buttons
      const BuyBtn = document.querySelectorAll("#BuyBtn");
      BuyBtn.forEach((btn) => {
        btn.addEventListener("click", (event) => {
           alert("Please Visit My Shop:- Shiv Computer Kharian");
        });
      });
    });
  
});
	
