let myGraph2 = document.getElementById('myGraph2');
let hw2_trace1 ={};
hw2_trace1.type ="bar";
hw2_trace1.name ="在學";
hw2_trace1.x =[];
hw2_trace1.y =[];


hw2_trace1.x[0] = "2018國小生";
hw2_trace1.y[0] = 在學八[0]['count'];
hw2_trace1.x[1] = "2015國小生";
hw2_trace1.y[1] = 在學五[0]['count'];
hw2_trace1.x[2] = "2018國中生";
hw2_trace1.y[2] = 在學八[1]['count'];
hw2_trace1.x[3] = "2015國中生";
hw2_trace1.y[3] = 在學五[1]['count'];
hw2_trace1.x[4] = "2018高中職生";
hw2_trace1.y[4] = 在學八[2]['count'];
hw2_trace1.x[5] = "2015高中職生";
hw2_trace1.y[5] = 在學五[2]['count'];

let hw2_trace2 ={};
hw2_trace2.type ="bar";
hw2_trace2.name ="肄業";
hw2_trace2.x =[];
hw2_trace2.y =[];


hw2_trace2.x[0] = "2018國小生";
hw2_trace2.y[0] = 肄業八[0]['count'];
hw2_trace2.x[1] = "2015國小生";
hw2_trace2.y[1] = 肄業五[0]['count'];
hw2_trace2.x[2] = "2018國中生";
hw2_trace2.y[2] = 肄業八[1]['count'];
hw2_trace2.x[3] = "2015國中生";
hw2_trace2.y[3] = 肄業五[1]['count'];
hw2_trace2.x[4] = "2018高中職生";
hw2_trace2.y[4] = 肄業八[2]['count'];
hw2_trace2.x[5] = "2015高中職生";
hw2_trace2.y[5] = 肄業五[2]['count'];



let hw2_trace3 ={};
hw2_trace3.type ="bar";
hw2_trace3.name ="畢業";
hw2_trace3.x =[];
hw2_trace3.y =[];


hw2_trace3.x[0] = "2018國小生";
hw2_trace3.y[0] = 畢業八[0]['count'];
hw2_trace3.x[1] = "2015國小生";
hw2_trace3.y[1] = 畢業五[0]['count'];
hw2_trace3.x[2] = "2018國中生";
hw2_trace3.y[2] = 畢業八[1]['count'];
hw2_trace3.x[3] = "2015國中生";
hw2_trace3.y[3] = 畢業五[1]['count'];
hw2_trace3.x[4] = "2018高中職生";
hw2_trace3.y[4] = 畢業八[2]['count'];
hw2_trace3.x[5] = "2015高中職生";
hw2_trace3.y[5] = 畢業五[2]['count'];



let data2 =[];
data2.push(hw2_trace1);
data2.push(hw2_trace2);
data2.push(hw2_trace3);

let layout2 ={
    margin:{
        t:50
    },
    title:"從就讀情形觀察犯罪人數",
    barmode:'stack'
};
Plotly.newPlot(myGraph2, data2, layout2);