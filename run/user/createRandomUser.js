const fs = require('fs');

class User {
  constructor({
    id,
    reg_code,
    first_name,
    last_name,
    email,
    google_id = null,
    profile_url,
    national_id,
    mobile,
    whatsapp = null,
    birth = null,
    address,
    medium = null,
    is_alevel,
    shy = null,
    streem = null,
    grade = null,
    role = 'user', // Default value is 'user'
    is_verfied = false,
    is_registerd = false,
    institute,
    status = 'active', // Default value is 'active'
    created_at = new Date(),
    updated_at = new Date(),
  }) {
    this.id = id;
    this.reg_code = reg_code;
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.google_id = google_id;
    this.profile_url = profile_url;
    this.national_id = national_id;
    this.mobile = mobile;
    this.whatsapp = whatsapp;
    this.birth = birth;
    this.address = address;
    this.medium = medium;
    this.is_alevel = is_alevel;
    this.shy = shy;
    this.streem = streem;
    this.grade = grade;
    this.role = role;
    this.is_verfied = is_verfied;
    this.is_registerd = is_registerd;
    this.institute = institute;
    this.status = status;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }

  // Method to display user info
  getUserInfo() {
    return {
      id: this.id,
      reg_code: this.reg_code,
      first_name: this.first_name,
      last_name: this.last_name,
      email: this.email,
      google_id: this.google_id,
      profile_url: this.profile_url,
      national_id: this.national_id,
      mobile: this.mobile,
      whatsapp: this.whatsapp,
      birth: this.birth,
      address: this.address,
      medium: this.medium,
      is_alevel: this.is_alevel,
      shy: this.shy,
      streem: this.streem,
      grade: this.grade,
      role: this.role,
      is_verfied: this.is_verfied,
      is_registerd: this.is_registerd,
      institute: this.institute,
      status: this.status,
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
    reg_code: generateRandomString(8),
    first_name: `firstName${id}`,
    last_name: `lastName${id}`,
    email: `user${id}@example.com`,
    google_id: generateRandomString(10),
    profile_url: `https://shorturl.at/2C2bZ`,
    national_id: generateRandomString(10),
    mobile: `123-456-78${id.toString().padStart(2, '0')}`,
    whatsapp: `123-456-78${id.toString().padStart(2, '0')}`,
    birth: new Date(),
    address: `${id} main st, anytown, usa`,
    medium: 'english',
    is_alevel: Math.random() > 0.5,
    shy: `shy${id}`,
    streem: `streem${id}`,
    grade: `grade${id}`,
    role: 'user', //['user', 'admin', 'owner', 'employee'][Math.floor(Math.random() * 4)],
    is_verfied: Math.random() > 0.5,
    is_registerd: Math.random() > 0.5,
    institute: `institute${id}`,
    status: 'active' // ['active', 'delete', 'block'][Math.floor(Math.random() * 3)],
  });
}

// Create 100 user objects
const users = [];
for (let i = 1; i <= 5; i++) {
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
