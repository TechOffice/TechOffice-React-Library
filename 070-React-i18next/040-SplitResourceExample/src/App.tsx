import * as React from "react";
import * as ReactDOM from "react-dom";
import i18n from "./i18n";
import { I18nextProvider, withNamespaces } from "react-i18next";

@(withNamespaces() as any)
class App extends React.Component<any, any>{
    
    render(){
        const { t } = this.props;

        return (
            <div>
                <h1>{t('name.label')}</h1>
                <h1>{t('no transalate')}</h1>
            </div>            
        )
    }

}


ReactDOM.render(
    <I18nextProvider i18n={i18n}>
        <App/>
    </I18nextProvider>
, document.getElementById('app'));

    
