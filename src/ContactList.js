import React, { Component } from "react";

class ListContact extends Component {
  render() {
    return (
      <ul className="list-contact">
        {this.props.contacts.map((contact) => (
          <li key={contact.id} className="contact-list-item">
            <div
              className="contact-avatart"
              style={{ backgroundImage: `url(${contact.avatartURL})` }}
            ></div>
            <div className="contact-details">
              <p>{contact.name}</p>
              <p>{contact.handle}</p>
            </div>
            <button
              className="contact-remove"
              onClick={() => this.props.onDeleteContact(contact)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default ListContact;
