        let headMessage = document.querySelector(".head-message");
        let userStatus = null;
        let time = null;
        let productById = "#004"; // --old comment suppose that product id in the product web page is like set to #004 we will fetch it via some new features but i do not know how at this time but i assue that javascript can do it and i will also try this feaure in future when i lear new things so i will just use this static data for now
      let username = null;

let uservalid = null;
function checkUser() {
    username = "Max"
    uservalid = "OK"
    
   
                // -- new comment i have made this a user register evenlistner function
            // --old comment this well be assigned if user is already login on {platform} if he is not logined so result value will directly change to Bad or NotFound and if user still want to give review so then he will jus see a message as in the head message
            //--old comment i will make this function once i go into backend 
            // --old comment the pupose of this function is to find the username in db if user is a
            // --old comment for now default values are seted. useranme and result. ok means username founded     
        }
        
        function headMessageShow() {
            checkUser();
            if (uservalid === "OK") {
                headMessage.innerHTML = `Welcome ${username} ! <br>This is Your Product Review Page So you can recive Similar Product Suggestion In Future `;
                // --old comment  OR I CAN ADD THIS. headMessage.innerText = `Welcome ${username} to Product Review Page. You will recive Luckly the Coupon Code under your Username !`;
            }
            else {
                headMessage.innerText = "Please Remember to enter your {platform} username! So you can recive Luckly the Coupon Code under your Username !";
                // --old comment  OR I CAN ADD THIS. headMessage.innerText = "Please Remember to enter your {platform} username! So you can recive Similar Product Suggestion In Future !";
            }
        }


        
        //product details started
        function getProductDetailsById() {
        let productName = null;
        let productInfo = null;
        let productReview = null;
        let productImage = null;
        let hidebtn = null;
            // --old comment this is used to fetch the name of product from the DB using its ID. we will fetch it via some new features but i do not know how at this time but i assue that javascript can do it and i will also try this feaure in future when i lear new things so i will just use this static data for now
            // --old comment  so in static data it value we are going to set it to a well now product or like a field related product as like i am intreseted in SAP so it better to have a Product review collector for SAP product OK it just for example OK
            productName = "SAP Inventory Managment Software"; //used static and related to SAP but it may be change if its fetched dynamicly using Javascript in Future and aslo it will not be as for SAP in future it was just an assumption for SAP product OK
            // --old comment also in this same fucntion this well responsible to fetch the Produvt info like decription
            productInfo = `Inventory management software is a digital system fo Managing<br> Inventory <span class="hidetext">that helps businesses track, manage, and optimize stock levels.<br> It automates tasks like inventory tracking, order management, and stock<br> level monitoring, leading to increased efficiency and cost savings. </span>`;
            let userReveiwCount = 1; // --old comment it will be also fetch from DB that how much user have done review
            productReview = `${userReveiwCount} users have submitted  Reveiw !`;
            // --old comment image will be also fetched from DB. like it url well be fetched and the well are going to add it in the web page img src ok
            productImage = "images/productimage.jpg";
            // --old comment any other or extra things can be added up next as needed 
            // --old comment all above value are static for now but these will going to be like fetched dynamicliy via javascirpt in future ok
            // --old comment main page generation for review start

        function genrateProductDetails() {
            let pimage = document.querySelector(".product-image");
            pimage.innerHTML = `<img style="width:200px; height:200px" src="${productImage}" >`;
            let pname = document.querySelector(".product-name");
            pname.innerHTML = `<b style="font-size: 1.1rem;">Name:</b> ${productName}`;
            let pinfo = document.querySelector(".product-info");
            pinfo.innerHTML = `<b style="font-size: 1.1rem;">Product Info:</b> ${productInfo}`;
            let preview = document.querySelector(".product-review");
            preview.innerHTML = `<b style="font-size: 1.1rem;">Review Counts:</b> ${productReview}`;
            let hidebtn = document.querySelector(".hide-btn");
            preview.innerHTML = `<b class="hide-btn btn" style="background-color: #90EE90;">Review This`;

        }
        genrateProductDetails();
        }
        

        headMessageShow();
        getProductDetailsById();


        let hidebtn = document.querySelector(".hide-btn");
        hidebtn.addEventListener("click", function(){
            let hide1= document.querySelector(".product-details");
            hide1.style.display = "none";
            let show1= document.querySelector(".review-details");
            show1.style.display = "unset";
        })


        // --old comment first of all check if user have purchased the product so he can give review if he have not buy it yet so he cannot give review 

        function checkUserPurchase(productById) {
            // --old comment if user have purched then go next 
            let isUserPurchased = null;
            // --old comment if user have not purchased say that sorry you have not purchased yet
            // --old comment for now let suppose user have purchased it 
            let userPurchaseHistoryById = ["#001", "#007", "#004"]; //like this array stores the user product puchase it maybe also fethced from db in future
            // --old comment so as user have purchased it so he is able to give reveiw but first we need to handle this with logic now
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
        // --old comment user valdition for giving review and checking his eligblilty
        if (userStatus === "OFF") {
            let valid = document.querySelector(".userstatus");
            valid.innerHTML = `<br>Sorry You have not bought the product yet ! so you cannot give Review!<br> if you are still intresed in review so you need to purchase this item <a href="productlink.html">Click here to but it</a>`
            let hide = document.querySelector(".review-details");
            hide.style.display = "none";
        }

        //-- old comment geting review from user
        let rating = 0;
        let feedback = null;
        
        let reviewDetails = document.querySelector(".review-details");
        reviewDetails.addEventListener("submit", function (event) {
            event.preventDefault();
            let getName = document.querySelector("#name");
            let getComment = document.querySelector("#comment");
            time = new Date().toLocaleString();
            
            if (getComment.value === "") {
                alert("We Are Sorry! please enter at least one word comment !");
            }
            else if (rating === 0) {
                alert("We Are Sorry! please select Rating Range 1 star to 5 star");
            }else if (getComment.value.length >= 50 || getComment.value.length < 10){
                alert("We Are Sorry! please enter only Few words comment");
            }
            else{
                feedback = {
                name: getName.value,
                comment: getComment.value,
                rating: rating,
                time: new Date().toLocaleString(),
                username: username,
            };
                saveData();
                getName.value = "";
                getComment.value = "";
                rating = 0;
                newPostData();
                
            let show1= document.querySelector(".review-details");
            show1.style.display = "none";
            let hide1= document.querySelector(".product-details");
            hide1.style.display = "unset";
            let hidebtn = document.querySelector(".hide-btn");
            hidebtn.style.display = "none";
            }
        });
        // -- old comment rating formula maybe this will be a bad practice but you know like i want to make it working and its working i do not know how i did but its working like pro
        // -- old comment svaing the frontend snippet of given star star using variables



        //-- old comment added this in code block to know its actuall code area 
        //-- new comment no new update added like i do not know how to make it DRY code it very complex and like hard of me as beginner 
        let getStar1 = document.querySelector("#star1");
        let getStar2 = document.querySelector("#star2");
        let getStar3 = document.querySelector("#star3");
        let getStar4 = document.querySelector("#star4");
        let getStar5 = document.querySelector("#star5");

        getStar1.addEventListener("click", function() {
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

// made with help of gpt but learned it 
function saveData() {
    let getJson = localStorage.getItem("jsonData");
    let jsonData = null;
    if(!getJson){
        jsonData = [];
    } else {
        jsonData = JSON.parse(getJson);
    }
    jsonData.push(feedback);
    console.log(jsonData);
    jsonString = localStorage.setItem("jsonData",JSON.stringify(jsonData));
        
}

// made with help of gpt but learned it 
        function loadData() {
        
                
                
            //function for post data in the recent review section of the page
            let dataSet = JSON.parse(localStorage.getItem("jsonData"));
            let mainDiv = document.querySelector(".recent-reviews");
            if(!dataSet) return;
            for(let i=dataSet.length;i>=0;i--){
            if(!dataSet[i]) continue;
                let post = document.createElement("div");
                post.classList.add("post");
                let nameTag = document.createElement("h3");
                nameTag.classList.add("reviewername");
                if(!dataSet[i].name){
                    nameTag.innerHTML = `<b>Name: </b>${username}`;
                } else {
                nameTag.innerHTML = `<b>Name: </b>${dataSet[i].name}`;
                }
                let commentTag = document.createElement("h3");
                commentTag.classList.add("reviewercomment");
                commentTag.innerHTML = `<b>Comment: </b>${dataSet[i].comment}`;
                let ratingTag = document.createElement("h3");
                ratingTag.classList.add("reviewerrating");
                // ratingTag.innerHTML = `<b>Rating: </b>${dataSet[i].rating}`;
                let timeTag = document.createElement("h3");
                timeTag.classList.add("reviewertime");
                timeTag.innerHTML = `<b>Time: </b>${dataSet[i].time}`;

            if (dataSet[i].rating === 1) {
                let case1 = document.querySelector(".rating");
                
                getStar1.style.color = "gold";
                rating = 1;
                getStar2.style.color = "grey";
                getStar3.style.color = "grey";
                getStar4.style.color = "grey";
                getStar5.style.color = "grey";
                ratingTag.innerHTML = case1.innerHTML;
                    getStar1.style.color = "grey";
                getStar2.style.color = "grey";
                getStar3.style.color = "grey";
                getStar4.style.color = "grey";
                getStar5.style.color = "grey";
                    
                
            } else if (dataSet[i].rating === 2) {
                let case2 = document.querySelector(".rating");
                getStar1.style.color = "gold";
                getStar2.style.color = "gold";
                rating = 2;
                getStar3.style.color = "grey";
                getStar4.style.color = "grey";
                getStar5.style.color = "grey";
                ratingTag.innerHTML = case2.innerHTML;
                

            } else if (dataSet[i].rating === 3) {
                let case3 = document.querySelector(".rating");
                
                getStar1.style.color = "gold";
                getStar2.style.color = "gold";
                getStar3.style.color = "gold";
                rating = 3;
                getStar4.style.color = "grey";
                getStar5.style.color = "grey";
                ratingTag.innerHTML = case3.innerHTML;

                

            } else if (dataSet[i].rating === 4) {
                let case4 = document.querySelector(".rating");
                getStar1.style.color = "gold";
                getStar2.style.color = "gold";
                getStar3.style.color = "gold";
                getStar4.style.color = "gold";
                rating = 4;
                getStar5.style.color = "grey";
                ratingTag.innerHTML = case4.innerHTML;

            } else if (dataSet[i].rating === 5) {
                let case5 = document.querySelector(".rating");
                
                getStar1.style.color = "gold";
                getStar2.style.color = "gold";
                getStar3.style.color = "gold";
                getStar4.style.color = "gold";
                getStar5.style.color = "gold";
                rating = 5;
                ratingTag.innerHTML = case5.innerHTML;

            };


                post.appendChild(nameTag);
                post.appendChild(commentTag);
                post.appendChild(ratingTag);
                post.appendChild(timeTag);

                mainDiv.appendChild(post);
            }
            }
            

        
//i take help from gpt to code it because i was facing aot of issues een after attempts many times
 function newPostData() {
            //function for post data in the recent review section of the page
            let mainDiv = document.querySelector(".new-reviews");
            let headTag = document.createElement("h1");
            headTag.innerHTML = "New Reviews";
            mainDiv.appendChild(headTag);
            mainDiv.appendChild(headTag);
                let post = document.createElement("div");
                post.classList.add("post");
                let nameTag = document.createElement("h3");
                nameTag.classList.add("reviewername");
                if(!feedback.name){
                    feedback.name = `${username}`;
                }
                nameTag.innerHTML = `<b>Name: </b>${feedback.name}`;
                let commentTag = document.createElement("h3");
                commentTag.classList.add("reviewercomment");
                commentTag.innerHTML = `<b>Comment: </b>${feedback.comment}`;
                let ratingTag = document.createElement("h3");
                ratingTag.classList.add("reviewerrating");
                ratingTag.innerHTML = `<b>Rating: </b>${feedback.rating}/5`;
                let timeTag = document.createElement("h3");
                timeTag.classList.add("reviewertime");
                timeTag.innerHTML = `<b>Time: </b>${feedback.time}`;

                


                post.appendChild(nameTag);
                post.appendChild(commentTag);
                post.appendChild(ratingTag);
                post.appendChild(timeTag);

                mainDiv.appendChild(post);
                
            }
            


        
        loadData();


