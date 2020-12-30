const dotenv = require('dotenv').config()
let now = new Date();

module.exports = {
    
    environment: process.env.ELEVENTY_ENV,
    twitter: "jacebenson",
    github: "https://github.com/jacebenson",
    linkedin: "https://linkedin.com/in/jacebenson",
    baseURL: "https://write.jace.pro",
    title: "write.jace.pro",
    //patreon: "https://www.patreon.com/bePatron?u=23597006",//if uncommented adds a link to header and footer
    description: "A blog about writing where I can note my thoughts and share them in a place that is available for me.",
    subtitle: "Writing resources I've come across and my thoughts on writing.",
    author: "Jace Benson",//used all over
    email: "jace.benson@gmail.com",//used specificly for rss feed
    utterancesRepo: "jacebenson/write.jace.pro",//used for comments//if commented, doesnt load
    lastBuildDate: now.toLocaleString('en-CA',{hour12:false, timeZone: 'America/Chicago'}).replace(',',''),
    lastBuildYear: now.getFullYear(),
}