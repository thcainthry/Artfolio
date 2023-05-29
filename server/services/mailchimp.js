const mysqlConnection = require('../src/db/db_connection.mjs'); // Import the MySQL connection

class MailchimpService {
  constructor() {
    this.mysql = mysqlConnection; // Assign the MySQL connection to a class property
  }

  async init() {
    try {
      // Initialize Mailchimp
      const mailchimp = new mailchimp(key);

      // Connect to MySQL
      this.mysql.connect(err => {
        if (err) {
          console.error('Error connecting to MySQL:', err);
          throw err;
        }
        console.log('Connected to MySQL!');
      });

      return mailchimp;
    } catch (error) {
      console.warn('Missing mailgun keys');
    }
  }
}
