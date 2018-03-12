import React from 'react'
import LineChart from 'react-linechart';
import '../../node_modules/react-linechart/dist/styles.css';
import _ from 'lodash';

function average(data){
  var temp = 0;
  data[0].points.map((obj) => {
    temp+=obj.y;
  });
  return _.round(temp/data[0].points.length);
}

export default function(props){
  var today = new Date();
  props.data[0].points.map((obj) => {
    var newDate = new Date(today);
    newDate.setDate(newDate.getDate() + obj.x);
    obj.x = newDate.getDate();
  });
  return (
    <div>
      <LineChart
      id={props.id}
      xLabel="Day"
      yLabel={props.yLabel}
      width={400}
      height={300}
      data={props.data}
      />
      <div>AVG : {average(props.data)} {props.units}</div>
    </div>
  );
}
