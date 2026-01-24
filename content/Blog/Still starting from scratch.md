---
title: Still starting from scratch
date: 2025-10-10
tags: [Updates, Blog]
---

Well, like most of my efforts to create something go, i kinda dropped the ball for a couple of months there. Just as an update, I graduated from Purdue University this summer, drove around almost all of the USA and started my first ever job as a Manufacturing engineer at Applied Materials in Austin Texas on 28th of July 2025. Still cannot believe how good a deal I am getting. Someone is paying me to do something I would do for free on my own time anyway.

My job as a manufacturing engineer in the automation technology group is to help with the automation drive at applied materials.

Getting back to the point though, things have been much better when it comes to me actually getting some parts of my projects done. I am primarily working on the robotics part of things like i predicted I would. In this post I want to talk about the work I have done in the past few months in robotics for automation of robotics in manufacturing.

The idea is decentralized manufacturing, I want to expand it here over the next couple of posts Iwant to talk about what I want to do for the world of manufacturing and how the dots join when I look back to my old projects and why they are now relevant. This is just a one liner but i would want to write more about this, extensively if I still have the motivation to write 20 mins from now.

## Decentralized Manufacturing
The idea is to create a manufacturing interface that would interact with commonly used manufacturing technologies such as Plant Simulators, Digital twin applications, robot programming and simulation software, PLCs, WMS, etc seamlessly and would create an integration layer between different engineering operations. The idea is to cut down on engineering time spend on bullshit like planning and optimization and actually give way to innovation by allowing easier access to technology that can be relied upon

## SOARM-101
I recently got into completing my first ever 3d printed robotic arm. I started trying to create one almost immediately after I 3d printed my own design for the very first time at the Purdue 3D printing lab. This was back in the first year of my masters when i REALLY got access to a 3d printer and I kept re-iterating my design for almost 2 years when i gave up and decided to focus on what was important. I wanted to work with a 6DOF robotic arm that didnt cost as much as I did on an open market.

So I turned to the SOARM 101 which is a 3D printable, open source robotic arm that uses Feetech servomotors and is widely supported across many circles. I will write a little more about this journey with the 101 on a more structured post but I want to treat this post as a journal entry in my journey. With the 101 ready, i played around with the Nvidia Omniverse stack, specifically, the IsaacSim and IsaacLab components.

I was able to train my first ever policy to pick up a cube 25mm in dimension at a fixed location with Isaaclab. I also created my own python drivers to interact with ROS2 and have the real robot mimic the robot I had in IsaacSim successfully proving the viability of a Sim2Real setup with the SO101. I want to take this to the next level by actually creating a structured template to interact with the 101 with isaaclab trained policies which i havent been able to do so far

## Other projects on my plate
- Creating an organization system for my house with gridfinity and a customized rail system that would make mounting shit to my desk easier and non-permanent. I want to 3d print this entire project and make it possible for me to keep track of all the tools and hardware i keep buying for no reason. I hope i find good use for the shit later and dont have to go down a rabbit hole everytime i think of a new idea
- Creating a blind opening automation thingy. I want to open and close my blinds but i always am too lazy so i either keep it open too long or dont have it open at all. I want to be able to open and close it as and when i want to. This would be a part of project zero and I am using an esp32 to design it so i can have it connected to birju and have him do it for me

## Other ideas (not started)
Automation of grocery: If i can put pressure sensor based weight estimation and a movable camera inside my fridge, then i can keep track of all the stuff that i already have and the stuff that i need to buy/would need to buy in the future. I could also potentially connect it to a grocery app and have it ordered for me autonomously, I dont think I need to buy a smart fridge to do something that a simple microcontroller connected to the internet can do.

but this project is not on priority right now because I have not been lazy enough and I actually enjoy grocery shopping. It will be forgotten unless I write it down. I did lose my keys while grocery shopping a few weeks ago. by lose my keys i mean i dropped them in my trunk while my car was locked. Had to pay 90 dollars to get it fixed. maybe thats another project I can add to the list of shit I am never going to do but is fun to design in my head. Trust me the design is ready.

## Photos (external links from your old site)
![](https://blog.ritwiksaraf.com/assets/img/uploads/20251003_173522.jpg)
![](https://blog.ritwiksaraf.com/assets/img/uploads/20250926_042948.jpg)
![](https://blog.ritwiksaraf.com/assets/img/uploads/img-20250907-wa0014.jpeg)
![](https://blog.ritwiksaraf.com/assets/img/uploads/img-20250905-wa0017.jpeg)