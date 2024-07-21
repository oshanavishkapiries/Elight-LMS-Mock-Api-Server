const fs = require('fs');

class User {
  constructor({
    id,
    first_name,
    last_name,
    email,
    password,
    status,
    google_id = null,
    role,
    mobile,
    whatsapp = null,
    national_id,
    birth = null,
    address,
    profile_url = null,
    profile_id = null,
    is_registerd = false,
    is_verfied = false,
    created_at = new Date(),
    updated_at = new Date(),
  }) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.password = password;
    this.status = status; // Should be an enum value
    this.google_id = google_id;
    this.role = role; // Should be an enum value
    this.mobile = mobile;
    this.whatsapp = whatsapp;
    this.national_id = national_id;
    this.birth = birth;
    this.address = address;
    this.profile_url = profile_url;
    this.profile_id = profile_id;
    this.is_registerd = is_registerd;
    this.is_verfied = is_verfied;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }

  // Method to display user info
  getUserInfo() {
    return {
      id: this.id,
      first_name: this.first_name,
      last_name: this.last_name,
      email: this.email,
      status: this.status,
      role: this.role,
      mobile: this.mobile,
      whatsapp: this.whatsapp,
      national_id: this.national_id,
      birth: this.birth,
      profile_url: this.profile_url,
      profile_id: this.profile_id,
      is_registerd: this.is_registerd,
      is_verfied: this.is_verfied,
      address: this.address,
      created_at: this.created_at,
      updated_at: this.updated_at
    };
  }
}

// Function to generate a random string
function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

// Function to create a random user
function createRandomUser(id) {
  return new User({
    id: id.toString().padStart(12, '0'), // Ensure id is 12 characters long
    first_name: `firstName${id}`,
    last_name: `fastName${id}`,
    email: `user${id}@example.com`,
    password: generateRandomString(10),
    status: 'active', // Assuming status is an enum
    role: 'user', // Assuming role is an enum
    whatsapp: `123-456-78${id.toString().padStart(2, '0')}`,
    birth: null,
    profile_url: null,
    profile_id: null,
    is_registerd: false,
    is_verfied: false,
    mobile: `123-456-78${id.toString().padStart(2, '0')}`,
    national_id: generateRandomString(10),
    address: `${id} main mt, anytown, usa`,
  });
}

// Create 100 user objects
const users = [];
for (let i = 1; i <= 10; i++) {
  const user = createRandomUser(i);
  users.push(user.getUserInfo());
}

// Write users to a JSON file
const jsonContent = JSON.stringify(users, null, 2);
fs.writeFile('users.json', jsonContent, 'utf8', (err) => {
  if (err) {
    console.error('An error occurred while writing JSON Object to File.', err);
    return;
  }
  console.log('JSON file has been saved.');
});
