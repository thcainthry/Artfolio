module.exports = {
    app: {
        name: 'Artfolio',
        apiURL: `${process.env.BASE_API_URL}`,
        serverURL : process.env.BASE_SERVER_URL,
        clientURL : process.env.BASE_CLIENT_URL,
    },
    port: process.env.PORT || 3000,
    database: {
        url: process.env.DATABASE_URI
    },
    jwt : {
        secret: process.env.JWT_SECRET,
        tokenLife: '7d'
    },
    mailchimp:{
        key: process.env.MAILCHIMP_KEY,
        listId: process.env.MAILCHIMP_LIST_KEY
    },
    mailgun: {
        key: process.env.MAILGUN_KEY,
        domain: process.env.MAILGUN_DOMAIN,
        sender: process.env.MAILGUN_EMAIL_SENDER
    },
    google:{
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK_URL
    }
}