import React from "react";
import Particles from 'react-particles-js';
// import Carousel from "../../components/Carousel/Carousel";
import styles from "./Portfolio.module.css";

const Portfolio = () =>{

    const projects = [
        {
            projectName: "Game Roster",
            siteURL: "https://gameroster.com/",
            codeURL: "",
            codeIcon: "fab fa-bitbucket",
            privateRepo: true,
            imageSrc: require("../../assets/images/projects/game_roster.jpg"),
            description: "Game Roster helps thousands of gamers discover, organize, and build online gaming communities.  The cross-platform application use algorithms to help users find ideal teams, players, and games.  It includes dozens of features, and has been a global effort involving multiple designers, developers, and engineers that showcase Agile project management, UI/UX, analytics, and a broad range of backend technologies."
        },
        {
            projectName: "Game Roster Mobile",
            siteURL: "https://itunes.apple.com/us/app/game-roster/id1084852919?ls=1&mt=8",
            codeURL: "",
            codeIcon: "fab fa-bitbucket",
            privateRepo: true,
            imageSrc: require("../../assets/images/projects/mobile.jpg"),
            description: "The Game Roster messaging app keeps you connected with your clans and events with push notifications for messages, event posts, clan applications, and game event roster updates. The iOS and Android apps sync with Discord and our Website to showcase cross-platform development."
        },
        {
            projectName: "AlertsMe",
            siteURL: "https://www.fortitudedev.com/",
            codeURL: "",
            codeIcon: "fab fa-github",
            privateRepo: true,
            imageSrc: require("../../assets/images/projects/alerts_me.jpg"),
            description: "This full stack app was built with Fortidue using React, Node, and MongoDB. It provides geocoding, data visualizations, real-time chat,  user authentication, and more to help businesses track dangerous conditions, user locations, and much more.  It makes use of Google Maps API and multiple React libraries."
        },
        {
            projectName: "Tilt GG",
            siteURL: "http://www.tilt.gg/",
            codeURL: "",
            codeIcon: "fab fa-bitbucket",
            privateRepo: true,
            imageSrc: require("../../assets/images/projects/tilt.jpg"),
            description: "Find, report, and track online cheaters.  This full stack application is built with Mongo DB, Express, React, and Node JS.  It utilizes data visualization libraries to track cheat tends, Mongoose as an Object Document Mapper, and over 20 other libraries. It also includes a YouTube API, a custom email verification system, and conditional routing."
        },
        {
            projectName: "Agile Flow",
            siteURL: "https://agile-flow.herokuapp.com/",
            codeURL: "https://github.com/SigmaVX/Agile-Flow",
            codeIcon: "align-middle fab fa-github",
            privateRepo: false,
            imageSrc: require("../../assets/images/projects/agile_flow.jpg"),
            description: "Accelerate your learning of new tech with a community that lets you get to the heart of burning tech questions.  Stop wasting time searching and get to the core of things in less than 15 minutes. Agile Flow is designed help developers learn targeted topics in a relatively short amount of time by leveraging a peer developer community, ratings, and Agile principles.  This full stack Node app incorporates user authentication, image uploads, and a SQL database with a Sequelize ORM."
        },
        {
            projectName: "React Burger Redux",
            siteURL: "https://sigmavx.github.io/React-Burger-Redux/",
            codeURL: "https://github.com/SigmaVX/React-Burger-Redux",
            codeIcon: "align-middle fab fa-github",
            privateRepo: false,
            imageSrc: require("../../assets/images/projects/react_burger.png"),
            description: "This simple front end app is less about burgers and more about showing the power of React with over 30 techniques ranging from Redux integration, higher order components, Axios interceptors, CSS Modules, token-based user authentication, security guards, validations, conditional routes, and much more."
        },
        {
            projectName: "Carousel",
            siteURL: "https://sigmavx.github.io/Carousel/",
            codeURL: "https://github.com/SigmaVX/Carousel",
            codeIcon: "align-middle fab fa-github",
            privateRepo: false,
            imageSrc: require("../../assets/images/projects/carousel.png"),
            description: "Carousel is a reusable component for displaying images using vanilla JavaScript and CSS grid.  Users can adjust the display with a simple click or shuffle to display random layouts.  The component can be used in server-side views, static sites, or as a React component."
        },
        {
            projectName: "Cortex - Memory App",
            siteURL: "https://sigmavx.github.io/Trivia-Game/",
            codeURL: "https://github.com/SigmaVX/Cortex",
            codeIcon: "align-middle fab fa-github",
            privateRepo: false,
            imageSrc: require("../../assets/images/projects/cortex.jpg"),
            description: "Cortex is a simple way to test your memory.  Click an image to score a point but avoid clicking any image twice.  This React JS app randomly shuffles all the images after each selection using className component states that are passed between parent and child components. The app also integrates Bootstrap 4, CSS Animations, and React Sticky."
        },
        {
            projectName: "GaryVee Motivational App",
            siteURL: "https://sigmavx.github.io/Garyvee-Hangman/",
            codeURL: "https://github.com/SigmaVX/Garyvee-Hangman",
            codeIcon: "align-middle fab fa-github",
            privateRepo: false,
            imageSrc: require("../../assets/images/projects/garyvee.jpg"),
            description: "Get inspired with some GaryVee quotes and sound clips.  Simply select the letters and numbers on your keyboard to reveal random some words of wisdom from GaryVee.  This game uses Bootstrap 4, is mobile responsive, and is built with vanilla JavaScript and jQuery to randomize sounds, word choices, and to manipulate the DOM. Functions are used to streamline the code and to scale up the options (e.g. more random cheers and jeers)."
        },
        {
            projectName: "O-Pine eSports News Scraper",
            siteURL: "https://o-pine.herokuapp.com/",
            codeURL: "https://github.com/SigmaVX/O-Pine",
            codeIcon: "align-middle fab fa-github",
            privateRepo: false,
            imageSrc: require("../../assets/images/projects/opine.jpg"),
            description: "Looking for the latest eSports news in one spot?  This full stack app uses Node.JS, Express, Handlebars, Mongo DB, a Mongoose ODM, and Cheerio to pull and store top news items from The eSports Observer and Kotaku without an API.  Select refresh to screen scrape and update the news items.  Opine on the latest headlines with comments.  This is a no-SQL app that uses Mongoose to apply relational tools and validation."
        },
        {
            projectName: "Seven Deadly GIFs API",
            siteURL: "https://sigmavx.github.io/GIPHY-API/",
            codeURL: "https://github.com/SigmaVX/GIPHY-API",
            codeIcon: "align-middle fab fa-github",
            privateRepo: false,
            imageSrc: require("../../assets/images/projects/giphy.jpg"),
            description: "Looking for a laugh? Search and filter results on GIPHY using the API, JavaScript, jQuery, Bootstrap 4, and my twist on the Seven Deadly Sins. This page is mobile responsive and allows you to query based on predefined terms or create your own searches.  Click a GIF to manipulate the DOM and toggle the animation."
        },
        {
            projectName: "Firebase Train Scheduler",
            siteURL: "https://sigmavx.github.io/Train-Scheduler/",
            codeURL: "https://github.com/SigmaVX/Train-Scheduler",
            codeIcon: "align-middle fab fa-github",
            privateRepo: false,
            imageSrc: require("../../assets/images/projects/train.jpg"),
            description: "Set and view train schedules with jQuery and the Firebase API.  This one-page application uses jQuery and Firebase DB to store and retrieve information so that data is not lost on each page load and so that the user can add information without having to have the page reload. This app also uses Moments.JS to manipulate time and calculate when trains will be arriving next.  The code also incorporates timers, an ability to edit/delete data, and a video player."
        },
        {
            projectName: "Chronos Food Ticketing App",
            siteURL: "https://chronos-food-ticketing.herokuapp.com/",
            codeURL: "https://github.com/SigmaVX/Restaurant-Ticketing",
            codeIcon: "align-middle fab fa-github",
            privateRepo: false,
            imageSrc: require("../../assets/images/projects/chronos.jpg"),
            description: "Chronos is a full stack single page app for tracking and processing customer food orders. It is built with an MVC setup, API routes, and a custom ORM that lets users enter orders into an SQL database and mark when the order is complete. It automatically tracks time and alerts users when a table is missing a food item. The app is built with Node JS, Express, a Handlebars view engine, the DOTENV module to secure data, and Bootstrap 4."
        },
        {
            projectName: "Food Fight RPG Game",
            siteURL: "https://sigmavx.github.io/RPG-Game/",
            codeURL: "https://github.com/SigmaVX/RPG-Game",
            codeIcon: "align-middle fab fa-github",
            privateRepo: false,
            imageSrc: require("../../assets/images/projects/rpg_game.jpg"),
            description: "All is not well in the inter-galactic salad bar. The prepared foods are feed up and all-out war is about to break out. Pick your food and destroy all that would stand between you and your hunger.  This RPG card game showcases DOM manipulation and logic using jQuery as there is minimal use of HTML. Almost everything you see here is generated by the jQuery and manipulated using functions. The code is scalable and set up using an array to hold objects. Those objects create the cards and HTML while event listeners take the data and update the original objects and array."
        },
        {
            projectName: "Toon Triva Game",
            siteURL: "https://sigmavx.github.io/Trivia-Game/",
            codeURL: "https://github.com/SigmaVX/Trivia-Game",
            codeIcon: "align-middle fab fa-github",
            privateRepo: false,
            imageSrc: require("../../assets/images/projects/toon.jpg"),
            description: "Who thought cartoon trivia could be this tough.  This game showcases the use of JavaScript, jQuery, Timers, and Intervals. The JavaScript is built using multiple functions that cascade. The JavaScript randomly picks a question and verifies the question has not been asked before while answers are randomly assigned to buttons using a function that shuffles an array."
        },
        {
            projectName: "Team Algorithm, API, & Routes",
            siteURL: "https://team-finder-rutgers.herokuapp.com/",
            codeURL: "https://github.com/SigmaVX/Team-Finder",
            codeIcon: "align-middle fab fa-github",
            privateRepo: false,
            imageSrc: require("../../assets/images/projects/team_finder.jpg"),
            description: "Find your ideal online gaming clans and competitive teams using the Game Roster Team Finder.  The process is simple.  Load up the page, answer some questions, and see your ideal teams.  This full stack application (hosted on Heroku) is built with Node JS, Express, Bootstrap, jQuery, and Body Parser. It includes a variety of APIs and server routes to store, retrieve, and process data."
        },
        {
            projectName: "New York Times API",
            siteURL: "https://nyt-react-rutgers.herokuapp.com/",
            codeURL: "https://github.com/SigmaVX/NYT-Reader",
            codeIcon: "align-middle fab fa-github",
            privateRepo: false,
            imageSrc: require("../../assets/images/projects/nyt.jpg"),
            description: "Find and save articles from the New York Times using React, Mongo DB, and the NYT API.  This full stack MERN app untilzies an MVC setup with an ODM to simplify CRUD operations."
        },
        {
            projectName: "SQL Store Database Backend App",
            siteURL: "https://youtu.be/mkKY-PP0d9E",
            codeURL: "https://github.com/SigmaVX/G-BAY",
            codeIcon: "align-middle fab fa-github",
            privateRepo: false,
            imageSrc: require("../../assets/images/projects/gbay.jpg"),
            description: "G-BAY is a back-end database application that lets users buy, sell, and manage items through Node JS, MySQL, and the Command Line Interface (a proxy for the front-end). This application uses the dotenv NPM to secure SQL credentials and masks fields to prevent SQL Injection.  Syncs sales and inventory levels across multiple user portals for users, managers, and supervisors.  It also includes financial tools to track real-time sales and profits by operating unit."
        },
        {
            projectName: "Node JS Backend APIs",
            siteURL: "https://youtu.be/SQHHRqTVohM",
            codeURL: "https://github.com/SigmaVX/LARDAC",
            codeIcon: "align-middle fab fa-github",
            privateRepo: false,
            imageSrc: require("../../assets/images/projects/lardac.jpg"),
            description: "Before the rise of Gotham's HARDAC there was LARDAC, which will fetch Tweets, song tracks from Spotify, and movie info from OMDB.  Need a little help?  LARDAC will recommend a random movie or song for you and keeps track of requests in the log file.  This back-end application is built with JavaScript and Node.js. It runs from your terminal and showcases the use of FS Read, FS Write, the Request NPM package, the OMDB API, the Spotify API, the Twitter API, and dotenv to protect API keys. It also includes a randomization function that randomly picks unique (i.e. non-duplicate) numbers using a recursive approach."
        }
    ]

    // Set Header Based On Screen Size
    // let portfolioHeader = <Carousel />;
    // console.log(window.screen.width)
    // if(window.screen.width < 768){
    //     portfolioHeader = (
    //         <div className="jumbotron">
    //             <h2>Portfolio</h2>
    //         </div>
    //     )
    // }

    let portfolioHeader = (
        <div className="jumbotron">
            <h2>Portfolio</h2>
        </div>
    )
    
    // Set Canvas Size Based on Screen Size
    let canvasHeight = String(projects.length-1)*390+"px";
    
    if(window.screen.width < 576){
        canvasHeight = String(projects.length-1)*460+"px";
    }
    
    if(window.screen.width > 576 && window.screen.width < 768){
        canvasHeight = String(projects.length-1)*525+"px";
    }

    if(window.screen.width > 768 && window.screen.width < 992){
        canvasHeight = String(projects.length-1)*525+"px";
    }

    if(window.screen.width > 992 & window.screen.width < 1200){
        canvasHeight = String(projects.length-1)*295+"px";
    }


    return(
            
        <section className={styles.portfolioWrapper} id="portfolio">

           
            {portfolioHeader}
            
            {/* Particles Div Background - Not Used 
            <div className={styles.particleContainer}>

                <Particles 
                className={styles.particleBackground}
                height={canvasHeight}    
                params={
                    {
                        "particles": {
                            "number": {
                            "value": 100,
                            "density": {
                                "enable": false,
                                "value_area": 0
                            }
                            },
                            "color": {
                            "value": ["#ff0000", "#00ff00", "#0000ff"]
                            },
                            "shape": {
                            "type": "circle",
                            "stroke": {
                                "width": 0,
                                "color": "#000000"
                            },
                            "polygon": {
                                "nb_sides": 5
                            },
                            "image": {
                                "src": "",
                                "width": 400,
                                "height": 370
                            }
                            },
                            "opacity": {
                            "value": 0.5,
                            "random": true,
                            "anim": {
                                "enable": false,
                                "speed": 1,
                                "opacity_min": 0.1,
                                "sync": false
                            }
                            },
                            "size": {
                            "value": 10,
                            "random": true,
                            "anim": {
                                "enable": false,
                                "speed": 30,
                                "size_min": 0.1,
                                "sync": false
                            }
                            },
                            "line_linked": {
                            "enable": false,
                            "distance": 500,
                            "color": "#ffffff",
                            "opacity": 0.4,
                            "width": 2
                            },
                            "move": {
                            "enable": true,
                            "speed": 6,
                            "direction": "bottom",
                            "random": false,
                            "straight": false,
                            "out_mode": "out",
                            "bounce": false,
                            "attract": {
                                "enable": false,
                                "rotateX": 600,
                                "rotateY": 1200
                            }
                            }
                        },
                        "interactivity": {
                            "detect_on": "canvas",
                            "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "bubble"
                            },
                            "onclick": {
                                "enable": true,
                                "mode": "repulse"
                            },
                            "resize": true
                            },
                            "modes": {
                            "grab": {
                                "distance": 400,
                                "line_linked": {
                                "opacity": 0.5
                                }
                            },
                            "bubble": {
                                "distance": 400,
                                "size": 4,
                                "duration": 0.3,
                                "opacity": 1,
                                "speed": 3
                            },
                            "repulse": {
                                "distance": 200,
                                "duration": 0.4
                            },
                            "push": {
                                "particles_nb": 4
                            },
                            "remove": {
                                "particles_nb": 2
                            }
                            }
                        },
                    "retina_detect": true
                    }
                }
                />
            */}
            


                <div className={["container", styles.projectGridWrapper].join(" ")}>
                
                    { projects.map((project, index)=>{

                        if(window.screen.width < 768){
                            console.log("Small Screen Layout For Screen Width: ", window.screen.width);
                            return(
                                <div className={styles.projectRow} key={index}>

                                    <a rel="noopener noreferrer" href={project.siteURL} target="_blank">
                                        <h2>{project.projectName}</h2>
                                    </a>

                                    <div className={styles.gitIcons}>
                                        <i className={project.codeIcon}></i>
                                        {project.privateRepo ? " (Code In Private Repo)" : " (See The Code)"}
                                    </div>


                                    <div className={[styles.projectImgWrapper].join(" ")}>

                                        <a rel="noopener noreferrer" href={project.siteURL} target="_blank">
                                            <img className={styles.projectImg} src={project.imageSrc} alt={project.projectName}/>
                                        </a>
                                    </div>

                                    <div className={[styles.projectText, `project${index+1}`].join(" ")}>
                                        
                                        <p>
                                            {project.description}
                                        </p>
                                    </div>

                                    
                                </div>
                            );
                        } else {
                            console.log("Large Screen Layout For Screen Width: ", window.screen.width);                          
                            if(Number(index) % 2 === 0){
                                return(
                                    <div className={styles.projectRow} key={index}>
                                        <div className={[styles.projectText, `project${index+1}`].join(" ")}>
                                            <a rel="noopener noreferrer" href={project.siteURL} target="_blank">
                                                <h2>{project.projectName}</h2>
                                            </a>
                                            <div className={styles.gitIcons}>
                                                <i className={project.codeIcon}></i>
                                                {project.privateRepo ? " (Code In Private Repo)" : " (See The Code)"}
                                            </div>
                                            <p>
                                                {project.description}
                                            </p>
                                        </div>

                                        <div className={[styles.projectImgWrapper].join(" ")}>
                                            <a rel="noopener noreferrer" href={project.siteURL} target="_blank">
                                                <img className={styles.projectImg} src={project.imageSrc} alt={project.projectName}/>
                                            </a>
                                        </div>
                                    </div>
                                );
                            } else {
                                return(
                                    <div className={styles.projectRow} key={index}>
                                        <div className={[styles.projectImgWrapperAlt].join(" ")}>
                                            <a rel="noopener noreferrer" href={project.siteURL} target="_blank">
                                                <img className={styles.projectImg} src={project.imageSrc} alt={project.projectName}/>
                                            </a>
                                        </div>

                                        <div className={[styles.projectTextAlt, `project${index+1}`].join(" ")}>
                                            <a rel="noopener noreferrer" href={project.siteURL} target="_blank">
                                                <h2>{project.projectName}</h2>
                                            </a>
                                            <div className={styles.gitIcons}>
                                                <i className={project.codeIcon}></i>
                                                {project.privateRepo ? " (Code In Private Repo)" : " (See The Code)"}
                                            </div>
                                            <p>
                                                {project.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            }
                        }
                        })
                    }
    
                </div>    
                
            {/* Particle Div - Not Used 
            </div>
            */}

        </section>
        
    )   
}

export default Portfolio; 
    
