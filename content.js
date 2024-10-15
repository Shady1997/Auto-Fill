// Utility function to generate a random string of specified length
function getRandomString(length) {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
}

// Utility function to generate a random number of specified length
function getRandomNumber(length) {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += Math.floor(Math.random() * 10);
  }
  return result;
}

// Utility function to generate a random date between two dates
function getRandomDate(start, end) {
  const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
}

// Utility function to generate a random international phone number
function getRandomPhoneNumber() {
  const countryCodes = ['+1', '+44', '+33', '+49', '+91', '+81', '+61', '+55'];
  const countryCode = countryCodes[Math.floor(Math.random() * countryCodes.length)];
  const localNumber = getRandomNumber(10); // 10-digit local number
  return `${countryCode} ${localNumber}`;
}

// Utility function to select a random option from a dropdown
function selectRandomOption(selectElement) {
  const options = selectElement.options;
  const randomIndex = Math.floor(Math.random() * options.length);
  selectElement.selectedIndex = randomIndex;
}

// Utility function to generate a random color in hexadecimal
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Function to fill all types of input fields with random data
function fillInputFields() {
  const inputs = document.querySelectorAll('input, textarea, select');
  let generatedPassword = '';  // Variable to store the same password for all password fields
  
  inputs.forEach(input => {
    if (input.tagName.toLowerCase() === 'select') {
      // Randomly select an option from the dropdown
      selectRandomOption(input);
    } else if (input.type === 'text') {
      // Random string for text fields (20 characters)
      input.value = getRandomString(20);
    } else if (input.type === 'email') {
      // Random email address
      input.value = `test_${getRandomString(5)}@example.com`;
    } else if (input.type === 'password') {
      // Generate random password once, and reuse it for all password fields
      if (!generatedPassword) {
        generatedPassword = getRandomString(10);
      }
      input.value = generatedPassword;
    } else if (input.type === 'number') {
      // Random number (10 digits)
      input.value = getRandomNumber(10);
    } else if (input.type === 'tel') {
      // Random international phone number
      input.value = getRandomPhoneNumber();
    } else if (input.type === 'date') {
      // Random date between 01-01-1900 and 01-01-2000
      input.value = getRandomDate(new Date(1900, 0, 1), new Date(2000, 0, 1));
    } else if (input.type === 'datetime-local') {
      // Random datetime between now and 10 years ago
      const randomDateTime = new Date(Date.now() - Math.random() * 10 * 365 * 24 * 60 * 60 * 1000);
      input.value = randomDateTime.toISOString().slice(0, 16); // Format for datetime-local
    } else if (input.type === 'month') {
      // Random month between 1900-01 and 2000-12
      const randomMonth = getRandomDate(new Date(1900, 0, 1), new Date(2000, 0, 1)).slice(0, 7);
      input.value = randomMonth;
    } else if (input.type === 'time') {
      // Random time (HH:MM)
      const randomTime = `${String(Math.floor(Math.random() * 24)).padStart(2, '0')}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}`;
      input.value = randomTime;
    } else if (input.type === 'url') {
      // Random URL
      input.value = `https://www.example${getRandomString(5)}.com`;
    } else if (input.type === 'week') {
      // Random week between 1900-W01 and 2000-W52
      const randomWeek = `${Math.floor(Math.random() * (2000 - 1900 + 1)) + 1900}-W${String(Math.floor(Math.random() * 52) + 1).padStart(2, '0')}`;
      input.value = randomWeek;
    } else if (input.type === 'checkbox') {
      // Randomly check or uncheck
      input.checked = Math.random() > 0.5;
    } else if (input.type === 'radio') {
      // Randomly check one radio button in a group
      const radios = document.querySelectorAll(`input[name="${input.name}"]`);
      radios[Math.floor(Math.random() * radios.length)].checked = true;
    } else if (input.type === 'range') {
      // Set random value within the range limits
      const min = input.min ? parseInt(input.min) : 0;
      const max = input.max ? parseInt(input.max) : 100;
      input.value = Math.floor(Math.random() * (max - min + 1)) + min;
    } else if (input.type === 'color') {
      // Set random color
      input.value = getRandomColor();
    } else if (input.type === 'file') {
        const filePath = 'C:\\drivers\\files\\file.png';
        const imageFile = new File([''], 'file.png', { type: 'image/png' });
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(imageFile);
        input.files = dataTransfer.files;

      if (input.accept.includes('image')) {
        // Set file input for image
        const filePath = 'C:\\drivers\\files\\file.png';
        const imageFile = new File([''], 'file.png', { type: 'image/png' });
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(imageFile);
        input.files = dataTransfer.files;
      } else if (input.accept.includes('csv')) {
        // Set file input for CSV
        const csvFile = new File([""], "file.csv", { type: "text/csv" });
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(csvFile);
        input.files = dataTransfer.files;
      }
    } else if (input.type === 'search') {
      // Random string for search inputs (20 characters)
      input.value = getRandomString(20);
    } else if (input.type === 'submit' || input.type === 'reset' || input.type === 'button') {
      // Do nothing for submit, reset, or button inputs
      console.log(`${input.type} button found, skipping...`);
    } else if (input.type === 'hidden') {
      // Ignore hidden inputs
      console.log('Hidden input found, skipping...');
    } else if (input.type === 'image') {
      // Do nothing for image inputs
      console.log('Image input found, skipping...');
    }
  });
}

// Call the function when the content script is loaded
fillInputFields();
