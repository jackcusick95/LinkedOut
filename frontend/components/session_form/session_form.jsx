import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formNum: 0,
            email: '',
            password: '',
            fname: '',
            lname: '',
            location: '',
            zipcode: '',
            title: '',
            industry: '',
            company: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this); 
        this.nextForm = this.nextForm.bind(this);
        this.demoLogin = this.demoLogin.bind(this); 
        this.renderErrors = this.renderErrors.bind(this); 
        this.handleErrors = this.handleErrors.bind(this); 
    }

    componentDidMount() {
        if (this.props.errors.length !== 0) this.props.clearErrors()
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

    nextForm(num) {
        return (e) => {
            e.preventDefault();
            // this.props.formNum = num; 
            this.setState({formNum: num});
        }
    }

    demoLogin(e) {
        e.preventDefault()
        this.props.processForm({
            email: "demouser@demo.com",
            password: "password123",
            fname: 'Demo',
            lname: 'User',
            location: 'United States',
            zipcode: '10013',
            title: 'DemoUser',
            industry: 'Social Media',
            company: 'Demo Co.'
        })
    }

    handleErrors() {
        if (this.props.errors.length !== 0) this.props.renderErrors()
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

        if (this.props.formType === 'Sign in') {

            return ( 
                <div className="session-form-container">
                    <Link to={"/"}>
                        <img className='logo' src={window.logo} />
                    </Link>
                    <form className="session-form-box" onSubmit={this.handleSubmit}>
                        <h1 className="form-type-header">{this.props.formType}</h1>
                        <p className="form-headline">Stay updated on your professional life</p>
                        <p id="errors">{this.renderErrors()}</p>
                        <div className="session-form-inputs">
                            <label>Email:
                                <input className="session-input" type="text" value={this.state.email} onChange={this.update('email')} />
                            </label>
                            {/* <p>{this.props.errors[0]}</p> */}
                            <label>Password:
                                <input className="session-input" type="Password" value={this.state.password} onChange={this.update('password')} />
                            </label>
                            {/* <p>{this.props.errors[0]}</p> */}
                            <section className="action-buttons">
                                <input type="submit" className="session-submit" value={this.props.formType} />
                                <button className="button" onClick={this.demoLogin}>Demo Login</button>
                            </section>
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
        if (this.state.formNum === 0 && this.props.formType === 'Sign Up') {

                return (
                    <div className="session-form-container">
                     <Link to={"/"}>
                        <img className='logo' src={window.logo} />
                    </Link>
                    <form className="session-form-box">
                    <h1 className="form-type-header">{this.props.formType}</h1>
                    <p className="form-headline">Stay updated on your professional life</p>
                        {this.renderErrors()}
                    <div className="session-from-inputs">
                        <label>Email
                            <input className="session-input" type="text" value={this.state.email} onChange={this.update('email')}/>
                        </label>
                        <p>{this.props.errors[0]}</p>
                        <label>Password
                            <input className="session-input" type="Password" value={this.state.password} onChange={this.update('password')} />
                        </label>
                        <p>{this.props.errors[0]}</p>
                        <button onClick={this.nextForm(1)}>Continue</button>
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

        if ((this.state.formNum === 1) && (this.props.formType === 'Sign Up')) {
            return (
                <div className="session-form-container">
                    <Link to={"/"}>
                        <img className='logo' src={window.logo} />
                    </Link>
                    <form className="session-form-box">
                        <p className="form-headline">Stay updated on your professional life</p>
                        {this.renderErrors()}
                        <div className="session-from-inputs">
                            <label>First name
                                <input className="session-input" type="text" value={this.state.fname} onChange={this.update('fname')} />
                            </label>
                            <label>Last name
                                <input className="session-input" type="text" value={this.state.lname} onChange={this.update('lname')} />
                            </label>
                            <button onClick={this.nextForm(2)}>Continue</button>
                        </div>
                    </form>
                </div>
            )
        }

        if ((this.state.formNum === 2) && (this.props.formType === 'Sign Up')) {
            return (
                <div className="session-form-container">
                    <Link to={"/"}>
                        <img className='logo' src={window.logo} />
                    </Link>
                    <form className="session-form-box">
                        <h1 className="form-type-header">Welcome {this.state.fname}!</h1>
                        <p className="form-headline">Let's start your profile, connect to people you know, and engage with them on topics you care about.</p>
                        {this.renderErrors()}
                        <div className="session-from-inputs">
                            <label>Country/ Region
                                <input className="session-input" type="text" value={this.state.location} onChange={this.update('location')} />
                            </label>
                            <label>Postal code
                                <input className="session-input" type="text" value={this.state.zipcode} onChange={this.update('zipcode')} />
                            </label>
                            <button onClick={this.nextForm(3)}>Next</button>
                        </div>
                    </form>
                </div>
            )
        }

        if ((this.state.formNum === 3) && (this.props.formType === 'Sign Up')) {
            return (
                <div className="session-form-container">
                    <Link to={"/"}>
                        <img className='logo' src={window.logo} />
                    </Link>
                    <form className="session-form-box" onSubmit={this.handleSubmit}>
                        <p className="form-headline">Your profile helps you discover new people and new opportunities</p>
                        {this.renderErrors()}
                        <div className="session-from-inputs">
                            <label>Most recent job title
                                <input className="session-input" type="text" value={this.state.title} onChange={this.update('title')} />
                            </label>
                            <label>Employment type
                                <input className="session-input" type="text" value={this.state.industry} onChange={this.update('industry')} />
                            </label>
                            <label>Most recent company
                                <input className="session-input" type="text" value={this.state.company} onChange={this.update('company')} />
                            </label>
                            <input type="submit" className="session-submit" value={this.props.formType}/>
                        </div>
                    </form>
                </div>
            )
        }
    }
}

export default SessionForm; 