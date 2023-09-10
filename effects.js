const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
});

document.addEventListener('click', e => {
    cursor.classList.add("expand");
    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500);
});


document.addEventListener('DOMContentLoaded', function () {
    selectItems.style.display = 'none';
  });
  
  const customSelect = document.querySelector('.custom-select');
  const selectSelected = customSelect.querySelector('.select-selected');
  const selectItems = customSelect.querySelector('.select-items');
  const selectItemElements = customSelect.querySelectorAll('.select-items li');
  const selectedCityInput = document.getElementById('selected-city');
  
  selectSelected.addEventListener('click', function (e) {
    e.stopPropagation(); 
    selectItems.style.display = selectItems.style.display === 'block' ? 'none' : 'block';
  });
  
  selectItemElements.forEach(function (item) {
    item.addEventListener('click', function () {
      selectSelected.value = item.textContent;
      selectedCityInput.value = item.getAttribute('data-value');
      selectItems.style.display = 'none';
    });
  });
  
  window.addEventListener('click', function () {
    selectItems.style.display = 'none';
  });
  
