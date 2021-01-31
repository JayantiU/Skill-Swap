# Skill Swap

# Steps to run locally
1. Clone the project
2. Run `npm install`
3. Setup a Firebase project with Auth, Hosting, and Firestore and paste your credentials into the firebase-config.js file
4. Run `npm run build`
5. Run firebase deploy --only Hosting, Firestore

## Inspiration 💡
While learning from instructors and more experienced people is a great way to gain valuable skills, it can be a little intimidating. Sometimes, the most valuable way to actually learn something is from our peers. But, finding people with the desired skill set, setting up a meeting time and deciding which platform to use can take a lot of time. Skill Swap was created to eliminate these hurdles; we have streamlined this process with a simple and easy-to-navigate web app featuring intuitive design and awesome features. Skill Swap is the perfect web app for women in STEM looking to simply learn from their peers in a streamlined, modern fashion. 

## What it does ☯︎
With Skill Swap, users select skills they currently have, and skills they are eager to learn. Then, our matching algorithm processes this information in our database and creates the perfect match. You get to learn from a peer and a peer learns from you - what better way to solidify your knowledge than teach it yourself. With login and registration features, customizable skill preferences, and a fully functional video conferencing system, Skill Swap creates a safe environment for women in STEM to connect. Our registration system built with firebase authentication ensures user preferences are saved so they can simply start where they left off. Skill Swap’s purpose is to make the learning process as simple as possible. 

## How we built it ⚒️ 
The responsive and interactive user interface is designed with **React**, **Material UI**, and **Bootstrap**. These were implemented based on our mockups from Figma. In order to make the user experience more interactive, we integrated WebRTC to allow the matched users to call over a peer-to-peer network. Authentication features such as user sign-up and login features were handled using Firebase. User skill selections were stored in a **Cloud Firestore** Database, which were then pulled together in the matchmaking algorithm to create matches. We found that screen sharing would be a valuable feature for these interactions, so by incorporating the **ScreenCapture API**, we facilitated screen sharing comparable to Discord, Google Hangouts and other large platforms.  


## Challenges we ran into 😅
Some challenges we faced in the frontend was styling background pages individually. The background on one image was stuck on every other page, so finding a workaround for this took some time and patience. Another tough spot we encountered was setting up the screen share feature as it requires event listeners, which are not directly available in React. Lastly, connecting users through WebRTC was likely the greatest challenge we overcame as it involved a lot that none of us were familiar with. At the end, we still implemented it successfully, so that’s a big plus!


## Accomplishments that we're proud of 😜
There are two main things we are proud of at this hackathon. Firstly, while debugging was an arduous task, we are proud that we have a working demo of our project that integrated several services that we were all new to! Secondly, we’re glad that we were able to work collaboratively to solve any issues we faced with new people!

## What we learned 🧠
First time working with WebRTC and ScreenCapture API, so we learned a great deal about these widely used technologies. This was the first exposure to React Routing and user authentication for some of us, so we gained some valuable experience for next time as routing and authentication are common features in complex web applications.

## What's next for Skill Swap 👀
We would like to add a wider selection of skills to choose from! Another feature that would be helpful is sending a link to the conference to the user’s email so they can attend the call from there and add it their to Google Calendar.

