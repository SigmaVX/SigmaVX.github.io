import React from "react";

const Portfolio = (props) =>{

    return(
        
    <section className="container-fluid" id="portfolio">
        
        <div className="jumbotron">
            <h2>Portfolio</h2>
        </div>
    
        <div className="container project-grid-wrapper">
            
           

                <div className="project-grid-child project-text" id="project1">
                    <a href="https://gameroster.com/" target="_blank"><h2>Game Roster</h2></a>
                    <a className="gitIcons bitBucket text-center" target="_balnk" href="#">
                        <i className="fab fa-bitbucket"></i>
                        (Code In Private Repo)
                    </a>
                    <p>Game Roster helps thousands of gamers discover, organize, and build online gaming communities.  The cross-platform application use algorithms to help users find ideal teams, players, and games.  It includes dozens of features, and has been a global effort involving multiple designers, developers, and engineers that showcase Agile project management, UI/UX, analytics, and a broad range of backend technologies.
                    </p>
                </div>
                <div className="project-grid-child project-img-wrapper">
                    <a href="https://gameroster.com" target="_blank">
                        <img className="project-img" src="./images/game-roster.png" alt="Game Roster Screenshot"/>
                    </a>
                </div>
         
    
            
            
                <div className="project-grid-child project-img-wrapper">
                    <a href="https://itunes.apple.com/us/app/game-roster/id1084852919?ls=1&mt=8" target="_blank">
                        <img className="project-img" src="./images/mobile.png" alt="App Store Screenshot"/>
                    </a>

                </div>    
                <div className="project-grid-child project-text" id="project2">
                    <a href="https://itunes.apple.com/us/app/game-roster/id1084852919?ls=1&mt=8" target="_blank">
                        <h2>Mobile Apps</h2>
                    </a>
                    <a className="gitIcons bitBucket text-center" target="_balnk" href="#">
                        <i className="fab fa-bitbucket"></i>
                        (Code In Private Repo)
                    </a>
                    <p>The Game Roster messaging app keeps you connected with your clans and events with push notifications for messages, event posts, clan applications, and game event roster updates. The iOS and Android apps sync with Discord and our Website to showcase cross-platform development. 
                    </p>
                </div>        
           
    

                <div className="project-grid-child project-text" id="project4">
                    <a href="https://blooming-shore-12371.herokuapp.com/" target="_blank">
                        <h2>Agile Flow</h2>
                    </a>
                    <a className="gitIcons text-center" target="_balnk" href="https://github.com/SigmaVX/Agile-Flow">
                        <i className="align-middle fab fa-github"></i>
                        (See The Code)
                    </a>
                    <p>Accelerate your learning of new tech with a community that lets you get to the heart of burning tech questions.  Stop wasting time searching and get to the core of things in less than 15 minutes. Agile Flow is designed help developers learn targeted topics in a relatively short amount of time by leveraging a peer developer community, ratings, and Agile principles.  This full stack Node app incorporates user authentication, image uploads, and a SQL database with a Sequelize ORM. 
                    </p>
                </div>
                <div className="project-grid-child project-img-wrapper">
                    <a href="https://blooming-shore-12371.herokuapp.com/" target="_blank">
                        <img className="project-img" src="./images/agile-flow.png" alt="Agile Flow App Screenshot"/>
                    </a>
                </div>        
        

              
                <div className="project-grid-child project-img-wrapper">
                    <a href="https://sigmavx.github.io/Cortex/" target="_blank">
                        <img className="project-img" src="./images/cortex.png" alt="Cortex App Screenshot"/>
                    </a>
                </div>    
                <div className="project-grid-child project-text" id="project4">
                    <a href="https://sigmavx.github.io/Cortex/" target="_blank">
                        <h2>Cortex - React JS Memory App</h2>
                    </a>
                    <a className="gitIcons text-center" target="_balnk" href="https://github.com/SigmaVX/Cortex">
                        <i className="align-middle fab fa-github"></i>
                        (See The Code)
                    </a>
                    <p>Cortex is a simple way to test your memory.  Click an image to score a point but avoid clicking any image twice.  This React JS app randomly shuffles all the images after each selection using className component states that are passed between parent and child components. The app also integrates Bootstrap 4, CSS Animations, and React Sticky. 
                    </p>
                </div>        
            

     
                <div className="project-grid-child project-text" id="project3">
                    <a href="https://sigmavx.github.io/Trivia-Game/" target="_blank">
                        <h2>Toon Triva</h2>
                    </a>
                    <a className="gitIcons text-center" target="_balnk" href="https://github.com/SigmaVX/Trivia-Game">
                        <i className="align-middle fab fa-github"></i>
                        (See The Code)
                    </a>
                    <p>Who thought cartoon trivia could be this tough.  This game showcases the use of JavaScript, jQuery, Timers, and Intervals. The JavaScript is built using multiple functions that cascade. The JavaScript randomly picks a question and verifies the question has not been asked before while answers are randomly assigned to buttons using a function that shuffles an array.   
                    </p>
                </div>
                <div className="project-grid-child project-img-wrapper">
                    <a href="https://sigmavx.github.io/Trivia-Game/" target="_blank">
                        <img className="project-img" src="./images/toon.png" alt="Trivia Game Screenshot"/>
                    </a>
                </div>
           
    

           
                <div className="project-grid-child project-img-wrapper">
                    <a href="https://sigmavx.github.io/GIPHY-API/" target="_blank">
                        <img className="project-img" src="./images/giphy.png" alt="GIPHY API Screenshot"/>
                    </a>
                </div>    
                <div className="project-grid-child project-text" id="project4">
                    <a href="https://sigmavx.github.io/GIPHY-API/" target="_blank">
                        <h2>GIPHY API</h2>
                    </a>
                    <a className="gitIcons text-center" target="_balnk" href="https://github.com/SigmaVX/GIPHY-API">
                        <i className="align-middle fab fa-github"></i>
                        (See The Code)
                    </a>
                    <p>Looking for a laugh? Search and filter results on GIPHY using the API, JavaScript, jQuery, Bootstrap 4, and my twist on the Seven Deadly Sins. This page is mobile responsive and allows you to query based on predefined terms or create your own searches.  Click a GIF to manipulate the DOM and toggle the animation.
                    </p>
                </div>        
           
            
            
            
                <div className="project-grid-child project-text" id="project3">
                    <a href="https://sigmavx.github.io/RPG-Game/" target="_blank">
                        <h2>Food Fight RPG Game</h2>
                    </a>
                    <a className="gitIcons text-center" target="_balnk" href="https://github.com/SigmaVX/RPG-Game">
                        <i className="fab fa-github"></i>
                        (See The Code)
                    </a>
                    <p>All is not well in the inter-galactic salad bar. The prepared foods are feed up and all-out war is about to break out. Pick your food and destroy all that would stand between you and your hunger.  This RPG card game showcases DOM manipulation and logic using jQuery as there is minimal use of HTML. Almost everything you see here is generated by the jQuery and manipulated using functions. The code is scalable and set up using an array to hold objects. Those objects create the cards and HTML while event listeners take the data and update the original objects and array.
                    </p>
                </div>
                <div className="project-grid-child project-img-wrapper">
                    <a href="https://sigmavx.github.io/RPG-Game/" target="_blank">
                        <img className="project-img" src="./images/rpg-game.png" alt="RPG Game Screenshot"/>
                    </a>
                </div>
                
    
            
           
                <div className="project-grid-child project-img-wrapper">
                    <a href="https://sigmavx.github.io/Garyvee-Hangman/" target="_blank">
                        <img className="project-img" src="./images/garyvee.png" alt="Hangman Game Screenshot"/>
                    </a>
                </div>    
                <div className="project-grid-child project-text" id="project4">
                    <a href="https://sigmavx.github.io/Garyvee-Hangman/" target="_blank">
                        <h2>GaryVee Motivational App</h2>
                    </a>
                    <a className="gitIcons text-center" target="_balnk" href="https://github.com/SigmaVX/Garyvee-Hangman">
                        <i className="align-middle fab fa-github"></i>
                        (See The Code)
                    </a>
                    <p>Get inspired with some GaryVee quotes and sound clips.  Simply select the letters and numbers on your keyboard to reveal random some words of wisdom from GaryVee.  This game uses Bootstrap 4, is mobile responsive, and is built with vanilla JavaScript and jQuery to randomize sounds, word choices, and to manipulate the DOM. Functions are used to streamline the code and to scale up the options (e.g. more random cheers and jeers).
                    </p>
                </div>        
            
            
            
            
                <div className="project-grid-child project-text" id="project4">
                    <a href="https://sigmavx.github.io/Train-Scheduler/" target="_blank">
                        <h2>Firebase Train Scheduler</h2>
                    </a>
                    <a className="gitIcons text-center" target="_balnk" href="https://github.com/SigmaVX/Train-Scheduler">
                        <i className="align-middle fab fa-github"></i>
                        (See The Code)
                    </a>
                    <p>Set and view train schedules with jQuery and the Firebase API.  This one-page application uses jQuery and Firebase DB to store and retrieve information so that data is not lost on each page load and so that the user can add information without having to have the page reload. This app also uses Moments.JS to manipulate time and calculate when trains will be arriving next.  The code also incorporates timers, an ability to edit/delete data, and a video player.
                    </p>
                </div>
                <div className="project-grid-child project-img-wrapper">
                    <a href="https://sigmavx.github.io/Train-Scheduler/" target="_blank">
                        <img className="project-img" src="./images/train.png" alt="Train Scheduler Screenshot"/>
                    </a>
                </div>        
          
    
               
                <div className="project-grid-child project-img-wrapper">
                    <a href="https://fast-sands-67900.herokuapp.com/" target="_blank">
                        <img className="project-img" src="./images/opine.png" alt="O-pine App Screenshot"/>
                    </a>
                </div>    
                <div className="project-grid-child project-text" id="project4">
                    <a href="https://fast-sands-67900.herokuapp.com/" target="_blank">
                        <h2>O-Pine eSports News Scraper</h2>
                    </a>
                    <a className="gitIcons text-center" target="_balnk" href="https://github.com/SigmaVX/O-Pine">
                        <i className="align-middle fab fa-github"></i>
                        (See The Code)
                    </a>
                    <p>Looking for the latest eSports news in one spot?  This full stack app uses Node.JS, Express, Handlebars, Mongo DB, a Mongoose ODM, and Cheerio to pull and store top news items from The eSports Observer and Kotaku without an API.  Select refresh to screen scrape and update the news items.  Opine on the latest headlines with comments.  This is a no-SQL app that uses Mongoose to apply relational tools and validation.    
                    </p>
                </div>     
    
           
            
                <div className="project-grid-child project-text" id="project4">
                    <a href="https://mighty-citadel-95863.herokuapp.com/" target="_blank">
                        <h2>Chronos Food Ticketing App</h2>
                    </a>
                    <a className="gitIcons text-center" target="_balnk" href="https://github.com/SigmaVX/Restaurant-Ticketing">
                        <i className="align-middle fab fa-github"></i>
                        (See The Code)
                    </a>
                    <p>Chronos is a full stack single page app for tracking and processing customer food orders. It is built with an MVC setup, API routes, and a custom ORM that lets users enter orders into an SQL database and mark when the order is complete. It automatically tracks time and alerts users when a table is missing a food item. The app is built with Node JS, Express, a Handlebars view engine, the DOTENV module to secure data, and Bootstrap 4.
                    </p>
                </div>
                <div className="project-grid-child project-img-wrapper">
                    <a href="https://mighty-citadel-95863.herokuapp.com/" target="_blank">
                        <img className="project-img" src="./images/chronos.png" alt="SQL Database App Screenshot"/>
                    </a>
                </div>        
           
                       
   
                <div className="project-grid-child project-img-wrapper">
                    <a href="https://desolate-ravine-48937.herokuapp.com/" target="_blank">
                        <img className="project-img" src="./images/team-finder.png" alt="Team Finder App Screenshot"/>
                    </a>
                </div>    
                <div className="project-grid-child project-text" id="project4">
                    <a href="https://desolate-ravine-48937.herokuapp.com/" target="_blank">
                        <h2>Team Finder API & Routes</h2>
                    </a>
                    <a className="gitIcons text-center" target="_balnk" href="https://github.com/SigmaVX/Team-Finder">
                        <i className="align-middle fab fa-github"></i>
                        (See The Code)
                    </a>
                    <p>Find your ideal online gaming clans and competitive teams using the Game Roster Team Finder.  The process is simple.  Load up the page, answer some questions, and see your ideal teams.  This full stack application (hosted on Heroku) is built with Node JS, Express, Bootstrap, jQuery, and Body Parser. It includes a variety of APIs and server routes to store, retrieve, and process data.
                    </p>
                </div>   


            
                <div className="project-grid-child project-text" id="project4">
                    <a href="https://github.com/SigmaVX/G-BAY" target="_blank">
                        <h2>SQL Store Database App</h2>
                    </a>
                    <a className="gitIcons text-center" target="_balnk" href="https://github.com/SigmaVX/G-BAY">
                        <i className="align-middle fab fa-github"></i>
                        (See The Code)
                    </a>
                    <p>G-BAY is a back-end database application that lets users buy, sell, and manage items through Node JS, MySQL, and the Command Line Interface (a proxy for the front-end). This application uses the dotenv NPM to secure SQL credentials and masks fields to prevent SQL Injection.  Syncs sales and inventory levels across multiple user portals for users, managers, and supervisors.  It also includes financial tools to track real-time sales and profits by operating unit.
                    </p>
                </div>
                <div className="project-grid-child project-img-wrapper">
                    <a href="https://youtu.be/mkKY-PP0d9E" target="_blank">
                        <img className="project-img" src="./images/gbay.png" alt="SQL Database App Screenshot"/>
                    </a>
                </div>



                <div className="project-grid-child project-img-wrapper">
                    <a href="https://youtu.be/SQHHRqTVohM" target="_blank">
                        <img className="project-img" src="./images/lardac.png" alt="LARDAC Node JS Screenshot"/>
                    </a>
                </div>    
                <div className="project-grid-child project-text" id="project4">
                    <a href="https://github.com/SigmaVX/LARDAC" target="_blank">
                        <h2>Node JS APIs</h2>
                    </a>
                    <a className="gitIcons text-center" target="_balnk" href="https://github.com/SigmaVX/LARDAC">
                        <i className="align-middle fab fa-github"></i>
                        (See The Code)
                    </a>
                    <p>Before the rise of Gotham's HARDAC there was LARDAC, which will fetch Tweets, song tracks from Spotify, and movie info from OMDB.  Need a little help?  LARDAC will recommend a random movie or song for you and keeps track of requests in the log file.  This back-end application is built with JavaScript and Node.js NPM packages. It runs from your terminal and showcases the use of FS Read, FS Write, the "Request" NPM package, the OMDB API, the Spotify API, the Twitter API, and "dotenv" package to protect API keys. It also includes a randomization function that randomly picks unique (i.e. non-duplicate) numbers using a recursive approach.   
                    </p>
                </div>        
           
        
        
        </div>
    </section>
    

    )
}

export default Portfolio; 