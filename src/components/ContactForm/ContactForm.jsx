import { Component } from "react";
import { nanoid } from 'nanoid';




export default class FormAddContacts extends Component {
    state = {
        name: '',
        number: '',
    };

    nameId = nanoid();
    numberId = nanoid();



    

    render() {
        const { nameId, numberId, handelChange, handleSubmit } = this;
        return (
            <ContactsWrapp>
                <Form>
                    <div className="contacts__name">
                        <label htmlFor="{nameId}>Name"></label>
                        <input
                        id={nameId}
                        value={this.state.name}
                        onChange={handelChange}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        />
                    </div>
                    
                    <div className="contacts__phone">
            <label htmlFor={numberId}>Number</label>
            <input
              id={numberId}
              value={this.state.number}
              onChange={handelChange}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </div>
          <button className="contacts__button">Add contact</button>
        </Form>
         </ContactsWrapp>
        )
    }
    



















}
