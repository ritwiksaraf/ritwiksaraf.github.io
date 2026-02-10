---
title: Starting from scratch
date: 2025-03-28
tags: [Updates, Blog]
---

I have been stuck in a continuous loop of starting a project and never finishing it for the last 2 years now. I have gone through numerous cycles of doing something then letting it sit in my brain for countless number of iterations. This website may be the only half baked product of this stupidity and I plan to fix everything this time. This time i am putting my foot down and documenting what i need to document to make this work.

I am broadly classifying my projects and everything that i need to do to get them right:

1. **Project Zero:** It is a home automation project that I have been planning on doing for several years now. It started with a simple esp32 webserver and a generic web interface. It moved to a chatbot with telegram named “Birju” that my friends Hridali and Lohitaksh were able to access and control the lights in my room.

   While it was cool, my maid almost got zapped as half my electric board was out of the socket to make this possible and she reached out in the dark to turn on the light causing this project to ultimately be a failure. My parents made me put everything back as it was and Birju has been residing in my head rent free since then. It has been 5 years since that project took place and I have switched countries since then. I am now going to restart the project with a simple objective.

   Have the lamps in my Purdue apartment turn on and off by their own free will. No stupid web interfaces, no voice commands, just logic (I may need to add some interface incase this fails as it usually does)

2. **Roomba:** This has been a wet fetish of mine since I played rainbow six siege and decided to move across continents from India to America. I want to do triple the effort so I don’t have to clean up after my self. I have been saying this for 2 years now that the designs are ready. They aren’t but I have them in my head. Famous last words. I may archive this project after all

3. **Robotic arm:** This may be the most important project for me right now. I am working on a 6DOF robotic arm so I can use it to program an isaac sim- ros 2 thingy to automate robot programming. I was pretty close when I did something similar with robodk at applied materials. But I will probably update this the most

### Archived Projects
1. Scooter cycle (Pretty self explanatory but I bought a car so this is now obsolete)

### My next steps
I am going to start with project zero as I need a break from the robot. I am going to simply automate my Walmart lamps with a couple of esp32s. They will communicate over either espnow or espmesh. They will report status back to my rpi4 and use a chatgpt based reasoning model to turn themselves on and off