const emailData = (values, email) => {
  return {
    userEmail: values.email,
    zikoraEmail: email,
    subject: `Loan Support`,
    body: `<html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>User Information</title>
        </head>
        <body>
          <table>
            <tr>
              <td><strong>Name:</strong></td>
              <td>${values.userName}</td>
            </tr>
            <tr>
              <td><strong>Email:</strong></td>
              <td>${values.email}</td>
            </tr>
            <tr>
              <td><strong>Phone:</strong></td>
              <td>${values.phone}</td>
            </tr>
            <tr>
              <td><strong>Address:</strong></td>
              <td>${values.address}</td>
            </tr>
            <tr>
              <td><strong>Loan Amount:</strong></td>
              <td>${values.amount}</td>
            </tr>
            <tr>
              <td><strong>Loan Purpose:</strong></td>
              <td>${values.purpose}</td>
            </tr>
          </table>
        </body>
        </html>              
              `,
  };
};

export default emailData;
