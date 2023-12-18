import React, { Component } from "react";
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="code">
        <div className="codeLink">
          {/* <div className="ten columns"> */}
            <ul className="code-links">
              {resumeData.codeLinks &&
                resumeData.codeLinks.map((item) => {
                  return (
                    <li>
                      <a href={item.url}>
                        <img
                          src={`${item.imgurl}`}
                          alt={`${item.name}`}
                          className="item-img"
                        />
                      </a>
                    </li>
                  );
                })}
            </ul>
          {/* </div> */}
        </div>
      </section>
    );
  }
}
