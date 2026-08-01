// // Light Mode
// $("*").css("background-color", "lightblue");
// $("#NavigationBar").css("background-color", "sienna");
// $("#NavigationBar a").css({"background-color":"sienna", "color":"deepskyblue"});
// $("h1, h2, h3, h4, h5, h6").css("color", "black");
// $("footer").css("background-color", "darkblue");
// $("footer p").css({"background-color":"darkblue", "color":"white"});
// $("#socialmediablock a span").css("color", "black");
// $("hr").css("background-color","darkgray");
// // Dark Mode
// $("*").css("background-color", "darkblue");
// $("#NavigationBar").css("background-color", "#d68a59");
// $("#NavigationBar a").css({"background-color":"#d68a59", "color":"#2d5e97"});
// $("h1, h2, h3, h4, h5, h6").css("color", "white");
// $("footer").css("background-color", "lightblue");
// $("footer p").css({"background-color":"lightblue", "color":"black"});
// $("#socialmediablock a span").css("color", "white");
// $("hr").css("background-color", "lightgray");
$(function() {
    setInterval(() => {
        let date = new Date();
        let month = date.getMonth();
        let hour = date.getHours();
        switch(month) {
            case 0:
                // January
                if(hour >= 7 && hour < 17) {}
                else {}
                break;
            case 1:
                // February
                if(hour >= 6 && hour < 18) {}
                else {}
                break;
            case 2:
                // March
                if(hour >= 6 && hour < 19) {}
                else {}
                break;
            case 3:
                // April
                if(hour >= 5 && hour < 20) {}
                else {}
                break;
            case 4:
                // May
                if(hour >= 5 && hour < 21) {}
                else {}
                break;
            case 5:
                // June
                if(hour >= 5 && hour < 21) {}
                else {}
                break;
            case 6:
                // July
                if(hour >= 5 && hour < 21) {}
                else {}
                break;
            case 7:
                // August
                if(hour >= 6 && hour < 20) {}
                else {}
                break;
            case 8:
                // September
                if(hour >= 6 && hour < 20) {}
                else {}
                break;
            case 9:
                // October
                if(hour >= 7 && hour < 19) {}
                else {}
                break;
            case 10:
                // November
                if(hour >= 6 && hour < 17) {}
                else {}
                break;
            case 11:
                // December
                if(hour >= 7 && hour < 17) {}
                else {}
                break;
        }
    }, 30000);
});