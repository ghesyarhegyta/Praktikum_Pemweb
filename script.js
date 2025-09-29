const darkBtn = document.createElement('button');
darkBtn.textContent = '🌙 Dark Mode';
darkBtn.style.position = 'fixed';
darkBtn.style.bottom = '20px';
darkBtn.style.right = '20px';
darkBtn.style.padding = '8px 16px';
darkBtn.style.borderRadius = '20px';
darkBtn.style.border = 'none';
darkBtn.style.background = '#ff82a9';
darkBtn.style.color = '#fff';
darkBtn.style.cursor = 'pointer';

document.body.appendChild(darkBtn);

darkBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    darkBtn.textContent = '☀️ Light Mode';
  } else {
    darkBtn.textContent = '🌙 Dark Mode';
  }
});

const style = document.createElement('style');
style.textContent = `
  body.dark-mode {
    background: #222;            
    color: #f4f4f4;
  }

  body.dark-mode #hero {
    background: #2b2b2b;       
  }

  body.dark-mode #hero h2 {
    color: #ff82a9;
  }

  body.dark-mode #hero p {
    color: #f4f4f4;
  }

  body.dark-mode .card {
    background: #333;
    color: #f4f4f4;
  }

  body.dark-mode footer {
    background: #444;
  }
`;
document.head.appendChild(style);


const ingredientSection = document.getElementById('ingredients');
const searchBox = document.createElement('div');
searchBox.style.textAlign = 'center';
searchBox.style.marginBottom = '1.5rem';

searchBox.innerHTML = `
  <input type="text" id="searchInput" placeholder="Cari bahan..." 
    style="padding:0.5rem 1rem; width:250px; border-radius:20px; border:1px solid #ccc;">
  <button id="searchBtn" 
    style="padding:0.5rem 1rem; margin-left:10px; border-radius:20px; border:none; background:#ff82a9; color:#fff; cursor:pointer;">
    Cari
  </button>
  <button id="resetBtn" 
    style="padding:0.5rem 1rem; margin-left:10px; border-radius:20px; border:none; background:#bbb; color:#fff; cursor:pointer;">
    Reset
  </button>
`;

ingredientSection.insertBefore(searchBox, ingredientSection.querySelector('.card-wrapper'));

const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const resetBtn = document.getElementById('resetBtn');
const cards = document.querySelectorAll('.card');

searchBtn.addEventListener('click', () => {
  const keyword = searchInput.value.toLowerCase().trim();

  cards.forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    const desc = card.querySelector('p').textContent.toLowerCase();

    if (title.includes(keyword) || desc.includes(keyword)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});

resetBtn.addEventListener('click', () => {
  searchInput.value = '';
  cards.forEach(card => {
    card.style.display = 'block';
  });
});

searchInput.addEventListener('keyup', e => {
  if (e.key === 'Enter') searchBtn.click();
});
