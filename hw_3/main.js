let myGraph3=document.getElementById('myGraph3');

let hw3_trace1 ={};
hw3_trace1.type ="pie";
hw3_trace1.title = "2018年犯罪原因";
hw3_trace1.labels =[];
hw3_trace1.values =[];
hw3_trace1.hole = 0.5;
hw3_trace1.domain = {
    row: 0,
    column: 0
};

for(let x = 0;x <二零一八年.length; x++)
{
    hw3_trace1.labels[x] = 二零一八年[x]["name"];
    hw3_trace1.values[x] = 二零一八年[x]["count"];
}

let hw3_trace2 ={};
hw3_trace2.type ="pie";
hw3_trace2.title ="2015年犯罪原因" ;
hw3_trace2.labels =[];
hw3_trace2.values =[];
hw3_trace2.hole = 0.5;
hw3_trace2.domain = {
    row: 0,
    column: 1
};

for(let x = 0;x <二零一五年.length; x++)
{
    hw3_trace2.labels[x] = 二零一五年[x]["name"];
    hw3_trace2.values[x] = 二零一五年[x]["count"];
}

let hw3_trace3 ={};
hw3_trace3.type ="pie";
hw3_trace3.title = "2018年性別";
hw3_trace3.labels =[];
hw3_trace3.values =[];
hw3_trace3.hole = 0.5;
hw3_trace3.domain = {
    row: 1,
    column: 0
};

for(let x = 0;x <二零一八年性別.length; x++)
{
    hw3_trace3.labels[x] = 二零一八年性別[x]["name"];
    hw3_trace3.values[x] = 二零一八年性別[x]["count"];
} 

let hw3_trace4 ={};
hw3_trace4.type ="pie";
hw3_trace4.title = "2015年性別";
hw3_trace4.labels =[];
hw3_trace4.values =[];
hw3_trace4.hole = 0.5;
hw3_trace4.domain = {
    row: 1,
    column: 1
};

for(let x = 0;x <二零一五年性別.length; x++)
{
    hw3_trace4.labels[x] = 二零一五年性別[x]["name"];
    hw3_trace4.values[x] = 二零一五年性別[x]["count"];
}

let data3 =[];
data3.push(hw3_trace1);
data3.push(hw3_trace2);
data3.push(hw3_trace3);
data3.push(hw3_trace4);
let layout3 ={
    margin:{
        t:30,
        l:0,
    },
    grid:{
        rows: 2,
        columns: 2
    },
    title: {
        text: "台中青少年犯罪原因",
        x: 0.4,  
        }
}

Plotly.newPlot(myGraph3, data3, layout3);
