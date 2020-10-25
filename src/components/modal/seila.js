const [form, setForm] = React.useState({
  name: '',
  admin: '',
  description: '',
  tags: [],
  private: '',
  password: '',
  members: '',
  messages: '',
});

const [tag, setTag] = useState('');

function handleChange({ target }) {
  const { id, value } = target;
  setForm({ ...form, [id]: value });
}


function handleTag(){
  if(!tag) return
  else{ 
    const newTags = [ ...form.tag, tag];
    setForm({ ...form, tags: newTags});
  }
}

<>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Creat Chat</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="text" id="name" value={form.nome} onChange={handleChange} placeholder="Nome"/>
          <textarea id="description"  value={form.description} onChange={handleChange} rows="4" cols="50">Description</textarea>
          <input type="text" id="tagAdd" value={form.tags} onChange={function changeTag ({ target }){const {value} = target; setTag(value);}} placeholder="New Tag"/>
          <button onClick={handleTag}>Add</button>
          <label className={styles.switch}> <input type="checkbox"/> <span className={styles.slider, styles.round}></span> </label>
        </Modal.Body> 
        <Modal.Footer>
          <ul className={styles.tagList}>
            {form.tags.map((tag) => (
            <li key={tag}>
              <p className={styles.block}>{tag}</p>
            </li>
            ))}
          </ul>
          <button variant="secondary" onClick={handleClose}>
            Close
          </button>
          <button variant="primary" onClick={handleClose}>
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>       
    </>