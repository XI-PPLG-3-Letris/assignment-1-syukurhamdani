// penjumlahan
const penjumlahan = (a,b) => {
    let c = "ini hasil dari penjumlahan";
    let d = "=";
    console.log(c, d, a+b)
}
penjumlahan(56,44)

// pengurangan
const pengurangan = (a,b) => {
    let z = "ini hasil dari pengurangan";
    let o = "=";
    console.log(`${z} = ${a-b}`)
}
pengurangan(999,899)

// perkalian
const perkalian = (a,b) => {
    let n = "ini hasil dari perkalian";
    let m = "adalah";
    console.log(`${n} ${m} = ${a*b}`)
}
perkalian(25,4)

// pembagian
const pembagian = (a,b) => {
    let f = "ini hasil dari pembagian";
    let w = 2
    let q = a;
    console.log(`${f} ${a} dibagi ${w} = ${a/b}`)
}
pembagian(200,2)

// modulus
const modulus = (a,b) => {
    let l = "hasil modulus dari";
    let y = 100000
    console.log(`${l} ${y} adalah = ${a%b}`)
}
modulus(100,100000)

// perpangkatan
const perpangkatan = (a,b) => {
    let r = "ini hasil dari perpangkatan";
    let t = a;
    let j = b;
    console.log(r + " " + t + " pangkat " + j + " = " +a**b)
}
perpangkatan(10,2)