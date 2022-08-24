import "./newUser.css";

export default function NewUser() {
  return (
    <>
    <div className="newUser">
    
      <h1 className="newUserTitle">Client Details</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Name</label>
          <input type="text" placeholder="yash" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="yash@gmail.com" />
        </div>
        <div className="newUserItem">
       
          <label>Phone</label>
          
           <select className="newUserSelect" name="active" id="active">
            <option value="yes">+91</option>
            <option value="no">+65</option>
          </select>
          <input type="text" placeholder="976868798" />
        </div>
        <div className="newUserItem">
          <label>Company</label>
          <input type="text" placeholder="Amazon" />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="Bangalore | India" />
        </div>
      </form>

      <h1 className="newUserTitle">Contact Person</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Name</label>
          <input type="text" placeholder="yash" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="yash@gmail.com" />
        </div>
        <div className="newUserItem">
       
          <label>Phone</label>
          
           <select className="newUserSelect" name="active" id="active">
            <option value="yes">+91</option>
            <option value="no">+65</option>
          </select>
          <input type="text" placeholder="976868798" />
        </div>
        <div className="newUserItem">
          <label>Company</label>
          <input type="text" placeholder="Amazon" />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="Bangalore | India" />
        </div>
      
      </form>
      <h1 className="newUserTitle">Property</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Whatsapp ID</label>
          <input type="text" placeholder="67874534232" />
        </div>
        <div className="newUserItem">
          <label>Business ID</label>
          <input type="text" placeholder="23354565522" />
        </div>
        <div className="newUserItem">
          <label>Token</label>
          <input type="text" placeholder="Afvfbfbgbfbrec" />
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
    
    </>
  );
}
