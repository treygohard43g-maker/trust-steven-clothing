document.addEventListener("DOMContentLoaded", function () {

    const menuIcon = document.getElementById("menuIcon");
    const menuOverlay = document.getElementById("menuOverlay");
    const closeMenu = document.getElementById("closeMenu");


    // OPEN MENU

    menuIcon.addEventListener("click", function () {

        menuOverlay.classList.add("active");

        document.body.style.overflow = "hidden";

    });


    // CLOSE MENU

    closeMenu.addEventListener("click", function () {

        menuOverlay.classList.remove("active");

        document.body.style.overflow = "";

    });


    console.log("Trust & Steven website loaded.");

});