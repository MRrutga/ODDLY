
const facts = [
    {
        category: "ANIMALS",
        title: "Wombats poop cubes!",
        image: "images/wombat.jpg",
        text: "Wombats make cube-shaped poop. The shape helps stop it from rolling away when they mark their territory.",
        source: "https://en.wikipedia.org/wiki/Wombat"
    },
    {
        category: "ANIMALS",
        title: "Octopuses have three hearts!",
        text: "Two hearts send blood to the gills, while the third sends blood to the rest of the body.",
        source: "https://ocean.si.edu/ocean-life/invertebrates/octopuses"
    },
    {
        category: "ANIMALS",
        title: "Butterflies taste with their feet!",
        text: "Butterflies have taste sensors on their feet. They can use them to check whether a plant is good for their caterpillars.",
        source: "https://www.si.edu/spotlight/buginfo/butterfly"
    },
    {
        category: "ANIMALS",
        title: "Some turtles can breathe through their bottoms!",
        text: "Some freshwater turtles can take in oxygen through special tissues near their tails while underwater.",
        source: "https://en.wikipedia.org/wiki/Cloacal_respiration"
    },
    {
        category: "ANIMALS",
        title: "Crows can remember human faces!",
        text: "Crows can learn to recognize people who have threatened them and may remember those faces for years.",
        source: "https://www.scientificamerican.com/article/crows-recognize-human-faces/"
    },
    {
        category: "ANIMALS",
        title: "A shrimp can punch incredibly fast!",
        text: "The mantis shrimp strikes so quickly that its punch can create tiny bubbles in the water.",
        source: "https://ocean.si.edu/ocean-life/invertebrates/mantis-shrimp"
    },
    {
        category: "ANIMALS",
        title: "Some frogs freeze in winter!",
        text: "Wood frogs can survive being partly frozen during winter. Their bodies use special chemicals to protect their cells.",
        source: "https://www.nationalgeographic.com/animals"
    },
    {
        category: "ANIMALS",
        title: "Elephants can recognize themselves in mirrors!",
        text: "Some elephants have passed mirror tests, showing signs that they can recognize their own reflection.",
        source: "https://www.nationalgeographic.com/animals"
    },
    {
        category: "ANIMALS",
        title: "A group of flamingos is called a flamboyance!",
        text: "Flamingos often gather in large groups. In English, one name for such a group is a flamboyance.",
        source: "https://www.britannica.com/animal/flamingo"
    },
    {
        category: "ANIMALS",
        title: "Giraffes have the same number of neck bones as humans!",
        text: "Both giraffes and humans usually have seven neck bones. A giraffe's bones are simply much longer.",
        source: "https://www.britannica.com/animal/giraffe"
    },
    {
        category: "ANIMALS",
        title: "A snail can have thousands of tiny teeth!",
        text: "Many snails have a rough tongue-like part covered in tiny teeth that helps scrape up food.",
        source: "https://www.britannica.com/animal/snail"
    },
    {
        category: "ANIMALS",
        title: "Penguins propose with pebbles!",
        text: "Some penguins offer pebbles to a potential mate. Pebbles are also useful for building their nests.",
        source: "https://www.nationalgeographic.com/animals"
    },
    {
        category: "ANIMALS",
        title: "Koala fingerprints look like human fingerprints!",
        text: "Koalas have fingerprints with patterns that can look surprisingly similar to human ones.",
        source: "https://www.britannica.com/animal/koala"
    },
    {
        category: "ANIMALS",
        title: "A blue whale's heart is enormous!",
        text: "The blue whale is the largest animal known to have lived on Earth, and its heart can weigh hundreds of kilograms.",
        source: "https://www.fisheries.noaa.gov/feature-story/blue-whale"
    },
    {
        category: "ANIMALS",
        title: "Some lizards can squirt blood from their eyes!",
        text: "Certain horned lizards can shoot a small stream of blood from near their eyes to help defend themselves.",
        source: "https://www.nationalgeographic.com/animals"
    },
    {
        category: "ANIMALS",
        title: "Dolphins use special whistles like names!",
        text: "Bottlenose dolphins develop unique whistles that other dolphins can use to identify them.",
        source: "https://ocean.si.edu/ocean-life/marine-mammals/dolphins"
    },
    {
        category: "ANIMALS",
        title: "A group of owls is sometimes called a parliament!",
        text: "Parliament is a traditional English name for a group of owls. It is a fun name, not a scientific rule.",
        source: "https://www.britannica.com/animal/owl"
    },
    {
        category: "ANIMALS",
        title: "Some spiders travel through the air!",
        text: "Tiny spiders can release fine silk threads that catch the wind and carry them through the air.",
        source: "https://www.nationalgeographic.com/animals"
    },
    {
        category: "ANIMALS",
        title: "Sea otters sometimes hold hands while resting!",
        text: "Sea otters may hold paws or wrap themselves in kelp so they are less likely to drift apart while resting.",
        source: "https://www.montereybayaquarium.org/animals/animals-a-to-z/sea-otter"
    },
    {
        category: "ANIMALS",
        title: "Hummingbirds can fly backwards!",
        text: "Hummingbirds can fly backwards, which helps them move away from flowers after drinking nectar.",
        source: "https://www.britannica.com/animal/hummingbird"
    },
    {
        category: "SPACE",
        title: "A day on Venus is longer than its year!",
        text: "Venus takes about 243 Earth days to spin once, but only about 225 Earth days to orbit the Sun.",
        source: "https://science.nasa.gov/venus/"
    },
    {
        category: "SPACE",
        title: "Footprints on the Moon can last for millions of years!",
        text: "The Moon has no wind or rain to wash footprints away. They can remain until something disturbs them.",
        source: "https://science.nasa.gov/moon/"
    },
    {
        category: "SPACE",
        title: "Sunsets on Mars can look blue!",
        text: "Dust in the Martian atmosphere scatters light in a way that can make sunsets look bluish near the Sun.",
        source: "https://science.nasa.gov/mars/"
    },
    {
        category: "SPACE",
        title: "Saturn could float in a giant bathtub!",
        text: "Saturn's average density is lower than water's. A bathtub big enough to hold the planet is, of course, impossible to build.",
        source: "https://science.nasa.gov/saturn/"
    },
    {
        category: "SPACE",
        title: "There are volcanoes on Mars!",
        text: "Mars is home to Olympus Mons, a volcano about 22 kilometres tall and one of the largest known in the Solar System.",
        source: "https://science.nasa.gov/mars/"
    },
    {
        category: "SPACE",
        title: "The Moon is slowly moving away from Earth!",
        text: "The Moon moves away from Earth by about 3.8 centimetres each year.",
        source: "https://science.nasa.gov/moon/"
    },
    {
        category: "SPACE",
        title: "Space is not completely silent!",
        text: "Sound cannot travel through empty space like it travels through air. But scientists can turn space measurements into sounds we can hear.",
        source: "https://science.nasa.gov/universe/"
    },
    {
        category: "SPACE",
        title: "One million Earths could fit inside the Sun!",
        text: "The Sun is so huge that around 1.3 million Earths could fit inside it by volume.",
        source: "https://science.nasa.gov/sun/"
    },
    {
        category: "SPACE",
        title: "Neutron stars are unbelievably dense!",
        text: "A tiny amount of neutron-star material would weigh an enormous amount on Earth because these stars pack so much matter into so little space.",
        source: "https://science.nasa.gov/universe/"
    },
    {
        category: "SPACE",
        title: "Jupiter has giant storms!",
        text: "Jupiter's Great Red Spot is a huge storm that has been observed for centuries.",
        source: "https://science.nasa.gov/jupiter/"
    },
    {
        category: "SPACE",
        title: "The Sun makes up almost all the Solar System's mass!",
        text: "The Sun contains about 99.8 percent of the total mass of the Solar System.",
        source: "https://science.nasa.gov/sun/"
    },
    {
        category: "SPACE",
        title: "Uranus spins almost on its side!",
        text: "Uranus is tilted so far over that it appears to roll around the Sun as it travels along its orbit.",
        source: "https://science.nasa.gov/uranus/"
    },
    {
        category: "SPACE",
        title: "A year on Neptune lasts about 165 Earth years!",
        text: "Neptune takes about 165 Earth years to complete one trip around the Sun.",
        source: "https://science.nasa.gov/neptune/"
    },
    {
        category: "SPACE",
        title: "You would weigh less on the Moon!",
        text: "The Moon's gravity is much weaker than Earth's. You would weigh about one-sixth as much there.",
        source: "https://science.nasa.gov/moon/"
    },
    {
        category: "SPACE",
        title: "The International Space Station circles Earth very quickly!",
        text: "The station travels at roughly 28,000 kilometres per hour and circles Earth about every 90 minutes.",
        source: "https://www.nasa.gov/international-space-station/"
    },
    {
        category: "HISTORY",
        title: "Cleopatra lived closer to the Moon landing than to the pyramids!",
        text: "Cleopatra lived about 2,500 years after the Great Pyramid was built and about 2,000 years before the Moon landing.",
        source: "https://www.britannica.com/biography/Cleopatra-queen-of-Egypt"
    },
    {
        category: "HISTORY",
        title: "Oxford University is older than the Aztec Empire!",
        text: "Teaching at Oxford existed by the late 1000s. The Aztec Empire began centuries later, in the 1400s.",
        source: "https://www.ox.ac.uk/about/organisation/history"
    },
    {
        category: "HISTORY",
        title: "The first modern Olympic Games were held in 1896!",
        text: "Athletes from different countries gathered in Athens, Greece, for the first modern Olympic Games.",
        source: "https://olympics.com/en/olympic-games/athens-1896"
    },
    {
        category: "HISTORY",
        title: "Ancient Romans had fast-food shops!",
        text: "In Roman towns, people could buy ready-made food from shops called thermopolia.",
        source: "https://www.britannica.com/technology/thermopolium"
    },
    {
        category: "HISTORY",
        title: "The Great Wall of China is not one simple wall!",
        text: "It is a collection of walls and fortifications built and rebuilt by different Chinese rulers over many centuries.",
        source: "https://whc.unesco.org/en/list/438/"
    },
    {
        category: "HISTORY",
        title: "The first known paper money appeared in China!",
        text: "China used forms of paper money many centuries ago, long before paper banknotes became common in Europe.",
        source: "https://www.britannica.com/topic/paper-money"
    },
    {
        category: "HISTORY",
        title: "Vikings reached North America before Columbus!",
        text: "Norse explorers settled briefly at L'Anse aux Meadows in Newfoundland around the year 1000.",
        source: "https://whc.unesco.org/en/list/4/"
    },
    {
        category: "HISTORY",
        title: "The first computer bugs were not always digital!",
        text: "In 1947, engineers found a moth stuck in a computer relay and recorded it in their logbook.",
        source: "https://americanhistory.si.edu/collections/search/object/nmah_334663"
    },
    {
        category: "HISTORY",
        title: "Ancient Egyptians loved board games!",
        text: "A game called Senet was played in ancient Egypt thousands of years ago.",
        source: "https://www.britannica.com/topic/senet"
    },
    {
        category: "HISTORY",
        title: "The first successful powered airplane flight lasted only seconds!",
        text: "In 1903, the Wright brothers' first powered flight lasted 12 seconds and covered about 36 metres.",
        source: "https://www.nps.gov/wrbr/learn/historyculture/the-first-flight.htm"
    },
    {
        category: "NATURE",
        title: "Lightning is hotter than the Sun's surface!",
        text: "A lightning channel can reach about 30,000 degrees Celsius, several times hotter than the Sun's visible surface.",
        source: "https://www.nssl.noaa.gov/education/svrwx101/lightning/"
    },
    {
        category: "NATURE",
        title: "Some plants eat insects!",
        text: "Venus flytraps catch insects with leaves that snap shut when the right tiny hairs are touched.",
        source: "https://www.britannica.com/plant/Venus-flytrap"
    },
    {
        category: "NATURE",
        title: "A rainbow is actually a full circle!",
        text: "From an airplane, you may sometimes see a rainbow as a complete circle. From the ground, the horizon usually hides the bottom half.",
        source: "https://www.weather.gov/fgz/Thunderstorm"
    },
    {
        category: "NATURE",
        title: "Some trees can live for thousands of years!",
        text: "Certain bristlecone pine trees in the western United States are more than 4,000 years old.",
        source: "https://www.nps.gov/grba/learn/nature/bristlecone-pine.htm"
    },
    {
        category: "NATURE",
        title: "The Amazon rainforest makes its own rain!",
        text: "Water released by plants into the air helps form clouds and can contribute to rainfall over the rainforest.",
        source: "https://www.worldwildlife.org/places/amazon"
    },
    {
        category: "NATURE",
        title: "Some lakes can explode!",
        text: "In rare cases, deep volcanic lakes can release huge amounts of trapped carbon dioxide gas very suddenly.",
        source: "https://www.usgs.gov/"
    },
    {
        category: "NATURE",
        title: "A blue whale is louder than a jet engine in some measurements!",
        text: "Blue whales produce very powerful low-frequency calls that can travel long distances underwater.",
        source: "https://ocean.si.edu/ocean-life/marine-mammals/blue-whale"
    },
    {
        category: "NATURE",
        title: "There are beaches with black sand!",
        text: "Some volcanic beaches are black because they contain dark pieces of volcanic rock and minerals.",
        source: "https://www.nationalgeographic.com/travel"
    },
    {
        category: "NATURE",
        title: "Some deserts can get snow!",
        text: "Deserts are defined by how little rain they receive, not by how hot they are. Some deserts get very cold and snowy.",
        source: "https://www.britannica.com/science/desert"
    },
    {
        category: "NATURE",
        title: "The Earth is not a perfect sphere!",
        text: "Earth bulges slightly around the equator because it spins.",
        source: "https://science.nasa.gov/earth/"
    },
    {
        category: "OCEAN",
        title: "The ocean has underwater waterfalls!",
        text: "Differences in water temperature and saltiness can make dense water flow down underwater slopes like a waterfall.",
        source: "https://oceanservice.noaa.gov/facts/underwaterwaterfall.html"
    },
    {
        category: "OCEAN",
        title: "Most of the ocean has never been seen by humans!",
        text: "Huge parts of the deep ocean remain unexplored, and scientists are still discovering new species there.",
        source: "https://oceanexplorer.noaa.gov/"
    },
    {
        category: "OCEAN",
        title: "Some sea creatures glow in the dark!",
        text: "Many ocean animals make their own light, a trick called bioluminescence.",
        source: "https://ocean.si.edu/ocean-life/fish/bioluminescence"
    },
    {
        category: "OCEAN",
        title: "A blue whale's tongue can weigh as much as an elephant!",
        text: "Blue whales are so enormous that even parts of their bodies can weigh as much as large land animals.",
        source: "https://www.fisheries.noaa.gov/feature-story/blue-whale"
    },
    {
        category: "OCEAN",
        title: "Some fish can change sex!",
        text: "Certain reef fish can change sex during their lives, often as part of their social group.",
        source: "https://ocean.si.edu/ocean-life/fish"
    },
    {
        category: "OCEAN",
        title: "Coral reefs are made by tiny animals!",
        text: "Corals are animals that build hard skeletons. Over time, their skeletons can form huge reefs.",
        source: "https://oceanservice.noaa.gov/education/tutorial_corals/"
    },
    {
        category: "OCEAN",
        title: "The deepest ocean point is deeper than Everest is tall!",
        text: "The Challenger Deep is nearly 11 kilometres below sea level, deeper than Mount Everest is high above sea level.",
        source: "https://oceanexplorer.noaa.gov/"
    },
    {
        category: "OCEAN",
        title: "Sharks are older than trees!",
        text: "Shark ancestors existed hundreds of millions of years ago, before the first trees appeared.",
        source: "https://www.fisheries.noaa.gov/"
    },
    {
        category: "OCEAN",
        title: "Clownfish can live among stinging anemones!",
        text: "A clownfish's protective mucus helps it live among sea anemone tentacles that would sting many other fish.",
        source: "https://ocean.si.edu/ocean-life/fish/clownfish"
    },
    {
        category: "OCEAN",
        title: "The ocean helps make the air we breathe!",
        text: "Tiny ocean organisms called phytoplankton produce a large share of Earth's oxygen through photosynthesis.",
        source: "https://oceanservice.noaa.gov/facts/ocean-oxygen.html"
    },
    {
        category: "HUMAN BODY",
        title: "Your stomach gets a new lining regularly!",
        text: "Cells in the stomach lining are replaced regularly, helping protect the stomach from its own strong digestive juices.",
        source: "https://www.britannica.com/science/stomach"
    },
    {
        category: "HUMAN BODY",
        title: "Your nose can remember thousands of smells!",
        text: "Humans can distinguish a huge range of smells, and scents can bring back strong memories.",
        source: "https://www.nih.gov/"
    },
    {
        category: "HUMAN BODY",
        title: "You are usually a little taller in the morning!",
        text: "The soft discs between your spine bones become slightly compressed during the day, so you can be a little taller after sleeping.",
        source: "https://medlineplus.gov/"
    },
    {
        category: "HUMAN BODY",
        title: "Your brain uses a lot of energy!",
        text: "Although it is only a small part of your body weight, your brain uses about one-fifth of your body's energy at rest.",
        source: "https://www.brainfacts.org/"
    },
    {
        category: "HUMAN BODY",
        title: "Your bones are constantly changing!",
        text: "Old bone tissue is broken down and replaced with new tissue throughout your life.",
        source: "https://www.niams.nih.gov/health-topics/osteoporosis"
    },
    {
        category: "HUMAN BODY",
        title: "Your fingerprints form before you are born!",
        text: "The patterns on your fingertips develop while you are still growing inside the womb.",
        source: "https://www.britannica.com/science/fingerprint"
    },
    {
        category: "HUMAN BODY",
        title: "You share about half your DNA with a banana!",
        text: "Humans and bananas share some genes because living things use many of the same basic biological instructions. The comparison does not mean we are half banana.",
        source: "https://www.genome.gov/"
    },
    {
        category: "HUMAN BODY",
        title: "Your heart beats about 100,000 times a day!",
        text: "The exact number depends on your heart rate, but a typical resting heart can beat around 100,000 times in one day.",
        source: "https://www.heart.org/"
    },
    {
        category: "HUMAN BODY",
        title: "Your skin is your largest organ!",
        text: "Your skin covers and protects your body and helps control temperature.",
        source: "https://www.niams.nih.gov/health-topics"
    },
    {
        category: "HUMAN BODY",
        title: "You make tiny amounts of light!",
        text: "The chemical reactions in your body produce extremely faint light, far too weak for human eyes to see.",
        source: "https://www.ncbi.nlm.nih.gov/"
    },
    {
        category: "TECHNOLOGY",
        title: "The first computer mouse was made of wood!",
        text: "Douglas Engelbart's early computer mouse had a wooden shell and wheels to track movement.",
        source: "https://www.computerhistory.org/"
    },
    {
        category: "TECHNOLOGY",
        title: "The first website is still online!",
        text: "The first website explained the World Wide Web project and how people could use it.",
        source: "http://info.cern.ch/"
    },
    {
        category: "TECHNOLOGY",
        title: "A QR code can still work if part of it is damaged!",
        text: "QR codes include error correction, which can allow a phone to read them even when some parts are missing.",
        source: "https://www.qrcode.com/en/about/"
    },
    {
        category: "TECHNOLOGY",
        title: "The word robot comes from a play!",
        text: "The word robot became famous through a 1920 play by Czech writer Karel Čapek.",
        source: "https://www.britannica.com/technology/robot-technology"
    },
    {
        category: "TECHNOLOGY",
        title: "GPS needs Einstein's ideas to work accurately!",
        text: "GPS satellites' clocks are affected by relativity. Systems must account for these effects to give accurate locations.",
        source: "https://www.nist.gov/"
    },
    {
        category: "TECHNOLOGY",
        title: "The first digital camera was built in 1975!",
        text: "Engineer Steven Sasson built an early digital camera at Kodak. It stored images on a cassette tape.",
        source: "https://www.museumofplay.org/"
    },
    {
        category: "TECHNOLOGY",
        title: "The first mobile phone call was made in 1973!",
        text: "Martin Cooper made an early handheld mobile phone call in New York using a Motorola prototype.",
        source: "https://www.britannica.com/technology/cell-phone"
    },
    {
        category: "TECHNOLOGY",
        title: "The internet and the World Wide Web are not the same thing!",
        text: "The internet connects computers and networks. The Web is one service that uses the internet to share websites.",
        source: "https://home.cern/science/computing/birth-web"
    },
    {
        category: "TECHNOLOGY",
        title: "Some bridges move in the wind!",
        text: "Bridges are designed to flex a little as wind, traffic and temperature change. Movement helps them handle these forces.",
        source: "https://www.fhwa.dot.gov/"
    },
    {
        category: "TECHNOLOGY",
        title: "A tiny chip can contain billions of transistors!",
        text: "Modern computer chips can pack billions of tiny electronic switches onto a small piece of silicon.",
        source: "https://computerhistory.org/"
    },
    {
        category: "TECHNOLOGY",
        title: "The first email was sent before the Web existed!",
        text: "Email systems were being used in the early 1970s, decades before websites became part of everyday life.",
        source: "https://www.internetsociety.org/internet/history-internet/brief-history-internet/"
    },
    {
        category: "CARS",
        title: "Some cars have more than one turbocharger!",
        text: "Some engines use two or more turbochargers to push more air into the engine and help produce power.",
        source: "https://www.britannica.com/technology/turbocharger"
    },
    {
        category: "CARS",
        title: "The first cars were not powered by petrol!",
        text: "Early automobiles included steam-powered and electric vehicles, as well as petrol-powered ones.",
        source: "https://www.britannica.com/technology/automotive-industry"
    },
    {
        category: "CARS",
        title: "A Formula 1 car can drive upside down in theory!",
        text: "At high speed, some racing cars can create enough aerodynamic downforce to press them toward a surface. Driving upside down would still require suitable conditions and is not a normal stunt.",
        source: "https://www.formula1.com/"
    },
    {
        category: "CARS",
        title: "Car tyres have tiny grooves for a reason!",
        text: "The tread patterns help move water away from the contact area and improve grip on wet roads.",
        source: "https://www.nhtsa.gov/"
    },
    {
        category: "CARS",
        title: "Electric cars can use their motors to slow down!",
        text: "Regenerative braking lets an electric car use its motor as a generator and send some energy back to the battery.",
        source: "https://www.energy.gov/"
    },
    {
        category: "CARS",
        title: "The first traffic light came before cars were common!",
        text: "An early gas-lit traffic signal was installed in London in 1868, before modern cars became widespread.",
        source: "https://www.britannica.com/technology/traffic-control"
    },
    {
        category: "CARS",
        title: "A car's airbag opens incredibly fast!",
        text: "Airbags inflate in a fraction of a second during a serious crash to help protect the people inside.",
        source: "https://www.nhtsa.gov/"
    },
    {
        category: "CARS",
        title: "Some racing cars use carbon fibre!",
        text: "Carbon-fibre materials can be very strong while remaining light, which is useful in high-performance cars.",
        source: "https://www.formula1.com/"
    },
    {
        category: "CARS",
        title: "The first speeding ticket was issued in the 1900s!",
        text: "As cars became more common, police began enforcing speed limits. Early speeding cases are part of motoring history.",
        source: "https://www.britannica.com/technology/automotive-industry"
    },
    {
        category: "CARS",
        title: "Some car mirrors make objects look farther away!",
        text: "Many passenger-side mirrors are curved to show a wider area, which makes vehicles appear smaller and farther away.",
        source: "https://www.nhtsa.gov/"
    },
    {
        category: "WEIRD FACTS",
        title: "A day on Earth is slowly getting longer!",
        text: "The Moon's pull on Earth's oceans slows Earth's rotation very gradually, so days lengthen over very long periods.",
        source: "https://science.nasa.gov/moon/"
    },
    {
        category: "WEIRD FACTS",
        title: "Honey can last for a very long time!",
        text: "Honey has little available water and is acidic, which makes it difficult for many microbes to grow when it is stored properly.",
        source: "https://www.nationalgeographic.com/"
    },
    {
        category: "WEIRD FACTS",
        title: "A cloud can weigh hundreds of tonnes!",
        text: "A typical cloud contains huge numbers of tiny water droplets. Together, that water can weigh hundreds of tonnes while air currents keep it aloft.",
        source: "https://www.usgs.gov/"
    },
    {
        category: "WEIRD FACTS",
        title: "Hot water can sometimes freeze faster than cold water!",
        text: "Under certain conditions, hot water may freeze faster than cooler water. Scientists call this the Mpemba effect, and it does not happen every time.",
        source: "https://www.britannica.com/science/Mpemba-effect"
    },
    {
        category: "WEIRD FACTS",
        title: "Bananas are berries, but strawberries are not!",
        text: "In botany, a berry is a fruit that develops from one flower ovary and has seeds inside. The everyday names do not always match the scientific ones.",
        source: "https://www.britannica.com/science/berry-plant-reproductive-body"
    },
    {
        category: "WEIRD FACTS",
        title: "A day on Mercury is very unusual!",
        text: "Mercury spins three times for every two trips it makes around the Sun, so its solar days are much longer than its years.",
        source: "https://science.nasa.gov/mercury/"
    },
    {
        category: "WEIRD FACTS",
        title: "Some metals can melt in your hand!",
        text: "Gallium is a metal that melts at about 30 degrees Celsius, so it can melt when held in a warm hand.",
        source: "https://www.rsc.org/periodic-table/element/31/gallium"
    },
    {
        category: "WEIRD FACTS",
        title: "A lightning bolt can strike the same place many times!",
        text: "Tall buildings and towers can be struck by lightning repeatedly. A lightning strike does not make a place immune to another one.",
        source: "https://www.nssl.noaa.gov/education/svrwx101/lightning/"
    },
    {
        category: "WEIRD FACTS",
        title: "The Eiffel Tower changes height with the weather!",
        text: "When the iron warms up, it expands and the tower can become a little taller. It shrinks again as it cools.",
        source: "https://www.toureiffel.paris/en"
    },
    {
        category: "WEIRD FACTS",
        title: "A spoonful of neutron-star material would be incredibly heavy!",
        text: "Neutron stars pack more mass than the Sun into a sphere only about the size of a city, making their matter extremely dense.",
        source: "https://science.nasa.gov/universe/"
    },
    {
        category: "WEIRD FACTS",
        title: "Some mushrooms can glow!",
        text: "A few mushroom species produce their own light through a chemical reaction, making them glow in the dark.",
        source: "https://www.nationalgeographic.com/science"
    },
    {
        category: "WEIRD FACTS",
        title: "The world's largest living structure is a coral reef!",
        text: "Australia's Great Barrier Reef stretches for more than 2,000 kilometres and is made by countless tiny coral animals.",
        source: "https://whc.unesco.org/en/list/154/"
    },
    {
        category: "WEIRD FACTS",
        title: "A single cloud can contain millions of water droplets!",
        text: "Clouds form when water vapour cools and becomes tiny droplets or ice crystals suspended in the air.",
        source: "https://www.weather.gov/"
    },
    {
        category: "WEIRD FACTS",
        title: "Some animals can regrow lost body parts!",
        text: "Starfish can regrow arms, and some salamanders can regrow limbs. The ability depends on the species and the body part.",
        source: "https://www.britannica.com/science/regeneration-biology"
    },
    {
        category: "WEIRD FACTS",
        title: "The world's biggest flower can smell like rotting meat!",
        text: "Rafflesia produces a huge flower with a strong smell that attracts flies, which help pollinate it.",
        source: "https://www.kew.org/read-and-watch/rafflesia-worlds-largest-flower"
    },
    {
        category: "WEIRD FACTS",
        title: "A blue whale's call can travel very far underwater!",
        text: "Low-frequency whale calls can travel long distances through the ocean under the right conditions.",
        source: "https://ocean.si.edu/ocean-life/marine-mammals/blue-whale"
    },
    {
        category: "WEIRD FACTS",
        title: "Earth has more than one kind of natural diamond!",
        text: "Diamonds can form deep inside Earth under extreme pressure and heat, and some arrive at the surface through volcanic rocks.",
        source: "https://www.gia.edu/diamond"
    },
    {
        category: "WEIRD FACTS",
        title: "A rainbow can appear at night!",
        text: "Moonlight can create a faint rainbow called a moonbow when the Moon, water droplets and observer line up correctly.",
        source: "https://www.britannica.com/science/rainbow-atmospheric-phenomenon"
    },
    {
        category: "WEIRD FACTS",
        title: "Some animals sleep with half their brain at a time!",
        text: "Dolphins can rest one half of their brain while the other half stays alert enough to help them breathe and watch their surroundings.",
        source: "https://ocean.si.edu/ocean-life/marine-mammals/dolphins"
    },
    {
        category: "WEIRD FACTS",
        title: "Earth's atmosphere has no sharp edge!",
        text: "The air gradually becomes thinner with height, fading into space rather than ending at one exact line.",
        source: "https://science.nasa.gov/earth/"
    }
];
