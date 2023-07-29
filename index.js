
 //Import express and axios
import express from "express";
import axios from "axios";




//Create an express app and set the port number.
const app = express();
const port = 3000;

// Use the public folder for static files.
app.use(express.static("public"));
// When the user goes to the home page it should render the index.ejs file.
   app.get('/',async(req,res)=>{

 const result = await axios.get("https://secrets-api.appbrewery.com/random");

const username = result.data.username;
console.log(username);
 res.render("index.ejs", {user:result.data.username,secret:result.data.secret})
   });

// Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.

// Listen on your predefined port and start the server.
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  
