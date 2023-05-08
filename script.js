const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  menu.classList.toggle('show');
});



  const form = document.getElementById('form');
  form.addEventListener('submit', handleSubmit);

  function handleSubmit(event) {
    event.preventDefault();

    const name = form.elements['name'].value;
    const email = form.elements['email'].value;
    const message = form.elements['message'].value;

    const data = {
      Nombre: name,
      email:email,
      subject: 'New message from your website',
      text: message
    };

    fetch('https://la-cumbre-90357-default-rtdb.firebaseio.com/messages.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      alert('Message sent successfully!');
      form.reset();
    })
    .catch(error => console.error('Error:', error));
  }