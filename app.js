        let headMessage = document.querySelector(".head-message");



        let username = null;
        let userStatus = null;
        let time = null;
        function checkDBforUser() {

            username = "Max"; //this well be assigned if user is already login on {platform} if he is not logined so result value will directly change to Bad or NotFound and if user still want to give review so then he will jus see a message as in the head message

            // i will make this function once i go into backend 
            //the pupose of this function is to find the username in db if user is a
            //for now default values are seted. useranme and result. ok means username founded

            return result = "OK"
        }

        function headMessageShow() {
            if (checkDBforUser() === "OK") {
                headMessage.innerHTML = `Welcome ${username} ! <br>This is Your Product Review Page So you can recive Similar Product Suggestion In Future `;
                // OR I CAN ADD THIS. headMessage.innerText = `Welcome ${username} to Product Review Page. You will recive Luckly the Coupon Code under your Username !`;
            }
            else {
                headMessage.innerText = "Please Remember to enter your {platform} username! So you can recive Luckly the Coupon Code under your Username !";
                // OR I CAN ADD THIS. headMessage.innerText = "Please Remember to enter your {platform} username! So you can recive Similar Product Suggestion In Future !";

            }
        }
        headMessageShow();

        //product details started

        let productById = "#004"; //suppose that product id in the product web page is like set to #004 we will fetch it via some new features but i do not know how at this time but i assue that javascript can do it and i will also try this feaure in future when i lear new things so i will just use this static data for now
        let productName = null;
        let productInfo = null;
        let productReview = null;
        let productImage = null;
        function getProductDetailsById() {
            //this is used to fetch the name of product from the DB using its ID. we will fetch it via some new features but i do not know how at this time but i assue that javascript can do it and i will also try this feaure in future when i lear new things so i will just use this static data for now
            // so in static data it value we are going to set it to a well now product or like a field related product as like i am intreseted in SAP so it better to have a Product review collector for SAP product OK it just for example OK
            productName = "SAP Inventory Managment Software"; //used static and related to SAP but it may be change if its fetched dynamicly using Javascript in Future and aslo it will not be as for SAP in future it was just an assumption for SAP product OK
            //also in this same fucntion this well responsible to fetch the Produvt info like decription
            productInfo = `Inventory management software is a digital system fo Managing<br> Inventory <span class="hidetext">that helps businesses track, manage, and optimize stock levels.<br> It automates tasks like inventory tracking, order management, and stock<br> level monitoring, leading to increased efficiency and cost savings. </span>`;
            let userReveiwCount = 1; //it will be also fetch from DB that how much user have done review
            productReview = `${userReveiwCount} users have submitted  Reveiw !`;
            //image will be also fetched from DB. like it url well be fetched and the well are going to add it in the web page img src ok
            productImage = "images/productimage.jpg";
            //any other or extra things can be added up next as needed 
            //all above value are static for now but these will going to be like fetched dynamicliy via javascirpt in future ok
        }


        //main page generation for review start

        function genrateProductDetails() {
            getProductDetailsById();
            let pimage = document.querySelector(".product-image");
            pimage.innerHTML = `<img style="width:100px; height:100px" src="${productImage}" >`;
            let pname = document.querySelector(".product-name");
            pname.innerHTML = `<b style="font-size: 1.1rem;">Name:</b> ${productName}`;
            let pinfo = document.querySelector(".product-info");
            pinfo.innerHTML = `<b style="font-size: 1.1rem;">Product Info:</b> ${productInfo}`;
            let preview = document.querySelector(".product-review");
            preview.innerHTML = `<b style="font-size: 1.1rem;">Review Counts:</b> ${productReview}`;
        }


        genrateProductDetails();



        //first of all check if user have purchased the product so he can give review if he have not buy it yet so he cannot give review 

        function checkUserPurchase(productById) {
            //if user have purched then go next 
            let isUserPurchased = null;
            //if user have not purchased say that sorry you have not purchased yet
            //for now let suppose user have purchased it 
            let userPurchaseHistoryById = ["#001", "#007", "#004"]; //like this array stores the user product puchase it maybe also fethced from db in future
            //so as user have purchased it so he is able to give reveiw but first we need to handle this with logic now
            for (let i = 0; i < userPurchaseHistoryById.length; i++) {
            isUserPurchased = userPurchaseHistoryById.includes(productById) ? "YES" : "NO";

            }
            if (isUserPurchased === "YES") {
                userStatus = "ON"; //on means good to go to give review
            }
            else {
                userStatus = "OFF"; //off means not elgible for review
            }
        }

        checkUserPurchase(productById);


        //user valdition for giving review and checking his eligblilty


        if (userStatus === "OFF") {
            let valid = document.querySelector(".userstatus");
            valid.innerHTML = `<br>Sorry You have not bought the product yet ! so you cannot give Review!<br> if you are still intresed in review so you need to purchase this item <a href="productlink.html">Click here to but it</a>`
            let hide = document.querySelector(".review-details");
            hide.style.display = "none";
        }



        //geting review from user

        let rating = 0;
        let feedback = null;


        let reviewDetails = document.querySelector("form");
        reviewDetails.addEventListener("submit", function (event) {
            event.preventDefault();

            let getName = document.querySelector("#name");
            let getComment = document.querySelector("#comment");
            time = new Date().toLocaleString();

            feedback = {
                name: getName.value,
                comment: getComment.value,
                rating: rating,
                time: new Date().toLocaleString()
            };

            if (getComment.value === "") {
                alert("We Are Soory! please enter at least one word comment !");
            }
            else if (rating === 0) {
                alert("We Are Soory! please select Rating Range 1 star to 5 star");

            }

            else {

                saveData();
                postData();

                getName.value = "";
                getComment.value = "";
                rating = 0;


            }

        });

        //rating formula //maybe this will be a bad practice but you know like i want to make it working and its working i do not know how i did but its working like pro
        //svaing the frontend snippet of given star star using variables



        //added this in code block to know its actuall code area
        let getStar1 = document.querySelector("#star1");
        let getStar2 = document.querySelector("#star2");
        let getStar3 = document.querySelector("#star3");
        let getStar4 = document.querySelector("#star4");
        let getStar5 = document.querySelector("#star5");

        getStar1.addEventListener("click", function () {
            getStar1.style.color = "gold";
            rating = 1;
            getStar2.style.color = "grey";
            getStar3.style.color = "grey";
            getStar4.style.color = "grey";
            getStar5.style.color = "grey";

        });

        getStar2.addEventListener("click", function () {
            getStar1.style.color = "gold";
            getStar2.style.color = "gold";
            rating = 2;
            getStar3.style.color = "grey";
            getStar4.style.color = "grey";
            getStar5.style.color = "grey";

        });

        getStar3.addEventListener("click", function () {
            getStar1.style.color = "gold";
            getStar2.style.color = "gold";
            getStar3.style.color = "gold";
            rating = 3;
            getStar4.style.color = "grey";
            getStar5.style.color = "grey";

        });

        getStar4.addEventListener("click", function () {
            getStar1.style.color = "gold";
            getStar2.style.color = "gold";
            getStar3.style.color = "gold";
            getStar4.style.color = "gold";
            rating = 4;
            getStar5.style.color = "grey";

        });

        getStar5.addEventListener("click", function () {
            getStar1.style.color = "gold";
            getStar2.style.color = "gold";
            getStar3.style.color = "gold";
            getStar4.style.color = "gold";
            getStar5.style.color = "gold";
            rating = 5;

        });


        //removed function for push data in array and create object of it



        function postData() {
            //function for post data in the recent review section of the page




            let reviewername = document.querySelector(".reviewername");
            let reviewercomment = document.querySelector(".reviewercomment");
            let reviewertime = document.querySelector(".reviewertime");
            reviewername.innerHTML = `<b>Name: </b>${feedback.name}`;
            reviewercomment.innerHTML = `<b>Comment: </b>${feedback.comment}`;

            reviewertime.innerHTML = `<b>Time: </b>${feedback.time}`;
            let reviewerrating = document.querySelector(".reviewerrating");

            if (rating === 1) {
                let case1 = document.querySelector(".rating");
                reviewerrating.innerHTML = case1.innerHTML;

            } else if (rating === 2) {
                let case2 = document.querySelector(".rating");
                reviewerrating.innerHTML = case2.innerHTML;

            } else if (rating === 3) {
                let case3 = document.querySelector(".rating");
                reviewerrating.innerHTML = case3.innerHTML;

            } else if (rating === 4) {
                let case4 = document.querySelector(".rating");
                reviewerrating.innerHTML = case4.innerHTML;

            } else if (rating === 5) {
                let case5 = document.querySelector(".rating");
                reviewerrating.innerHTML = case5.innerHTML;

            };





        }

        //for this i have searched internet for the exact syntax because its my first time to code the localstorage function in javascript and i did now the code of it 


        //but still i was unable to make it becuase i was not doing to copy the code and paste it here

        //function for saving data and the object in jason formated in local storage
        


//gpt code
function saveData() {
  let feedbackList = JSON.parse(localStorage.getItem("feedbackList")) || [];
  feedbackList.push(feedback);
  localStorage.setItem("feedbackList", JSON.stringify(feedbackList));
}
//my code
//function saveData() {

            //     let jsonData = [];
            // let jsonString = JSON.stringify(feedback);
            // let getJsonString = null;
            // for(let i=jsonString.length;i<jsonString.length+1;i++){
            // localStorage.setItem(jsonData,jsonString[i]);
            // getJsonString = localStorage.getItem(jsonData[i]);
            // }
            // let prasejson = JSON.parse(getJsonString); 

            // console.log(prasejson);
      //  }






