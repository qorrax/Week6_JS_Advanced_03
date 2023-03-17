const siteContent = {
    "nav": {
      "nav-item-1": "Services",
      "nav-item-2": "Product",
      "nav-item-3": "Vision",
      "nav-item-4": "Features",
      "nav-item-5": "About",
      "nav-item-6": "Contact",
      "img-src": "img/logo.png"
    },
    "cta": {
      "h1": "DOM Is Awesome",
      "button": "Get Started",
      "img-src": "img/header-img.png"
    },
    "main-content": {
      "features-h4":"Features",
      "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
      "about-h4":"About",
      "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
      "middle-img-src": "img/mid-page-accent.jpg",
      "services-h4":"Services",
      "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
      "product-h4":"Product",
      "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
      "vision-h4":"Vision",
      "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    },
    "contact": {
      "contact-h4" : "Contact",
      "address" : "123 Way 456 Street Somewhere, USA",
      "phone" : "1 (888) 888-8888",
      "email" : "sales@greatidea.io",
    },
    "footer": {
      "copyright" : "Copyright Great Idea! 2018"
    },
  };


    
  
  // Example: Update the img src for the logo
  let logo = document.getElementById("logo-img");
  logo.setAttribute('src', siteContent["nav"]["img-src"])



   const  bigTitle = document.querySelector(".cta-text, h1")
   bigTitle.textContent = siteContent["cta"]["h1"]


     const mainButton = document.getElementsByClassName(".cta .cta-text button")
      mainButton.textContent = siteContent["cta"]["button"]

        
  

    const imgHeader = document.querySelector("#cta-img" )
     imgHeader.setAttribute("src",siteContent["cta"]["img-src"])

     const startButton = document.querySelector(".cta-text")
     startButton.textContent = siteContent["cta"]["button"]



     const topSection  = document.querySelectorAll(".top-content .text-content")
       topSection.forEach(content => {
        const paragraphs = document.querySelectorAll("p,h4")       
      
      paragraphs.forEach(paragraph => {
        console.log(paragraph.textContent);

      });
      
            
      });



    //  const midPic = document.querySelector(" .middle-img")
    //   midPic.setAttribute("src", siteContent["main-content"]["middle-img-src"])
  

    

      //   const featuresContent = document.querySelector(".text-content")
      //   featuresContent.textContent = siteContent["main-content"]["features-content"]
   
      

      //  const productContent = document.querySelector(".bottom-content ")
      //  productContent.textContent = siteContent["main-content"]["product-content"]


    const domText = document.querySelector(".cta .cta-text, h1")
     domText.textContent = siteContent["cta"].h1

     
     const texts = ['Services', 'Product', 'Vision', 'Features', 'About', 'Contact'];
     const as = document.querySelectorAll('a');
     texts.forEach((text, i) => {
       as[i].textContent = text;
       as[i].style.color = "green";
      
      
     });


     const elements = siteContent["contact"];

     const header = document.querySelector(".contact h4")
     header.textContent = elements["contact-h4"]

     

     const ParaContact = document.querySelectorAll(".contact p ")
       ParaContact[0].textContent = elements["address"]
       ParaContact[1].textContent = elements["phone"]
       ParaContact[2].textContent = elements["email"]

       
    

     const footer = document.querySelector(" footer p")
      footer.textContent = siteContent["footer"]["copyright"]
        
    
     
  

    

    