document.addEventListener('DOMContentLoaded', function () {
    convertDate();
});

// per modificare il formato di ritorno delle date
function convertDate() {
    const inputs = document.querySelectorAll('[type="date"]');
    inputs.forEach(input => {
        input.addEventListener("change", function () {
            let date = new Date(this.value);
            if (!isNaN(date.getTime())) {
                let formattedDate = date.toISOString().split("T")[0];
                this.value = formattedDate;
            }
        });
    });
}