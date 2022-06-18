
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
            <div>
                <div>
                    <p>Offers</p>
                    <p>Fanbook</p>
                    <p><i class="fa-solid fa-mobile"></i>  Download App</p>
                    <p>TriBe Membership</p>
                </div>
                <div>
                    <p>Contact Us</p>
                    <p>Track Order</p>
                </div>
            </div>
        </div>

        <div id="navbar">
            <div>
                <div>
                    <img id="logo_1" src="https://images.bewakoof.com/web/ic-desktop-pride-bwkf-logo.svg" alt="logo">
                </div>
                <div>
                    <p>MEN</p>
                    <p>WOMEN</p>
                    <p>MOBILE COVERS</p>
                </div>
                <div id="icons">
                    <div>
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <input type="text" id="query" placeholder="Search by product, category or collection" />
                    </div>
                    <div>
                        <div></div>
                        <a href="./register.html"><i class="fa-regular fa-user"></i></a>
                        <i class="fa-regular fa-heart"></i>
                        <a href="./addtocart.html"><i class="fa-solid fa-bag-shopping"></i></a>
                        
                    </div>
                </div>
            </div>
        </div>
    `;

}





export default navbar;