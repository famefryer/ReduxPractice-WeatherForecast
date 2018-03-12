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
      <div>{average(props.data)}</div>
    </div>
  );
}
