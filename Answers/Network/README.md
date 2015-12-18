# Network Questions

## Traditionally, why has it been better to serve site assets from multiple domains? 😕

## Do your best to describe the process from the time you type in a website's URL to it finishing loading on your screen. 😕

## What are the differences between Long-Polling, Websockets and Server-Sent Events? 😕

## Explain the following request and response headers: 😕

### Diff. between Expires, Date, Age and If-Modified-... 😕

### Do Not Track 😕

### Cache-Control 😕

### Transfer-Encoding 😕

### ETag 😕

### X-Frame-Options 😕

## What are HTTP actions? List all HTTP actions that you know, and explain them. 😕

## Can you explain the difference between GET and POST? 😎

They are two types of HTTP requests:

**GET** represents a specific resource. Should not have and side effort
like insert/update because they may be requested by robots. GET use
url the send data. AJAX GET in IE will be cached, so to ensure data
updates, better add a timestamp

**POST** represent actions on resources, like insert/update/delete.
They usually sent from HTML form. Large data could be sent by POST.
Data is send along with HTTP header, instead of data of GET in the URL.

[Stack Overflow](http://stackoverflow.com/questions/3477333/what-is-the-difference-between-post-and-get)
