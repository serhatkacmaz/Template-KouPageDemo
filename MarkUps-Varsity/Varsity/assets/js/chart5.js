var xValues = ["Kitap (Basılı + Elektronik) Sayısı", "Dergi (Basılı + Elektronik) Sayısı", "Tez (Basılı + Elektronik) Sayısı"];
var yValues = [405983, 58250, 2.804]
var barColors = [
    "#b91d47",
    "#00aba9",
    "#2b5797",
    "#e8c3b9",
    "#1e7145"
];

new Chart("myChart5", {
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