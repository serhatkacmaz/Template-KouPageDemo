var xValues = ["Fakülte", "Meslek Yüksek Okulu", "Yüksekokul", "Enstitü", "Araştırma Merkezi"];
var yValues = [18, 16, 3, 4, 13]
var barColors = [
    "#b91d47",
    "#00aba9",
    "#2b5797",
    "#e8c3b9",
    "#1e7145"
];

new Chart("myChart4", {
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