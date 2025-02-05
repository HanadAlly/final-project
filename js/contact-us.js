  function handleSubmit(event) {
    event.preventDefault();

    const phoneNumber = "+254114235857";
    
    const output = document.getElementById("output");
    output.innerHTML = `To contact us, click to call: <a href="tel:${phoneNumber}">${phoneNumber}</a>`;
  }
