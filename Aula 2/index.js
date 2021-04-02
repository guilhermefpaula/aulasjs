let a = 2
 
let b = 4
 
let c = -5
 
Δ = Math.pow(b, 2) - (4*a*c)

d = Math.sqrt(Δ)

x1 = (-b + d)/(2 * a)

x2 = (-b - d)/(2 * a)

if (d > 0) {
         console.log("Os resultados dessa equação são:", x1, "e", x2);

        } else if (d === 0) {
     console.log("O resultado dessa equação é:", x1);

    } else {
     console.log("Essa equação não possuí resultado dentro dos numeros reais");
 }
