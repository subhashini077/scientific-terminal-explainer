// Random Science Fact Generator Data
const scienceFacts = [
    "Honey never spoils. Archaeologists have found 3,000-year-old honey in Egyptian tombs that was still edible.",
    "A human brain generates enough electricity to power a light bulb.",
    "The Sun is so large that 1.3 million Earths could fit inside it.",
    "Octopuses have three hearts and blue blood.",
    "Light travels so fast that it can circle the Earth 7 times in just one second.",
    "A single bolt of lightning is about 5 times hotter than the surface of the Sun.",
    "Diamonds rain down on Jupiter and Saturn.",
    "The Great Wall of China is not visible from space without aid.",
    "Sound travels slower in cold air than in warm air.",
    "A year on Venus is shorter than a day on Venus.",
    "Quantum particles can tunnel through walls, a phenomenon called quantum tunneling.",
    "Tardigrades (water bears) can survive in the vacuum of space.",
    "The human body contains about 37.2 trillion cells.",
    "Plants can recognize their own roots and avoid them.",
    "Bananas are berries, but strawberries are not.",
    "A group of flamingos is called a 'flamboyance.'",
    "Sharks have been around longer than dinosaurs.",
    "The fingerprints of koalas are nearly identical to human fingerprints.",
    "A platypus has 10 sex chromosomes instead of 2 like most animals.",
    "Turritopsis dohrnii, a jellyfish, is biologically immortal and can reverse its aging.",
    "Gold can be found in the ocean, but in extremely small quantities.",
    "The density of a neutron star is so high that one teaspoon would weigh as much as all elephants on Earth.",
    "Your nose can remember 50,000 different scents.",
    "The Arctic tern has the longest migration of any bird, traveling pole to pole annually.",
    "Bumblebees can fly higher than Mount Everest.",
    "Mercury is the only planet that orbits the Sun faster than it rotates.",
    "A single cloud can weigh as much as 100 elephants.",
    "The human eye can distinguish about 10 million different colors.",
    "Eagles can see fish from a mile away.",
    "A cockroach can live for a week without its head.",
    "The Greenland shark has a lifespan of over 400 years.",
    "Photons have no mass but can still carry momentum.",
    "The smell of petrichor (rain on dry earth) comes from a compound called geosmin.",
    "Ants can lift objects 10 to 50 times their own weight.",
    "A giraffe's heartbeat can be heard from over 20 feet away.",
    "Gases on Venus make it the hottest planet, despite Mercury being closer to the Sun.",
    "The Great Barrier Reef can be seen from space.",
    "Cats have a third eyelid called the nictitating membrane.",
    "The human brain uses about 20% of the body's energy.",
    "Frogs use their eyes to help them swallow food.",
    "Penguins have a layer of blubber that keeps them warm in freezing temperatures.",
    "The venom of a poison dart frog is enough to kill 10 adult humans.",
    "Dolphins can see in multiple directions at once.",
    "A woodpecker's tongue can wrap around its brain to protect it from impact.",
    "The Northern lights are caused by solar wind hitting Earth's magnetosphere.",
    "Neutron stars are so dense that their gravity would literally spaghettify you.",
    "Humans share 50% of their DNA with bananas.",
    "The boiling point of water changes at different altitudes.",
    "A superconductor can make a magnet levitate indefinitely.",
    "The Moon is slowly moving away from Earth at about 1.5 inches per year."
];

// Function to get a random science fact
function getRandomFact() {
    const randomIndex = Math.floor(Math.random() * scienceFacts.length);
    return scienceFacts[randomIndex];
}

// Display fact when page loads
document.addEventListener('DOMContentLoaded', function() {
    displayNewFact();
});

// Function to display a new fact
function displayNewFact() {
    const fact = getRandomFact();
    const factElement = document.getElementById('scienceFact');
    if (factElement) {
        factElement.textContent = fact;
        factElement.style.animation = 'fadeIn 0.6s ease-in';
    }
}

// Allow user to get a new fact with a button click
function getNewFact() {
    const factElement = document.getElementById('scienceFact');
    if (factElement) {
        factElement.style.animation = 'none';
        // Trigger reflow to restart animation
        void factElement.offsetWidth;
        factElement.style.animation = 'fadeIn 0.6s ease-in';
    }
    displayNewFact();
}
