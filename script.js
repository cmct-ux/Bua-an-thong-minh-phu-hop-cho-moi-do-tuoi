function toNutrition() {
  const age = ageInput = document.getElementById("age").value;
  const gender = document.getElementById("gender").value;
  if (age < 1 || age > 100) return alert("Tuổi không hợp lệ");
  localStorage.setItem("age", age);
  localStorage.setItem("gender", gender);
  window.location.href = "nutrition.html";
}

function nutrition(age, gender) {
  if (age <= 7) return {
    protein: gender === "male" ? 33 : 30,
    carb: 180, fat: 40, veg: 200, water: 1200, kcal: 1400
  };
  if (age <= 18) return {
    protein: gender === "male" ? 60 : 55,
    carb: 300, fat: 70, veg: 400, water: 2000, kcal: 2200
  };
  if (age <= 59) return {
    protein: gender === "male" ? 65 : 55,
    carb: 280, fat: 65, veg: 500, water: 2300, kcal: 2400
  };
  return {
    protein: gender === "male" ? 60 : 50,
    carb: 240, fat: 50, veg: 450, water: 2000, kcal: 2000
  };
}

if (document.getElementById("nutritionPage")) {
  const age = localStorage.getItem("age");
  const gender = localStorage.getItem("gender");
  const n = nutrition(age, gender);

  nutritionPage.innerHTML = `
    <h2>📊 Dinh dưỡng cho ${age} tuổi (${gender === "male" ? "Nam" : "Nữ"})</h2>
    <ul>
      <li>🥩 Protein: ${n.protein} g</li>
      <li>🍚 Carbohydrate: ${n.carb} g</li>
      <li>🥑 Lipid: ${n.fat} g</li>
      <li>🥦 Rau củ: ${n.veg} g</li>
      <li>💧 Nước: ${n.water} ml</li>
      <li>🔥 Năng lượng: ${n.kcal} kcal</li>
    </ul>
  `;
}

const foods = [];
for (let i = 1; i <= 100; i++) {
  foods.push({
    name: `Bữa ăn ${i}`,
    img: "images/ga.jpg",
    meat: `${80 + i}g thịt`,
    carb: `${150 + i}g tinh bột`,
    veg: `${200 + i}g rau`,
    fat: `${20 + i}g chất béo`,
    water: `${1500 + i}ml nước`
  });
}

function randomMeal() {
  const m = foods[Math.floor(Math.random() * foods.length)];
  mealBox.innerHTML = `
    <h3>${m.name}</h3>
    <img src="${m.img}">
    <ul>
      <li>${m.meat}</li>
      <li>${m.carb}</li>
      <li>${m.veg}</li>
      <li>${m.fat}</li>
      <li>${m.water}</li>
    </ul>
  `;
}

function toMeals() {
  window.location.href = "meals.html";
}

function backHome() {
  window.location.href = "index.html";
}
