function toggleLanguage(language) {
  var langToggle = document.getElementById('langToggle');

  if (language === 'en') {
    langToggle.innerHTML = 'EN  DK';
    langToggle.classList.remove('dk-selected');
    // Add functionality to change the language to English here
    // For example: Update text content on the page to English
  } else {
    langToggle.innerHTML = 'EN  DK';
    langToggle.classList.add('dk-selected');
    // Add functionality to change the language to Danish here
    // For example: Update text content on the page to Danish
  }
}


const languageToggle = document.getElementById('languageToggle');
const languageLabel = document.getElementById('languageLabel');

languageToggle.addEventListener('change', function() {
  if (this.checked) {
    // Danish selected
    languageLabel.textContent = 'Language: DK';
    // Change to Danish language - Perform necessary actions
    console.log('Switched to Danish (DK)');
  } else {
    // English selected
    languageLabel.textContent = 'Language: EN';
    // Change to English language - Perform necessary actions
    console.log('Switched to English (EN)');
  }
});

function showEmailForm() {
  const emailContent = document.querySelectorAll('.hidden-content');

  // Toggle display for all hidden content blocks
  emailContent.forEach(content => {
    if (content.style.display === 'none') {
      content.style.display = 'block';
    } else {
      content.style.display = 'none';
    }
  });
}


document.addEventListener('DOMContentLoaded', function () {
  var mobileNav = document.querySelector('.mobile-nav');
  var hamburgerMenu = document.querySelector('.hamburger-menu');

  hamburgerMenu.addEventListener('click', function () {
    mobileNav.classList.toggle('open');
  });
});
