import React, {Component} from 'react';

class Contact extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div id="contact" className="contact-flex">
        <div id="contact-header">
          <div>QUESTIONS OR CONCERNS?</div>
          <div>WANT TO CONTRIBUTE?</div>
        </div>
        <div id="contact-body">
          <div className="contact-sub-header">CONTACT</div>
          <div id="contact-email">
            <p>If you have any questions or concerns you would like to address with us - especially any technical issues you experience while using our website, we would like to hear from you so we can address them.</p>
            <p>You can email directly at: <a href="mailto:admin@stocksprofiler.com">admin@stocksprofiler.com</a></p>
          </div>
          <div className="contact-sub-header">GITHUB</div>
          <div id="contact-git">
            <p>If you would like to contribute to the project or fix bugs - we always welcome the assistance.</p>
            <p>Please feel free to clone our repository or send feedback.</p>
            <p>You can find our GitHub at: <a href="https://github.com/MThos/stock-analyzer" target="_blank">https://github.com/MThos/stock-analyzer</a></p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;