// scientific terms data
const terms = [
    {
        name: "Photosynthesis",
        category: "Biology",
        simple: "The process by which plants make food using sunlight.",
        detailed: "Photosynthesis is a biochemical process in which green plants, algae, and some bacteria convert light energy into chemical energy stored in glucose. Chlorophyll in the chloroplasts absorbs light, and carbon dioxide and water are transformed into oxygen and glucose.",
        example: "A leaf converting sunlight into energy to grow."
    },
    {
        name: "Gravity",
        category: "Physics",
        simple: "A force that pulls objects toward one another.",
        detailed: "Gravity is a natural phenomenon by which all things with mass or energy are brought toward one another. On Earth, it gives weight to physical objects and causes apples to fall from trees.",
        example: "Dropping a ball; it always falls to the ground."
    },
    {
        name: "Atom",
        category: "Chemistry",
        simple: "The smallest unit of an element that retains its properties.",
        detailed: "An atom consists of a nucleus containing protons and neutrons, surrounded by electrons. It is the basic building block of matter.",
        example: "A single oxygen atom within a molecule of water."
    },
    {
        name: "Algorithm",
        category: "Computer Science",
        simple: "A step-by-step procedure for solving a problem.",
        detailed: "An algorithm is a finite set of well-defined instructions typically used by a computer to perform a task or solve a class of problems.",
        example: "A recipe for baking a cake."
    },
    {
        name: "Derivative",
        category: "Mathematics",
        simple: "A measure of how a function changes as its input changes.",
        detailed: "The derivative of a function at a point is the slope of the tangent line to the function's graph at that point. It represents instantaneous rate of change.",
        example: "Velocity is the derivative of position with respect to time."
    },
    {
        name: "Mitosis",
        category: "Biology",
        simple: "A type of cell division that results in two daughter cells.",
        detailed: "Mitosis is the process where a single cell divides to produce two genetically identical daughter cells, ensuring growth and tissue repair in multicellular organisms.",
        example: "Skin cells dividing to heal a cut."
    },
    {
        name: "Newton's Second Law",
        category: "Physics",
        simple: "Force equals mass times acceleration.",
        detailed: "This law states that the acceleration of an object is directly proportional to the net force acting upon it and inversely proportional to its mass (F = ma).",
        example: "Pushing a car: more force means greater acceleration."
    },
    {
        name: "Molecule",
        category: "Chemistry",
        simple: "A group of atoms bonded together.",
        detailed: "A molecule is the smallest unit of a chemical compound that can take part in a chemical reaction, consisting of two or more atoms held together by chemical bonds.",
        example: "A water molecule contains two hydrogen atoms and one oxygen atom."
    },
    {
        name: "Binary Tree",
        category: "Computer Science",
        simple: "A tree data structure with at most two children per node.",
        detailed: "In computer science, a binary tree is a hierarchical structure in which each node has up to two child nodes, commonly referred to as the left and right child.",
        example: "A decision tree used in algorithms."
    },
    {
        name: "Integral",
        category: "Mathematics",
        simple: "The area under a curve.",
        detailed: "The integral of a function represents the accumulation of quantities, often visualized as the area under a curve on a graph. It's the inverse operation of differentiation.",
        example: "Calculating the total distance traveled given a velocity function."
    },
    {
        name: "Entropy",
        category: "Physics",
        simple: "A measure of disorder in a system.",
        detailed: "Entropy quantifies the amount of energy in a physical system that is not available to do work and is associated with the number of microscopic configurations consistent with the macroscopic state.",
        example: "Ice melting into water increases entropy."
    },
    {
        name: "DNA",
        category: "Biology",
        simple: "The molecule that carries genetic information.",
        detailed: "Deoxyribonucleic acid (DNA) is a double-helical molecule composed of nucleotides, encoding the instructions used in the development and functioning of living organisms.",
        example: "Human DNA determines eye color."
    },
    {
        name: "Catalyst",
        category: "Chemistry",
        simple: "A substance that speeds up a chemical reaction without being consumed.",
        detailed: "A catalyst lowers the activation energy of a reaction, increasing the reaction rate while remaining unchanged at the end of the process.",
        example: "Enzymes acting as biological catalysts in the body."
    },
    {
        name: "Queue",
        category: "Computer Science",
        simple: "A FIFO data structure where elements are processed in order of arrival.",
        detailed: "A queue is an abstract data type in which elements are added at the rear and removed from the front, following first-in-first-out semantics.",
        example: "People lining up at a ticket counter."
    },
    {
        name: "Evolution",
        category: "Biology",
        simple: "The gradual change in species over time.",
        detailed: "Evolution is the process by which populations of organisms change over generations through mechanisms like natural selection and mutation.",
        example: "Finches on the Galápagos Islands developing different beaks."
    },
    {
        name: "Cell",
        category: "Biology",
        simple: "The basic unit of life.",
        detailed: "A cell is the smallest structural and functional unit of an organism, often called the building block of life.",
        example: "A red blood cell carrying oxygen."
    },
    {
        name: "Ecosystem",
        category: "Biology",
        simple: "A community of living organisms and their environment.",
        detailed: "An ecosystem includes all the living things in a particular area, interacting with each other and with their nonliving environments.",
        example: "A pond with fish, plants, and water."
    },
    {
        name: "Homeostasis",
        category: "Biology",
        simple: "The maintenance of a stable internal environment.",
        detailed: "Homeostasis is the ability of a living organism to keep internal conditions stable despite changes in the external environment.",
        example: "Sweating to cool down body temperature."
    },
    {
        name: "Plate Tectonics",
        category: "Biology",
        simple: "The movement of Earth's lithospheric plates.",
        detailed: "Plate tectonics is the theory explaining the movement of large plates forming Earth's crust, causing earthquakes, volcanoes, and continents to shift.",
        example: "The Himalayas formed by colliding tectonic plates."
    },
    {
        name: "Electron",
        category: "Physics",
        simple: "A negatively charged subatomic particle.",
        detailed: "An electron is a fundamental particle with a negative charge that orbits the nucleus of an atom.",
        example: "Electric current is the flow of electrons through a wire."
    },
    {
        name: "Kinetic Energy",
        category: "Physics",
        simple: "Energy of motion.",
        detailed: "Kinetic energy is the energy an object possesses due to its motion, calculated as ½mv² where m is mass and v is velocity.",
        example: "A moving car has kinetic energy."
    },
    {
        name: "Refraction",
        category: "Physics",
        simple: "Bending of light as it passes through different media.",
        detailed: "Refraction occurs when a wave changes speed as it passes from one medium to another, causing it to change direction.",
        example: "A straw appearing bent in a glass of water."
    },
    {
        name: "Thermodynamics",
        category: "Physics",
        simple: "The study of heat and energy transfer.",
        detailed: "Thermodynamics deals with the relationships between heat, work, temperature, and energy in systems.",
        example: "A steam engine converting heat to work."
    },
    {
        name: "Quantum Mechanics",
        category: "Physics",
        simple: "The physics of very small particles.",
        detailed: "Quantum mechanics is the branch of physics that describes the behavior of particles at atomic and subatomic scales.",
        example: "Electrons occupying discrete energy levels in an atom."
    },
    {
        name: "Acceleration",
        category: "Physics",
        simple: "Change in velocity over time.",
        detailed: "Acceleration is the rate at which an object's velocity changes, measured in meters per second squared (m/s²).",
        example: "A car speeding up from a stoplight."
    },
    {
        name: "Voltage",
        category: "Physics",
        simple: "Electric potential difference between two points.",
        detailed: "Voltage is the measure of electric potential energy per unit charge between two points in a circuit.",
        example: "A 9‑volt battery powering a toy."
    },
    {
        name: "Oxidation",
        category: "Chemistry",
        simple: "Loss of electrons by a substance.",
        detailed: "Oxidation is a chemical reaction in which an atom or molecule loses one or more electrons.",
        example: "Rust forming on iron."
    },
    {
        name: "pH",
        category: "Chemistry",
        simple: "Measure of acidity or alkalinity.",
        detailed: "pH is a scale from 0 to 14 that indicates the concentration of hydrogen ions in a solution.",
        example: "Lemon juice has a low pH (acidic)."
    },
    {
        name: "Polymer",
        category: "Chemistry",
        simple: "Large molecule made of repeating units.",
        detailed: "A polymer is a substance composed of macromolecules formed by repeated subunits (monomers) chemically bonded together.",
        example: "Plastic is often a polymer of ethylene."
    },
    {
        name: "Chemical Bond",
        category: "Chemistry",
        simple: "Force holding atoms together.",
        detailed: "A chemical bond is an attraction between atoms that allows the formation of chemical substances.",
        example: "Hydrogen and oxygen atoms bonding to form water."
    },
    {
        name: "Stoichiometry",
        category: "Chemistry",
        simple: "Calculation of reactants and products in reactions.",
        detailed: "Stoichiometry involves using balanced chemical equations to calculate the amounts of substances consumed and produced.",
        example: "Determining how much oxygen is needed to burn a given amount of methane."
    },
    {
        name: "Hypothesis",
        category: "Biology",
        simple: "A testable explanation for an observation.",
        detailed: "A hypothesis is a proposed explanation made on the basis of limited evidence as a starting point for further investigation.",
        example: "Predicting that plants grow faster under blue light."
    },
    {
        name: "Matrix",
        category: "Mathematics",
        simple: "A rectangular array of numbers.",
        detailed: "A matrix is a grid of numbers arranged in rows and columns, used in linear algebra for transformations and systems of equations.",
        example: "Using a matrix to rotate a point in 2D space."
    },
    {
        name: "Theorem",
        category: "Mathematics",
        simple: "A statement proven using logic and axioms.",
        detailed: "A theorem is a mathematical statement that has been logically demonstrated based on previously established theorems and axioms.",
        example: "Pythagorean theorem relating sides of a right triangle."
    },
    {
        name: "Probability",
        category: "Mathematics",
        simple: "The chance that an event will occur.",
        detailed: "Probability quantifies the likelihood of an event, expressed as a number between 0 and 1.",
        example: "Rolling a fair die has a 1/6 probability of landing on any given number."
    },
    {
        name: "Vector",
        category: "Mathematics",
        simple: "A quantity with magnitude and direction.",
        detailed: "A vector is represented by an arrow in space and is used to describe physical quantities like force and velocity.",
        example: "Wind blowing northeast at 10 m/s."
    },
    {
        name: "Differential Equations",
        category: "Mathematics",
        simple: "Equations involving derivatives.",
        detailed: "Differential equations relate a function to its derivatives and are used to model dynamic systems.",
        example: "Modeling population growth over time."
    },
    {
        name: "Prime Number",
        category: "Mathematics",
        simple: "A number divisible only by 1 and itself.",
        detailed: "A prime is an integer greater than 1 that has no positive divisors other than 1 and itself.",
        example: "7 is prime because it cannot be divided evenly by any other number except 1 and 7."
    },
    {
        name: "Data Structure",
        category: "Computer Science",
        simple: "A way to organize data for efficient access.",
        detailed: "Data structures like arrays, lists, and trees store and manage data to enable efficient operations.",
        example: "Using a hash table for fast lookups."
    },
    {
        name: "Machine Learning",
        category: "Computer Science",
        simple: "Computers learning from data.",
        detailed: "Machine learning is a field of AI where algorithms improve performance at tasks by learning patterns from data.",
        example: "Spam filters learning to detect unwanted emails."
    },
    {
        name: "Binary Search",
        category: "Computer Science",
        simple: "A fast method to find items in a sorted list.",
        detailed: "Binary search repeatedly divides a sorted array in half to locate a target value with logarithmic time complexity.",
        example: "Looking up a word in a dictionary by skipping to the middle."
    },
    {
        name: "Encryption",
        category: "Computer Science",
        simple: "Scrambling data so only authorized users can read it.",
        detailed: "Encryption uses algorithms to convert plaintext into ciphertext, protecting information from unauthorized access.",
        example: "Secure websites using HTTPS to encrypt data."
    },
    {
        name: "CPU",
        category: "Computer Science",
        simple: "The central processing unit of a computer.",
        detailed: "The CPU performs arithmetic and logic operations that run programs.",
        example: "Intel Core i7 processor in a laptop."
    },
    {
        name: "Operating System",
        category: "Computer Science",
        simple: "Software that manages computer hardware and software resources.",
        detailed: "An operating system provides an interface between users and computer hardware and manages processes, memory, and devices.",
        example: "Windows, Linux, or macOS."
    },
    {
        name: "Database",
        category: "Computer Science",
        simple: "A system for storing and retrieving data.",
        detailed: "Databases organize structured information so it can be efficiently queried and updated.",
        example: "A library catalog storing book records."
    },
    {
        name: "API",
        category: "Computer Science",
        simple: "A set of rules for building software applications.",
        detailed: "An application programming interface allows different software programs to communicate with each other.",
        example: "A weather app using an API to fetch forecasts."
    },
    {
        name: "Big Data",
        category: "Computer Science",
        simple: "Extremely large datasets.",
        detailed: "Big data refers to data sets so large and complex that traditional tools cannot process them efficiently.",
        example: "Social media platforms analyzing billions of user actions."
    },
    {
        name: "Robotics",
        category: "Computer Science",
        simple: "The science of designing robots.",
        detailed: "Robotics involves designing, constructing, and operating robots for tasks that may be hazardous, repetitive, or precise.",
        example: "Factory arms assembling cars."
    },
    {
        name: "Neural Network",
        category: "Computer Science",
        simple: "A model inspired by the human brain.",
        detailed: "Neural networks are interconnected layers of nodes that learn to recognize patterns in data.",
        example: "Image recognition systems detecting faces."
    },
    {
        name: "Software Development Life Cycle",
        category: "Computer Science",
        simple: "Phases of creating software.",
        detailed: "SDLC includes planning, designing, building, testing, and maintenance of software applications.",
        example: "Developing a mobile app from requirements to release."
    },
    {
        name: "Blockchain",
        category: "Computer Science",
        simple: "A distributed ledger of transactions.",
        detailed: "Blockchain is a decentralized database that records transactions across many computers so that records cannot be altered retroactively.",
        example: "Cryptocurrencies like Bitcoin using blockchain."
    },
    {
        name: "Artificial Intelligence",
        category: "Computer Science",
        simple: "Machines performing tasks that require intelligence.",
        detailed: "AI encompasses techniques that enable computers to mimic human cognition, such as learning and problem-solving.",
        example: "Voice assistants understanding spoken commands."
    },
    {
        name: "Bug",
        category: "Computer Science",
        simple: "An error in a computer program.",
        detailed: "A bug is a mistake or flaw in software code that causes unexpected behavior or incorrect results.",
        example: "A calculator app giving wrong sums."
    },
    {
        name: "Debugging",
        category: "Computer Science",
        simple: "Process of finding and fixing bugs.",
        detailed: "Debugging involves identifying, isolating, and correcting errors in code.",
        example: "Using a debugger to step through program execution."
    },
    {
        name: "Cloud Computing",
        category: "Computer Science",
        simple: "Delivery of computing services over the internet.",
        detailed: "Cloud computing provides storage, servers, databases, and software via remote data centers.",
        example: "Using Google Drive to store files online."
    },
    {
        name: "Virtualization",
        category: "Computer Science",
        simple: "Creating virtual versions of resources.",
        detailed: "Virtualization allows multiple operating systems or applications to run on the same hardware by abstracting physical resources.",
        example: "Running Windows inside a virtual machine on a Mac."
    },
    {
        name: "Internet of Things",
        category: "Computer Science",
        simple: "Network of interconnected devices.",
        detailed: "IoT refers to everyday objects embedded with sensors and connectivity to exchange data over the internet.",
        example: "A smart thermostat adjusting temperature remotely."
    },
    {
        name: "Cybersecurity",
        category: "Computer Science",
        simple: "Protecting systems from digital attacks.",
        detailed: "Cybersecurity involves practices and technologies designed to safeguard networks, devices, and data from unauthorized access.",
        example: "Using antivirus software to block malware."
    },
    {
        name: "Augmented Reality",
        category: "Computer Science",
        simple: "Overlay of digital content onto the real world.",
        detailed: "AR enhances a user's perception of reality by superimposing computer-generated images or information on a view of the physical environment.",
        example: "Using a phone app to see virtual furniture in your room."
    }
];