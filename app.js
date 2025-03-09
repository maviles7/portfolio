/*-- constants --*/

const projects = [
    {
        title: "Riddles",
        description: "A quiz game inspired by one of DC Comic's supervillians, The Riddler. The goal of the game is to answer 2 out of the 3 riddles correctly in order to win. I choose this game because while I am notriously aweful at riddles, I love superheros and supervillians. Both riddles and coding having tested my paitence and logic so I belive this to be an appropriate choice of a game to create.",
        image: "static/riddles.png",
        deployLink: "https://maviles7.github.io/riddles/", 
        githubLink: "https://github.com/maviles7/riddles",
    },
    {
        title: "Movie Moment",
        description: "This is a movie tracking web application inspired by an acquaintance who watched over 300 movies in a single year, using only a notes app to keep track of the movies and his thoughts. I'm also a frequent user of Belli, an app for tracking restaurants visited, and StoryGraph, which helps you track books read. While dining and reading are two of my favorite hobbies, watching movies is likely my top passion. Hence, I wanted to make something to help track.",
        image: "static/moviemoment.png",
        deployLink: "hhttps://moviemoment-29fea78bd2db.herokuapp.com/",
        githubLink: "https://github.com/maviles7/moviemoment",
    },
    {
        title: "Tales of Travel", 
        description: "This app was created by a love a travel. I wanted to create somewhere to track where I have been and see where others have been. I believe others might also enjoy having somewhere log thier travels. Inspiration came from both the best and worst of both VSCO and Insta. We love to love them and we love to hate them.", 
        image: "static/tot.png", 
        deployLink: "https://tales-of-travel-312aa5ba5776.herokuapp.com/", 
        githubLink: "https://github.com/maviles7/TOT", 
    }, 
    {
        title: "Daily Dose",
        description: "We want to create an app that simplifies news digestion to help users avoid feeling overwhelmed by the constant flow of content. Our goal is to eliminate noise and allow users to concentrate on information that matters to them. By curating and condensing content, the app will save time and make news easier to process. Adding a social component for discussions will foster community, allowing users to share insights and engage in meaningful conversations around current events.",
        image: "static/dailydose.png",
        deployLink: "https://dailydose-f0c774bd923d.herokuapp.com/",
        githubLink: "https://github.com/maviles7/dailydose",
    },
    {
        title: "Magic8",
        description: "Magic 8 is a web application that brings your favorite toy back to life in the digital age. Get your answers. Happy Spooky Season 2024!",
        image: "static/magic8.png",
        deployLink: "https://maviles7.github.io/magic8/",
        githubLink: "https://github.com/maviles7/magic8",
    },
    {
        title: "RPSLS",
        description: "Rock, Paper, Scissors, Lizard, Spock. This was inspired by my love of The Big Bang Theory. Honestly, I didn’t even know if it was a thing outside of the show. I feel a sense of kinship with Sheldon—not just because we’re both from East Texas, but also because of the experience of being different and having to find and forge our own way in society. The humor, friendship, found family, and growth in the show hold a special place in my heart, and I hope that comes through in this project. Is it a simple one? Yes. But was it fun to build? Also yes. So have fun with it!",
        image: "static/rpsls.png",
        deployLink: "https://maviles7.github.io/rps/",
        githubLink: "https://github.com/maviles7/rps",
    },
    {
        title: "etch-a-sketch",
        description: "Was this inspired by anything? A beloved childhood toy perhaps... technically yes but I never thrived at it as a child. Yet, here I am building it. What I am inspired by is the retro vibes.",
        image: "static/etch-a-sketch.png",
        deployLink: "https://maviles7.github.io/odin-etch-a-sketch/",
        githubLink: "https://github.com/maviles7/odin-etch-a-sketch",
    },
]; 

const engineer = {
    firstName: "Miriam", 
    lastName: "Aviles",
    title: "Software Engineer | Full Stack Developer",
    bio: "Building software that puts the “fun” in functional. Passionate about crafting thoughtfully designed and innovative solutions that turn complex problems into seamless, user-friendly experiences. With a sharp analytical mind, creative problem-solving skills, and unshakable resilience, my goal is simple: to make technology work for everyday people - adding value and joy to their lives.", 
    inspiration: "As a lifelong Marvel fan, Tony Stark’s creative spirit, problem-solving genius, and gritty attitude have always inspired me. His character sparked my passion for software engineering, where I can channel that same drive to build innovative solutions.", 
    skills : ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'React.js', 'Python', 'MongoDB', 'Mongoose', 'Neon', 'GitHub', 'Communication', 'Teamwork', 'Problem Solving', 'Critical Thinking','Adaptability', 'Time Management', 'Growth Mindset'], 
};

/*-- variables --*/

let nameElement = document.querySelectorAll("#name");
let titleElement = document.querySelectorAll("#title");
let bioElement = document.querySelector("#bio");
let inspirationElement = document.querySelector("#inspiration");
let skillsElement = document.querySelector("#skills");



/*-- functions --*/

render(); 

function render() {
    nameElement.forEach((name) => {
        name.innerText = `${engineer.firstName} ${engineer.lastName}`;
    })

    titleElement.forEach((title) => {
        title.innerText = engineer.title;
    })
    
    if (bioElement) {
        bioElement.innerText = engineer.bio;
    }

    if (inspirationElement) {
        inspirationElement.innerText = engineer.inspiration;
    }

    if (skillsElement) {
        engineer.skills.forEach((skill) => {
            const li = document.createElement("li");
            li.innerText = skill;
            skillsElement.appendChild(li);
        });
    }
}; 