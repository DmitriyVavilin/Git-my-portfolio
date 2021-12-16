$(function() {
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementid = $(this).data('scroll');
        let elementOffset = $(elementid).offset().top;
        console.log(elementOffset);

        $("html, body").animate({
            scrollTop: elementOffset -120
        }, 700);
    });
});