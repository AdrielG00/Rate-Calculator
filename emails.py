import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import cgi

form = cgi.FieldStorage()
orderid = form.getValue("orderid").capitalize();
pupcity = form.getValue("pupcity").capitalize();
pupstate = form.getValue("pupstate").capitalize();
pupzip = form.getValue("puzip").capitalize();
delcity = form.getValue("delcity").capitalize();
delstate = form.getValue("delstate").capitalize();
delzip = form.getValue("delzip").capitalize();
payment = form.getValue("payment").capitalize();
availdate = form.getValue("availdate").capitalize();
ldate = form.getValue("ldate").capitalize();
veh = form.getValue("veh").capitalize();

# Set up the SMTP server
server = smtplib.SMTP('smtp.gmail.com', 587)
server.starttls()
server.login('adrielgdev@gmail.com', 'your_email_password')

# Create the message container - the correct MIME type is multipart/alternative.
msg = MIMEMultipart('alternative')
msg['Subject'] = 'Subject of the email'
msg['From'] = 'your_email_address'
msg['To'] = 'recipient_email_address'

# Create the body of the message (a plain-text and an HTML version).
text = 'This is the plain text version of the email.'
html = '<html><body><p>This is the <b>HTML</b> version of the email.</p></body></html>'

# Record the MIME types of both parts - text/plain and text/html.
part1 = MIMEText(text, 'plain')
part2 = MIMEText(html, 'html')

# Attach parts into message container.
msg.attach(part1)
msg.attach(part2)

# Send the message via the SMTP server.
server.sendmail('your_email_address', 'recipient_email_address', msg.as_string())

# Close the SMTP server connection.
server.quit()