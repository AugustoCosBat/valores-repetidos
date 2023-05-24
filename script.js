function checkDuplicates() {
    var input = document.getElementById("input");
    var resultDiv = document.getElementById("result");
  
    var values = input.value.split(",").map(function(value) {
      return value.trim();
    });
  
    if (values.length <= 1) {
      resultDiv.textContent = "Insira pelo menos dois valores separados por vírgula.";
      return;
    }
  
    var duplicates = values.filter(function(value, index, arr) {
      return arr.indexOf(value) !== index;
    });
  
    if (duplicates.length > 0) {
      resultDiv.textContent = "Valores repetidos encontrados: " + duplicates.join(", ");
    } else {
      resultDiv.textContent = "Nenhum valor repetido encontrado.";
    }
  }
  