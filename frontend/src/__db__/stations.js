


const Graphs = [

    // Linha Azul
    {
        id: "0",
        name: "San Pedrito",
        line: "A",
        color: "Blue",
        list_neighbor: [1]
    },
    {
        id: "1",
        name: "San José de Flores",
        line: "A",
        color: "Blue",
        list_neighbor: [0, 2]
    },
    {
        id: "2",
        name: "Carabobo",
        line: "A",
        color: "Blue",
        list_neighbor: [1, 3]
    },
    {
        id: "3",
        name: "Puan",
        line: "A",
        color: "Blue",
        list_neighbor: [2, 4]
    },
    {
        id: "4",
        name: "Primera Junta",
        line: "A",
        color: "Blue",
        list_neighbor: [3, 5]
    },
    {
        id: "5",
        name: "Acoyte",
        line: "A",
        color: "Blue",
        list_neighbor: [4, 6]
    },
    {
        id: "6",
        name: "Río de Janeiro",
        line: "A",
        color: "Blue",
        list_neighbor: [5, 7]
    },
    {
        id: "7",
        name: "Castro Barros",
        line: "A",
        color: "Blue",
        list_neighbor: [6, 8]
    },
    {
        id: "8",
        name: "Loria",
        line: "A",
        color: "Blue",
        list_neighbor: [7, 9]
    },
    {
        id: "9",
        name: "Plaza Miserere",     // A
        line: "A",
        color: "Blue",
        list_neighbor: [8, 10, 81]
    },
    {
        id: "10",
        name: "Alberti",
        line: "A",
        color: "Blue",
        list_neighbor: [9, 11]
    },
    {
        id: "11",
        name: "Pasco",
        line: "A",
        color: "Blue",
        list_neighbor: [10, 12]
    },
    {
        id: "12",
        name: "Congresso",
        line: "A",
        color: "Blue",
        list_neighbor: [11, 13]
    },
    {
        id: "13",
        name: "Sáenz Peña",
        line: "A",
        color: "Blue",
        list_neighbor: [12, 14]
    },
    {
        id: "14",
        name: "Lima",
        line: "A",
        color: "Blue",
        list_neighbor: [13, 15]
    },
    {
        id: "15",
        name: "Av. de Mayo",    //a
        line: "A",
        color: "Blue",
        list_neighbor: [14,16,36,37]
    },
    {
        id: "16",
        name: "Piedras",
        line: "A",
        color: "Blue",
        list_neighbor: [15, 17]
    },
    {
        id: "17",
        name: "perú",
        line: "A",
        color: "Blue",
        list_neighbor: [16, 18, 41]
    },
    {
        id: "18",
        name: "Plaza de Mayo Casa Rosada",
        line: "A",
        color: "Blue",
        list_neighbor: [17]
    },

    // Linha  Vermelha

    {
        id: "19",
        name: "Leandro N. Alem",    //A
        line: "B",
        color: "Red",
        list_neighbor: [20,60,59]
    },
    {
        id: "20",
        name: "Florida",
        line: "B",
        color: "Red",
        list_neighbor: [19, 21]
    },
    {
        id: "21",
        name: "Carlos Pellegrini",    //A
        line: "B",
        color: "Red",
        list_neighbor: [20,22,43]
    },
    {
        id: "22",
        name: "Uruguay",
        line: "B",
        color: "Red",
        list_neighbor: [21, 23]
    },
    {
        id: "23",
        name: "Callao - Maestro Bravo",
        line: "B",
        color: "Red",
        list_neighbor: [22, 88]
    },
    {
        id: "24",
        name: "Pueyrredón - Red", //A
        line: "B",
        color: "Red",
        list_neighbor: [88, 25,80]
    },
    {
        id: "25",
        name: "Carlos Gardel",
        line: "B",
        color: "Red",
        list_neighbor: [24, 26]
    },
    {
        id: "26",
        name: "Medrano Almagro",
        line: "B",
        color: "Red",
        list_neighbor: [25,27]
    },
    {
        id: "27",
        name: "Ángel Gallardo",
        line: "B",
        color: "Red",
        list_neighbor: [26, 28]
    },
    {
        id: "28",
        name: "Malabia O. Pugliese",
        line: "B",
        color: "Red",
        list_neighbor: [27, 29]
    },
    {
        id: "29",
        name: "Dorrego",
        line: "B",
        color: "Red",
        list_neighbor: [28, 30]
    },
    {
        id: "30",
        name: "F.Lacroze",
        line: "B",
        color: "Red",
        list_neighbor: [29, 31]
    },
    {
        id: "31",
        name: "De los Incas Parque Chas",
        line: "B",
        color: "Red",
        list_neighbor: [30, 32]
    },
    {
        id: "32",
        name: "Echeverría",
        line: "B",
        color: "Red",
        list_neighbor: [31, 32]
    },
    {
        id: "33",
        name: "Juan Manuel de ROsas Villa Urquiza",
        line: "B",
        color: "Red",
        list_neighbor: [32]
    },
    {
        id: "88",
        name: "Pasteur AMIA",
        line: "B",
        color: "Red",
        list_neighbor: [24,23]
    },
    



    // Linha Azul Escuro

    {
        id: "34",
        name: "Retiro - Dark Blue",     //A
        line: "C",
        color: "Dark Blue",
        list_neighbor: [35,59]
    },
    {
        id: "35",
        name: "General San Martín",
        line: "C",
        color: "Dark Blue",
        list_neighbor: [34, 36]
    },
    {
        id: "36",
        name: "Lavalle",
        line: "C",
        color: "Dark Blue",
        list_neighbor: [35, 15]
    },
    {
        id: "37",
        name: "Moreno",
        line: "C",
        color: "Dark Blue",
        list_neighbor: [38, 15]
    },
    {
        id: "38",
        name: "Independencia - Dark Blue",    //A
        line: "C",
        color: "Dark Blue",
        list_neighbor: [37,39,63]
    },
    {
        id: "39",
        name: "San Juan",
        line: "C",
        color: "Dark Blue",
        list_neighbor: [38, 40]
    },
    {
        id: "40",
        name: "Constitucíon",
        line: "C",
        color: "Dark Blue",
        list_neighbor: [39]
    },



    //Linha Verde
    {
        id: "41",
        name: "Catedral", //A
        line: "D",
        color: "Green",
        list_neighbor: [42,60,61,17]
    },
    {
        id: "42",
        name: "Diagonal Norte",
        line: "D",
        color: "Green",
        list_neighbor: [41, 43]
    },
    {
        id: "43",
        name: "9 de Julio", //A
        line: "D",
        color: "Green",
        list_neighbor: [42, 44,21]
    },
    {
        id: "44",
        name: "Tribunales Teatro Colón",
        line: "D",
        color: "Green",
        list_neighbor: [43, 45]
    },
    {
        id: "45",
        name: "Callao",
        line: "D",
        color: "Green",
        list_neighbor: [46,48]
    },
    {
        id: "46",
        name: "Faculdad de Medicina",
        line: "D",
        color: "Green",
        list_neighbor: [45, 47]
    },
    {
        id: "47",
        name: "Pueyrredón - Green", //A
        line: "D",
        color: "Green",
        list_neighbor: [46, 48,78]
    },
    {
        id: "48",
        name: "Agüero",
        line: "D",
        color: "Green",
        list_neighbor: [47, 49]
    },
    {
        id: "49",
        name: "Bulnes",
        line: "D",
        color: "Green",
        list_neighbor: [48, 50]
    },
    {
        id: "50",
        name: "Scalabrini Ortiz",
        line: "D",
        color: "Green",
        list_neighbor: [49, 51]
    },
    {
        id: "51",
        name: "PLaza Italia",
        line: "D",
        color: "Green",
        list_neighbor: [50, 52]
    },
    {
        id: "52",
        name: "Palermo",
        line: "D",
        color: "Green",
        list_neighbor: [51, 53]
    },
    {
        id: "53",
        name: "Mtro. Carranza",
        line: "D",
        color: "Green",
        list_neighbor: [52, 54]
    },
    {
        id: "54",
        name: "Olleros",
        line: "D",
        color: "Green",
        list_neighbor: [53, 55]
    },
    {
        id: "55",
        name: "José Hernández",
        line: "D",
        color: "Green",
        list_neighbor: [54, 56]
    },
    {
        id: "56",
        name: "Juramento",
        line: "D",
        color: "Green",
        list_neighbor: [55, 57]
    },
    {
        id: "57",
        name: "Congreso de Tucmnán",
        line: "D",
        color: "Green",
        list_neighbor: [57]
    },
    //Linha Roxa
    {
        id: "58",
        name: "Retiro - Purple", //A
        line: "E",
        color: "Purple",
        list_neighbor: [59,35]
    },
    {
        id: "59",
        name: "Catalinas",
        line: "E",
        color: "Purple",
        list_neighbor: [58,19]
    },
    {
        id: "60",
        name: "Correo Central",  
        line: "E",
        color: "Purple",
        list_neighbor: [19,41]
    },
    {
        id: "61",
        name: "Bolívar",
        line: "E",      //A
        color: "Purple",
        list_neighbor: [17,62]
    },
    {
        id: "62",
        name: "Belgrano",
        line: "E",
        color: "Purple",
        list_neighbor: [61, 63]
    },
    {
        id: "63",
        name: "Independencia - Purple",  //A  
        line: "E",
        color: "Purple",
        list_neighbor: [62, 64,38]
    },
    {
        id: "64",
        name: "San José",
        line: "E",
        color: "Purple",
        list_neighbor: [63, 65]
    },
    {
        id: "65",
        name: "Entre Ríos Rodolfo Walsh",
        line: "E",
        color: "Purple",
        list_neighbor: [64, 66]
    },
    {
        id: "66",
        name: "Pichincha",
        line: "E",
        color: "Purple",
        list_neighbor: [65, 57]
    },
    {
        id: "67",
        name: "Jujuy",   //A 
        line: "E",
        color: "Purple",
        list_neighbor: [66, 68, 83]
    },
    {
        id: "68",
        name: "Gral. Urquiza",
        line: "E",
        color: "Purple",
        list_neighbor: [67, 69]
    },
    {
        id: "69",
        name: "Boedo",
        line: "E",
        color: "Purple",
        list_neighbor: [68, 70]
    },
    {
        id: "70",
        name: "San Av. La Plata",
        line: "E",
        color: "Purple",
        list_neighbor: [69, 71]
    },
    {
        id: "71",
        name: "José María Moreno",
        line: "E",
        color: "Purple",
        list_neighbor: [70, 72]
    },
    {
        id: "72",
        name: "Emilio Mitre",
        line: "E",
        color: "Purple",
        list_neighbor: [71, 73]
    },
    {
        id: "73",
        name: "Medalla Milagrosa",
        line: "E",
        color: "Purple",
        list_neighbor: [72, 74]
    }, {
        id: "74",
        name: "Varela",
        line: "E",
        color: "Purple",
        list_neighbor: [73, 75]
    }, {
        id: "75",
        name: "José María Moreno",
        line: "E",
        color: "Purple",
        list_neighbor: [72]
    },




    //Linha Amarela
    {
        id: "76",
        name: "Facultad de Derecho Julieta Lanteri",
        line: "E",
        color: "Yellow",
        list_neighbor: [77]
    },
    {
        id: "77",
        name: "Las Heras",
        line: "E",
        color: "Yellow",
        list_neighbor: [76, 78]
    },
    {
        id: "78",
        name: "Santa Fe Carlos Jáuregui", //A    
        line: "E",
        color: "Yellow",
        list_neighbor: [77, 79,47]
    },
    {
        id: "79",
        name: "Córdoba",
        line: "E",
        color: "Yellow",
        list_neighbor: [78, 80]
    },
    {
        id: "80",
        name: "Corrientes",    //A
        line: "E",
        color: "Yellow",
        list_neighbor: [79, 81,24]
    },
    {
        id: "81",
        name: "Once - 30 de Deciembre", //A   
        line: "E",
        color: "Yellow",
        list_neighbor: [80,82,24]
    },
    {
        id: "82",
        name: "Venezuela",
        line: "E",
        color: "Yellow",
        list_neighbor: [81, 83]
    },
    {
        id: "83",
        name: "Humberto 1",    //A
        line: "E",
        color: "Yellow",
        list_neighbor: [82, 84, 67]
    },
    {
        id: "84",
        name: "Inclán Mezquita Al Ahmad",
        line: "E",
        color: "Yellow",
        list_neighbor: [83, 85]
    },
    {
        id: "85",
        name: "Caseros",
        line: "E",
        color: "Yellow",
        list_neighbor: [84, 86]
    },
    {
        id: "86",
        name: "Parque Patricios",
        line: "E",
        color: "Yellow",
        list_neighbor: [85, 87]
    },
    {
        id: "87",
        name: "Hospitales",
        line: "E",
        color: "Yellow",
        list_neighbor: [86]
    },



]

const result = ()=>{

        const path = [];
        Graphs.map((item)=>{
            result.map((itenzin)=>{
                if(itenzin == parseInt(item.id)){
                    const element = {
                        name: item.name
                    }
                    path.push(element)
                }
            })
        
            
        })
       return path  

}
    
export default Graphs