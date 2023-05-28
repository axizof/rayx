// ==UserScript==
// @name        RAYX - jklm.fun
// @namespace   rayx
// @match       https://jklm.fun/
// @grant       none
// @version     1.3
// @author      btfmof
// @description 28/05/2023 23:53:19
// @downloadURL https://github.com/axizof/rayx/raw/main/rayx.user.js
// ==/UserScript==

   console.log("INIT RAYXTENSION...");

  // Variables pour les couleurs
  var backgroundColor = "rgb(31, 21, 60)";
  var gradientColor1 = "rgba(31, 21, 60, 1)";
  var gradientColor2 = "rgba(17, 19, 33, 1)";
  var topBackground = "#1E202C";
  var textHoverColor = "#6366F1";
  var buttonBackground = "rgba(255, 255, 255, .04)";
  var homePageBackgroundColor = "#373745";
  var publicRoomsBackgroundColor = "#373745";
  var authPageBackgroundColor = "#373745";
  var leftColumnBackgroundColor = "#111023";
  var joinRoomBoxBackgroundColor = "#111023";
  var borderColor = "#6366F1";
  var publicRoomsBorderColor = "#6366f140";
  var headerColor = "#ffffff";
  var labelColor = "#AFAEBE";
  var newsColor = "#AFAEBE";
  var publicRoomsHeaderColor = "#AFAEBE";
  var inputBackgroundColor = "rgba(255, 255, 255, .04)";
  var inputborderColor = "rgb(99, 102, 241)";
  var inputTextColor = "rgb(175, 174, 190)";
  var textcoloralternative = "#6366F1";
  var hoverbuttoncolor = "#6366F1";
  var linkcolor = "#4C82F7";
  var secondarybuttoncolor = "#4c82f7";
  var secondarybuttonborderocolor = "#4c82f7";
  var cardlabelcolor = "#AFAEB2";
  var cardbackgroundcolorbombparty = "#FFBA08";
  var cardbackgroundcolorpopsauce = "#6366F1";
  var cardbackgroundcolorselector = "#D1D9F6";

  // Variables pour les images
  const loadingImageUrl = "https://i.postimg.cc/prhk9ssw-/lofi-hiphop.gif";
  const bannerImageUrl = "https://i.postimg.cc/prhk9ssw-/lofi-hiphop.gif";
  const backgroundImageUrl = "https://i.postimg.cc/ZnvQpbfK/Cyukyukyapture.png";

  function displayall(){
  // Créer le div en plein écran
  const fullscreenDiv = document.createElement('div');
  fullscreenDiv.style.position = 'fixed';
  fullscreenDiv.style.top = '0';
  fullscreenDiv.style.left = '0';
  fullscreenDiv.style.width = '100vw';
  fullscreenDiv.style.height = '100vh';
  fullscreenDiv.style.background = 'rgba(0, 0, 0, 0.8)';
  fullscreenDiv.style.zIndex = '9999';

  // Créer l'élément de chargement
  const loadingElement = document.createElement('div');
  loadingElement.textContent = 'Chargement...';
  loadingElement.style.position = 'absolute';
  loadingElement.style.top = '50%';
  loadingElement.style.left = '50%';
  loadingElement.style.transform = 'translate(-50%, -50%)';
  loadingElement.style.color = '#ffffff';
  loadingElement.style.fontFamily = 'Arial, sans-serif';
  loadingElement.style.fontSize = '24px';

  // Ajouter l'élément de chargement au div en plein écran
  fullscreenDiv.appendChild(loadingElement);

  // Ajouter le div en plein écran à la page
  document.body.appendChild(fullscreenDiv);

  // Supprimer le div après 1 seconde
  setTimeout(() => {
    fullscreenDiv.remove();
  }, 1000);

  // main menu style
  const fontLink = document.createElement("link");
  fontLink.href = "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap";
  fontLink.rel = "stylesheet";
  document.head.appendChild(fontLink);
  const bodyElement = document.querySelector("body");
  bodyElement.style.background = backgroundColor;
  bodyElement.style.background = `linear-gradient(39deg, ${gradientColor1} 0%, ${gradientColor2} 100%)`;
  bodyElement.style.fontFamily = "'Manrope', sans-serif";
  document.querySelector("body > div > div.top").style.background = topBackground;
  document.querySelector("body > div > div.top > h1 > a").style.fontFamily = "'Manrope', sans-serif";
  document.querySelector("body > div > div.top > h1 > a").style.textDecoration = "none";
  document.querySelector("body > div > div.top > h1 > a").style.fontWeight = "800";
  document.querySelector("body > div > div.top > h1 > a").innerText = "RAYX";
  document.querySelector("body > div > div.top > h1 > a").style.textTransform = "uppercase";

  const textElement = document.querySelector("body > div > div.top > h1 > a");

  textElement.addEventListener("mouseenter", () => {
    textElement.style.animation = "outlineAnimation 1s";
  });

  textElement.addEventListener("mouseleave", () => {
    textElement.style.animation = "";
  });

  const styleElement = document.createElement("style");
  styleElement.innerHTML = `
  @keyframes outlineAnimation {
    0% {
      box-shadow: 0 0 0 0px rgba(99, 102, 241, 0.7);
    }
    50% {
      box-shadow: 0 0 0 10px rgba(99, 102, 241, 0.7);
    }
    100% {
      box-shadow: 0 0 0 0px rgba(99, 102, 241, 0.7);
    }
  }
  `;

  document.head.appendChild(styleElement);

  document.querySelector("body > div > div.top > div > div > button").style.background = buttonBackground;

  var banner = document.querySelector('.banner');
  banner.style.backgroundImage = `url(${bannerImageUrl})`;
  var styleSheet = document.createElement('style');
  styleSheet.innerHTML = '.banner::before { background-image: none !important; }';

  // Ajouter la règle CSS au document
  document.head.appendChild(styleSheet);
  document.querySelector("body > div > div.home.page").style.backgroundColor = homePageBackgroundColor;
  document.querySelector("body > div > div.home.page > div.publicRooms.section").style.backgroundColor = publicRoomsBackgroundColor;
  document.querySelector("body > div > div.auth.page > div").style.backgroundColor = authPageBackgroundColor;
  document.querySelector("body > div > div.home.page > div.columns.section > div.left > div").style.backgroundColor = leftColumnBackgroundColor;
  document.querySelector("body > div > div.home.page > div.columns.section > div.right > div.joinRoom.box").style.backgroundColor = joinRoomBoxBackgroundColor;
  document.querySelector("body > div > div.home.page > div.columns.section > div.left > div").style.border = `1px solid ${borderColor}`;
  document.querySelector("body > div > div.home.page > div.columns.section > div.right > div.joinRoom.box").style.border = `1px solid ${borderColor}`;
  document.querySelector("body > div > div.home.page > div.publicRooms.section").style.bordertop = `1px solid ${publicRoomsBorderColor}`;
  document.querySelector("body > div > div.home.page > div.publicRooms").style.border = `1px solid ${publicRoomsBorderColor}`;
  bodyElement.style.backgroundImage = `url(${backgroundImageUrl})`;
  bodyElement.style.backgroundSize = 'cover';
  bodyElement.style.backgroundAttachment = 'fixed';
  document.querySelector("body > div > div.home.page > div.columns.section > div.left > div > form > header").style.color = headerColor;
  document.querySelector("body > div > div.home.page > div.columns.section > div.right > div.joinRoom.box > form > header").style.color = headerColor;
  document.querySelector("body > div > div.home.page > div.columns.section > div.right > div.joinRoom.box > form > div > div.label").style.color = labelColor;
  // Sélectionner la feuille de style appropriée
  var styleSheet;

  // Parcourir les stylesheets pour trouver la bonne feuille de style
  var styleSheets = document.styleSheets;
  for (var i = 0; i < styleSheets.length; i++) {
    var href = styleSheets[i].href;
    if (href && href.includes('central.css')) {
      styleSheet = styleSheets[i];
      break;
    }
  }

  // Vérifier si la feuille de style a été trouvée
  if (styleSheet) {
    // Définir la règle CSS modifiée
    var rule = '.gameSelection input[type=radio]:checked+label { background: #6366F1; }';

    // Insérer la règle CSS dans la feuille de style
    styleSheet.insertRule(rule, styleSheet.cssRules.length);
  }
  document.querySelector("body > div > div.home.page > div.columns.section > div.right > div.news.lightScrollbar").color = newsColor;
  document.querySelector("body > div > div.home.page > div.publicRooms.section > div.header > header").style.color = publicRoomsHeaderColor;
  document.querySelector("body > div > div.home.page > div.columns.section > div.right > div.news").style.color = newsColor;

  document.querySelector("body > div > div.home.page > div.columns.section > div.left > div > form > div.line > button").style.background = buttonBackground;
  document.querySelector("body > div > div.home.page > div.columns.section > div.left > div > form > div.line > input.roomName.styled").style.background = inputBackgroundColor;
  document.querySelector("body > div > div.home.page > div.columns.section > div.left > div > form > div.line > input.roomName.styled").style.border = `1px solid ${inputborderColor}`;
  document.querySelector("body > div > div.home.page > div.columns.section > div.left > div > form > div.line > input.roomName.styled").style.color = inputTextColor;
  document.querySelector("body > div > div.home.page > div.columns.section > div.left > div > form > div.line > button").style.borderRadius = "0.7em";
  document.querySelector("body > div > div.home.page > div.columns.section > div.left > div > form > div.line > button").style.border = `1px solid ${borderColor}`;
  document.querySelector("body > div > div.home.page > div.columns.section > div.left > div > form > div.line > button").style.background = buttonBackground;
  document.querySelector("body > div > div.home.page > div.columns.section > div.left > div > form > div.line > button").style.color = textcoloralternative;

  const buttonElement = document.querySelector("body > div > div.home.page > div.columns.section > div.left > div > form > div.line > button");

  buttonElement.addEventListener("mouseenter", () => {
    buttonElement.style.transition = "background-color 0.3s ease";
    buttonElement.style.transition = "color 0.3s ease";
    buttonElement.style.backgroundColor = hoverbuttoncolor;
    buttonElement.style.color = headerColor;
  });

  buttonElement.addEventListener("mouseleave", () => {
    buttonElement.style.transition = "background-color 0.3s ease";
    buttonElement.style.transition = "color 0.3s ease";
    buttonElement.style.backgroundColor = buttonBackground; // Revenir à la valeur par défaut
    buttonElement.style.color = textcoloralternative; // Revenir à la valeur par défaut
  });


  const buttonElement2 = document.querySelector("body > div > div.home.page > div.columns.section > div.right > div.joinRoom.box > form > div > div:nth-child(3) > button");

  buttonElement2.addEventListener("mouseenter", () => {
    buttonElement2.style.transition = "background-color 0.3s ease";
    buttonElement2.style.transition = "color 0.3s ease";
    buttonElement2.style.backgroundColor = hoverbuttoncolor;
    buttonElement2.style.color = headerColor;
  });

  buttonElement2.addEventListener("mouseleave", () => {
    buttonElement2.style.transition = "background-color 0.3s ease";
    buttonElement2.style.transition = "color 0.3s ease";
    buttonElement2.style.backgroundColor = buttonBackground; // Revenir à la valeur par défaut
    buttonElement2.style.color = textcoloralternative; // Revenir à la valeur par défaut
  });

  buttonElement2.style.background = buttonBackground;
  buttonElement2.style.color = textcoloralternative;



  document.querySelector("body > div > div.home.page > div.columns.section > div.right > div.joinRoom.box > form > div > input").style.background = inputBackgroundColor;
  document.querySelector("body > div > div.home.page > div.columns.section > div.right > div.joinRoom.box > form > div > input").style.border = `1px solid ${inputborderColor}`;
  document.querySelector("body > div > div.home.page > div.columns.section > div.right > div.joinRoom.box > form > div > input").style.color = inputTextColor;

  document.querySelector("body > div > div.home.page > div.publicRooms.section > div.header > div.filter > input").style.background = inputBackgroundColor;
  document.querySelector("body > div > div.home.page > div.publicRooms.section > div.header > div.filter > input").style.border = `1px solid ${inputborderColor}`;
  document.querySelector("body > div > div.home.page > div.publicRooms.section > div.header > div.filter > input").style.color = inputTextColor;


  document.querySelector("body > div > div.home.page > div.publicRooms.section > div.listContainer > div.none.section").style.color = newsColor;

  const linksElement = document.querySelector("body > div > div.home.page > div.columns.section > div.right > div.links");

  const links = linksElement.getElementsByTagName("a");
  for (let i = 0; i < links.length; i++) {
    links[i].style.color = linkcolor;
  }

  document.querySelector("body > div > div.home.page > div.columns.section > div.left > div > form > div.gameSelection.lightScrollbar > div:nth-child(1) > label").style.backgroundColor = buttonBackground;
  document.querySelector("body > div > div.home.page > div.columns.section > div.left > div > form > div.gameSelection.lightScrollbar > div:nth-child(2) > label").style.backgroundColor = buttonBackground;
  document.querySelector("body > div > div.home.page > div.columns.section > div.left > div > form > div.gameSelection.lightScrollbar > div:nth-child(3) > label").style.backgroundColor = buttonBackground;

  document.querySelector("body > div > div.home.page > div.publicRooms.section > div.header > div.refresh > button").style.background = buttonBackground;


  document.querySelector("body > div > div.home.page > div.columns.section > div.left > div > form > div.line > label:nth-child(3)").backgroundColor = buttonBackground;
  document.querySelector("body > div > div.home.page > div.columns.section > div.left > div > form > div.line > label:nth-child(5)").backgroundColor = buttonBackground;

  const publicRadio = document.getElementById("roomPrivacyPublic");
  const privateRadio = document.getElementById("roomPrivacyPrivate");
  publicRadio.nextElementSibling.style.backgroundColor = buttonBackground;
  privateRadio.nextElementSibling.style.backgroundColor = buttonBackground;
  publicRadio.nextElementSibling.style.border = `1px solid ${secondarybuttonborderocolor}`;
  // Écouteur d'événement pour le bouton radio "Public"
  publicRadio.addEventListener("change", () => {
    if (publicRadio.checked) {
      publicRadio.nextElementSibling.style.border = `1px solid ${secondarybuttonborderocolor}`;
      privateRadio.nextElementSibling.style.border = "1px solid rgb(76, 130, 247,0)";
    } else {
      publicRadio.nextElementSibling.style.border = "1px solid rgb(76, 130, 247,0)";
    }
  });

  // Écouteur d'événement pour le bouton radio "Private"
  privateRadio.addEventListener("change", () => {
    if (privateRadio.checked) {
      privateRadio.nextElementSibling.style.border = `1px solid ${secondarybuttonborderocolor}`;
      publicRadio.nextElementSibling.style.border = "1px solid rgb(76, 130, 247,0)";
    } else {
      privateRadio.nextElementSibling.style.border = "1px solid rgb(76, 130, 247,0)";
    }
  });




  document.querySelector("body > div > div.home.page > div.footer").style.filter = "invert(1)";
///  var cardbackgroundcolorbombparty = "#FFBA08";
///  var cardbackgroundcolorpopsauce = "#6366F1";
///  var cardbackgroundcolorselector = "#D1D9F6";
function cardchangeee() {
    const bombpartyCards = document.querySelectorAll('.entry.bombparty');
  
    bombpartyCards.forEach((card) => {
      const info = card.querySelector('.info');
      const playing = card.querySelector('.playing');
      const code = card.querySelector('.stub .code');
  
      // Ajouter les styles aux éléments de la carte
      card.style.background = 'transparent';
      card.style.border = `1px solid ${cardbackgroundcolorbombparty}`;
      card.style.borderRadius = '10px';
      //card.style.marginBottom = '8px';
  
      info.style.border = `1px solid ${cardbackgroundcolorbombparty}`;
  
      playing.style.color = labelColor;
  
      code.style.marginLeft = '195px';
      code.style.rotate = '90deg';
      code.style.marginTop = '-41px';
      code.style.display = 'flex';
      code.style.justifyContent = 'center';
      code.style.alignContent = 'center';
      code.style.marginBottom = '8px';
      info.style.color = labelColor;
      // Déplacer le contenu de code vers info
      info.appendChild(code);
      
      // Supprimer le div.stub de la carte
      const stub = card.querySelector('.stub');
      stub.parentNode.removeChild(stub);
    });
  
    const popsauceCards = document.querySelectorAll('.entry.popsauce');
  
    popsauceCards.forEach((card) => {
  
      const info = card.querySelector('.info');
      const playing = card.querySelector('.playing');
      const code = card.querySelector('.stub .code');
  
      // Ajouter les styles aux éléments de la carte
      card.style.background = 'transparent';
      card.style.border = `1px solid ${cardbackgroundcolorpopsauce}`;
      card.style.borderRadius = '10px';
      //card.style.marginBottom = '8px';
  
      info.style.border = `1px solid ${cardbackgroundcolorpopsauce}`;
  
      playing.style.color = labelColor;
  
      code.style.marginLeft = '195px';
      code.style.rotate = '90deg';
      code.style.marginTop = '-41px';
      code.style.display = 'flex';
      code.style.justifyContent = 'center';
      code.style.alignContent = 'center';
      code.style.marginBottom = '8px';
      info.style.color = labelColor;
      // Déplacer le contenu de code vers info
      info.appendChild(code);
      
      // Supprimer le div.stub de la carte
      const stub = card.querySelector('.stub');
      stub.parentNode.removeChild(stub);
    });
  
    const selectorCards = document.querySelectorAll('.entry.selector');
  
    selectorCards.forEach((card) => {
      const info = card.querySelector('.info');
      const playing = card.querySelector('.playing');
      const code = card.querySelector('.stub .code');
  
      // Ajouter les styles aux éléments de la carte
      card.style.background = 'transparent';
      card.style.border = `1px solid ${cardbackgroundcolorselector}`;
      card.style.borderRadius = '10px';
      //card.style.marginBottom = '8px';
  
      info.style.border = `1px solid ${cardbackgroundcolorselector}`;
  
      playing.style.color = labelColor;
  
      code.style.marginLeft = '195px';
      code.style.rotate = '90deg';
      code.style.marginTop = '-41px';
      code.style.display = 'flex';
      code.style.justifyContent = 'center';
      code.style.alignContent = 'center';
      code.style.marginBottom = '8px';
      info.style.color = labelColor;
      // Déplacer le contenu de code vers info
      info.appendChild(code);
      
      // Supprimer le div.stub de la carte
      const stub = card.querySelector('.stub');
      stub.parentNode.removeChild(stub);
    });
    if(document.querySelector("body > div > div.home.page > div.publicRooms.section > div.listContainer > div.list > a:nth-child(1)").style.background != "transparent"){
      cardchangeeev2();
    }
  }

  function cardchangeeev2() {
    const bombpartyCards = document.querySelectorAll('.entry.bombparty');
  
    bombpartyCards.forEach((card) => {
      const info = card.querySelector('.info');
      const playing = card.querySelector('.playing');
      const code = card.querySelector('.stub .code');
  
      // Ajouter les styles aux éléments de la carte
      card.style.background = 'transparent';
      card.style.border = `1px solid ${cardbackgroundcolorbombparty}`;
      card.style.borderRadius = '10px';
      //card.style.marginBottom = '8px';
  
      info.style.border = `1px solid ${cardbackgroundcolorbombparty}`;
  
      playing.style.color = labelColor;
  
      code.style.marginLeft = '195px';
      code.style.rotate = '90deg';
      code.style.marginTop = '-41px';
      code.style.display = 'flex';
      code.style.justifyContent = 'center';
      code.style.alignContent = 'center';
      code.style.marginBottom = '8px';
      info.style.color = labelColor;
      // Déplacer le contenu de code vers info
      info.appendChild(code);
      
      // Supprimer le div.stub de la carte
      const stub = card.querySelector('.stub');
      stub.parentNode.removeChild(stub);
    });
  
    const popsauceCards = document.querySelectorAll('.entry.popsauce');
  
    popsauceCards.forEach((card) => {
  
      const info = card.querySelector('.info');
      const playing = card.querySelector('.playing');
      const code = card.querySelector('.stub .code');
  
      // Ajouter les styles aux éléments de la carte
      card.style.background = 'transparent';
      card.style.border = `1px solid ${cardbackgroundcolorpopsauce}`;
      card.style.borderRadius = '10px';
      //card.style.marginBottom = '8px';
  
      info.style.border = `1px solid ${cardbackgroundcolorpopsauce}`;
  
      playing.style.color = labelColor;
  
      code.style.marginLeft = '195px';
      code.style.rotate = '90deg';
      code.style.marginTop = '-41px';
      code.style.display = 'flex';
      code.style.justifyContent = 'center';
      code.style.alignContent = 'center';
      code.style.marginBottom = '8px';
      info.style.color = labelColor;
      // Déplacer le contenu de code vers info
      info.appendChild(code);
      
      // Supprimer le div.stub de la carte
      const stub = card.querySelector('.stub');
      stub.parentNode.removeChild(stub);
    });
  
    const selectorCards = document.querySelectorAll('.entry.selector');
  
    selectorCards.forEach((card) => {
      const info = card.querySelector('.info');
      const playing = card.querySelector('.playing');
      const code = card.querySelector('.stub .code');
  
      // Ajouter les styles aux éléments de la carte
      card.style.background = 'transparent';
      card.style.border = `1px solid ${cardbackgroundcolorselector}`;
      card.style.borderRadius = '10px';
      //card.style.marginBottom = '8px';
  
      info.style.border = `1px solid ${cardbackgroundcolorselector}`;
  
      playing.style.color = labelColor;
  
      code.style.marginLeft = '195px';
      code.style.rotate = '90deg';
      code.style.marginTop = '-41px';
      code.style.display = 'flex';
      code.style.justifyContent = 'center';
      code.style.alignContent = 'center';
      code.style.marginBottom = '8px';
      info.style.color = labelColor;
      // Déplacer le contenu de code vers info
      info.appendChild(code);
      
      // Supprimer le div.stub de la carte
      const stub = card.querySelector('.stub');
      stub.parentNode.removeChild(stub);
    });
    if(document.querySelector("body > div > div.home.page > div.publicRooms.section > div.listContainer > div.list > a:nth-child(1)").style.background != "transparent"){
      
    }
  }

  cardchangeee();

  const refreshButton = document.querySelector("body > div > div.home.page > div.publicRooms.section > div.header > div.refresh > button");
  const filterInput = document.querySelector("body > div > div.home.page > div.publicRooms.section > div.header > div.filter > input");
  
  let timeoutId; // Variable pour stocker l'ID du timeout
  
  refreshButton.addEventListener("click", cardChangeHandlerrefresh);
  filterInput.addEventListener("input", handleFilterInputChange);
  
  function cardChangeHandler() {
    createAndRemoveDiv();
    cardchangeee();
  }

  function cardChangeHandlerrefresh() {
    createAndRemoveDiv();

    setTimeout(() => {
      cardchangeee();
    }, 100);
  }
  
  function handleFilterInputChange(event) {
    clearTimeout(timeoutId); // Annuler le timeout précédent s'il existe
  
    const inputValue = event.target.value;
  
    if (inputValue === '') {
      cardChangeHandlerrefresh();
      return; // Sortir de la fonction si l'input est vide
    }
    timeoutId = setTimeout(() => {
      for (let i = 0; i < inputValue.length; i++) {
        const currentChar = inputValue.charAt(i);
        cardChangeHandler();
        setTimeout(() => {
          filterInput.value = inputValue.substring(0, i + 1);
        }, (i + 1) * 20);
      }
    }, 10);
  }
  
  function createAndRemoveDiv() {
    const targetElement = document.querySelector("body > div > div.home.page > div.publicRooms.section > div.listContainer > div.list");
    const div = document.createElement('div');
    div.style.width = '100%';
    div.style.height = '100%';
    div.style.position = 'absolute';
    div.style.top = '0';
    div.style.left = '0';
    div.style.backgroundColor = '#373745';
  
    targetElement.appendChild(div);
  
    setTimeout(() => {
      targetElement.removeChild(div);
    }, 150);
  }
  document.querySelector("body > div > div.auth.page > div > form.setNickname.box").style.backgroundColor = leftColumnBackgroundColor;
  document.querySelector("body > div > div.auth.page > div > form.setNickname.box").style.border = `1px solid ${secondarybuttonborderocolor}`;
  document.querySelector("body > div > div.auth.page > div > div.activeService.box").style.backgroundColor = leftColumnBackgroundColor;
  document.querySelector("body > div > div.auth.page > div > form.setNickname.box > div:nth-child(1)").style.color = labelColor;
  document.querySelector("body > div > div.auth.page > div > form.setNickname.box > div.line.nicknameRules").style.color = labelColor;
  document.querySelector("body > div > div.auth.page > div > div.activeService.box > div:nth-child(2)").style.color = labelColor;
  document.querySelector("body > div > div.auth.page > div > div.activeService.box").style.border = `1px solid ${secondarybuttonborderocolor}`;
  document.querySelector("body > div > div.auth.page").style.backgroundColor = homePageBackgroundColor;
  ;
    
  document.querySelector("body > div > div.auth.page > div > form.setNickname.box > div:nth-child(2) > input").style.background = inputBackgroundColor;
  document.querySelector("body > div > div.auth.page > div > form.setNickname.box > div:nth-child(2) > input").style.border = "1px solid " +inputborderColor;
  document.querySelector("body > div > div.auth.page > div > form.setNickname.box > div:nth-child(2) > input").style.color = inputTextColor;


  const buttonElement3 = document.querySelector("body > div > div.auth.page > div > form.setNickname.box > div:nth-child(2) > button");

  buttonElement3.addEventListener("mouseenter", () => {
    buttonElement3.style.transition = "background-color 0.3s ease";
    buttonElement3.style.transition = "color 0.3s ease";
    buttonElement3.style.backgroundColor = hoverbuttoncolor;
    buttonElement3.style.color = headerColor;
  });

  buttonElement3.addEventListener("mouseleave", () => {
    buttonElement3.style.transition = "background-color 0.3s ease";
    buttonElement3.style.transition = "color 0.3s ease";
    buttonElement3.style.backgroundColor = buttonBackground; // Revenir à la valeur par défaut
    buttonElement3.style.color = textcoloralternative; // Revenir à la valeur par défaut
  });

  buttonElement3.style.background = buttonBackground;
  buttonElement3.style.color = textcoloralternative;



  const buttonElement4 = document.querySelector("body > div > div.auth.page > div > div.activeService.box > div.logout > button");

  buttonElement4.addEventListener("mouseenter", () => {
    buttonElement4.style.transition = "background-color 0.3s ease";
    buttonElement4.style.transition = "color 0.3s ease";
    buttonElement4.style.backgroundColor = hoverbuttoncolor;
    buttonElement4.style.color = headerColor;
  });

  buttonElement4.addEventListener("mouseleave", () => {
    buttonElement4.style.transition = "background-color 0.3s ease";
    buttonElement4.style.transition = "color 0.3s ease";
    buttonElement4.style.backgroundColor = buttonBackground; // Revenir à la valeur par défaut
    buttonElement4.style.color = textcoloralternative; // Revenir à la valeur par défaut
  });

  buttonElement4.style.background = buttonBackground;
  buttonElement4.style.color = textcoloralternative;
  document.querySelector("body > div > div.home.page > div.publicRooms.section > div.header > div.refresh > button").color = newsColor;

  document.querySelector("body > div > div.auth.page > div > div.chooseService.box").style.backgroundColor = leftColumnBackgroundColor;
  document.querySelector("body > div > div.auth.page > div > div.chooseService.box").style.border = `1px solid ${secondarybuttonborderocolor}`;
  document.querySelector("body > div > div.auth.page > div > div.chooseService.box").style.color = labelColor;
  document.querySelector("body > div > div.auth.page > div > form.jklmLogin.box").style.backgroundColor = leftColumnBackgroundColor;
  document.querySelector("body > div > div.auth.page > div > form.jklmLogin.box > div:nth-child(1)").style.color = labelColor;
  document.querySelector("body > div > div.auth.page > div > form.jklmLogin.box > div:nth-child(2)").style.color = labelColor;
  
  

  document.querySelector("body > div > div.auth.page > div > form.jklmLogin.box > div.line > input").style.background = inputBackgroundColor;
  document.querySelector("body > div > div.auth.page > div > form.jklmLogin.box > div.line > input").style.border = "1px solid " +inputborderColor;
  document.querySelector("body > div > div.auth.page > div > form.jklmLogin.box > div.line > input").style.color = inputTextColor;

  const buttonElement5 = document.querySelector("body > div > div.auth.page > div > form.jklmLogin.box > div.line > button");

  buttonElement5.addEventListener("mouseenter", () => {
    buttonElement5.style.transition = "background-color 0.3s ease";
    buttonElement5.style.transition = "color 0.3s ease";
    buttonElement5.style.backgroundColor = hoverbuttoncolor;
    buttonElement5.style.color = headerColor;
  });

  buttonElement5.addEventListener("mouseleave", () => {
    buttonElement5.style.transition = "background-color 0.3s ease";
    buttonElement5.style.transition = "color 0.3s ease";
    buttonElement5.style.backgroundColor = buttonBackground; // Revenir à la valeur par défaut
    buttonElement5.style.color = textcoloralternative; // Revenir à la valeur par défaut
  });

  buttonElement5.style.background = buttonBackground;
  buttonElement5.style.color = textcoloralternative;
  console.log("RAYXTENSION LOADED...");
  console.log("CREATED BY BTFMOF");
}


// Créer le div en plein écran
const fullscreenDiv = document.createElement('div');
fullscreenDiv.style.position = 'fixed';
fullscreenDiv.style.top = '0';
fullscreenDiv.style.left = '0';
fullscreenDiv.style.width = '100vw';
fullscreenDiv.style.height = '100vh';
fullscreenDiv.style.background = 'rgba(0, 0, 0, 0.8)';
fullscreenDiv.style.zIndex = '9999';

// Créer l'élément de chargement
const loadingElement = document.createElement('div');
loadingElement.textContent = 'Chargement...';
loadingElement.style.position = 'absolute';
loadingElement.style.top = '50%';
loadingElement.style.left = '50%';
loadingElement.style.transform = 'translate(-50%, -50%)';
loadingElement.style.color = '#ffffff';
loadingElement.style.fontFamily = 'Arial, sans-serif';
loadingElement.style.fontSize = '24px';

// Ajouter l'élément de chargement au div en plein écran
fullscreenDiv.appendChild(loadingElement);

// Ajouter le div en plein écran à la page
document.body.appendChild(fullscreenDiv);

// Supprimer le div après 1 seconde
setTimeout(() => {
  displayall();
  fullscreenDiv.remove();
}, 1000);
