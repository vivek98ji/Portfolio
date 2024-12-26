// main
var tablinks = document.getElementsByClassName("tablinks");
      var tabcontents = document.getElementsByClassName("tabcontent");
    
      function opentab(tabname) {
        // Remove the active class from all tablinks
        for (var i = 0; i < tablinks.length; i++) {
          tablinks[i].classList.remove("activelinks");
        }
    
        // Hide all tabcontents
        for (var i = 0; i < tabcontents.length; i++) {
          tabcontents[i].classList.remove("activetab");
        }
    
        // Add active class to the clicked tab and show the corresponding content
        event.currentTarget.classList.add("activelinks");
        document.getElementById(tabname).classList.add("activetab");
      }


// Contact form submission handler
document.getElementById('contactForm').addEventListener('submit', async function (e) {
    e.preventDefault(); // Prevent default form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    try {
        // Send data to the server
        const response = await fetch('/send-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, message })
        });

        if (response.ok) {
            // Show success toast notification
            const toast = document.getElementById('toast');
            toast.textContent = 'Your message has been sent successfully!';
            toast.classList.add('show');
            setTimeout(() => toast.classList.remove('show'), 4000);

            // Reset the form
            document.getElementById('contactForm').reset();
        } else {
            alert('Failed to send email. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    }
});
