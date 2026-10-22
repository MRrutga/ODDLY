
const button = document.getElementById("discoverButton");
const fact = document.getElementById("fact");
const pictures = document.getElementById("pictures");

let lastFactIndex = -1;

button.addEventListener("click", async function () {
    if (!facts || facts.length === 0) {
        fact.textContent = "No facts available!";
        return;
    }

    let randomIndex;

    do {
        randomIndex = Math.floor(Math.random() * facts.length);
    } while (
        facts.length > 1 &&
        randomIndex === lastFactIndex
    );

    lastFactIndex = randomIndex;

    const selectedFact = facts[randomIndex];

    const category = document.createElement("p");
    category.textContent = "TOPIC: " + selectedFact.category;

    const heading = document.createElement("h2");
    heading.textContent = selectedFact.title;

    const description = document.createElement("p");
    description.textContent = selectedFact.text;

    // Display the original source link.
    const source = document.createElement("a");
    source.href = selectedFact.source;
    source.textContent = "Read the source";
    source.target = "_blank";
    source.rel = "noopener noreferrer";

    fact.replaceChildren(
        category,
        heading,
        description,
        source
    );

    pictures.replaceChildren();

    const loading = document.createElement("p");
    loading.textContent = "Finding an image...";
    pictures.appendChild(loading);

    try {
        const searchURL =
            "https://en.wikipedia.org/w/api.php" +
            "?action=query" +
            "&generator=search" +
            "&gsrsearch=" +
            encodeURIComponent(selectedFact.title) +
            "&gsrlimit=5" +
            "&prop=pageimages" +
            "&piprop=thumbnail" +
            "&pithumbsize=700" +
            "&format=json" +
            "&origin=*";

        const response = await fetch(searchURL);

        if (!response.ok) {
            throw new Error("Image search failed");
        }

        const data = await response.json();
        const pages = Object.values(
            data.query?.pages || {}
        );

        const pageWithImage = pages.find(
            page => page.thumbnail?.source
        );

        pictures.replaceChildren();

        if (pageWithImage) {
            const img = document.createElement("img");

            img.src = pageWithImage.thumbnail.source;
            img.alt = selectedFact.title;
            img.style.width = "100%";
            img.style.maxWidth = "500px";
            img.style.borderRadius = "12px";
            img.style.marginTop = "20px";

            pictures.appendChild(img);
        } else {
            pictures.textContent =
                "No matching image found for this fact.";
        }
    } catch (error) {
        pictures.textContent =
            "Could not load an image. Try again later.";
        console.error("Image error:", error);
    }
});
