 let ProductSection = document.getElementById("ProductSection");
	
	  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
	  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-analytics.js";
	  import { getDatabase, ref, onValue, remove, set, push } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";
	  // TODO: Add SDKs for Firebase products that you want to use
	  // https://firebase.google.com/docs/web/setup#available-libraries

	  // Your web app's Firebase configuration
	  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
	  const firebaseConfig = {
		apiKey: "AIzaSyD1Fv2mgRJkzf66lYiGt7-tkDK7winppsI",
		authDomain: "shiv-computer-b911c.firebaseapp.com",
		projectId: "shiv-computer-b911c",
		storageBucket: "shiv-computer-b911c.appspot.com",
		messagingSenderId: "526120095986",
		appId: "1:526120095986:web:6d406d10bbf3939a99806b",
		measurementId: "G-GGHW0ZYXNH"
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
	