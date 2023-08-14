function myfunc(event){
    event.preventDefault();

    var full_name = document.getElementById("full_name").value;
    var temp_Gender = document.getElementById("Gender");
    var date_of_birth = document.getElementById("date_of_birth").value;
    var email_id= document.getElementById("email_id").value;

    temp_Gender.checked ? Gender ="Male": Gender ="Female";

    localStorage.setItem('Is_full_name', full_name);
    localStorage.setItem('Is_Gender', Gender);
    localStorage.setItem('Is_date_of_birth', date_of_birth);
    localStorage.setItem('Is_email_id', email_id);

}