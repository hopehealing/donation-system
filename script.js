function copyVodafone() {
    navigator.clipboard.writeText("01040214464");

    alert("تم نسخ رقم Vodafone Cash");
}

function copyInsta() {
    navigator.clipboard.writeText("awtmx@instapay");

    alert("تم نسخ حساب InstaPay");
}

const buttons = document.querySelectorAll(".amount-btn");

buttons.forEach(button => {

    button.addEventListener("click", function () {

        buttons.forEach(btn => btn.classList.remove("active"));

        this.classList.add("active");

    });

});
document.getElementById("donateBtn").addEventListener("click", function () {
    window.location.href = "payment.html";
});
function goToPayment() {

    let amount = document.querySelector(".amount-btn.active").innerText;

    let custom = document.querySelector(".custom-amount input").value;

    if (custom.trim() !== "") {
        amount = custom + " جنيه";
    }

    localStorage.setItem("donationAmount", amount);

    window.location.href = "payment.html";
}
