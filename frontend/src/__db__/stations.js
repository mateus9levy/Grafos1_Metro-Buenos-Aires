


const Graphs = [

// Linha Azul
    {
        id:   "0",
        name: "San Pedrito",
        line: "A",
        color: "Blue",
        list_neighbor:[1]
    },
    {
        id:   "1",
        name: "San José de Flores",
        line: "A",
        color: "Blue",
        list_neighbor:[0,2]
    },
    {
        id:   "2",
        name: "Carabobo",
        line: "A",
        color: "Blue",
        list_neighbor:[1,3]
    },
    {
        id:   "3",
        name: "Puan",
        line: "A",
        color: "Blue",
        list_neighbor:[2,4]
    },
    {
        id:   "4",
        name: "Primera Junta",
        line: "A",
        color: "Blue",
        list_neighbor:[3,5]
    },
    {
        id:   "5",
        name: "Acoyte",
        line: "A",
        color: "Blue",
        list_neighbor:[4,6]
    },
    {
        id:   "6",
        name: "Río de Janeiro",
        line: "A",
        color: "Blue",
        list_neighbor:[5,7]
    },
    {
        id:   "7",
        name: "Castro Barros",
        line: "A",
        color: "Blue",
        list_neighbor:[6,8]
    },
    {
        id:   "8",
        name: "Loria",
        line: "A",
        color: "Blue",
        list_neighbor:[7,9]
    },
    {
        id:   "9",
        name: "Plaza Miserere",     // A
        line: "A",
        color: "Blue",
        list_neighbor:[8,10]
    },
    {
        id:   "10",
        name: "Alberti",    
        line: "A",
        color: "Blue",
        list_neighbor:[9,11]
    },
    {
        id:   "11",
        name: "Pasco",    
        line: "A",
        color: "Blue",
        list_neighbor:[10,12]
    },
    {
        id:   "12",
        name: "Congresso",    
        line: "A",
        color: "Blue",
        list_neighbor:[11,13]
    },
    {
        id:   "13",
        name: "Sáenz Peña",    
        line: "A",
        color: "Blue",
        list_neighbor:[12,14]
    },
    {
        id:   "14",
        name: "Lima",    
        line: "A",
        color: "Blue",
        list_neighbor:[13,15]
    },
    {
        id:   "15",
        name: "Av. de Mayo",    //a
        line: "A",
        color: "Blue",
        list_neighbor:[14,16]
    },
    {
        id:   "16",
        name: "Piedras",    
        line: "A",
        color: "Blue",
        list_neighbor:[15,17]
    },
    {
        id:   "17",
        name: "perú",    
        line: "A",
        color: "Blue",
        list_neighbor:[16,18]
    },
    {
        id:   "17",
        name: "Plaza de Mayo Casa Rosada",    
        line: "A",
        color: "Blue",
        list_neighbor:[17]
    },

// Linha  Vermelha

    {
        id:   "18",
        name: "Leandro N. Alem",    //A
        line: "B",
        color: "Red",
        list_neighbor:[19]
    },
    {
        id:   "19",
        name: "Florida",
        line: "B",
        color: "Red",
        list_neighbor:[18,20]
    },
    {
        id:   "20",
        name: "Carlos Pellegrini",    //A
        line: "B",
        color: "Red",
        list_neighbor:[19]
    },



]


export default Graphs