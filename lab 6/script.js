document.getElementById("sienaForm").addEventListener("submit", function(e) {
    e.preventDefault(e);

    const email = document.getElementById("emailAddress").value.trim();
    const sienaID = document.getElementById("sienaID").value.trim();

    console.log("Form submitted successfully!");
    console.log("Email:", email);
    console.log("Siena ID:", sienaID);
});