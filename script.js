// fonction de prononciation globale (une seule fois !) ok 
function speakWord(word) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = 'en-US';
        speechSynthesis.speak(utterance);
    } else {
        alert("La synthèse vocale n'est pas supportée sur ce navigateur.");
    }}

// génération simple d'une phrase exemple ok
function generateExample(word) {
    const templates = [
        `I have a ${word}.`,
        `This is my ${word}.`,
        `They like the ${word}.`,
        `Can you see the ${word}?`,
        `The ${word} is on the table.`,
        `She bought a new ${word}.`
    ];
    const index = Math.floor(Math.random() * templates.length);
    return templates[index];
}

// fonction d'affichage des mots ok
// function displayWords() {
//     const tableBody = document.getElementById('tableBody');
//     const words = getWords();
//     tableBody.innerHTML = '';

//     words.forEach((word, index) => {
//         const row = document.createElement('tr');

//         row.innerHTML = `
//             <td>
//                 ${word.english}
//                 <button onclick="speakWord(&quot;${word.english}&quot;)" style="margin-left:8px;">🔊</button>
//             </td>
//             <td>${word.french}</td>
//             <td>${word.example}</td>
//             <td><button class="delete-btn" data-index="${index}">Supprimer</button></td>
//         `;

//         tableBody.appendChild(row);
//     });
//}
