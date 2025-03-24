// Retrieve the stored character choices
document.addEventListener('DOMContentLoaded', function() {
    const race = localStorage.getItem('race');
    const characterClass = localStorage.getItem('class');
    const hairColor = localStorage.getItem('hairColor');
    const skinTone = localStorage.getItem('skinTone');
    const weapon = localStorage.getItem('weapon');
    const skills = localStorage.getItem('skills');

    // Log the retrieved values for debugging
    console.log('Race:', race);
    console.log('Class:', characterClass);
    console.log('Hair Color:', hairColor);
    console.log('Skin Tone:', skinTone);
    console.log('Weapon:', weapon);
    console.log('Skills:', skills);

    // Check if all values are present
    if (!race || !characterClass || !hairColor || !skinTone || !weapon || !skills) {
        alert('Character data is missing. Please configure your character first.');
        return;
    }

    // Display the character summary
    const summaryElement = document.getElementById('summary');
    if (summaryElement) {
        summaryElement.innerHTML = `
            <p>Race: ${race}</p>
            <p>Class: ${characterClass}</p>
            <p>Hair Color: ${hairColor}</p>
            <p>Skin Tone: ${skinTone}</p>
            <p>Weapon: ${weapon}</p>
            <p>Skill: ${skills}</p>
        `;
    } else {
        console.error('Element with ID "summary" not found.');
    }

    // Set the character preview image based on selections
    const img = `images/${race}_${characterClass}_${hairColor}_${weapon}.png`;
    const previewElement = document.getElementById('character-preview');
    if (previewElement) {
        previewElement.innerHTML = `<img src="${img}" alt="Character Preview">`;
    } else {
        console.error('Element with ID "character-preview" not found.');
    }
});
