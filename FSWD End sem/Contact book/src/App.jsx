import { useState } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList"; 
function App() {
  const [contacts, setContacts] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    bio: "",
  });
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updatedContacts = [...contacts];
      updatedContacts[editIndex] = formData;
      setContacts(updatedContacts);
      setEditIndex(null);
    } else {
      setContacts([...contacts, formData]);
    }
    setFormData({
      name: "",
      phone: "",
      email: "",
      bio: "",
    });
  };

  const handleEdit = (index) => {
    setEditIndex(index)
    setFormData(contacts[index])
  }

  const handleDelete = (index) => {
    const updatedContacts = [...contacts]
    updatedContacts.splice(index, 1)
    setContacts(updatedContacts)
  }
  return (
    <div>
      <h1>Contact Book</h1>
      <ContactForm 
        handleChange={handleChange}
        formData={formData}
        handleSubmit={handleSubmit}
        editIndex={editIndex}
      />
      <ContactList 
        contacts={contacts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
