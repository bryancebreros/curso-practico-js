console.group("Cuadrado: ");
const ladoCuadrado = 5;
console.log("Lado del cuadrado = " + ladoCuadrado);
const perCuadrado = 5*4;
console.log("Perimetro del Cuadrado = " + perCuadrado);
const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("Area del cuadrado = " + areaCuadrado + "cm^2")
console.groupEnd();
//Codigo del Triangulo
console.group("Triangulo: ");
const ladoTriangulob = 6;
const ladoTrianguloa = 6;
const ladoTrianguloc = 6;
console.log("Lados del Triangulo = " + ladoTrianguloa + ", " + ladoTriangulob + ", " + ladoTrianguloc);
const perTriangulo = ladoTrianguloa + ladoTriangulob + ladoTrianguloc;
console.log("Perimetro del Triangulo = " + perTriangulo);
const areaTriangulo = (ladoTrianguloa * 6) / 2;
console.log("Area del Triangulo = " + areaTriangulo + "cm^2");
console.groupEnd();