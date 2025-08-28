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

const KeyboardLessonComponent: FC = () => {
  const [selectedColor, setSelectedColor] = useState<string>('pink');
  const [keyColors, setKeyColors] = useState<{ [key: string]: string }>({});

  const colors = {
    pink: '#FFC0CB',
    blue: '#ADD8E6',
    red: '#FFB6C1',
    green: '#90EE90',
    yellow: '#FFFFE0',
    orange: '#FFA07A',
    purple: '#D8BFD8',
  };

  const handleKeyClick = (keyId: string) => {
    setKeyColors(prev => ({ ...prev, [keyId]: colors[selectedColor] }));
  };

  const keyMap = [
    { id: 'backspace', x: 575, y: 5, width: 60, height: 30, label: '←' },
    { id: '1', x: 5, y: 40, width: 30, height: 30, label: '1' },
    { id: '2', x: 40, y: 40, width: 30, height: 30, label: '2' },
    { id: '3', x: 75, y: 40, width: 30, height: 30, label: '3' },
    { id: '4', x: 110, y: 40, width: 30, height: 30, label: '4' },
    { id: '5', x: 145, y: 40, width: 30, height: 30, label: '5' },
    { id: '6', x: 180, y: 40, width: 30, height: 30, label: '6' },
    { id: '7', x: 215, y: 40, width: 30, height: 30, label: '7' },
    { id: '8', x: 250, y: 40, width: 30, height: 30, label: '8' },
    { id: '9', x: 285, y: 40, width: 30, height: 30, label: '9' },
    { id: '0', x: 320, y: 40, width: 30, height: 30, label: '0' },
    { id: 'q', x: 25, y: 75, width: 30, height: 30, label: 'Q' },
    { id: 'w', x: 60, y: 75, width: 30, height: 30, label: 'W' },
    { id: 'e', x: 95, y: 75, width: 30, height: 30, label: 'E' },
    { id: 'r', x: 130, y: 75, width: 30, height: 30, label: 'R' },
    { id: 't', x: 165, y: 75, width: 30, height: 30, label: 'T' },
    { id: 'y', x: 200, y: 75, width: 30, height: 30, label: 'Y' },
    { id: 'u', x: 235, y: 75, width: 30, height: 30, label: 'U' },
    { id: 'i', x: 270, y: 75, width: 30, height: 30, label: 'I' },
    { id: 'o', x: 305, y: 75, width: 30, height: 30, label: 'O' },
    { id: 'p', x: 340, y: 75, width: 30, height: 30, label: 'P' },
    { id: 'a', x: 45, y: 110, width: 30, height: 30, label: 'A' },
    { id: 's', x: 80, y: 110, width: 30, height: 30, label: 'S' },
    { id: 'd', x: 115, y: 110, width: 30, height: 30, label: 'D' },
    { id: 'f', x: 150, y: 110, width: 30, height: 30, label: 'F' },
    { id: 'g', x: 185, y: 110, width: 30, height: 30, label: 'G' },
    { id: 'h', x: 220, y: 110, width: 30, height: 30, label: 'H' },
    { id: 'j', x: 255, y: 110, width: 30, height: 30, label: 'J' },
    { id: 'k', x: 290, y: 110, width: 30, height: 30, label: 'K' },
    { id: 'l', x: 325, y: 110, width: 30, height: 30, label: 'L' },
    { id: ';', x: 360, y: 110, width: 30, height: 30, label: ';' },
    { id: 'enter', x: 395, y: 110, width: 60, height: 30, label: 'Enter' },
    { id: 'shift-l', x: 5, y: 145, width: 70, height: 30, label: 'Shift' },
    { id: 'z', x: 80, y: 145, width: 30, height: 30, label: 'Z' },
    { id: 'x', x: 115, y: 145, width: 30, height: 30, label: 'X' },
    { id: 'c', x: 150, y: 145, width: 30, height: 30, label: 'C' },
    { id: 'v', x: 185, y: 145, width: 30, height: 30, label: 'V' },
    { id: 'b', x: 220, y: 145, width: 30, height: 30, label: 'B' },
    { id: 'n', x: 255, y: 145, width: 30, height: 30, label: 'N' },
    { id: 'm', x: 290, y: 145, width: 30, height: 30, label: 'M' },
    { id: 'shift-r', x: 360, y: 145, width: 95, height: 30, label: 'Shift' },
    { id: 'space', x: 150, y: 180, width: 240, height: 30, label: '' },
  ];

  return (
    <div className="keyboard-activity">
      <h3>Activity: Keyboard Coloring Map</h3>
      <p>Click a color, then click the keys to color them according to the instructions below.</p>
      <ul>
          <li><strong>Home row keys</strong> (A-S-D-F and J-K-L-;) in <strong>pink</strong>.</li>
          <li><strong>Rest of letter keys</strong> in <strong>blue</strong>.</li>
          <li><strong>Number row</strong> (0-9) in <strong>red</strong>.</li>
          <li><strong>Space bar</strong> in <strong>green</strong>.</li>
          <li><strong>Enter/return key</strong> in <strong>yellow</strong>.</li>
          <li><strong>Backspace key</strong> in <strong>orange</strong>.</li>
          <li><strong>Shift keys</strong> in <strong>purple</strong>.</li>
      </ul>
      <div className="color-palette">
        {Object.entries(colors).map(([name, code]) => (
          <div
            key={name}
            className={`color-box ${selectedColor === name ? 'selected' : ''}`}
            style={{ backgroundColor: code }}
            onClick={() => setSelectedColor(name)}
            aria-label={`Select color ${name}`}
            role="button"
          ></div>
        ))}
      </div>
      <svg className="keyboard-svg" viewBox="0 0 640 220">
        {keyMap.map(key => (
          <g key={key.id} onClick={() => handleKeyClick(key.id)}>
            <rect
              className="key"
              id={key.id}
              x={key.x}
              y={key.y}
              width={key.width}
              height={key.height}
              rx="5"
              style={{ fill: keyColors[key.id] || '#f5f5f5' }}
            />
            <text
              className="key-char"
              x={key.x + key.width / 2}
              y={key.y + key.height / 2}
            >
              {key.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
};


const ComputerFoundationsLesson: FC = () => (
  <div>
    <h3>Learning Objectives</h3>
    <ul>
      <li>Define a computer and identify different types of computers.</li>
      <li>Define the parts of a desktop and laptop computer.</li>
      <li>Use the mouse to navigate through the computer.</li>
    </ul>
    <h3>Activity: Is this a computer?</h3>
    <p>Look at the items around the room. Can you point to something that is a computer? Why is it a computer?</p>
    <a href="https://www.abcya.com/games/computer_parts" target="_blank" rel="noopener noreferrer" className="external-link-btn">
      Play Computer Parts Game
    </a>
  </div>
);


const KeyboardingLesson: FC = () => (
    <div>
        <h3>Learning Objectives</h3>
        <ul>
            <li>Identify and describe different types of keyboards.</li>
            <li>Demonstrate correct typing posture.</li>
            <li>Use home row finger placement to type without looking.</li>
            <li>Meet or exceed a personal typing speed and accuracy goal.</li>
        </ul>
        <KeyboardLessonComponent />
        <h3>Practice Your Typing</h3>
        <p>Now that you know the home row, let's practice our typing skills!</p>
        <a href="https://www.livechat.com/typing-speed-test/#/" target="_blank" rel="noopener noreferrer" className="external-link-btn">
          Take a Typing Speed Test
        </a>
        <a href="https://www.typingclub.com/sportal/program-16.game" target="_blank" rel="noopener noreferrer" className="external-link-btn">
          Play a Typing Game
        </a>
    </div>
);

const HistoryOfComputersLesson: FC = () => (
  <div>
    <h3>Learning Objectives</h3>
    <ul>
      <li>Summarize key events in the history of computers.</li>
      <li>Discuss the different forms and types of computers that emerged throughout history.</li>
    </ul>

    <h3>Welcome Activity: A Trip Through Time!</h3>
    <p>Can you guess the order of these inventions from oldest to newest?</p>
    <ul>
        <li>Airplane (1903)</li>
        <li>Steamboat (1807)</li>
        <li>Internet (1974)</li>
        <li>MP3 Player (1998)</li>
        <li>Typewriter (1873)</li>
        <li>Vacuum Cleaner (1908)</li>
    </ul>

    <h3>A Journey Through Computer History</h3>
    <div className="history-timeline">
      <h4>3rd - 6th Century B.C: The First Counters</h4>
      <p>Before computers, people used stones, pebbles, and even bones to count! The most famous of these is the Abacus, which helped with calculations. <strong>Codie's Fun Fact:</strong> The very first "computers" were actually people whose job it was to do repetitive calculations all day!</p>
      
      <h4>16th-17th Century: Gears and Gadgets</h4>
      <p>Inventors started building machines with gears to help with math. The Pascaline, built by Blaise Pascal for his father (a tax collector!), was one of the first mechanical calculators.</p>

      <h4>18th-19th Century: Automation and Big Ideas</h4>
      <p>The Jacquard loom used punched cards to automatically create complex textile patterns. Inspired by this, Charles Babbage designed the Analytical Machine, the concept for the first general mechanical computer. <strong>Codie's Fun Fact:</strong> Ada Lovelace, a friend of Babbage, wrote the first-ever computer program for the Analytical Engine!</p>

      <h4>1940s-1970s: The First Digital Computers</h4>
      <p>The first electronic computers were HUGE! The Harvard Mark I was over 50 feet long and weighed five tons. These machines were mostly used for the war effort and scientific calculations.</p>

      <h4>1970s Onwards: Computers for Everyone!</h4>
      <p>Thanks to the invention of the microprocessor, computers got smaller and cheaper. Steve Jobs and Steve Wozniak built the Apple I, and soon after, Apple launched the Macintosh, one of the first personal computers with a user-friendly graphical interface (like we use today!). In 1992, IBM invented the first smartphone, the Simon Personal Communicator.</p>

      <h4>The Future is Now</h4>
      <p>From Wi-Fi connecting us to the world to smartwatches on our wrists, the history of computers is still being written every day!</p>
    </div>

    <h3>Lab Activities</h3>
    <a href="https://www.mathsbot.com/manipulatives/abacus" target="_blank" rel="noopener noreferrer" className="external-link-btn">
      Try a Digital Abacus
    </a>
    <p><strong>Draw the Future:</strong> What do you think computers will look like in 20 years? Draw your ideas on paper or in a drawing app!</p>
  </div>
);

const DigitalCitizenshipLesson: FC = () => (
    <div>
        <h3>Course Overview</h3>
        <p className="lesson-intro">
            This course is for you to learn how to create a safe and positive experience online. By learning about the topics below and playing Interland, you’ll know how to be a great Digital Citizen!
        </p>

        <div className="units-container">
            <div className="unit-card">
                <h4>Introduction: Why Teach Digital Citizenship and Safety?</h4>
                <p>Learn the basics of what it means to be safe and kind online.</p>
            </div>
            <div className="unit-card">
                <h4>Unit 1: Internet Safety and Privacy</h4>
                <p>Learn how to protect your personal information and keep your secrets safe!</p>
            </div>
            <div className="unit-card">
                <h4>Unit 2: Online Safety on the Go</h4>
                <p>Staying safe online isn't just for computers. Learn how to be safe on phones and tablets too!</p>
            </div>
            <div className="unit-card">
                <h4>Unit 3: Savvy Searching</h4>
                <p>How do you find what you're looking for online? Learn to tell the difference between what's real and what's not.</p>
            </div>
            <div className="unit-card">
                <h4>Unit 4: Stay Safe from Phishing and Scams</h4>
                <p>Watch out for online tricks! Learn how to spot fake messages and scams to keep your information safe.</p>
            </div>
            <div className="unit-card">
                <h4>Unit 5: Manage Your Online Reputation</h4>
                <p>What you post online can last forever. Learn how to create a positive digital footprint.</p>
            </div>
        </div>

        <h3>Activity: Be Internet Awesome with Interland!</h3>
        <p>Welcome to Interland! It's an online adventure that teaches you how to be a safe and confident explorer of the online world. Play the game below to practice everything you just learned!</p>
        <div className="iframe-container">
            <iframe
                src="https://beinternetawesome.withgoogle.com/en_us/interland"
                title="Google Interland Game"
                allowFullScreen
            ></iframe>
        </div>
    </div>
);


// --- COURSE DATA ---
const courseData: Sprint[] = [
  {
    id: 'sprint1',
    title: 'Sprint 1: Computer Foundations',
    description: 'Learn the fundamentals of computers, including hardware, software, and basic interaction skills like keyboarding.',
    lessons: [
      { id: 'l1-1', title: 'Lesson 1: Computer Fundamentals', component: ComputerFoundationsLesson },
      { id: 'l1-2', title: 'Lesson 2: Keyboarding', component: KeyboardingLesson },
      { id: 'l1-3', title: 'Lesson 3: History of Computers', component: HistoryOfComputersLesson },
      { id: 'l1-4', title: 'Lesson 4: Digital Citizenship', component: DigitalCitizenshipLesson },
    ],
  },
   {
    id: 'sprint2',
    title: 'Sprint 2: Intro to Programming',
    description: 'Discover the basics of programming using fun, block-based tools like Scratch.',
    lessons: [],
  },
  {
    id: 'sprint3',
    title: 'Sprint 3: Computational Thinking',
    description: 'Learn how to solve problems like a computer scientist by breaking them down into smaller parts.',
    lessons: [],
  },
];


// --- SCREEN COMPONENTS ---
const HomeScreen = ({ onSelectSprint }: { onSelectSprint: (sprintId: string) => void }) => (
  <div>
    <div className="grid-container">
      {courseData.map(sprint => (
        <div key={sprint.id} className="card" onClick={() => onSelectSprint(sprint.id)}>
          <h2>{sprint.title}</h2>
          <p>{sprint.description}</p>
        </div>
      ))}
    </div>
  </div>
);

const SprintScreen = ({ sprint, onSelectLesson }: { sprint: Sprint; onSelectLesson: (lessonId: string) => void }) => (
  <div>
    <div className="grid-container">
       {sprint.lessons.length > 0 ? sprint.lessons.map(lesson => (
        <div key={lesson.id} className="card" onClick={() => onSelectLesson(lesson.id)}>
          <h2>{lesson.title}</h2>
        </div>
      )) : <p>Lessons for this sprint are coming soon!</p>}
    </div>
  </div>
);

const LessonScreen = ({ lesson }: { lesson: Lesson }) => (
  <div className="lesson-screen">
    <h2>{lesson.title}</h2>
    <lesson.component />
  </div>
);

// --- MAIN APP ---
const App = () => {
  const [currentSprintId, setCurrentSprintId] = useState<string | null>(null);
  const [currentLessonId, setCurrentLessonId] = useState<string | null>(null);

  const handleSelectSprint = (sprintId: string) => {
    setCurrentSprintId(sprintId);
    setCurrentLessonId(null);
  };
  
  const handleSelectLesson = (lessonId: string) => {
    setCurrentLessonId(lessonId);
  };

  const goBackToSprints = () => {
    setCurrentLessonId(null);
  };
  
  const goBackHome = () => {
    setCurrentSprintId(null);
    setCurrentLessonId(null);
  };

  const selectedSprint = courseData.find(s => s.id === currentSprintId);
  const selectedLesson = selectedSprint?.lessons.find(l => l.id === currentLessonId);

  const renderBreadcrumb = () => {
      if (selectedLesson) {
          return `${selectedSprint.title} > ${selectedLesson.title}`;
      }
      if (selectedSprint) {
          return selectedSprint.title;
      }
      return 'All Sprints';
  }

  return (
    <div>
      <header className="app-header">
        <h1>iCode Classroom Hub</h1>
        <div className="nav-controls">
           <span className="breadcrumb">{renderBreadcrumb()}</span>
           { (selectedSprint || selectedLesson) &&
             <button className="back-button" onClick={selectedLesson ? goBackToSprints : goBackHome}>Back</button>
           }
        </div>
      </header>
      <main>
        {selectedLesson ? (
          <LessonScreen lesson={selectedLesson} />
        ) : selectedSprint ? (
          <SprintScreen sprint={selectedSprint} onSelectLesson={handleSelectLesson} />
        ) : (
          <HomeScreen onSelectSprint={handleSelectSprint} />
        )}
      </main>
    </div>
  );
};


const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);