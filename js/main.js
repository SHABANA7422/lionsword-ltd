fetch('js/data.json')
 .then(response => response.json())
        .then(data => displayProducts(data))
        .catch(error => console.error('حدث خطأ في استرجاع بيانات المنتجات:', error));

    function displayProducts(products) {
        var productListDiv = document.getElementById('products');

        products.forEach(function (product) {
            productListDiv.innerHTML += ` 
            <div class="swiper-slide box" onclick="ShowDetailsProduct('${product.name}','${product.img}','${product.parg}','${product.imgdet}')">
                <img src="${product.img}" alt="${product.name}">
                <span>${product.p} </span>
                <h3>${product.name}</h3>
                <h5>Read More</h5>
            </div>
        `;
        });
    }
    var divproductsDetails = document.getElementById("moreDeatilsProducts");

    function ShowDetailsProduct(name,img,parg,imgdet){
     
       
        divproductsDetails.innerHTML = `

        <div class="closeDet" onclick=(hideProductDetiles())>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xml:space="preserve"><circle " cx="256" cy="256" r="246"/><circle cx="256" cy="256" r="205"/><path fill="#EDEFF1" d="m379.213 175.213-42.426-42.426L256 213.573l-80.787-80.786-42.426 42.426L213.573 256l-80.786 80.787 42.426 42.426L256 298.427l80.787 80.786 42.426-42.426L298.427 256z"/></svg>
    </div>

        <div class="product_Det">
        <div class="content">
           

         
            <div>
           <div class="m-text">
           <h1>${name}</h1>
           <p>${parg}</p>
           </div>
         
            <img class="proimg" src="${img}" alt="">

            </div>
            <img class="detimg" src="${imgdet}" alt="">


        </div>
   </div>
            
        `
        divproductsDetails.style.display = "block"

      console.log(name)
    }

    function hideProductDetiles(){
        divproductsDetails.style.display = "none"
    }


    fetch('js/gallery.json')
 .then(response => response.json())
        .then(data => displayImages(data))
        .catch(error => console.error('حدث خطأ في استرجاع بيانات المنتجات:', error));

        function displayImages(images) {
            var allGallery = document.getElementById('allGallery');
    
            images.forEach(function (img) {
                allGallery.innerHTML += ` 
                <div class="box">
                    <img src="${img.img}" alt="">
                </div>
            `;
            });
        }


        /* header */ 

        let navLinks = document.getElementById("links");
        let btnMenu = document.getElementById("btnMenu");
        let header = document.getElementById("header");

        function openCloseMenu(){
            navLinks.classList.toggle("active")
            console.log("Reda")
        }

        let started = false; 
        window.onscroll = function () {
            navLinks.classList.remove("active")
            if(this.scrollY >= 200){
              header.classList.add('active');
          }
          else{
              header.classList.remove('active');
          }
          };



