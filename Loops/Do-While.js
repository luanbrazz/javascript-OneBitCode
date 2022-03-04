let velocity = 50
let acceleration = 5

do {
    console.log("Acelerando: estamos a " + velocity + "km/s")
    velocity += acceleration
} while (velocity <= 100)

/* >> "Acelerando: estamos a 50km/s" */
/* >> "Acelerando: estamos a 55km/s" */
/* >> "Acelerando: estamos a 60km/s" */
/* >> "Acelerando: estamos a 65km/s" */
/* >> "Acelerando: estamos a 70km/s" */
/* >> "Acelerando: estamos a 75km/s" */
/* >> "Acelerando: estamos a 80km/s" */
/* >> "Acelerando: estamos a 85km/s" */
/* >> "Acelerando: estamos a 90km/s" */
/* >> "Acelerando: estamos a 95km/s" */
/* >> "Acelerando: estamos a 100km/s" */