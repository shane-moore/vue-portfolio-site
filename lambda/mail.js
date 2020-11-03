// event is info about what triggered the action
// could be event.body//context contains info about the context the functio nwas called, like user info
// callback is used to send a respond, like success or error

const postmark = require("postmark"); // require mail service, postmark in this case

const client = new postmark.Client("53407660-0f6d-45d3-b098-b38e36e3d2e3"); // your postmark api key

const headers = {
  "Access-Control-Allow-Origin": "*", // better change this for production
  "Access-Control-Allow-Methods": "POST",
  "Access-Control-Allow-Headers": "Content-Type"
};

exports.handler = function (event, context, callback) {
  // only allow POST requests
  if (event.httpMethod !== "POST") {
    return callback(null, {
      statusCode: 410,
      body: JSON.stringify({
        message: 'Only POST requests allowed.',
      }),
    });
  }

  // parse the body to JSON so we can use it in JS
  const payload = JSON.parse(event.body);

  // validate the form
  if (
    !payload.name ||
    !payload.subject ||
    !payload.email ||
    !payload.message
  ) {
    return callback(null, {
      statusCode: 422,
      headers,
      body: JSON.stringify({
        message: 'Required information is missing.',
      }),
    });
  }

  // finally everything is fine and we can send the mail
  return client.sendEmail({
    "From": "skm1790@gmail.com",
    "To": "skm1790@gmail.com",
    "ReplyTo": payload.email,
    "Subject": `${payload.subject}`,
    "TextBody": `
      Hey,
      ${payload.name} sent a new message from your website!
      ${payload.message}
      Cheers, your webserver!
    `
  }, (err, result) => {
    // if there happenend an error on the postmark side we send a 500 error to the client
    if (err) {
      return callback(null, {
        statusCode: 500,
        body: JSON.stringify({
          message: "Internal Server Error: " + err,
        })
      });
    }
    // if everything was fine we send status code 200
    return callback(null, {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        message: "Message sent successfully!",
      }),
    });
  });
}
