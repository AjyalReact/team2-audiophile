import React from "react";
import "../../footer.css";
export default class Footer extends React.Component {
  render() {
    return (
     <>
      <footer >
            <section className="footerContent">
                <div className="item1">
                    <h1 className="footerTitle">ali abpu elgomboz</h1>
                    <p className="footerLongText">lorem loremloreml oremlorem loremlorem loreml lorem loremloreml oremlorem loremlorem loreml lorem loremloreml oremlorem loremlorem loreml oremloremlorem loremloremlo remlorem </p>
                    <p className="footerShortText">lorem lorem loremlorem</p>
                </div>
                <div className="item2">
                    <ul className="footerUL1">
                        <li>lorem</li>
                        <li>loremhgfs</li>
                        <li>loremlh</li>
                        <li>loremkjvgr</li>
                    </ul>
                    <ul className="footerUL2">
                        <li>icon</li>
                        <li>icon</li>
                        <li>icon</li>
                    </ul>
                </div>
          </section>
      </footer>

     </>
    );
  }
}