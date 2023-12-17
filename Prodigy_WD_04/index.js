// me.jpg
$(".image").mouseover(function () {

    $(".image").animate({ 'zoom': 1.25 }).addClass("imageOnMouseOver");

    setTimeout(function () {
        $(".image").animate({ 'zoom': 1 }).removeClass("imageOnMouseOver");

    }, 1000);
});

// SkillCards

$(".one").mouseover(function () {

    $(".one").animate({ 'zoom': 1.01 });

    setTimeout(function () {
        $(".one").animate({ 'zoom': 1 });

    }, 200);
});
$(".two").mouseover(function () {

    $(".two").animate({ 'zoom': 1.01 });

    setTimeout(function () {
        $(".two").animate({ 'zoom': 1 });

    }, 200);
});
$(".three").mouseover(function () {

    $(".three").animate({ 'zoom': 1.01 });

    setTimeout(function () {
        $(".three").animate({ 'zoom': 1 });

    }, 200);
});
$(".four").mouseover(function () {

    $(".four").animate({ 'zoom': 1.01 });

    setTimeout(function () {
        $(".four").animate({ 'zoom': 1 });

    }, 200);
});

$(".one").click(function () {

    $(".one").animate({ 'zoom': 1.01 });

    setTimeout(function () {
        $(".one").animate({ 'zoom': 1 });

    }, 200);
});
$(".two").click(function () {

    $(".two").animate({ 'zoom': 1.01 });

    setTimeout(function () {
        $(".two").animate({ 'zoom': 1 });

    }, 200);
});
$(".three").click(function () {

    $(".three").animate({ 'zoom': 1.01 });

    setTimeout(function () {
        $(".three").animate({ 'zoom': 1 });

    }, 200);
});
$(".four").click(function () {

    $(".four").animate({ 'zoom': 1.01 });

    setTimeout(function () {
        $(".four").animate({ 'zoom': 1 });

    }, 200);
});





