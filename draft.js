// Obtener los depósitos anteriores del localStorage
totalDeposits = parseFloat(localStorage.getItem('totalDeposits')) || 0;

// Obtener los retiros anteriores del localStorage
totalWithdrawals = parseFloat(localStorage.getItem('totalWithdrawals')) || 0;

// Mostrar los totales en el HTML
document.getElementById('depositValue').textContent = `$${totalDeposits.toFixed(2)}`;
document.getElementById('withdrawalValue').textContent = `$${totalWithdrawals.toFixed(2)}`;

// Calcular el balance en base a los totales
const balance = totalDeposits - totalWithdrawals;

// Verificar si el balance es positivo cuando hay más depósitos que retiros
if (balance >= 0) {
  document.getElementById('balanceValue').textContent = `$${balance.toFixed(2)}`;
} else {
  document.getElementById('balanceValue').textContent = `- $${Math.abs(balance).toFixed(2)}`;
}

// Función para agregar un depósito
function addDeposit() {
  const deposit = parseFloat(document.getElementById('depositInput').value);

  if (isNaN(deposit)) {
    alert('Por favor, ingresa un valor numérico válido para el depósito.');
    return;
  }

  // Actualizar el total de depósitos
  totalDeposits += deposit;

  // Guardar el nuevo total de depósitos en el localStorage
  localStorage.setItem('totalDeposits', totalDeposits);

  // Mostrar los totales en el HTML
  document.getElementById('depositValue').textContent = `$${totalDeposits.toFixed(2)}`;

  // Calcular el balance en base a los totales
  const balance = totalDeposits - totalWithdrawals;

  // Verificar si el balance es positivo cuando hay más depósitos que retiros
  if (balance >= 0) {
    document.getElementById('balanceValue').textContent = `$${balance.toFixed(2)}`;
  } else {
    document.getElementById('balanceValue').textContent = `- $${Math.abs(balance).toFixed(2)}`;
  }

  // Limpiar el campo de depósito
  document.getElementById('depositInput').value = '';
}

// Función para agregar un retiro
function addWithdrawal() {
  const withdrawal = parseFloat(document.getElementById('withdrawalInput').value);

  if (isNaN(withdrawal)) {
    alert('Por favor, ingresa un valor numérico válido para el retiro.');
    return;
  }

  // Actualizar el total de retiros
  totalWithdrawals += withdrawal;

  // Guardar el nuevo total de retiros en el localStorage
  localStorage.setItem('totalWithdrawals', totalWithdrawals);

  // Mostrar los totales en el HTML
  document.getElementById('withdrawalValue').textContent = `$${totalWithdrawals.toFixed(2)}`;

  // Calcular el balance en base a los totales
  const balance = totalDeposits - totalWithdrawals;

  // Verificar si el balance es positivo cuando hay más depósitos que retiros
  if (balance >= 0) {
    document.getElementById('balanceValue').textContent = `$${balance.toFixed(2)}`;
  } else {
    document.getElementById('balanceValue').textContent = `- $${Math.abs(balance).toFixed(2)}`;
  }

  // Limpiar el campo de retiro
  document.getElementById('withdrawalInput').value = '';
  
}
function clearBalance() {
  // Reiniciar los totales de depósitos y retiros a cero
  totalDeposits = 0;
  totalWithdrawals = 0;

  // Actualizar los valores en el HTML
  document.getElementById('depositValue').textContent = '$0';
  document.getElementById('withdrawalValue').textContent = '$0';
  document.getElementById('balanceValue').textContent = '$0';

  // Borrar los datos almacenados en el localStorage
  localStorage.removeItem('totalDeposits');
  localStorage.removeItem('totalWithdrawals');
}
