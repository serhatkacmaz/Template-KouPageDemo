var xValues = ["İdari Personel", "4-B Sözleşmeli İdari", "Sürekli İşçi"];
var yValues = [1558, 504, 1358]
var barColors = [
    "#b91d47",
    "#00aba9",
    "#2b5797",
];

new Chart("myChart3", {
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