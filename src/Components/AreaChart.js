import React, { Component } from 'react';
 
 
class AreaChart extends Component {
  render() {
    return (
      <div className="App">
        <div className="card mb-3">
            <div className="card-header">
              <i className="fa fa-area-chart"></i> Area Chart Example</div>
            <div className="card-body">
              <canvas id="myAreaChart" width="100%" height="30"></canvas>
            </div>
            <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
          </div>

      </div>
        )
    }
  }

  export default AreaChart;