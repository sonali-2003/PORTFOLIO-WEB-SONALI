var menubtn=document.getElementById("menubtn")
        var navbar=document.getElementById("navbar")

       menubtn.onclick=function(){
        if(navbar.style.left=="-350px"){
            navbar.style.left="0";
        }
        else{
            navbar.style.left="-350px";
        }
       }

       var tablinks = document.getElementsByClassName("tab-links");
        var tabcontents = document.getElementsByClassName("tab-contents");
         function opentab(tabname){
            for(tablink of tablinks){
                tablink.classList.remove("active-link");
            }
            for(tabcontent of tabcontents){
                tabcontent.classList.remove("active-tab");
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");
         }