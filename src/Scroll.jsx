import React, { useEffect } from 'react';
import './Scroll.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Gate from './component/gate.jpg';
import Leaf from './Leaf.jsx';
import RoundButton from './RoundButton.jsx';

gsap.registerPlugin(ScrollTrigger);

const Scroll = () => {
  useEffect(() => {
    gsap.to('.circle', {
      rotation: -720, 
      ease: 'none',
      scrollTrigger: {
        trigger: '.dummy-scroll',
        scrub: true,
      },
    });

    gsap.to('.zoom-image', {
      scale: 2.0, 
      ease: 'none',
      scrollTrigger: {
        trigger: '.dummy-scroll',
        scrub: true,
        start: 'top top',
        end: 'bottom top',
      },
    });

    // Text fade-in and fade-out
    gsap.fromTo('.fade-Text', 
      { opacity: 0 }, 
      { 
        opacity: 1, 
        scrollTrigger: {
          trigger: '.dummy-scroll',
          start: 'top 30%', 
          end: 'top 1%', 
          scrub: 5,
          toggleActions: 'play none none reverse',
          
        },
      }
    );

    const fadeTextUl = document.querySelector('.fade-Text ul');
    const roundButton = document.querySelector('.round-button');

    fadeTextUl.addEventListener('mouseover', () => {
      roundButton.classList.add('smoke');
    });

    fadeTextUl.addEventListener('mouseout', () => {
      roundButton.classList.remove('smoke');
    });

  }, []);

  const rotateClockwise = (elem) => {
    gsap.to(elem, {
      rotation: "+=360",
      ease: "linear",
      duration: 3.2,
      repeat: -1, // infinite loop
    });
  };

  const rotateCounterClockwise = (elem) => {
    gsap.to(elem, {
      rotation: "-=360",
      ease: "linear",
      duration: 2.2,
      repeat: -1, // infinite loop
    });
  };

  useEffect(() => {
    rotateClockwise('.arc1');
    rotateCounterClockwise('.arc2');
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="background-container">
          <img src={Gate} className="zoom-image" alt="Gate" />
        </div>
        <div className='circle'>
          <div className='arc1'></div>
          <div className='arc2'></div>
        </div>
        <div className="fade-Text" >
        <ul>
            <li>W</li>
            <li>E</li>
            <li>L</li>
            <li>C</li>
            <li>O</li>
            <li>M</li>
            <li>E</li>
        </ul>
    <RoundButton />
    </div>
      </header>
      <Leaf/>
      <div className="dummy-scroll"></div>
    </div>
  );
};

export default Scroll;
