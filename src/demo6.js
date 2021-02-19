import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from "./redux/actions";

const Phone = ({ tel }) => <li>{tel}</li>;

class Demo6 extends Component {
    constructor(props) {
        super(props);
        this.handleIncrement = this.handleIncrement.bind(this);
        this.addPhone = this.addPhone.bind(this);
        this.editPhone = this.editPhone.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handlePhoneIndexChange = this.handlePhoneIndexChange.bind(this);
        this.state = { phone: '123', index: 0 };
    }

    handlePhoneChange(e) {
        this.setState({
            phone: e.target.value
        });
    }

    handlePhoneIndexChange(e) {
        this.setState({
            index: e.target.value
        });
    }

    handleIncrement() {
        this.props.increaseValue();
    }

    addPhone() {
        this.props.addPhone(this.state.phone);
    }

    editPhone() {
        this.props.editPhone(this.state.index, this.state.phone);
    }

    render() {
        return (
            <>
                <p>Лічильник: {this.props.value}</p>
                <h2>Список телефонів:</h2>
                <ul>
                    {this.props.phones.map(phone => <Phone tel={phone} />)}
                </ul>
                <button onClick={this.handleIncrement}>Збільшити лічильник</button>
                <br/>
                <input onChange={this.handlePhoneChange} value={this.state.phone} />
                <br/>
                <button onClick={this.addPhone}>Додати тел</button>
                <input onChange={this.handlePhoneIndexChange} value={this.state.index} />
                <br/>
                <button onClick={this.editPhone}>Змінити тел</button>
            </>
        )
    }
}

const mapStateToProps = state => ({
    phones: state.phones,
    value: state.value
});

const mapDispatchToProps = {
    addPhone: actions.addPhone,
    editPhone: actions.editPhone,
    increaseValue: actions.increment
}

export default connect(mapStateToProps, mapDispatchToProps)(Demo6);

