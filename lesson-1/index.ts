let primativeName:string;
primativeName = "Orifjon";
console.log(primativeName);


let unionAge:number|boolean;
unionAge = 21;
unionAge = true;
console.log(unionAge);


let dynamicSum:any;
dynamicSum = 1000;
dynamicSum = "1000";
dynamicSum = false;
console.log(dynamicSum);

let literalCar: "red" | "blue";
literalCar = "blue";
console.log(literalCar);

let products: {
    id:number|string;
    name:string;
    size:boolean;
};

products = {
    id: 12345,
    name:"apple",
    size:true
}

console.log(products);


let ids:number[] = [];
ids.push(1);
console.log(ids);

type unitss = string | number;
// var kg:units=12;
// var size:units="add";
// console.log(kg,size);

// interface name {
//     uz:string;
//     cyr:string;
//     ru:string;
// }

interface colors {
    name:string;
    color:string;
}

interface units {
    title:string;
    sizes:sizes[]
}

interface sizes {
    name:string;
}

interface main {
    name:string;
    images:string[];
    price:string;
    shortDescription:string;
    longDescription:string;
    category:string;
    subCategory:string;
    brand:string;
    count:number;
    colors:colors[];
    units:units;
}

let nmadir: main = {
    "name": "Smartfon iPhone 14 Pro 128GB Purple",
    "images": [
        "https://images.uzum.uz/ci1g91rltlh4bk4laa30/original.jpg",
        "https://images.uzum.uz/ci1g91r6edfostigj1u0/original.jpg",
        "https://images.uzum.uz/ci1g92bltlh4bk4laa4g/original.jpg"
    ],
    "price": "15000000",
    "shortDescription": "Markaziy protsessor Apple Bionic A16 Ekran o'lchamlari 2556x1179 CPU chastotasi 2300 MGts Eshitish vositasi chiqishi Lighting Aloqa standarti 2G 3G 4G LTE 5G",
    "longDescription": "Markaziy protsessor Apple Bionic A16 Ekran o'lchamlari 2556x1179 CPU chastotasi 2300 MGts Eshitish vositasi chiqishi Lighting Aloqa standarti 2G 3G 4G LTE 5G",
    "category": "64c6de0d4d748db5916c3d30",
    "subCategory": "64c8d732b823d24b1c38835a",
    "brand": "64ca3c52afa7a02dcbcf49c6",
    "count": 10,
    "colors": [
        {
            "name": "Qora",
            "color": "#000"  
        },
        {
            "name": "Oq",
            "color": "#fff"
        }
    ],
    "units": {
        "title": "Xotira",
        "sizes": [
            {
                "name": "128GB"
            },
            {
                "name": "256GB"
            }
        ]
    }
}







