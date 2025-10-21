// Booking form alert
function bookNow(formId) {
  const form = document.getElementById(formId);
  const inputs = form.querySelectorAll('input, select, textarea');
  for (let input of inputs) {
    if (!input.value) {
      alert('Please fill all fields.');
      return false;
    }
  }
  alert('Booking Successful!');
  form.reset();
}

// Login validation
function validateLogin(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value.trim();
  const pass = document.getElementById('loginPassword').value.trim();
  if (!email || !pass) { alert('Please fill all fields.'); return; }
  alert('Login Successful!');
  e.target.reset();
}

// Register validation
function validateRegister(e) {
  e.preventDefault();
  const fullname = document.getElementById('regFullname').value.trim();
  const contact = document.getElementById('regContact').value.trim();
  const dob = document.getElementById('regDOB').value;
  const email = document.getElementById('regEmail').value.trim();
  const password = document.getElementById('regPassword').value.trim();
  const gender = document.querySelector('input[name="regGender"]:checked');
  const dobDate = new Date(dob);
  const today = new Date();

  if(!fullname || !contact || !dob || !email || !password || !gender) {
    alert('Please fill all fields.');
    return;
  }
  if(!/^\d{10}$/.test(contact)) { alert('Contact must be 10 digits.'); return; }
  if(password.length<6){ alert('Password must be at least 6 characters.'); return; }
  if(dobDate>today){ alert('DOB cannot be in the future.'); return; }

  alert('Registration Successful!');
  e.target.reset();
}
