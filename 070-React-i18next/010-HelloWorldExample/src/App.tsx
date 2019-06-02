import * as React from "react";
import * as ReactDOM from "react-dom";
import i18n from "i18next";
import { reactI18nextModule, withI18n } from "react-i18next";

i18n.use(reactI18nextModule).init({
    resources: {
        en: {
            translation: {
            "Hello World": "Hello World to React and react-i18next"
            }
        }
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
        escapeValue: false
    }
});

class App extends React.Component<any, any>{
    
    render(){
        const { t } = this.props;

        return (
            <div>
                <h1>{t('Hello World')}</h1>
            </div>            
        )
    }

}
const AppWithI18n = withI18n()(App)

ReactDOM.render(<AppWithI18n/>, document.getElementById('app'));

    
