import * as React from "react";

export default class extends React.Component<any, any>{
    
    render(){
        console.log(this.props);
        const {values, dirty, isSubmitting, handleSubmit, handleChange, handleBlur, handleReset} = this.props;
        return(
            <form onSubmit={handleSubmit}>
                <label htmlFor="email" style={{ display: 'block' }}>
                    Email
                </label>
                <input
                id="email"
                placeholder="Enter your email"
                type="text"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                />
                <button
                    type="button"
                    className="outline"
                    onClick={handleReset}
                    disabled={!dirty || isSubmitting}
                >
                    Reset
                </button>
                <button type="submit" disabled={isSubmitting}>
                    Submit
                </button>
                <div>
                    {JSON.stringify(this.props, null, 2)}
                </div>
            </form>
        )
    }
}