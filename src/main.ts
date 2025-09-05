import ApexCharts, { ApexOptions } from "apexcharts";

// 샘플 데이터
const data = [
  { month: "1월", value: 120 },
  { month: "2월", value: 150 },
  { month: "3월", value: 180 },
  { month: "4월", value: 130 },
  { month: "5월", value: 200 },
  { month: "6월", value: 250 },
  { month: "7월", value: 300 },
  { month: "8월", value: 280 },
  { month: "9월", value: 260 },
  { month: "10월", value: 310 },
  { month: "11월", value: 400 },
  { month: "12월", value: 450 },
];
 
// 옵션 정의
const options: ApexOptions = {
  chart: {
    type: "bar",
    height: 350,
    toolbar: { show: false },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "50%",
      borderRadius: 6,
    },
  },
  xaxis: {
    categories: data.map((d) => d.month),
  },
  series: [
    {
      name: "매출",
      data: data.map((d) => d.value),
    },
  ],
};

// 차트 렌더링
const chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
