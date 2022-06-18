


    // let atc_userdata = JSON.parse(localStorage.getItem("userDatas")) 


    let atcitemarr = JSON.parse(localStorage.getItem("mencart"));
    console.log(atcitemarr)

    let append = (data) => {
        let atccontainer = document.getElementById("atcitem")
        data.forEach((el, index) => {
            let item = document.createElement("div");
            let aboutitem = document.createElement("div");
            aboutitem.setAttribute("class", "aboutitem")
            let imageitem = document.createElement("div");
            imageitem.setAttribute("class", "imageitem")
            let p = document.createElement("p");
            p.innerText = el.CompanyName;
            let h2 = document.createElement("h2");
            h2.innerText = el.Amount;
            let h4 = document.createElement("h4");
            h4.innerText = el.discounted_price;
            let save = document.createElement("h3");
            save.innerText = `You Save ${el.discount}!`;
            let image = document.createElement("img");
            image.src = el.ProductImg;




            let buttondiv = document.createElement("div");
            buttondiv.setAttribute("class", "buttondiv")
            let removediv = document.createElement("div");
            let watchlistdiv = document.createElement("div");

            let b1 = document.createElement("button")
            let b2 = document.createElement("button")
            b1.innerText = "Remove"
            b1.setAttribute("id", "atcRemove")
            // style.cursor="pointer"
            b1.addEventListener("click", function () {
                Remove(el, index)
            });

            b2.innerText = "Move to Wishlist"

            removediv.append(b1)
            watchlistdiv.append(b2)
            buttondiv.append(removediv, watchlistdiv);
            aboutitem.append(p, h2, h4, save);
            imageitem.append(image)
            item.append(aboutitem, imageitem)
            atccontainer.append(item, buttondiv)

        })


        let atccontainer2 = document.getElementById("atcamount");

    }

    append(atcitemarr);


    function Remove(el, index) {
        atcitemarr.splice(index, 1)
        alert("Your Product Rmoved Successfully")
        window.location.reload()
        localStorage.setItem("mencart", JSON.stringify(atcitemarr))
    }



    //   ---------------------------------------------

    let atcamount = document.getElementById("atcamount");
    let offer = document.createElement("div");
    offer.setAttribute("class", "offer")
    let price = document.createElement("div");
    price.setAttribute("class", "price");
    atcamount.append(offer, price);
    // -----------------------------
    // offer div

    let offer_navbar = document.createElement("div");
    offer_navbar.setAttribute("id", "offer_navbar");
    let o_n1 = document.createElement("div");
    o_n1.setAttribute("id", "o_n1")
    o_n1.innerText = "Save extra ₹60 with TriBe "
    let o_n2 = document.createElement("div");
    o_n2.setAttribute("id", "o_n2");
    o_n2.innerText = " >>"
    offer_navbar.append(o_n1, o_n2)

    let offer_detail = document.createElement("div")
    offer_detail.setAttribute("id", "offer_detail")
    offer_detail.innerText = "Whistles! Get extra 10% Cashback on prepaid orders above Rs.699. Coupon code - OOF10."
    let offer_detail1 = document.createElement("div")
    offer_detail1.setAttribute("id", "offer_detail1")
    offer_detail1.innerText = "Get upto Rs.200 cashback on orders above Rs.299 on Paytm Wallet and Paytm Postpaid"
    let offer_detail2 = document.createElement("div")
    offer_detail2.setAttribute("id", "offer_detail2")
    offer_detail2.innerText = "Whistles! Get extra 20% Cashback on prepaid orders above Rs.499. Coupon code - NEW20. Applicable for new customers only!"


    let offer_navbar2 = document.createElement("div");
    offer_navbar2.setAttribute("id", "offer_navbar2");
    let o_n12 = document.createElement("div");
    o_n12.setAttribute("id", "o_n12")
    o_n12.innerText = "Have a Coupon / Gift Card? "
    let o_n22 = document.createElement("div");
    o_n22.setAttribute("id", "o_n22");
    o_n22.innerText = " >>"
    offer_navbar2.append(o_n12, o_n22)




    offer.append(offer_navbar, offer_detail, offer_detail1, offer_detail2, offer_navbar2)


    // ------------------------------------------------
    // price_div




    let price_div = document.createElement("div")
    price_div.innerText = "Price Summery"
    price_div.setAttribute("id", "price_div")


    let subtotal = document.createElement("div");

    subtotal.setAttribute("id", "subtotal")

    let checkout_div = document.createElement("button");
    checkout_div.innerText = "Checkout";
    checkout_div.setAttribute("id", "checkout_div");
    checkout_div.addEventListener("click", checkout);

    price.append(price_div, subtotal, checkout_div)



    var takeprice = JSON.parse(localStorage.getItem("mencart")) || [];
    totalprice(takeprice);

    function totalprice(data) {
        var add = 0;
        var count = 0;
        var tp = document.createElement("h2");
        data.forEach(function (element) {
            add += +(element.Realamount);
            count++;
        });
        console.log(add);
        subtotal.append("Total Price - " + add)
        let count_div = document.getElementById("count_item");
        count_div.append(`My Bag ${count} item`)

    }

    function checkout() {
      
        window.location.href="payment.html"

    }

    import footer from "./footer.js"

    document.getElementById("vinay-footer").innerHTML = footer();