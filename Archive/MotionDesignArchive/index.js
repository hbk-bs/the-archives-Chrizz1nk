// Erstellt ein Style-Element
const style = document.createElement("style");
style.innerHTML = `

/* Allgemeines Styling */
body {
  font-family: "Arial", sans-serif;
  background-color: #ffefa8;
  color: #333;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Header */
header {
  background-color: #4e2323;
  color: white;
  width: 100%;
  text-align: center;
  padding: 20px 0;
}

/* Container */
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  max-width: 800px;
  width: 100%;
}

/* Navigation */
.archive-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
}

.archive-list li {
  background: rgb(92, 18, 18);
  padding: 10px 20px;
  border-radius: 5px;
  transition: background 0.3s ease-in-out;
}

.archive-list li:hover {
  background: white;
}

.archive-list a {
  text-decoration: none;
  color: white;
  font-size: 18px;
  font-weight: bold;
}

.archive-list li:hover a {
  color: rgb(92, 18, 18);
}

/* Responsivität */
@media (max-width: 768px) {
  .container {
    padding: 10px;
  }
}`;

document.head.appendChild(style);

