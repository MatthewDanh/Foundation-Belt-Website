/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState, FC } from 'react';
import { createRoot } from 'react-dom/client';

// --- DATA STRUCTURES ---
interface Lesson {
  id: string;
  title: string;
  component: FC;
}

interface Sprint {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
}

// --- LESSON COMPONENTS ---

const PlaceholderLesson: FC = () => (
    <div>
        <h3>Content Coming Soon!</h3>
        <p>This lesson is under construction. Check back soon for exciting new activities!</p>
    </div>
);

// --- SPRINT 1 LESSONS ---

const ComputerFoundationsLesson: FC = () => (
  <div>
    <h3>Learning Objectives</h3>
    <ul>
      <li>Define a computer and identify different types of computers.</li>
      <li>Define the parts of a desktop and laptop computer.</li>
      <li>Explain the difference between a desktop and a laptop.</li>
      <li>Identify computer input and output devices.</li>
      <li>Use the mouse to navigate through the computer.</li>
    </ul>
    <h3>What is a Computer?</h3>
    <p>A computer is any electronic device that can be programmed to carry out a set of logical instructions. We use them for gaming, watching videos, communication, and more!</p>
    <h3>Activity: Is this a computer?</h3>
    <p>Look at the items below. Which ones are computers?</p>
    <ul>
        <li>Desktop PC? (Yes!)</li>
        <li>Smartphone? (Yes, it's a powerful pocket computer!)</li>
        <li>Washing Machine? (Yes, it has a microprocessor to control it!)</li>
        <li>Smart Car? (Yes, cars have many computers!)</li>
        <li>Bicycle? (No)</li>
    </ul>
    <h3>Input vs. Output</h3>
    <p><strong>Input devices</strong> are used to put data INTO a computer (Mouse, Keyboard, Microphone). <strong>Output devices</strong> are used to get information OUT of a computer (Monitor, Printer, Speakers).</p>
    <h3>Play the Computer Parts Game!</h3>
    <div className="iframe-container">
        <iframe
            src="https://www.abcya.com/games/computer_parts"
            title="Computer Parts Game"
            allowFullScreen
        ></iframe>
    </div>
  </div>
);

const KeyboardingLesson: FC = () => {
    const [selectedColor, setSelectedColor] = useState<string>('pink');
    const [keyColors, setKeyColors] = useState<{ [key: string]: string }>({});

    const colors = {
        pink: '#FFC0CB', blue: '#ADD8E6', red: '#FFB6C1', green: '#90EE90',
        yellow: '#FFFFE0', orange: '#FFA07A', purple: '#D8BFD8',
    };

    const handleKeyClick = (keyId: string) => {
        setKeyColors(prev => ({ ...prev, [keyId]: colors[selectedColor] }));
    };

    const keyMap = [
        // Row 1
        { id: '`', x: 5, y: 5, width: 30, height: 30, label: '`' }, { id: '1', x: 40, y: 5, width: 30, height: 30, label: '1' },
        { id: '2', x: 75, y: 5, width: 30, height: 30, label: '2' }, { id: '3', x: 110, y: 5, width: 30, height: 30, label: '3' },
        { id: '4', x: 145, y: 5, width: 30, height: 30, label: '4' }, { id: '5', x: 180, y: 5, width: 30, height: 30, label: '5' },
        { id: '6', x: 215, y: 5, width: 30, height: 30, label: '6' }, { id: '7', x: 250, y: 5, width: 30, height: 30, label: '7' },
        { id: '8', x: 285, y: 5, width: 30, height: 30, label: '8' }, { id: '9', x: 320, y: 5, width: 30, height: 30, label: '9' },
        { id: '0', x: 355, y: 5, width: 30, height: 30, label: '0' }, { id: '-', x: 390, y: 5, width: 30, height: 30, label: '-' },
        { id: '=', x: 425, y: 5, width: 30, height: 30, label: '=' }, { id: 'backspace', x: 460, y: 5, width: 75, height: 30, label: '←' },
        // Row 2
        { id: 'tab', x: 5, y: 40, width: 50, height: 30, label: 'Tab' }, { id: 'q', x: 60, y: 40, width: 30, height: 30, label: 'Q' },
        { id: 'w', x: 95, y: 40, width: 30, height: 30, label: 'W' }, { id: 'e', x: 130, y: 40, width: 30, height: 30, label: 'E' },
        { id: 'r', x: 165, y: 40, width: 30, height: 30, label: 'R' }, { id: 't', x: 200, y: 40, width: 30, height: 30, label: 'T' },
        { id: 'y', x: 235, y: 40, width: 30, height: 30, label: 'Y' }, { id: 'u', x: 270, y: 40, width: 30, height: 30, label: 'U' },
        { id: 'i', x: 305, y: 40, width: 30, height: 30, label: 'I' }, { id: 'o', x: 340, y: 40, width: 30, height: 30, label: 'O' },
        { id: 'p', x: 375, y: 40, width: 30, height: 30, label: 'P' }, { id: '[', x: 410, y: 40, width: 30, height: 30, label: '[' },
        { id: ']', x: 445, y: 40, width: 30, height: 30, label: ']' }, { id: '\\', x: 480, y: 40, width: 55, height: 30, label: '\\' },
        // Row 3
        { id: 'caps', x: 5, y: 75, width: 65, height: 30, label: 'Caps' }, { id: 'a', x: 75, y: 75, width: 30, height: 30, label: 'A' },
        { id: 's', x: 110, y: 75, width: 30, height: 30, label: 'S' }, { id: 'd', x: 145, y: 75, width: 30, height: 30, label: 'D' },
        { id: 'f', x: 180, y: 75, width: 30, height: 30, label: 'F' }, { id: 'g', x: 215, y: 75, width: 30, height: 30, label: 'G' },
        { id: 'h', x: 250, y: 75, width: 30, height: 30, label: 'H' }, { id: 'j', x: 285, y: 75, width: 30, height: 30, label: 'J' },
        { id: 'k', x: 320, y: 75, width: 30, height: 30, label: 'K' }, { id: 'l', x: 355, y: 75, width: 30, height: 30, label: 'L' },
        { id: ';', x: 390, y: 75, width: 30, height: 30, label: ';' }, { id: '\'', x: 425, y: 75, width: 30, height: 30, label: '\'' },
        { id: 'enter', x: 460, y: 75, width: 75, height: 30, label: 'Enter' },
        // Row 4
        { id: 'l-shift', x: 5, y: 110, width: 85, height: 30, label: 'Shift' }, { id: 'z', x: 95, y: 110, width: 30, height: 30, label: 'Z' },
        { id: 'x', x: 130, y: 110, width: 30, height: 30, label: 'X' }, { id: 'c', x: 165, y: 110, width: 30, height: 30, label: 'C' },
        { id: 'v', x: 200, y: 110, width: 30, height: 30, label: 'V' }, { id: 'b', x: 235, y: 110, width: 30, height: 30, label: 'B' },
        { id: 'n', x: 270, y: 110, width: 30, height: 30, label: 'N' }, { id: 'm', x: 305, y: 110, width: 30, height: 30, label: 'M' },
        { id: ',', x: 340, y: 110, width: 30, height: 30, label: ',' }, { id: '.', x: 375, y: 110, width: 30, height: 30, label: '.' },
        { id: '/', x: 410, y: 110, width: 30, height: 30, label: '/' }, { id: 'r-shift', x: 445, y: 110, width: 90, height: 30, label: 'Shift' },
        // Row 5
        { id: 'space', x: 165, y: 145, width: 200, height: 30, label: '' },
    ];

    return (
        <div>
            <h3>Learning Objectives</h3>
            <ul>
                <li>Analyze different types of keyboards.</li>
                <li>Use Touch Typing and proper posture.</li>
                <li>Understand home row position and finger placement.</li>
            </ul>
            <h3>Proper Typing Posture</h3>
            <p>Sit up straight, keep your feet flat on the floor, and keep your wrists in a neutral stance. This will help you type faster and more comfortably!</p>
            <h3>Activity: Color the Keyboard</h3>
            <p>Use the color palette to color-code the keyboard based on the instructions. This will help you remember which finger should press each key!</p>
            <ul>
                <li>Color the home row keys (A-S-D-F and J-K-L-;) in <strong>pink</strong> – This is where we rest our fingers!</li>
                <li>Color the rest of letter keys in <strong>blue</strong> – These help us type words.</li>
                <li>Color the number row (0–9) in <strong>red</strong> – These help us type numbers and symbols.</li>
                <li>Color the space bar in <strong>green</strong> – It adds space between our words.</li>
                <li>Color the enter/return key in <strong>yellow</strong> – It starts a new line or sends a message.</li>
                <li>Color the backspace key in <strong>orange</strong> – It helps us fix our mistakes.</li>
                <li>Color the shift keys in <strong>purple</strong> – They let us make capital letters.</li>
            </ul>
            <div className="keyboard-activity">
                <div className="color-palette">
                    {Object.entries(colors).map(([name, code]) => (
                        <div
                            key={name}
                            className={`color-box ${selectedColor === name ? 'selected' : ''}`}
                            style={{ backgroundColor: code }}
                            onClick={() => setSelectedColor(name)}
                            aria-label={`Select ${name} color`}
                            role="button"
                        />
                    ))}
                </div>
                <svg viewBox="0 0 540 180" className="keyboard-svg" aria-label="Interactive keyboard diagram">
                    {keyMap.map(key => (
                        <g key={key.id} onClick={() => handleKeyClick(key.id)}>
                            <rect
                                className="key"
                                x={key.x}
                                y={key.y}
                                width={key.width}
                                height={key.height}
                                rx="3"
                                ry="3"
                                style={{ fill: keyColors[key.id] || '#f5f5f5' }}
                            />
                            <text className="key-char" x={key.x + key.width / 2} y={key.y + key.height / 2}>
                                {key.label}
                            </text>
                        </g>
                    ))}
                </svg>
            </div>
        </div>
    );
};

const HistoryOfComputersLesson: FC = () => (
    <div>
        <h3>A Brief History of Computers</h3>
        <p className="lesson-intro">Let's travel back in time to see how computers have changed! From simple counting tools to the powerful devices we use today.</p>
        <div className="history-timeline">
            <div className="timeline-event">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                    <h4>Ancient Times: The Abacus</h4>
                    <p>One of the first tools for counting, the abacus, was an early form of a calculator. People used it for basic math.</p>
                </div>
            </div>
            <div className="timeline-event">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                    <h4>1800s: Babbage's Engines</h4>
                    <p>Charles Babbage designed the first general mechanical computer, the Analytical Engine. Ada Lovelace wrote the first algorithm for it, making her the first computer programmer!</p>
                </div>
            </div>
            <div className="timeline-event">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                    <h4>1940s: The First Giants</h4>
                    <p>The first electronic computers, like ENIAC, were huge! They filled entire rooms and were used for complex calculations.</p>
                </div>
            </div>
            <div className="timeline-event">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                    <h4>1970s: The Personal Computer (PC) Arrives</h4>
                    <p>Companies like Apple and IBM started making smaller computers that could fit on a desk. People could now have computers in their homes!</p>
                </div>
            </div>
             <div className="timeline-event">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                    <h4>1990s: The World Wide Web</h4>
                    <p>The internet became publicly available, connecting computers all over the world. This changed how we find information and communicate.</p>
                </div>
            </div>
             <div className="timeline-event">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                    <h4>2000s: The Mobile Revolution</h4>
                    <p>Smartphones and tablets put powerful computers right in our pockets, allowing us to be connected anywhere.</p>
                </div>
            </div>
        </div>
        <h3>Lab: Make an Abacus</h3>
        <p>Let's make our own abacus using popsicle sticks, pipe cleaners, and beads to practice counting!</p>
    </div>
);


const DigitalCitizenshipLesson: FC = () => (
    <div>
        <h3>Be Awesome Online!</h3>
        <p className="lesson-intro">
            Being a good digital citizen means acting safely, responsibly, and respectfully online. Let's learn about the 5 areas of Digital Citizenship.
        </p>
        <div className="units-container">
            <div className="unit-card"><h4>Smart</h4><p>Share with care</p></div>
            <div className="unit-card"><h4>Alert</h4><p>Don't fall for fake</p></div>
            <div className="unit-card"><h4>Strong</h4><p>Secure your secrets</p></div>
            <div className="unit-card"><h4>Kind</h4><p>It's cool to be kind</p></div>
            <div className="unit-card"><h4>Brave</h4><p>When in doubt, talk it out</p></div>
        </div>
        <h3>Play Interland</h3>
        <div className="iframe-container">
            <iframe
                src="https://beinternetawesome.withgoogle.com/en_us/interland"
                title="Interland Game"
                allowFullScreen
            ></iframe>
        </div>
    </div>
);

// --- SPRINT 2 LESSONS ---

const IntroToProgrammingLesson: FC = () => (
  <div>
    <h3>Learning Objectives</h3>
    <ul>
      <li>Explain the definition of Algorithms.</li>
      <li>Give examples of Algorithms.</li>
      <li>Use Scratch to create simple animations.</li>
    </ul>
    <h3>What is an Algorithm?</h3>
    <p>An algorithm is a step-by-step procedure for solving a problem. Algorithms are everywhere! A recipe for making food is an algorithm, and the process of folding a shirt is an algorithm. In computing, programmers write algorithms that instruct the computer how to perform a task.</p>
    
    <h3>What are Programming Languages?</h3>
    <p>A programming language is a vocabulary and set of grammatical rules for instructing a computer to perform specific tasks. Just like people need a specific language to communicate, so do computers. Examples: Python, Java, JavaScript, C++.</p>

    <h3>Activity: Mouse Maze</h3>
    <p>Before we use a programming language, we need to understand the logic. Imagine a robot mouse needs to get to a piece of cheese in a maze. What simple instructions would you give it? (e.g., Turn Left, Turn Right, Move forward 2 blocks).</p>

    <h3>Intro to Scratch</h3>
    <p>Scratch is a free programming language where you can create your own interactive stories, games, and animations by snapping blocks together. Key parts of Scratch are:</p>
    <ul>
        <li><strong>Events Blocks:</strong> The most important blocks! They tell your script when to start.</li>
        <li><strong>Control Blocks:</strong> Dictate the flow of a project, like repeating actions.</li>
        <li><strong>Looks Blocks:</strong> Change the appearance of sprites.</li>
    </ul>
    
    <h3>Assignment: Dance Party!</h3>
    <p>Your first assignment is to create a dance party! Use different sprites and make them dance. Add a minimum of 4 sprites. You'll also be challenged to use the "Say Block" to make characters have a dialogue.</p>
  </div>
);

const AnimationsWithScratchLesson: FC = () => (
    <div>
        <h3>Learning Objectives</h3>
        <ul>
            <li>Use Scratch blocks to create a simple animation.</li>
            <li>Understand how to make sprites move and change.</li>
            <li>Apply sequencing to create an animation of your name.</li>
        </ul>
        <h3>Activity: Animate Your Name</h3>
        <p>In this project, you'll bring your name to life! Use the letter sprites in Scratch to spell out your name. Then, use different Looks and Motion blocks to make each letter do something fun. You can make them change color, spin around, grow and shrink, or even dance across the screen!</p>
    </div>
);

const XYCoordinateSystemLesson: FC = () => (
    <div>
        <h3>Learning Objectives</h3>
        <ul>
            <li>Understand the X Y coordinate system in Scratch.</li>
            <li>Use coordinates to position sprites on the stage.</li>
            <li>Create an animation using coordinate-based movement.</li>
        </ul>
        <h3>Treasure Maps and Coordinates</h3>
        <p>Treasure maps use coordinates to show you exactly where to find the treasure! Scratch uses a similar system. The stage is a grid with an X (right and left) and a Y (up and down) position. The center is (0, 0).</p>

        <h3>Lab: Create an Aquarium</h3>
        <p>Let's use our knowledge of coordinates to create an aquarium scene.</p>
        <ol>
            <li>Choose an underwater backdrop.</li>
            <li>Add at least 3 different fish sprites.</li>
            <li>Use 'go to x: y:' blocks and 'glide' blocks to make them swim around the tank.</li>
        </ol>

        <h3>Challenge: Bouncing Ball</h3>
        <p>Can you create an animation of a ball that bounces off the walls of the stage? You'll need to use conditional statements to check if it's touching the edge!</p>
    </div>
);

const CloneAndRandomBlocksLesson: FC = () => (
    <div>
        <h3>Learning Objectives</h3>
        <ul>
            <li>Use the 'clone' block to create copies of sprites.</li>
            <li>Use the 'pick random' block to add unpredictability.</li>
            <li>Improve the code quality of the Scratch aquarium project.</li>
        </ul>
        <h3>Making Copies with Clones</h3>
        <p>Instead of adding hundreds of fish sprites, we can use clones! You can program one sprite and then create many copies of it that follow the same or slightly different rules.</p>
        <h3>Adding Randomness</h3>
        <p>The 'pick random' block makes games more fun and unpredictable. You can use it to make sprites appear in random locations, move at random speeds, or change to random colors.</p>
        <h3>Lab: Improve the Aquarium</h3>
        <p>Let's go back to our aquarium. Instead of just 3 fish, can you make it so that new fish are created as clones every few seconds at random positions? This will make our aquarium much more lively!</p>
    </div>
);

const VariablesAndConditionalsLesson: FC = () => (
    <div>
        <h3>Learning Objectives</h3>
        <ul>
            <li>Understand and use variables in Scratch.</li>
            <li>Understand and use conditional statements (if/then).</li>
        </ul>
        <h3>Variables: Containers for Information</h3>
        <p>Think of a variable as a box or a container that can hold a value, like a number or a word. In a game, we can use a variable to keep track of the score. The score can change, so it's "variable"!</p>
        
        <h3>Conditional Statements: Making Decisions</h3>
        <p>Conditional statements (like "If... Then...") let our program make decisions. "IF the cat is hungry, THEN feed it." In Scratch, these blocks check if a condition is true, and if it is, they run the code inside.</p>

        <h3>Lab: Color-Changing Chameleon</h3>
        <p>Let's create a chameleon sprite and a circle sprite. We'll write a script that says: IF the chameleon is touching the circle, THEN change its color. This is a simple but powerful use of a conditional statement!</p>
    </div>
);

const ComparisonSymbolsLesson: FC = () => (
    <div>
        <h3>Learning Objectives</h3>
        <ul>
            <li>Learn and implement comparison symbols ( &lt;, &gt;, = ).</li>
            <li>Learn to get user input in Scratch.</li>
        </ul>
        <h3>Comparison Symbols: The Crocodile Method</h3>
        <p>Comparison symbols help our program compare values. Think of the &lt; and &gt; symbols as a crocodile's mouth—it always wants to eat the bigger number!</p>
        <ul>
            <li>10 &gt; 5 (10 is greater than 5)</li>
            <li>5 &lt; 10 (5 is less than 10)</li>
            <li>5 = 5 (5 is equal to 5)</li>
        </ul>
        
        <h3>Getting User Input</h3>
        <p>The 'ask and wait' block lets your program ask the user a question. The user's answer is stored in a special 'answer' variable that you can use!</p>
        
        <h3>Assignment 1: Roller Coaster Ride</h3>
        <p>Create a program that asks the user their age. If their age is greater than or equal to 8, the program should say "You are old enough to ride!". Otherwise, it should say "Sorry, you are not old enough."</p>
    </div>
);

const Sprint2FinalProjectLesson: FC = () => (
    <div>
        <h3>Learning Objectives</h3>
        <ul>
            <li>Apply all concepts from Sprint 2 to build a complete game.</li>
            <li>Practice debugging and refining a project.</li>
        </ul>
        <h3>Final Project: Number Guessing Game</h3>
        <p>In this project, the computer will think of a random number between 1 and 100. The player has to guess the number. The program will tell the player if their guess is too high or too low. We'll use variables, loops, and conditionals to make it work!</p>
        
        <h3>Challenge: Fish Shark Game</h3>
        <p>Create a game where you control a small fish. You have to eat smaller fish to grow bigger, but avoid the big sharks! You will need to use variables for score and size, and conditionals to check if you're eating or being eaten.</p>
    </div>
);


// --- SPRINT 3 LESSONS ---

const IntroToComputationalThinkingLesson: FC = () => (
  <div>
    <h3>Class Objectives</h3>
    <p>Introduce computational thinking and its techniques.</p>
    <h3>What is Computational Thinking?</h3>
    <p>It's an organized way of approaching and solving a complex problem. The main techniques are:</p>
    <ul>
      <li><strong>Decomposition:</strong> Breaking a large problem into smaller, more manageable parts.</li>
      <li><strong>Pattern Recognition:</strong> Finding similarities or patterns in problems or data.</li>
      <li><strong>Abstraction:</strong> Focusing on the important details while ignoring irrelevant information.</li>
      <li><strong>Algorithms:</strong> Developing a step-by-step solution to the problem.</li>
    </ul>
    <h3>Lab: Computational Thinking PSA</h3>
    <p>Think about how you use these techniques in everyday life. Try to create a short animation in Scratch explaining one of them!</p>
  </div>
);

const DecompositionLesson: FC = () => (
    <div>
        <h3>Class Objectives</h3>
        <p>Explore the computational thinking concept of decomposition.</p>
        <h3>Decomposition in Action</h3>
        <p>Decomposition is about breaking down a big problem into smaller, bite-sized pieces. Think about brushing your teeth:</p>
        <ol>
            <li>Pick up your toothbrush.</li>
            <li>Put toothpaste on it.</li>
            <li>Brush each tooth.</li>
            <li>Rinse your mouth.</li>
            <li>Clean your toothbrush.</li>
        </ol>
        <h3>Lab: Decompose a Problem</h3>
        <p>Your game console isn't showing up on the TV. What are the smaller problems you need to solve to fix this? (e.g., Is the console on? Is the TV on the right input? Are the cables connected?)</p>
    </div>
);

const PatternRecognitionLesson: FC = () => (
    <div>
        <h3>Class Objectives</h3>
        <p>Use Pattern Recognition to create a game.</p>
        <h3>Finding Patterns</h3>
        <p>We see patterns everywhere! In the clothes we wear, in nature, and in our daily routines. Recognizing patterns helps us make predictions and solve problems faster.</p>
        <h3>Lab: Catching Fruit Math Game</h3>
        <p>Let's design a game where you catch fruit to solve math problems. The pattern is: fruit falls, you catch it, you solve a problem, you get a point. We can reuse this pattern for different fruits and different math problems!</p>
    </div>
);

const AbstractionLesson: FC = () => (
    <div>
        <h3>Class Objectives</h3>
        <p>Apply Abstraction to solve problems.</p>
        <h3>What is Abstraction?</h3>
        <p>Abstraction is focusing on what's important and ignoring the details that don't matter. When you use a microwave, you just need to know which buttons to press, not how the microwaves actually cook the food. That's abstraction!</p>
        <h3>Lab: Catching Fruit Math Game Features</h3>
        <p>To make our game work, what's the most important information we need? We need to know the player's score and the time left. Details like the color of the sky in the background aren't as important for the game to function. We'll abstract away the unnecessary details.</p>
    </div>
);

const AlgorithmsLesson: FC = () => (
    <div>
        <h3>Class Objectives</h3>
        <p>Practice making and understanding algorithms.</p>
        <h3>Creating Algorithms</h3>
        <p>An algorithm is just a set of step-by-step instructions. You use algorithms every day!</p>
        <div className="units-container">
            <div className="unit-card"><h4>Making Cereal</h4><p>1. Get bowl. 2. Pour cereal. 3. Pour milk. 4. Get spoon. 5. Eat.</p></div>
            <div className="unit-card"><h4>Planting a Seed</h4><p>1. Fill pot with soil. 2. Poke hole in soil. 3. Put seed in hole. 4. Cover with soil. 5. Water.</p></div>
        </div>
        <h3>Lab: Catching Fruit Math Game</h3>
        <p>Let's improve our game by adding an algorithm for subtraction, and for tracking lives and score.</p>
    </div>
);

const BringingItAllTogetherLesson: FC = () => (
    <div>
        <h3>Class Objectives</h3>
        <p>Practice using computational thinking to solve complex problems.</p>
        <h3>Reviewing the 4 Steps</h3>
        <p>Today we'll use all four steps of computational thinking together: Decomposition, Pattern Recognition, Abstraction, and Algorithms to improve our game.</p>
        <h3>Lab: Catching Fruit Math Game</h3>
        <p>A new problem: when a math question is asked, fruits keep falling, which is distracting. How can we solve this? We need to create an algorithm that pauses the other fruits until the user answers the question.</p>
    </div>
);

const ComputationalThinkingFinalProjectLesson: FC = () => (
    <div>
        <h3>Class Objectives</h3>
        <p>Utilize Computational Thinking to add features to the "Catching Fruit" game.</p>
        <h3>Final Project Features</h3>
        <p>Let's add some cool new features to our game:</p>
        <ul>
            <li>A menu screen to start the game.</li>
            <li>A "Game Over" screen with a "Play Again" button.</li>
            <li>A special timer power-up that adds more time.</li>
            <li>Diamonds that give bonus points!</li>
        </ul>
        <p>We will need to use all our computational thinking skills to design and code these new parts.</p>
    </div>
);

// --- SPRINT 4 LESSONS ---

const FlappyBirdLesson: FC = () => (
    <div>
        <h3>Class Objectives</h3>
        <p>Utilize programming fundamentals to create the first part of the famous Flappy Bird game.</p>
        <h3>Key Concepts</h3>
        <ul>
            <li>Scratch Sprites and Backdrops</li>
            <li>Movement and Looks Blocks</li>
            <li>Loops and Conditional Statements</li>
        </ul>
        <h3>Lab: Flappy Bird Part 1</h3>
        <p>Let's get started! We will create the bird sprite, design the background with pipes, and program the basic player movement to make the bird go up and down.</p>
    </div>
);

const FlappyBirdOopLesson: FC = () => (
    <div>
        <h3>Class Objectives</h3>
        <p>Understand Object-Oriented Programming (OOP) concepts through the Scratch Environment.</p>
        <h3>Broadcast Blocks for OOP</h3>
        <p>A broadcast is a message that is sent through the Scratch program, activating scripts with the matching hat blocks. This helps us organize our code into different objects that can "talk" to each other, which is a key idea in OOP!</p>
        <h3>Lab: Flappy Bird Part 2</h3>
        <p>Let's continue our Flappy Bird game. We'll add a "Game Over" screen, make the game stop if the bird touches the pipes, get the pipes to move across the screen, create a score variable, and even make a scrolling background!</p>
    </div>
);

const PacmanProceduresLesson: FC = () => (
    <div>
        <h3>Class Objectives</h3>
        <p>Apply the use of procedures to organize code and make a Pacman game.</p>
        <h3>Procedures with "My Blocks"</h3>
        <p>Procedures (also called functions) are like mini-programs within our program. In Scratch, we can create our own procedures using "My Blocks". This helps us avoid repeating code and keeps our project organized.</p>
        <h3>Lab: Pac-Man Part 1</h3>
        <p>Let's start building Pac-Man! We will create the maze backdrop, draw the Pac-Man, dots, and ghost sprites. We'll also make variables for score and lives, and start programming the player movement.</p>
    </div>
);

const PacmanLooksLesson: FC = () => (
    <div>
        <h3>Class Objectives</h3>
        <p>Learn about Looks blocks and version control while continuing the Pacman game.</p>
        <h3>Version Control</h3>
        <p>Ever made a mistake and wished you could go back? Version control is like saving checkpoints in a game. In Scratch, we can use "Save as" to create different versions of our project, so we can always go back if something breaks.</p>
        <h3>Lab: Pac-Man Part 2</h3>
        <p>Let's add more features! We will make Pac-Man stop at walls, program the ghosts to move on a path, and make the dots disappear and increase the score when Pac-Man eats them.</p>
    </div>
);

const PacmanSpeechLesson: FC = () => (
    <div>
        <h3>Class Objectives</h3>
        <p>Utilize the new “Text to Speech” block to create a simple program in Scratch and complete the Pacman game.</p>
        <h3>Scratch Extensions</h3>
        <p>Scratch Extensions add more blocks and capabilities! Today we'll add the "Text to Speech" extension to make our sprites talk.</p>
        <h3>Lab: Pac-Man Finale!</h3>
        <p>First, we'll practice with the new Text to Speech blocks. Then, we'll finish our Pac-Man game! We'll program what happens when Pac-Man touches a ghost (lose a life), what happens when lives reach 0 (game over), and how to reset the game to play again.</p>
    </div>
);

const TranslateBlockLesson: FC = () => (
    <div>
        <h3>Class Objectives</h3>
        <p>Students will utilize the translate block to create a program that can translate multiple languages.</p>
        <h3>The Translate Extension</h3>
        <p>Let's add another extension! The Translate block uses Google Translate to let your sprites translate words and phrases between many different languages.</p>
        <h3>Lab: Multi-Language Translator</h3>
        <p>Create a program that asks the user for a word and then translates it into at least 3 different languages. The user should be able to choose which language they want.</p>
    </div>
);

const PlatformerFinalProjectLesson: FC = () => (
    <div>
        <h3>Class Objectives</h3>
        <p>Students will develop a Platformer game using Scratch.</p>
        <h3>Final Project: Platformer Game!</h3>
        <p>In a platformer game, you control a character who jumps between platforms to avoid obstacles. For our final project, you'll create your own platformer game!</p>
        <h3>Requirements:</h3>
        <ul>
            <li>Create your own sprites and backgrounds.</li>
            <li>Add at least 4 more levels.</li>
            <li>Add points for the player to collect.</li>
            <li>Create variables for lives and score.</li>
            <li>Add enemies that can hurt the player.</li>
        </ul>
    </div>
);

// --- APP DATA ---
const sprintData: Sprint[] = [
  {
    id: 's1',
    title: 'Sprint 1: Computer Foundations',
    description: 'Learn the basics of computers, typing, digital safety, and problem-solving.',
    lessons: [
      { id: 'l1-1', title: 'Computer Foundations', component: ComputerFoundationsLesson },
      { id: 'l1-2', title: 'Keyboarding', component: KeyboardingLesson },
      { id: 'l1-3', title: 'History of Computers', component: HistoryOfComputersLesson },
      { id: 'l1-4', title: 'Digital Citizenship', component: DigitalCitizenshipLesson },
    ],
  },
  {
    id: 's2',
    title: 'Sprint 2: Intro to Programming with Scratch',
    description: 'Get started with programming concepts using Scratch to create animations and simple games.',
    lessons: [
      { id: 'l2-1', title: 'Introduction to Programming', component: IntroToProgrammingLesson },
      { id: 'l2-2', title: 'Animations with Scratch', component: AnimationsWithScratchLesson },
      { id: 'l2-3', title: 'X Y Coordinate System', component: XYCoordinateSystemLesson },
      { id: 'l2-4', title: 'Clone and Random Blocks', component: CloneAndRandomBlocksLesson },
      { id: 'l2-5', title: 'Variables and Conditional Statements', component: VariablesAndConditionalsLesson },
      { id: 'l2-6', title: 'Comparison Symbols', component: ComparisonSymbolsLesson },
      { id: 'l2-7', title: 'Final Project', component: Sprint2FinalProjectLesson },
    ],
  },
  {
    id: 's3',
    title: 'Sprint 3: Computational Thinking',
    description: 'Learn to solve problems like a computer scientist by breaking them down into smaller pieces.',
    lessons: [
      { id: 'l3-1', title: 'Intro to Computational Thinking', component: IntroToComputationalThinkingLesson },
      { id: 'l3-2', title: 'Decomposition', component: DecompositionLesson },
      { id: 'l3-3', title: 'Pattern Recognition', component: PatternRecognitionLesson },
      { id: 'l3-4', title: 'Abstraction', component: AbstractionLesson },
      { id: 'l3-5', title: 'Algorithms', component: AlgorithmsLesson },
      { id: 'l3-6', title: 'Bringing It All Together', component: BringingItAllTogetherLesson },
      { id: 'l3-7', title: 'Final Project', component: ComputationalThinkingFinalProjectLesson },
    ],
  },
    {
    id: 's4',
    title: 'Sprint 4: Advanced Scratch',
    description: 'Dive deeper into Scratch programming by building famous games like Flappy Bird and Pac-Man.',
    lessons: [
      { id: 'l4-1', title: 'Flappy Bird Part 1', component: FlappyBirdLesson },
      { id: 'l4-2', title: 'Flappy Bird Part 2', component: FlappyBirdOopLesson },
      { id: 'l4-3', title: 'Pac-Man Part 1', component: PacmanProceduresLesson },
      { id: 'l4-4', title: 'Pac-Man Part 2', component: PacmanLooksLesson },
      { id: 'l4-5', title: 'Pac-Man Finale', component: PacmanSpeechLesson },
      { id: 'l4-6', title: 'Translate Block', component: TranslateBlockLesson },
      { id: 'l4-7', title: 'Final Project: Platformer', component: PlatformerFinalProjectLesson },
    ],
  },
    {
    id: 's5',
    title: 'Sprint 5: Digital Logic',
    description: 'Understand the building blocks of digital devices and how computers make decisions.',
    lessons: [ { id: 'l5-1', title: 'Intro to Digital Logic', component: PlaceholderLesson } ],
  },
  {
    id: 's6',
    title: 'Sprint 6: Exploring Professions I',
    description: 'Discover the amazing jobs you can have in the world of tech and computers.',
    lessons: [ { id: 'l6-1', title: 'Tech Careers', component: PlaceholderLesson } ],
  },
    {
    id: 's7',
    title: 'Sprint 7: Exploring Professions II',
    description: 'Continue exploring exciting careers and see how technology is used in different fields.',
    lessons: [ { id: 'l7-1', title: 'More Tech Careers', component: PlaceholderLesson } ],
  },
    {
    id: 's8',
    title: 'Sprint 8: Hands on Scratch',
    description: 'Practice your Scratch skills with fun, hands-on challenges and mini-projects.',
    lessons: [ { id: 'l8-1', title: 'Scratch Challenges', component: PlaceholderLesson } ],
  },
    {
    id: 's9',
    title: 'Sprint 9: Interactive Simulation',
    description: 'Learn how to create interactive simulations and models using Scratch.',
    lessons: [ { id: 'l9-1', title: 'Build a Simulation', component: PlaceholderLesson } ],
  },
];


// --- MAIN APP COMPONENT ---
const App: FC = () => {
    const [selectedSprint, setSelectedSprint] = useState<Sprint | null>(null);
    const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);

    const handleSelectSprint = (sprint: Sprint) => {
        setSelectedSprint(sprint);
        setSelectedLesson(null);
    };

    const handleSelectLesson = (lesson: Lesson) => {
        setSelectedLesson(lesson);
    };
    
    const handleGoBack = () => {
        if (selectedLesson) {
            setSelectedLesson(null);
        } else if (selectedSprint) {
            setSelectedSprint(null);
        }
    };
    
    const handleNavigateLesson = (direction: 'prev' | 'next') => {
        if (!selectedSprint || !selectedLesson) return;

        const currentIndex = selectedSprint.lessons.findIndex(l => l.id === selectedLesson.id);
        const newIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;

        if (newIndex >= 0 && newIndex < selectedSprint.lessons.length) {
            setSelectedLesson(selectedSprint.lessons[newIndex]);
        }
    };

    const SprintsView = () => (
        <div className="grid-container">
            {sprintData.map(sprint => (
                <div key={sprint.id} className="card" onClick={() => handleSelectSprint(sprint)} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && handleSelectSprint(sprint)}>
                    <h2>{sprint.title}</h2>
                    <p>{sprint.description}</p>
                </div>
            ))}
        </div>
    );

    const LessonsView = ({ sprint }: { sprint: Sprint }) => (
        <div className="grid-container">
            {sprint.lessons.map(lesson => (
                 <div key={lesson.id} className="card" onClick={() => handleSelectLesson(lesson)} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && handleSelectLesson(lesson)}>
                    <h2>{lesson.title}</h2>
                </div>
            ))}
        </div>
    );
    
    const LessonView = ({ sprint, lesson }: {sprint: Sprint, lesson: Lesson}) => {
         const lessonIndex = sprint.lessons.findIndex(l => l.id === lesson.id);
         const isFirstLesson = lessonIndex === 0;
         const isLastLesson = lessonIndex === sprint.lessons.length - 1;

        return (
            <div className="lesson-screen">
                <h2>{lesson.title}</h2>
                <lesson.component />
                <div className="lesson-navigation">
                    <button onClick={() => handleNavigateLesson('prev')} disabled={isFirstLesson} className="prev-lesson-btn" aria-label="Previous lesson">
                        &larr; Previous Lesson
                    </button>
                    <button onClick={() => handleNavigateLesson('next')} disabled={isLastLesson} className="next-lesson-btn" aria-label="Next lesson">
                        Next Lesson &rarr;
                    </button>
                </div>
            </div>
        );
    }
    
    const getBreadcrumb = () => {
        if (selectedLesson) return `${selectedSprint?.title} > ${selectedLesson.title}`;
        if (selectedSprint) return selectedSprint.title;
        return 'All Sprints';
    };

    return (
        <>
            <header className="app-header">
                <div>
                    <h1>iCode Foundation Belt</h1>
                    <div className="breadcrumb" aria-label="Breadcrumb">{getBreadcrumb()}</div>
                </div>
                {(selectedSprint || selectedLesson) && (
                    <div className="nav-controls">
                        <button onClick={handleGoBack} className="back-button">Back</button>
                    </div>
                )}
            </header>
            <main>
                {!selectedSprint && <SprintsView />}
                {selectedSprint && !selectedLesson && <LessonsView sprint={selectedSprint} />}
                {selectedSprint && selectedLesson && <LessonView sprint={selectedSprint} lesson={selectedLesson} />}
            </main>
        </>
    );
};

// --- RENDER APP ---
const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}