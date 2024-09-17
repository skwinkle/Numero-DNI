document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.dnicalculator__form');
  
    form.addEventListener('submit', (event) => {
      event.preventDefault(); 
  
      const dniInput = document.getElementById('dni');
      const letraInput = document.getElementById('letra');
      
      const dniNumber = parseInt(dniInput.value, 10);
      const letraProporcionada = letraInput.value.toUpperCase(); 
      
      const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
      
     
      if (isNaN(dniNumber) || dniNumber < 0 || dniNumber > 99999999) {
        alert('Número de DNI no válido. Debe ser un número entre 0 y 99999999.');
        return;
      }
  
   
      const resto = dniNumber % 23;
      const letraCalculada = letras[resto];
      

      if (letraProporcionada !== letraCalculada) {
        alert(`La letra indicada no es correcta. La letra correcta es ${letraCalculada}.`);
      } else {
        alert('Número y letra del DNI son correctos.');
      }
    });
  });