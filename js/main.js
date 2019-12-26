function arrowHoverOnEffect()
{
    var wrapper = document.querySelector('.arrow-up-wrapper');
    var arrow = document.querySelector('.arrow-up');

    wrapper.style.backgroundColor = "rgb(255, 255, 255, 0.7)";
    arrow.style.borderColor = "rgb(27,27,27)";
}

function arrowHoverOffEffect()
{
    var wrapper = document.querySelector('.arrow-up-wrapper');
    var arrow = document.querySelector('.arrow-up');

    wrapper.style.backgroundColor = "rgb(27,27,27)";
    arrow.style.borderColor = "rgb(255, 255, 255, 0.7)";
}

function arrowOnClick()
{
    var wrapper = document.querySelector('a.arrow-up-wrapper');

    wrapper.setAttribute("href", "#StartPage");
}

function arrowWrapperDisplay()
{
    var wrapper = document.querySelector('div.arrow-up-wrapper');
    var clickEvent = function(){
        return true;
    };

    if (document.documentElement.scrollTop > 0)
    {
        wrapper.style.display = "inline-flex";
        wrapper.style.justifyContent = "center";
        wrapper.style.alignItems = "center";
    }
    else if (document.documentElement.scrollTop == 0)
    {
        wrapper.style.display = "none";
    }
};

$(document).ready(function(){
    // Add smooth scrolling to all links
    $('a').on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate(
        {
            scrollTop: $(hash).offset().top
        }, 800, function(){
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});

setInterval(arrowWrapperDisplay,500);