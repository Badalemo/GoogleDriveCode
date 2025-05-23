let birthdayList = [];
function logBirthday(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    let formData = $(this).serializeArray();
    let friend = {
        firstName: formData[0].value,
        lastName: formData[1].value,
        birthday: formData[2].value,
    }
    let birthdayList = JSON.parse(localStorage.getItem("birthdayList")) || [];
    birthdayList.push(friend);
    localStorage.setItem("birthdayList", JSON.stringify(birthdayList));
    this.reset();
    console.log(birthdayList);
}
function checkBirthday(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    let birthdayList = JSON.parse(localStorage.getItem("birthdayList")) || [];
    $("#record-birthdays").css("display", "block");
    for (let i = 0; i < birthdayList.length; i++) {
        if ($('input[name="bDayCheck"]').val() === birthdayList[i].birthday) {
            let gottenBirthday = birthdayList[i];
            $('#record-birthdays').append(`<div>${gottenBirthday.firstName} ${gottenBirthday.lastName} ${gottenBirthday.birthday})</div>`);
        }
    }
}
