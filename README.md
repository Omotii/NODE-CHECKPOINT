All file as instructed are created and saved in the file folder.

1. hello-world.js is the first file and it prints hello world to the console.
2. server.js is the second file which creates a server that listens at port 3000 and prints '<h1>Hello Node!!!</h1>\n' to the screen.
3. file.js uses the fs module to create 'welcome.txt' and write 'hello node' in it and also to reads data from the hello.txt.
4. pwd-generator.js uses the generate-password module to create a password with length of 10 and the password would have uppercase and lowercase mixed and a possible addition of a number.
5. mailer.js, in this file, a program is written to send email to specific email address. It uses the nodemailer module to achieve this. It also requires the dotenv module and configures it so that an environment variable can be used to access the transporter mail and password. Consequently, the .env is placed in the .gitignore to avoid pushing personal email to and password to github.