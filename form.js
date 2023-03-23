let BiodataForm = document.getElementById("BiodataForm");

BiodataForm.addEventListener("Submit", (e) => {
  e.preventDefault();

    let Fullname = document.getElementById("Fullname");
    let Password = document.getElementById("Password");

  if (Fullname.value == "" || Password.value == "") {
    alert("Ensure you input a value in both fields!");
  } else {
    // perform operation with form input
    alert("This form has been successfully submitted!");
    console.log(
      `This form has a Fullname of ${Fullname.value} and Password of ${Password.value}`
    );

    Fullname.value = "";
    Password.value = "";
  }
});