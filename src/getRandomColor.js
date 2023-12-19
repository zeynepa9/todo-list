

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}



// Proje renklerini saklamak için bir obje
const projectColors = {};

function getProjectColor(projectName) {
  // Eğer projeye ait bir renk zaten varsa, onu döndür
  if (projectColors[projectName]) {
    return projectColors[projectName];
  } else {
    // Yeni bir renk oluştur ve objede sakla
    const newColor = getRandomColor();
    projectColors[projectName] = newColor;
    return newColor;
  }
}




export {  getProjectColor  };