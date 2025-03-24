// JavaScript to handle the form submission and store the selected options
document.getElementById('configure-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission

    // Get form values
    const race = document.getElementById('race').value;
    const characterClass = document.getElementById('class').value;
    const hairColor = document.getElementById('hair-color').value;
    const skinTone = document.getElementById('skin-tone').value;
    const weapon = document.getElementById('weapon').value;
    const skills = document.getElementById('skills').value;

    // Validate form inputs
    if (!race || !characterClass || !hairColor || !skinTone || !weapon || !skills) {
        alert('Please fill out all fields before proceeding.');
        return;
    }

    // Log the values for debugging
    console.log('Race:', race);
    console.log('Class:', characterClass);
    console.log('Hair Color:', hairColor);
    console.log('Skin Tone:', skinTone);
    console.log('Weapon:', weapon);
    console.log('Skills:', skills);

    // Store choices in localStorage
    localStorage.setItem('race', race);
    localStorage.setItem('class', characterClass);
    localStorage.setItem('hairColor', hairColor);
    localStorage.setItem('skinTone', skinTone);
    localStorage.setItem('weapon', weapon);
    localStorage.setItem('skills', skills);

    // Redirect to the View Page
    window.location.href = 'view.html';
});