import { useDispatch, useSelector } from "react-redux";
import Contact from "./Contact";
import style from "./ContactsList.module.css";
import { deleteContact } from "../redux/contactsSlice";

export default function ContactList() {
  const dispatch = useDispatch();
  const contactsList = useSelector((state) => state.contacts.items);
  const search = useSelector((state) => state.filters.name);

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  const filteredContacts = contactsList.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <ul className={style.list}>
        {filteredContacts.map((elem) => {
          return (
            <li key={elem.id} className={style.listElem}>
              <Contact elem={elem} onDelete={handleDelete} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
