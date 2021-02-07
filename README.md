# <h1>SEI-Project Two: Deverr</h1>
by [Alberto Cerrone](www.linkedin.com/in/alberto-cerrone), [Sandra Spighel](https://www.linkedin.com/in/sandraspighel/) & [Tim Frame](https://www.linkedin.com/in/tim-frame-187241100/) AKA SpicyKiwiPizza
![img](https://img.shields.io/badge/version-v%201.0.0-blue)


👉 [<b>TRY ME</b>](#website link) 👈

<h2>Project Brief</h2>

<p>This was the third project I completed in General Assembly's Immersive Software Engineering program. Project three was a group project. In project three we were tasked with building a full-stack MERN application over a 10 day time period.</p>

<h2>The App: Deverr</h2>
<h3>App Overview</h3>
<p>Deverr allows Developers to connect with companies or people advertsing jobs. On Deverr the people and companies advertsing jobs are referred to as Auctioners and the developes are referred to as Bidders.
Inspired by the Fiverr website, the platform is based on a Bidding system where Auctioneers post Jobs and interested Developers can 'bid' to win the contract.</p>

---
<h2>How to use App</h2>

<ol>
<li>When a user first lands on the site they are taken to the home page. A this point that can choose from one of four options. If don't have an account they can click the register button to create an account. If they have an account they can click the login button. Alternatively they can click the jobs button and they taken to page where they can view all jobs currently on the site. Lastly they can click the people button and will be taken to a page where they can see all the current users of the site.</li>

# ![](readme-images/home-page.png)  


<li>If a user has chosen to create an account they are taken to the register page. Firstly they need to select if they are a, ‘Bidder’ or an ‘Auctioneer. If a user chooses the ‘Bidder’, option they are required to provide name, email, password, password confirmation, bio, city, skills(can choose multiple), select there availability and choose a profile image. If a user chooses the ‘Auctioneer’ option they are required to provide a name, username, password, password confirmation, bio, city, confirm they are an auctioneer and a profile photo. If a user incorrectly fills in any form field and tries to submit the form they are will receive an error message underneath the form field that is incorrect.</li>

# ![](readme-images/register-page-1.png)  
# ![](readme-images/register-page-2.png)  
# ![](readme-images/register-page-3.png)  

<li>If the user registration is successful they are pushed onto the login page were the user needs to provide the email and password they provided during the registration process. If either field is incorrect on submission the user will receive an error message.</li>


# ![](readme-images/login-page.png)  

<li>Once logged in a user is taken to there profile page. On a users profile page they can see all the details they have provided during registration. A user also has the option to edit or delete their profile using the buttons at the bottom of the page. If a user is an auctioner they have an addtional button that gives them the option to create a new job.</li>

<p>Bidder Profile:</p>

# ![](readme-images/bidder-profile.png) 

<p>Auctioneer Profile</p>

# ![](readme-images/auctioneer-profile.png) 

<li>If an ‘Auctioneer’ chooses to create a job they are moved to the create new job page. Here the user needs to provide a job title, job description, job deadline, job category, the maximum fee payable for the job(bidders need to bid under this amount) and an image.</li>

# ![](readme-images/new-job.png) 

<li>Once the job has been submitted the user is taken to the live view of the job. This is the view that all other users of the website will have if they clicked on a job thumbnail. Apart from the edit and delete button. This is only visible to the user who created the job.</li

# ![](readme-images/live-job.png) 

<li>If a 'Bidder' clicks the jobs button located in the navigation bar they are taken to the jobs index. Here a bidder can view all jobs currently on the site or filter jobs by catergoty using the carrseole at the top of the page.  <li>

# ![](readme-images/jobs.png) 

<li>A ‘Bidder’ can click a job thumbnail and is taken to the live job view. Here a ‘Bidder’ can comment on a job and ask an ‘Auctioneer’ a question about a job by using the add comment form. The ‘Bidder can also place a bid on a job by using the place field where the ‘Bidder’ needs to provide a shot message and underneath that how much they would like to bid. Once a ‘Bidder’ has placed a bid they will get an alert to say their bid has been placed. The bid itself is only visible to the ‘Auctioneer’ who created the job.</li>

# ![](readme-images/bidder-job-view.png) 

<li>Once an ‘Auctioneer’ has received bids on a job they can select the winning bid by going to the live job view of the job they have posted. At the bottom of the job an ‘Auctioneer’ can see any bids they have received and needs to click ‘Accept This Bid’ button to choose the winning bid. Once the bid has been accepted, the ‘Accept This Bid’ button is removed from all remaining bids and a message is sent to the ‘Bidders’ profile with the winning bid.</li>

# ![](readme-images/accept-bid.png) 

<li>A ‘Bidder’ is then able to see the message when they log into their profile. From here the bidder can reply to the message and exchange details with the ‘Auctioneer’</li>

# ![](readme-images/bidder-message.png) 
</ol>

<h2>Creating The App</h2>

<p>Once we had a clear idea for the project and how the app could potentially work we moved on to the planning phase. We began by creating wire frames to get a feel for how the flow of the site and created a Trello board to track how we were building the site and who was responsible for what. It was at this point that each team member took ownership of an specfic area: Alberto was responsible for styling, I was responsible for the front-end and Sandra was responsible for the back-end.</p>

# ![](readme-images/home-mockup.jpg) 
# ![](readme-images/register-mock-up.jpg) 
# ![](readme-images/login-mock-up.jpg) 
# ![](readme-images/profile-mock-up.jpg) 

<p>We started by creating the shell for back-end and then Sandra moved onto creating models and controllers. Testing each route in Insomnia as it was created. Once the back-end of the site was starting to take shape Sandra and I began creating seeding data for the jobs on the website and Alberto took charge of creating seeding data for the ‘Bidder’ and ‘Auctioneer’ profiles using ‘faker.js’</p>



Auctioneers can view and publish jobs, comment on them and choose the winning bid from all bids received.  They can also favourite other users.

Bidders can browse all the jobs and filter them by category, place comments, bid for jobs and favourite other users.
### Prerequisites
The website is mobile friendly and the user can access it through the browser. 
### How to navigate the website
More in depth informaation is available via the extended ReadMe documentation: https://docs.google.com/document/d/1XGp4wVEdUBzMLSSu7ltRPjLcE1I3-e3xVfCZbchfyhY/edit?usp=sharing

---

## Technology Used

### Languages 
* HTML
* CSS
* Javascript
### Frameworks & Libraries
* [React](https://reactjs.org/)
* [React-Router-Dom] (https://reactrouter.com/ )
* [React-Icons] (https://react-icons.github.io/react-icons/)
* [React-Slick] (https://react-slick.neostack.com/)
* [Styled-components] (https://styled-components.com)
* [Node](https://nodejs.org/en/)

### Dependencies & Components 
* [Axios](https://github.com/axios/axios)
* [Bcrypt] (https://pypi.org/project/bcrypt/) 
* [Cloudinary](https://cloudinary.com/documentation)
* [Express ](https://www.react.express/ )
* [Faker.js] (https://www.npmjs.com/package/faker ) 
* [JsonWebToken] (https://www.npmjs.com/package/jsonwebtoken )
* [Nodemon ](https://nodemon.io/ )
* [Mongoose ](https://mongoosejs.com/) 
* [Mongoose-unique-validator] (https://mongoosejs.com/docs/validation.html) 
* [MongoDB](https://www.mongodb.com/)
---
## Contributors
* Alberto Cerrone [📧](mailto:cerrone.alberto93@gmail.com)
* Sandra Spighel [📧](mailto:s.spighel@gmail.com)
* Tim Frame [📧](mailto:t.f.retouching@gmail.com)
---
## Contributing to this project
If you have suggestions for improving this project, please [open an issue on GitHub](https://github.com/timJFrame/sei-project-3 link of the project).
---
## License & copyright
This project was build for educational purposes. All the information on the website, including profiles and job adds, is fictitional. 

©️ [Alberto Cerrone](www.linkedin.com/in/alberto-cerrone)
©️ [Sandra Spighel](https://www.linkedin.com/in/sandraspighel)
©️ [Tim Frame](https://www.linkedin.com/in/tim-frame-187241100/)

