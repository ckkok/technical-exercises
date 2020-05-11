# Carousel - Front-End Assignment

This assignment requires you to build a picture carousel. The duration of this assignment is **1 day**.

## Goal

The assessment objectives of this assignment are to check if a candidate is able to:
- Design and build a component from scratch using only **vanilla Javascript**, **HTML5**, and **CSS3** without the use of external libraries or frameworks.
- Create a mobile-responsive view that works across browsers.
- Write clean, resilient code.
- Use git to manage versions.
- Write clear and concise documentation with the consumers of his/her code in mind.

## Requirements
1. Create a public git repository that you will use for this submission.
2. Use only **plain Javascript**, **HTML5**, and **CSS3** for this assignment.
3. Create a carousel application that consists of the following features:
- a backward and a forward button that can be used to scroll through pictures,
- a location indicator that can be used to reach different pictures without having to repeatedly click on the backward or forward buttons,
- animated transition(s) implemented in pure CSS,
- contains a title and caption for each picture in the carousel,
- resizes and be usable on mobile as well as on desktop platforms,
- be instantiable via Javascript by taking either an object or an array of URIs (see example below), and a DOM element, then injects the carousel as a child of the DOM element. Your carousel should work properly regardless of the size of this parent DOM element.
4. Your submission should be able to serve at least the 3 images in this repository.
5. Your submission should work on Chrome, Safari, Edge, Firefox, and IE (>= 10). 
6. Your submission document the necessary instructions for installing and running your project, as well as any limitations or assumptions required for its operation.
7. Push your code to a git repository and add [kok.chee.kean@outlook.com](kok.chee.kean@outlook.com) as a collaborator.

Examples of possible input:
```
createCarousel({catpic: 'kitties.jpg', dogpic: 'wolf.png', joker: 'http://picsrus.com.sg/clown.gif'}, document.getElementById('carousel'));
```
or
```
Carousel.from(['kitties.jpg', 'wolf.png', 'http://picsrus.com.sg/clown.gif'], document.querySelector('#carousel'));
```

## Remarks

Feel free to enhance your application with meaningful features as long as the above requirements are met.
