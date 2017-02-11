"use strict";

const React = require("React");
import { Component } from 'React';
import Checkbox from './checkbox';

class SettingsPanel extends Component {
    
    constructor(props) {
        super(props);
        this.tabs = [
            { "key": "core", "text": "Core" },
            { "key": "ui", "text": "UI" },
            { "key": "emotes", "text": "Emotes" },
            { "key": "css", "text": "Custom CSS" },
            { "key": "plugins", "text": "Plugins" },
            { "key": "themes", "text": "Themes" }
        ];
        this.settings = this.settings.bind(this);
        this.switchTab = this.switchTab.bind(this);
        this.setInitialState();
    }

    setInitialState() {
        this.state = {
            activeTab: "core"
        };
    }

    render() {
        return (
            <div className="settings-inner">
                <div className="scroller-wrap">
                    <div className="scroller settings-wrapper settings-panel user-settings-text-chat">
                        <div className="tab-bar TOP">
                            {this.tabs.map(value => {
                            return <div key={value.key} onClick={() => this.switchTab(value.key)} className={this.state.activeTab === value.key ? "tab-bar-item selected" : "tab-bar-item"}>{value.text}</div>
                            })}
                        </div>
                        <div>
                            {(this.state.activeTab === "core" || this.state.activeTab === "ui" || this.state.activeTab === "emotes") &&
                            this.settings()
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    switchTab(tab) {
        this.setState({
            activeTab: tab
        });
    }

    settings() {
        return (
            <div className="control-group">
                <ul className="checkbox-group">
                    {this.props.settings[this.state.activeTab].map(value => {
                        return <Checkbox checked={value.checked} onChange={this.handleChange.bind(this, value.key)} key={value.key} text={value.text} helptext={value.helptext} />
                    })
                    }
                </ul>
            </div>
        );
    }

    handleChange(key, checked) {
        this.props.handleChange(key, checked);
    }

}

export default SettingsPanel;