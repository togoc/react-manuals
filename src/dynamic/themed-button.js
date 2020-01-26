import React from 'react';
import { ThemeContext } from './theme-context';

class ThemedButton extends React.Component {
    static contextType = ThemeContext
    render() {
        console.log(ThemeContext)
        let props = this.props;
        let theme = this.context;
        console.log(props)
        return (
            <button
                {...props}
                style={{ backgroundColor: theme.background }}
            />
        );
    }
}

// ThemedButton.contextType = ThemeContext; //等价于  static contextType = ThemeContext

export default ThemedButton;