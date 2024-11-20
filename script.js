function getTotalDonation() {
    return parseFloat(localStorage.getItem('totalDonation')) || 0;
}
function updateTotalDonation(amount) {
    const currentTotal = getTotalDonation();
    const newTotal = currentTotal + amount;
    localStorage.setItem('totalDonation', newTotal);
    document.getElementById('totalDonation').innerText = newTotal;
}
function submitDonation() {
    const donation1 = parseFloat(document.getElementById('donation1').value) || 0;
    const donation2 = parseFloat(document.getElementById('donation2').value) || 0;
    const donation3 = parseFloat(document.getElementById('donation3').value) || 0;
    const submitBtn1 = parseFloat(document.getElementById('submitBtn1').value) || 0;
    const submitBtn2 = parseFloat(document.getElementById('submitBtn2').value) || 0;
    const submitBtn3 = parseFloat(document.getElementById('submitBtn3').value) || 0;
    const totalDonation = donation1 + donation2 + donation3;

    if (totalDonation > 0) {
        updateTotalDonation(totalDonation);
        document.getElementById('donation1').value = '';
        document.getElementById('donation2').value = '';
        document.getElementById('donation3').value = '';
    } else {
        alert("please input valid !");
    }
}
window.onload = function() {   document.getElementById('totalDonation').innerText = getTotalDonation();
};
document.getElementById('submitBtn1').addEventListener('click', submitDonation);
document.getElementById('submitBtn2').addEventListener('click', submitDonation);
document.getElementById('submitBtn3').addEventListener('click', submitDonation);

