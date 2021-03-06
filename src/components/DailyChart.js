import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, CartesianAxis } from 'recharts';

class DailyChart extends PureComponent {
  constructor() {
    super();
    this.state = {
      data: [
        {
          date: '2022/03/16',
          open: 131,
          close: 134,
          high: 137,
          low: 131,
        },
        {
          date: '2022/03/17',
          open: 134,
          close: 133,
          high: 134,
          low: 127,
        },
        {
          date: '2022/03/18',
          open: 133,
          close: 141,
          high: 142,
          low: 133,
        },
        {
          date: '2022/03/19',
          open: 141,
          close: 139,
          high: 144,
          low: 137,
        },
        {
          date: '2022/03/20',
          open: 139,
          close: 141,
          high: 141,
          low: 133,
        }
      ]
    }
  }

  render() {
    const tooltipContentStyle = {
      border: "2px solid black",
      padding: "15px"
    };

    const tooltipLabelStyle = {
      fontWeight: "600",
      paddingBottom: "15px",
      textAlign: "center"
    };

    const legendWrapperStyle = {
      paddingTop: "20px",
      paddingLeft: "20px"
    }

    return (
      <section>
        <ResponsiveContainer width={"80%"} height={300} id="daily-chart">
          <BarChart data={this.state.data}>
            <CartesianAxis />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip contentStyle={tooltipContentStyle} labelStyle={tooltipLabelStyle} />
            <Legend wrapperStyle={legendWrapperStyle} />
            <Bar type="linear" dataKey="open" stroke="black" fill="black" />
            <Bar type="linear" dataKey="close" stroke="black" fill="black" />
            <Bar type="linear" dataKey="high" stroke="black" fill="mediumseagreen" />
            <Bar type="linear" dataKey="low" stroke="black" fill="red" />
          </BarChart>
        </ResponsiveContainer>
      </section>      
    );
  }
}

export default DailyChart;
