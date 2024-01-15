let myGraph1 = document.getElementById('myGraph1');

// 數據集1
let hw_trace1 = {
    mode: "markers+lines+text",
    type: "scatter",
    name: "2018",
    marker: {
        size: 10
    },
    textposition: "top center",  // 設置文本標籤在點的上面
    textfont: {
        size: 20, 
    },
    x: [],
    y: [],
    text: []
};

// 填充數據集1
for (let i = 0; i < set1.length; i++) {
    hw_trace1.x[i] = set1[i][0];
    hw_trace1.y[i] = set1[i][1];
    hw_trace1.text[i] = set1[i][2];
   
}

// 數據集2
let hw_trace2 = {
    mode: "markers+lines+text",
    type: "scatter",
    name: "2015",
    marker: {
        size: 10
    },
    textposition: "top center",  // 設置文本標籤在點的上面
    textfont: {
        size: 20,  
    },
    x: [],
    y: [],
    text: []
};

// 填充數據集2
for (let i = 0; i < set2.length; i++) {
    hw_trace2.x[i] = set2[i][0];
    hw_trace2.y[i] = set2[i][1];
    hw_trace2.text[i] = set2[i][2];
    
}

let data = [hw_trace1, hw_trace2];

let layout = {
    margin: {
        t: 50
    },
    xaxis: {
        range: [11, 18],
        title: "年紀(歲)"
    },
    yaxis: {
        range: [0, 300],
        title: "犯罪人數(人)"
    },
    title: "青少年犯罪人數",
    updatemenus: 
        {
            y: 1.2,
            x: 0.2,
            yanchor: 'top',
        }
    
};

Plotly.newPlot(myGraph1, data, layout);
