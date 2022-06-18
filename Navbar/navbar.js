
// let url = "https://fakestoreapi.com/products";

//     async function fetchData(){
//         try{
//             let res = await fetch(url);
//             let data = await res.json();

//             console.log("Data :", data);
//         }catch(err){
//             console.log("err:",err);
//         }

//     }

//     fetchData();


function navbar(){
    return `
            <div id="up_navbar">
            
                <div class="up_navbar-box">
                    <p>Offers</p>
                    <p>Fanbook</p>
                    <p><i class="fa-solid fa-mobile"></i>  Download App</p>
                    <p>TriBe Membership</p>
                </div>
                <div class="up_navbar-box2">
                    <p>Contact Us</p>
                    <p>Track Order</p>
                </div>

        </div>

        <div id="bottom-nav">
           
                <div id="section1"> 
                    <div id="logo" class="navbar-box">
                        <img src="https://images.bewakoof.com/web/ic-desktop-pride-bwkf-logo.svg" alt="logo">
                    </div>
                    <div id="catagory-section" class="navbar-box">
                        <p>MEN</p>
                        <p>WOMEN</p>
                        <p>MOBILE COVERS</p>
                    </div>
                </div>

                <div id="section2"> 
                        <div id="search" class="navbar-box">
                            <input type="text" id="query" placeholder="Search by product, category or collection" />
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </div>
                        <hr id="seperator" />
                        <div id="icons" class="navbar-box">
                            <i class="fa-regular fa-user"></i>
                            <i class="fa-regular fa-heart"></i>
                            <a href="../addtocart.html"><i class="fa-solid fa-bag-shopping"></i></a>
                            
                        </div>   
                </div>
         </div>
    `;

}

export default navbar;