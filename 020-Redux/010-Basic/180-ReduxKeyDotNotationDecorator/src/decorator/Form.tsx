import * as React from "react";

export default (Element) => {
    return class extends React.Component {
        render() {
            return (
                <div>
                    <div>Before</div>
                    <Element/>
                    <div>Before</div>
                </div>
            );
        }
    };
}