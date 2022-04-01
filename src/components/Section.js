import React, {Component} from 'react';
import ChartTimeBar from './ChartTimeBar';
import DailyChart from './DailyChart';
import Company from './Company';
import Details from './Details';
import Financials from './Financials';
import Analysis from './Analysis';

class Section extends Component {
  constructor() {
    super();
  }

  render() {
    let active = this.props.active;

    if (active === "charts") {
      return(
        <section>
          <ChartTimeBar />
          <DailyChart />
        </section>
      );
    } else if (active === "details") {
      return(
        <section>
          <Details />
        </section>
      )
    } else if (active === "financials") {
      return(
        <section>
          <Financials />
        </section>
      )
    } else if (active === "analysis") {
      return(
        <section>
          <Analysis />
        </section>
      )
    } else if (active === "company") {
      return(
        <section>
          <Company />
        </section>
      )
    }
  }
}

export default Section;