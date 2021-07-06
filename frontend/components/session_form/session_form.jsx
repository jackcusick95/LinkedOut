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
            company: '',
            signupErrors: false,
            emailValid: true, 
            passwordValid: true,
            submitted: false,
            mustEnter: false, 
            nameEnter: false,
            locationEnter: false,
            jobEnter: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this); 
        this.nextForm = this.nextForm.bind(this);
        this.demoLogin = this.demoLogin.bind(this); 
        this.renderErrors = this.renderErrors.bind(this); 
        this.validEmail = this.validEmail.bind(this); 
        this.validPassword = this.validPassword.bind(this);
    }

    componentDidMount() {
        if (this.props.errors.length !== 0) this.props.clearErrors()
    }


    update(field) {

        return (e) => {
            this.setState({ mustEnter: false });

            if (field == 'email' && this.props.formType === 'Sign Up') {
                this.validEmail(e.currentTarget.value)
            } else if (field == 'password' && this.props.formType === 'Sign Up') {
                this.validPassword(e.currentTarget.value)
            }
            this.setState({[field]: e.currentTarget.value});

        }
    }

    handleSubmit(e) {
        e.preventDefault();

        if (this.state.formNum == 3 && this.state.title.length > 0 && this.state.industry.length > 0 && this.state.company.length > 0) {
            this.props.processForm(this.state)
            // this.setState({ jobEnter: false });
        } else if (this.state.formNum == 3 && (this.state.title.length < 1 || this.state.industry.length < 1 || this.state.company.length < 1)) {
            this.setState({ jobEnter: true });
        }

        // this.props.processForm(this.state)
        // .then(() => this.props.history.push('/')); 
    }

    validEmail(email) {
        //regex pulled from https://www.w3resource.com/javascript/form/email-validation.php
        if (
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
                email
            )
        ) {
            this.setState({emailValid: true});
        } else {
            this.setState({ emailValid: false });
        }
    }

    validPassword(password) {
        if (password.length > 5) {
            this.setState({ passwordValid: true });
        } else {
            this.setState({ passwordValid: false });
        }
    }

    nextForm(num) {

        return (e) => {
            e.preventDefault();

            if (this.state.emailValid == true && this.state.passwordValid == true && this.state.email.length > 0 && this.state.password.length > 0 && this.state.formNum == 0) {
                this.setState({formNum: num});
            } else if ((this.state.email.length < 1 || this.state.password.length < 1) && this.state.formNum == 0) {
                this.setState({formNum: num - 1});
                this.setState({ mustEnter: true });
            } else if (this.state.formNum == 1 && this.state.fname.length > 0 && this.state.lname.length > 0) {
                this.setState({ formNum: num });
                this.setState({ nameEnter: false });
            } else if (this.state.formNum == 1 && (this.state.fname.length < 1 || this.state.lname.length < 1)) {
                this.setState({ formNum: num - 1 });
                this.setState({ nameEnter: true });
            } else if (this.state.formNum == 2 && this.state.zipcode.length == 5 && this.state.location.length > 0) {
                this.setState({ formNum: num });
                this.setState({ locationEnter: false });
            } else if (this.state.formNum == 2 && (this.state.zipcode.length != 5 || this.state.location.length < 1)) {
                this.setState({ formNum: num - 1 });
                this.setState({ locationEnter: true });
            } else if (this.state.formNum == 3 && this.state.title.length > 0 && this.state.industry.length > 0 && this.state.company.length > 0) {
                this.setState({ formNum: num });
                this.setState({ jobEnter: false });
            } else if (this.state.formNum == 3 && (this.state.title.length < 1 || this.state.industry.length < 1 || this.state.company.length < 1)) {
                this.setState({ formNum: num - 1 });
                this.setState({ jobEnter: true });
            }
            else {
                this.setState({ formNum: num - 1 });
            }
            this.setState({ submitted: true });

        }
    }

    // lastFormErrors()

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
                    <div className="logo-form-box">
                        <Link to={"/"}>
                            <img className='logo' src={window.logo} />
                        </Link>
                        <form className="session-form-box" onSubmit={this.handleSubmit}>
                            <h1 className="form-type-header">{this.props.formType}</h1>
                            <p className="form-headline">Stay updated on your professional life</p>
                            {this.props.errors.length!== 0 ?
                                <p id="errors">{this.renderErrors()}</p> : <div className="no-errors"></div>
                            }
                            <div className="session-form-inputs">
                                <label>Email:
                                    <input className="session-input" type="text" value={this.state.email} onChange={this.update('email')} />
                                </label>
                                <label>Password:
                                    <input className="session-input" type="Password" value={this.state.password} onChange={this.update('password')} />
                                </label>
                                <section className="action-buttons">
                                    <input type="submit" className="session-submit" value={this.props.formType} />
                                    <button className="button" onClick={this.demoLogin}>Demo Login</button>
                                </section>
                            </div>
                        </form>
                        <div className="nav-container">
                            <section>{this.props.navHeader}
                                {this.props.navLink}
                            </section>
                        </div>
                    </div>
                </div>
            )
        }
        if (this.state.formNum === 0 && this.props.formType === 'Sign Up') {

                return (
                    <div className="session-form-container">
                    <div className="logo-form-box">
                        <Link to={"/"}>
                            <img className='logo' src={window.logo} />
                        </Link>
                        <form className="session-signup-box">
                        <h1 className="form-type-header">{this.props.formType}</h1>
                        <p className="form-headline">Stay updated on your professional life</p>
                        <div>
                            {this.state.submitted ? (
                                this.state.emailValid ? (
                                    <div className="empty-error"></div>
                                ) : (
                                    <div className="email-error">
                                        Need to enter a valid email
                                    </div>
                                ) 
                                    ) : <div className="empty-error"></div>
                             }
                            {this.state.mustEnter ? (
                                <div className="email-error">
                                     Must provide both an email and password.
                                </div>
                                ) : <div className="empty-error"></div>
                            }
                        </div>
                        <div className="session-form-inputs">
                            <label>Email
                                <input className="session-input" type="text" value={this.state.email} onChange={this.update('email')}/>
                            </label>
                        <div>
                            {this.state.submitted ? (
                                this.state.passwordValid ? (
                                        <div className= "empty-error"></div>
                                ) : (
                                    <div className="password-error">
                                        Password must be more than 6 characters.
                                    </div>
                                ) 
                                    ) : <div className="empty-error"></div>
                             }
                        </div>
                            <label>Password
                                <input className="session-input" type="Password" value={this.state.password} onChange={this.update('password')} />
                            </label>
                            <section className="action-buttons">
                                <button onClick={this.nextForm(1)}>Continue</button>
                            </section>
                        </div>
                        </form>
                        <div className="nav-container">
                            <section>{this.props.navHeader}
                            {this.props.navLink}
                            </section>
                        </div>
                    </div>
                </div>
            )
        }

        if ((this.state.formNum === 1) && (this.props.formType === 'Sign Up')) {
            return (
                <div className="session-form-container">
                    <div className="logo-form-box">
                        <Link to={"/"}>
                            <img className='logo' src={window.logo} />
                        </Link>
                        <form className="session-signup-box">
                            <h1 className="form-type-header">{this.props.formType}</h1>
                            <p className="form-headline">Stay updated on your professional life</p>
                            {this.state.nameEnter ? (
                                <div className="email-error">
                                    Must provide both a first and last name.
                                </div>
                            ) : <div className="empty-error"></div>
                            }
                            <div className="session-form-inputs">
                                <label>First name
                                    <input className="session-input" type="text" value={this.state.fname} onChange={this.update('fname')} />
                                </label>
                                <label>Last name
                                    <input className="session-input" type="text" value={this.state.lname} onChange={this.update('lname')} />
                                </label>
                                <section className="action-buttons">
                                    <button onClick={this.nextForm(2)}>Continue</button>
                                </section>
                            </div>
                        </form>
                    </div>
                </div>
            )
        }

        if ((this.state.formNum === 2) && (this.props.formType === 'Sign Up')) {
            return (
                <div className="session-form-container">
                    <div className="logo-form-box">
                        <Link to={"/"}>
                            <img className='logo' src={window.logo} />
                        </Link>
                        <form className="session-welcome-box">
                            <h1 className="form-type-header">Welcome {this.state.fname}!</h1>
                            <p className="form-headline">Let's start your profile, connect to people you know, and engage with them on topics you care about.</p>
                            {this.state.locationEnter ? (
                                <div className="email-error">
                                    Must provide your contry/ region and a valid zipcode.
                                </div>
                            ) : <div className="empty-error"></div>
                            }
                            <div className="session-form-inputs">
                                <label>Country/ Region
                                    <input className="session-input" type="text" value={this.state.location} onChange={this.update('location')} />
                                </label>
                                <label>Postal code
                                    <input className="session-input" type="text" value={this.state.zipcode} onChange={this.update('zipcode')} />
                                </label>
                                <section className="action-buttons">
                                    <button onClick={this.nextForm(3)}>Next</button>
                                </section>
                            </div>
                        </form>
                    </div>
                </div>
            )
        }

        if ((this.state.formNum === 3) && (this.props.formType === 'Sign Up')) {
            return (
                <div className="session-form-container">
                    <div className="logo-form-box">
                        <Link to={"/"}>
                            <img className='logo' src={window.logo} />
                        </Link>
                        <form className="session-almostdone-box" onSubmit={this.handleSubmit}>
                            <h1 className="form-type-header">Almost done!</h1>
                            <p className="form-headline">Your profile helps you discover new people and new opportunities</p>
                            {this.state.jobEnter ? (
                                <div className="email-error">
                                    Please fill out all job related fields.
                                </div>
                            ) : <div className="empty-error"></div>
                            }
                            <div className="session-form-inputs">
                                <label>Most recent job title
                                    <input className="session-input" type="text" value={this.state.title} onChange={this.update('title')} />
                                </label>
                                <label>Employment type
                                    <input className="session-input" type="text" value={this.state.industry} onChange={this.update('industry')} />
                                </label>
                                <label>Most recent company
                                    <input className="session-input" type="text" value={this.state.company} onChange={this.update('company')} />
                                </label>
                                <section className="action-buttons">
                                    <input type="submit" className="session-submit" value={this.props.formType} />
                                </section>
                            </div>
                        </form>
                    </div>
                </div>
            )
        }
    }
}

export default SessionForm; 