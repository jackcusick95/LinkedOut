import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this); 
    }

    update(field) {
        return (e) => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        // debugger
        e.preventDefault();
        this.props.processForm(this.state)
        // .then(() => this.props.history.push('/')); 
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        ); 
    }

    render() {
        return (
            <div className="session-form-container">
                <form className="session-form-box" onSubmit={this.handleSubmit}>
                <h1 className="form-type-header">{this.props.formType}</h1>
                <p className="form-headline">Stay updated on your professional world</p>
                    {this.renderErrors()}
                <div className="session-from-inputs">
                    <label>Email
                        <input className="session-input" type="text" value={this.state.email} onChange={this.update('email')}/>
                    </label>
                    <label>Password
                        <input className="session-input" type="Password" value={this.state.password} onChange={this.update('password')} />
                    </label>
                        <input className="session-submit" type="submit" value={this.props.formType}/>
                </div>
                </form>
                {/* <button>Continue as DEMO user!</button> */}
                <div className="nav-container">
                    <section>{this.props.navHeader}
                       {this.props.navLink}
                    </section>
                </div>
            </div>
        )
    }
}

export default SessionForm; 