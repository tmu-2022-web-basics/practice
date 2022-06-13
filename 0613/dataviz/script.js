function renderChart() {
  const data = document.querySelector('#data').value.split('\n');

  const div = document.querySelector('#chart');
  div.innerHTML = '';

  for (let datum of data) {
    const bar = document.createElement('div');
    bar.classList.add('bar');
    bar.style.width = datum * 10 + 'px';
    div.appendChild(bar);
  }
}

document.querySelector('#data').oninput = renderChart;

renderChart();
