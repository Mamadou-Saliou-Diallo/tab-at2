const etudiants = [
    { prenom: "Mamadou Saliou", nom: "Diallo", age: 22, note: 15 },
    { prenom: "Fatou", nom: "Sarr", age: 20, note: 14 },
    { prenom: "Aliou", nom: "Diop", age: 21, note: 16 },
    { prenom: "Awa", nom: "Faye", age: 23, note: 13 },
    { prenom: "Ibrahima", nom: "Ba", age: 24, note: 18 },
    { prenom: "Khadija", nom: "Sy", age: 22, note: 12 },
    { prenom: "Ousmane", nom: "Ndiaye", age: 20, note: 15 },
    { prenom: "Aminata", nom: "Sow", age: 21, note: 17 },
    { prenom: "Abdoulaye", nom: "Fall", age: 23, note: 11 },
    { prenom: "Mariama", nom: "Kane", age: 19, note: 16 }
  ];
      console.log(etudiants);

        const tableBody = document.getElementById("tableBody");

        // Boucle pour ajouter chaque étudiant au tableau HTML
        etudiants.forEach(etudiant => {
            const row = document.createElement("tr");

            const prenomCell = document.createElement("td");
            prenomCell.textContent = etudiant.prenom;
            row.appendChild(prenomCell);

            const nomCell = document.createElement("td");
            nomCell.textContent = etudiant.nom;
            row.appendChild(nomCell);

            const ageCell = document.createElement("td");
            ageCell.textContent = etudiant.age;
            row.appendChild(ageCell);

            const noteCell = document.createElement("td");
            noteCell.textContent = etudiant.note;
            row.appendChild(noteCell);

            tableBody.appendChild(row);
        });

        etudiants.forEach(etudiant => {
    for (const prop in etudiant) {
        switch (typeof etudiant[prop]) {
            case "string":
                alert(`${prop} : ${etudiant[prop]} (Chaîne de caractères)`);
                break;
            case "number":
                if (Number.isInteger(etudiant[prop])) {
                    alert(`${prop} : ${etudiant[prop]} (Entier)`);
                } else {
                    alert(`${prop} : ${etudiant[prop]} (Décimal)`);
                }
                break;
            default:
                alert(`${prop} : ${etudiant[prop]} (Type inconnu)`);
                break;
        }
    }
});
