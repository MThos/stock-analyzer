import React, {Component} from 'react';
import ChartTimeBar from './ChartTimeBar';
import DailyChart from './DailyChart';
import Company from './Company';
import Details from './Details';
import Financials from './Financials';
import Analysis from './Analysis';
import Terms from './Terms';
import Privacy from './Privacy';
import Cookies from './Cookies';
import Contact from './Contact';

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
    } else if (active === "terms") {
      return(
        <section>
          <Terms />
        </section>
      )
    } else if (active === "privacy") {
      return(
        <section>
          <Privacy />
        </section>
      )
    } else if (active === "cookies") {
      return(
        <section>
          <Cookies />
        </section>
      )
    } else if (active === "contact") {
      return(
        <section>
          <Contact />
        </section>
      )
    }
  }
}

export default Section;