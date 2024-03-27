const config = {
    type: 'line',
    data: {
        labels: ['0', '1', '2', '3', '4', '5'],
        datasets: [{
            label: 'y = x^2',
            data: [0, 1, 4, 9, 16, 25],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Chart'
        }
      }
    },
  };

var ctx = document.getElementById('myChart').getContext('2d');

var chart = new Chart(ctx, config);
