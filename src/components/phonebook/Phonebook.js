/** @format */
import React, { Component } from "react";
import { Form } from "./PhoneBookStyles";

class Phonebook extends Component {
  state = {
    name: "",
    number: "",
  };

  onHandleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  resetState = () => {
    this.setState({ name: "", number: "" });
  };

  onSubmit = (event) => {
    const { name, number } = this.state;
    event.preventDefault();
    if (
      this.props.contacts.some(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      this.actionAlert(name);
    } else {
      this.props.onHandleSubmit(name, number);
      this.resetState();
    }
  };

  actionAlert = (value) => {
    alert(`${value} is already in contacts.`);
  };

  render() {
    const { name, number } = this.state;

    return (
      <Form onSubmit={this.onSubmit}>
        <label>
          Name:
          <input
            value={name}
            type="text"
            name="name"
            autoComplete="off"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            onChange={this.onHandleChange}
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
          Number:
          <input
            value={number}
            type="tel"
            name="number"
            autoComplete="off"
            onChange={this.onHandleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
        <button type="submit">Add Contact</button>
      </Form>
    );
  }
}

export default Phonebook;
