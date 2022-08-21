const carObject = {
  vehicle: "car",
  farePerKilo: 4,
  cpacity: 4,
  imgUrl:
    "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  des: "A car (or automobile) is a wheeled motor vehicle that is used for transportation. Most definitions of cars say that they run primarily on roads, seat one to eight people, have four wheels, and mainly transport people instead of goods.",
};

const busObject = {
  vehicle: "bus",
  farePerKilo: 2,
  cpacity: 30,
  imgUrl:
    "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
  des: "a large motor vehicle, having a long body, equipped with seats or benches for passengers, usually operating as part of a scheduled service;omnibus. (formerly) a similar horse-drawn vehicle. a passenger automobile or airplane used in a manner resembling that of a bus.",
};
const bikeObject = {
  vehicle: "bike",
  farePerKilo: 3,
  cpacity: 2,
  imgUrl:
    "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmlrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  des: "a large motor vehicle, having a long body, equipped with seats or benches for passengers, usually operating as part of a scheduled service;omnibus. (formerly) a similar horse-drawn vehicle. a passenger automobile or airplane used in a manner resembling that of a bus.",
};

function displayCard(service) {
  const mainSection = document.getElementById("main-section");
  const div = document.createElement("div");
  const objStringified = JSON.stringify(service);

  div.innerHTML = `
    
    <div class="card mt-3 mx-auto" style="max-width: 800px;">
  <div class="row g-0">
    <div class="col-md-4 h-100">
      <img src=${service.imgUrl} class="img-fluid rounded-start h-100" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Transport Mood ${service.vehicle}</h5>
        <p class="card-text">${service.des}</p>
        <p class="card-text"><small class="text-muted">Cpacity: ${service.cpacity}</small> <small class="text-muted">Fare Per Kilo ${service.farePerKilo}</small></p>
       <button type="button" onclick='bookHndler(${objStringified})' class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>
      </div>
    </div>
  </div>
</div>
    
    
    `;
  mainSection.appendChild(div);
}

function bookHndler(obj) {
  const modalBody = document.getElementById("modal-body");
  const objString = JSON.stringify(obj);
  modalBody.innerHTML = `
  <div class="card mx-auto" style="width: 18rem;">
  <img src="${obj.imgUrl}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${obj.vehicle}</h5>
    <p class="card-text">${obj.des}</p>
    <p class="card-text">${obj.farePerKilo}</p>
   <div>
   <p><small>Fare <span id="fare"></span></small></p>
   <p><small id="tax">Tax</small></p>
   <p><small id="total-cost">Total cost</small></p>
   <input class="form-control mt-2" type="number" id="vehicle-quantity" placeholder="koita gari lagbe?" aria-label="Search">
   <input class="form-control mt-2" type="number" id="vehicle-distance"  placeholder="koto kilometer jaba?" aria-label="Search">
        <button class="btn mt-3 btn-outline-success" onclick='calculateCost(${objString})' type="submit">Submit</button></div>
  </div>
</div>
  
  
  `;
}

//1 creating a button
// and adding a onclick handler function
function calculateCost(obj) {
  const fare = document.getElementById("fare");
  const vehicleQuantity = document.getElementById("vehicle-quantity");
  const distanceQuantity = document.getElementById("vehicle-distance");

  const vehicles = vehicleQuantity.value;
  const distance = distanceQuantity.value;
  const totalFare = obj.farePerKilo * vehicles * distance;
  fare.innerText = totalFare;
}
displayCard(carObject);
displayCard(busObject);
displayCard(bikeObject);
