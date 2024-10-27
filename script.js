// Crée l'élément de sondage
      var sondage = document.createElement("div");
      sondage.innerHTML = "Quel est votre âge ?";

      
      var options = ["10-24", "25-34", "35-44", "45-54", "55+"];
      for (var i = 0; i < options.length; i++) {
        var option = document.createElement("input");
        option.type = "radio";
        option.name = "option";
        option.value = options[i];
        sondage.appendChild(option);
        sondage.appendChild(document.createTextNode(options[i]));
      }

      
      var soumettre = document.createElement("input");
      soumettre.type = "submit";
      soumettre.value = "Voter";
      sondage.appendChild(soumettre);

      
      document.getElementById("conteneur-sondage").appendChild(sondage);

      console.log("Code JavaScript exécuté");