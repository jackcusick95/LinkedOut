import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { updateJob, createJob } from '../../actions/job_actions';


class AddJobItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            job: {},
            user_id: this.props.currentuser.id,
            company: "",
            description: "",
            title: "",
            start_date: "",
            end_date: "",
            location: "",
            monthstartdate: "",
            yearstartdate: "",
            monthenddate: "",
            yearenddate: "",
            dateerror: false,
            nodate: false,
            checked: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleStartDateInput = this.handleStartDateInput.bind(this);
        this.handleEndDateInput = this.handleEndDateInput.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        if ((this.state.monthstartdate.length < 1 || this.state.yearstartdate.length < 1 || this.state.monthenddate.length < 1 || this.state.yearenddate.length < 1) || (this.state.monthstartdate == "month" || this.state.yearstartdate == "year" || (this.state.monthenddate == "month" && this.state.monthenddate.length < 1) || (this.state.yearenddate == "year" && this.state.yearenddate.length < 1))) {
            this.setState({ nodate: true })
        } else if (this.state.yearenddate < this.state.yearstartdate) {
            this.setState({ dateerror: true })
        } else {
        const formData = new FormData();
            formData.append('job[user_id]', this.state.user_id);
            formData.append('job[company]', this.state.company);
            formData.append('job[description]', this.state.description);
            formData.append('job[title]', this.state.title);
            formData.append('job[start_date]', this.state.start_date);
            formData.append('job[end_date]', this.state.end_date);
            formData.append('job[location]', this.state.location);

            console.log(formData); 
            this.props.createJob(formData)
                .then(this.props.closeModal);
            this.setState({
                company: "",
                description: "",
                title: "",
                start_date: "",
                end_date: "",
                location: ""
            });
        }
    }

    handleInput(field) {
        return e => this.setState({  [field]: e.currentTarget.value } );
    }

    handleStartDateInput(field, date) {
        return (e) => {
            e.preventDefault();
            if (date == 'month') {
                this.state.nodate = false;
                this.state.dateerror = false;
                this.state.monthstartdate = e.target.value;
            } else if (date == 'year') {
                this.state.nodate = false;
                this.state.dateerror = false;
                this.state.yearstartdate = e.target.value;
            }

            if (this.state.monthstartdate.length > 1 && this.state.yearstartdate.length > 1) {
                this.setState({ [field]: `${this.state.monthstartdate}, ${this.state.yearstartdate}` });
            }
        }
    }


    handleEndDateInput(field, date) {
        return (e) => {
            e.preventDefault();
            if (date == 'month') {
                this.state.nodate = false;
                this.state.dateerror = false;
                this.state.monthenddate = e.target.value;
            } else if (date == 'year') {
                this.state.nodate = false;
                this.state.dateerror = false;
                this.state.yearenddate = e.target.value;
            } else if (date == 'current') {
                this.state.nodate = false;
                this.state.dateerror = false;
                this.state.monthenddate = "Present";
                this.state.yearenddate = "Present";
            }

            if (this.state.monthenddate.length > 1 && this.state.yearenddate.length > 1 && this.state.yearenddate != "Present") {
                this.setState({ [field]: `${this.state.monthenddate}, ${this.state.yearenddate}` });
            } else if (this.state.monthenddate.length > 1 && this.state.yearenddate.length > 1) {
                this.setState({ [field]: `${this.state.yearenddate}` });
            }
        }
    }


    render() {
        const {
            company, description, start_date, title, location, end_date
        } = this.state;
        console.log(this.state);
        return (

            <div className="modal-edit">
                <h2 className="modal-edit-header">Add Job Experience</h2>
                <div onClick={this.props.closeModal} className="close-x">X</div>
                <div className="edit-modal-border"></div>
                <form className="edit-modal-form" onSubmit={this.handleSubmit}>
                    <div className="edit-modal-fullname">
                        {this.state.dateerror ? (
                            <div className="job-date-error">
                                End date must be after your start date.
                            </div>
                        ) : <div className="empty-error"></div>
                        }
                        {this.state.nodate ? (
                            <div className="job-date-error">
                                You must update all date fields.
                            </div>
                        ) : <div className="empty-error"></div>
                        }
                        <label className="modal-name-label">Position *</label>
                        <input
                            type="text"
                            className="modal-fname-input"
                            placeholder={title}
                            value={title}
                            required="required"
                            onChange={this.handleInput('title')} />
                        {/* </div> */}
                        <div className="model-name-container">
                            <label className="modal-name-label">Company *</label>
                            <input
                                type="text"
                                className="modal-lname-input"
                                placeholder={company}
                                value={company}
                                required="required"
                                onChange={this.handleInput('company')} />
                        </div>
                    </div>
                    <div className="modal-edit-dates">
                        <div className="startdate-container">
                            <div className="model-start-container">
                                <label className="modal-date-label">Start Date *</label>
                                <br />
                                <select className="modal-dropdown-startmonth" onChange={this.handleStartDateInput('start_date', 'month')}>
                                    <option value="">month</option>
                                    <option value="January">January</option>
                                    <option value="February">February</option>
                                    <option value="March">March</option>
                                    <option value="April">April</option>
                                    <option value="May">May</option>
                                    <option value="June">June</option>
                                    <option value="July">July</option>
                                    <option value="August">August</option>
                                    <option value="September">September</option>
                                    <option value="October">October</option>
                                    <option value="November">November</option>
                                    <option value="December">December</option>
                                </select>
                            </div>
                            <div className="model-start-container">
                                <br />
                                <select className="modal-dropdown-startyear" onChange={this.handleStartDateInput('start_date', 'year')}>
                                    <option value="">year</option>
                                    <option value="2021">2021</option>
                                    <option value="2020">2020</option>
                                    <option value="2019">2019</option>
                                    <option value="2018">2018</option>
                                    <option value="2017">2017</option>
                                    <option value="2016">2016</option>
                                    <option value="2015">2015</option>
                                    <option value="2014">2014</option>
                                    <option value="2013">2013</option>
                                    <option value="2012">2012</option>
                                    <option value="2011">2011</option>
                                    <option value="2010">2010</option>
                                    <option value="2009">2009</option>
                                    <option value="2008">2008</option>
                                    <option value="2007">2007</option>
                                    <option value="2006">2006</option>
                                    <option value="2005">2005</option>
                                    <option value="2004">2004</option>
                                    <option value="2003">2003</option>
                                    <option value="2002">2002</option>
                                    <option value="2001">2001</option>
                                    <option value="2000">2000</option>
                                    <option value="1999">1999</option>
                                    <option value="1998">1998</option>
                                    <option value="1997">1997</option>
                                    <option value="1996">1996</option>
                                    <option value="1995">1995</option>
                                    <option value="1994">1994</option>
                                    <option value="1993">1993</option>
                                    <option value="1992">1992</option>
                                    <option value="1991">1991</option>
                                    <option value="1990">1990</option>
                                    <option value="1989">1989</option>
                                    <option value="1988">1988</option>
                                    <option value="1987">1987</option>
                                    <option value="1986">1986</option>
                                    <option value="1985">1985</option>
                                    <option value="1984">1984</option>
                                    <option value="1983">1983</option>
                                    <option value="1982">1982</option>
                                    <option value="1981">1981</option>
                                    <option value="1980">1980</option>
                                    <option value="1979">1979</option>
                                    <option value="1978">1978</option>
                                    <option value="1977">1977</option>
                                    <option value="1976">1976</option>
                                    <option value="1975">1975</option>
                                    <option value="1974">1974</option>
                                    <option value="1973">1973</option>
                                    <option value="1972">1972</option>
                                    <option value="1971">1971</option>
                                    <option value="1970">1970</option>
                                </select>
                            </div>
                        </div>
                        <div className="enddate-container">
                            <div className="model-start-container">
                                <label className="modal-date-label">End Date *</label>
                                <br />
                                <select className="modal-dropdown-startmonth" onChange={this.handleEndDateInput('end_date', 'month')}>
                                    <option value="">month</option>
                                    <option value="January">January</option>
                                    <option value="February">February</option>
                                    <option value="March">March</option>
                                    <option value="April">April</option>
                                    <option value="May">May</option>
                                    <option value="June">June</option>
                                    <option value="July">July</option>
                                    <option value="August">August</option>
                                    <option value="September">September</option>
                                    <option value="October">October</option>
                                    <option value="November">November</option>
                                    <option value="December">December</option>
                                </select>
                            </div>
                            <div className="model-start-container">
                                <br />
                                <select className="modal-dropdown-startyear" onChange={this.handleEndDateInput('end_date', 'year')}>
                                    <option value="">year</option>
                                    <option value="2021">2021</option>
                                    <option value="2020">2020</option>
                                    <option value="2019">2019</option>
                                    <option value="2018">2018</option>
                                    <option value="2017">2017</option>
                                    <option value="2016">2016</option>
                                    <option value="2015">2015</option>
                                    <option value="2014">2014</option>
                                    <option value="2013">2013</option>
                                    <option value="2012">2012</option>
                                    <option value="2011">2011</option>
                                    <option value="2010">2010</option>
                                    <option value="2009">2009</option>
                                    <option value="2008">2008</option>
                                    <option value="2007">2007</option>
                                    <option value="2006">2006</option>
                                    <option value="2005">2005</option>
                                    <option value="2004">2004</option>
                                    <option value="2003">2003</option>
                                    <option value="2002">2002</option>
                                    <option value="2001">2001</option>
                                    <option value="2000">2000</option>
                                    <option value="1999">1999</option>
                                    <option value="1998">1998</option>
                                    <option value="1997">1997</option>
                                    <option value="1996">1996</option>
                                    <option value="1995">1995</option>
                                    <option value="1994">1994</option>
                                    <option value="1993">1993</option>
                                    <option value="1992">1992</option>
                                    <option value="1991">1991</option>
                                    <option value="1990">1990</option>
                                    <option value="1989">1989</option>
                                    <option value="1988">1988</option>
                                    <option value="1987">1987</option>
                                    <option value="1986">1986</option>
                                    <option value="1985">1985</option>
                                    <option value="1984">1984</option>
                                    <option value="1983">1983</option>
                                    <option value="1982">1982</option>
                                    <option value="1981">1981</option>
                                    <option value="1980">1980</option>
                                    <option value="1979">1979</option>
                                    <option value="1978">1978</option>
                                    <option value="1977">1977</option>
                                    <option value="1976">1976</option>
                                    <option value="1975">1975</option>
                                    <option value="1974">1974</option>
                                    <option value="1973">1973</option>
                                    <option value="1972">1972</option>
                                    <option value="1971">1971</option>
                                    <option value="1970">1970</option>
                                </select>
                            </div>
                        </div>
                        <div className="model-checkbox-container">
                            <input type="checkbox" id="date-checkbox" name="check" value="Present" onClick={this.handleEndDateInput('end_date', 'current')}></input>
                            <p className="modal-checkbox-label">Current Position</p>
                        </div>
                    </div>
                    <div className="jobs-location-container">
                        <label className="modal-location-label">Location</label>
                        <input
                            type="text"
                            className="modal-location"
                            placeholder={location}
                            value={location}
                            onChange={this.handleInput('location')} />
                    </div>
                    <div className="model-description-container">
                        <label className="modal-description-label">Description</label>
                        <textarea
                            className="modal-description-textarea"
                            placeholder={description}
                            value={description}
                            cols="30"
                            width="80%"
                            onChange={this.handleInput('description')}>
                        </textarea>
                    </div>
                    <button className="modal-edit-save" >Save</button>
                </form>
            </div>
        )
    }

}

const mapStateToProps = (state) => {

    return {
        currentuser: state.entities.users[state.session.id],
        users: state.entities.users,
        jobsArr: Object.values(state.entities.jobs),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        closeModal: () => dispatch(closeModal()),
        updateJob: (job) => dispatch(updateJob(job)),
        createJob: (job) => dispatch(createJob(job)),
    };
};

const AddJob = connect(mapStateToProps, mapDispatchToProps)(AddJobItem);

export default AddJob;