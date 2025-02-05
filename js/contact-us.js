 function handleSubmit(event) {
    event.preventDefault();

    const day = document.getElementById("y").value;
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;
    const gender = document.getElementById("gender").value;

    if (!day || !month || !year || !gender) {
      alert("Please fill out all the fields.");
      return;
    }

    const dayOfWeek = getDayOfWeek(day, month, year);

    const akanName = getAkanName(gender, dayOfWeek);

    document.getElementById(
      "output"
    ).textContent = `Your Akan name is: ${akanName}`;
  }
