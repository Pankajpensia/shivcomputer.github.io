
	let ProductName = document.getElementById("ProductName");
	let ProductPrice = document.getElementById("ProductPrice");
	let ProductFile = document.getElementById("ProductFile");
	let ProductAddBtn = document.getElementById("ProductAddBtn");
	let ProductPage = document.getElementById("ProductPage");
	
	  // Import the functions you need from the SDKs you need
	  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
	  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-analytics.js";
	  import { getDatabase, ref, onValue, remove, set, push } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";

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
	  
	 
const imageInput = document.getElementById('ProductFile');

imageInput.addEventListener("change", function(){

 if (imageInput.files.length > 0) {
        const file = imageInput.files[0];
        const reader = new FileReader();

        reader.onload = function (e) {
          // Convert the image to Base64
          const base64Image = e.target.result;

          // Store the Base64 image in localStorage
          localStorage.setItem('storedImage', base64Image);

        };

        // Read the file as Data URL
        reader.readAsDataURL(file);
      } else {
        alert('Please select an image.');
      }
    });
	
	  
function submitForm(e) {
  e.preventDefault()
  const Name = ProductName.value;
  const Price = ProductPrice.value;
  let Image = localStorage.getItem("storedImage");

  if (Name && Price) {
    const usersRef = push(ref(database, "Products"));
    set(usersRef, {
      ProductName: Name,
      ProductPrice: Price,
	  ProductImage: Image
    })
      .then(() => {
        alert("Product Added SuccessFully");
		localStorage.clear();
        location.reload();
      })
      .catch((error) => {
        alert("Product Not Added", error);
      });
  } else {
    alert("Please enter both a Name and a Price.");
  }
}

ProductAddBtn.addEventListener("click", submitForm);

  let UserName = "Products"


    onValue(ref(database, UserName), (snapshot) => {

      snapshot.forEach((childSnapshot) => {
        const childData = childSnapshot.val();
        const Name = childData.ProductName;
        const Price = childData.ProductPrice;
		const Image = childData.ProductImage;
        const documentId = childSnapshot.key;
        console.log(Name, Price, documentId);
        // Display data in the HTML
		
		ProductPage.innerHTML += `
		<div class="card	my-3 mx-3" style="width: 18rem;">
  <img src="${Image}" class="card-img-top" alt="">
  <div class="card-body">
    <h5 class="card-title">${Name}</h5>
    <h2	class="card-text">${Price}</p>
    <a href="#" class="btn btn-danger"	data-document-id="${documentId}"	id="delBtn"	>Delete</a>
  </div>
</div>
		`;
      
      });
      const deleteButtons = document.querySelectorAll("#delBtn");
      deleteButtons.forEach((btn) => {
        btn.addEventListener("click", (event) => {
          const documentIdToDelete = event.target.getAttribute("data-document-id");
          if (documentIdToDelete) {
            const documentRefToDelete = ref(database, `${UserName}/${documentIdToDelete}`);
            deleteDoc(documentRefToDelete);
          }
        });
      });
    });
	
	  async function deleteDoc(docRef) {
  try {
    await remove(docRef);
    alert("Document successfully deleted!");
    location.reload();
  } catch (error) {
    console.error("Document deletion unsuccessful. Please try again!");
    setInterval(function() {
      location.reload();
    }, 500);
  }
}