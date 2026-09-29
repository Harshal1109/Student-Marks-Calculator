function calculateResult() {

    let name = document.getElementById("studentName").value;

    let english = Number(document.getElementById("english").value);
    let maths = Number(document.getElementById("maths").value);
    let computer = Number(document.getElementById("computer").value);
    let science = Number(document.getElementById("science").value);
    let programming = Number(document.getElementById("programming").value);

    if (name === "" ||
        english === 0 ||
        maths === 0 ||
        computer === 0 ||
        science === 0 ||
        programming === 0) {

        document.getElementById("result").innerHTML =
            "Please enter all details.";
        return;
    }

    let total = english + maths + computer + science + programming;

    let percentage = total / 5;

    let grade;

    if (percentage >= 90) {
        grade = "A+";
    }
    else if (percentage >= 80) {
        grade = "A";
    }
    else if (percentage >= 70) {
        grade = "B";
    }
    else if (percentage >= 60) {
        grade = "C";
    }
    else if (percentage >= 50) {
        grade = "D";
    }
    else {
        grade = "F";
    }

    document.getElementById("result").innerHTML =
        "<strong>Student Name:</strong> " + name + "<br>" +
        "<strong>Total Marks:</strong> " + total + " / 500<br>" +
        "<strong>Percentage:</strong> " + percentage.toFixed(2) + "%<br>" +
        "<strong>Grade:</strong> " + grade;
}