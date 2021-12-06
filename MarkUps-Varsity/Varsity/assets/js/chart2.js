var xValues = ["Profesör", "Doçent", "Dr. Öğr. Üyesi", "Öğretim Görevlisi", "Araştırma Görevlisi"];
var yValues = [306, 223, 469, 463, 877]
var barColors = [
    "#b91d47",
    "#00aba9",
    "#2b5797",
    "#e8c3b9",
    "#1e7145"
];

new Chart("myChart2", {
    type: "pie",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColors,
            data: yValues
        }]
    },
    options: {
        title: {
            display: true,
        }
    }
});