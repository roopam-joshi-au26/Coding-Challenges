export default function Form() {
  return (
    <div className="form">
      <div>
        <h1>User Registration</h1>
      </div>

      <form>
        {/* Labels and inputs for form data */}
        <label className="label">Name</label>
        <input className="input" type="text" />

        <label className="label">Email</label>
        <input className="input" type="email" />

        <label className="label">Phone</label>
        <input className="input" type="phone" />

        <label className="label">Address</label>
        <input className="input" type="address" />

        <label className="label">Password</label>
        <input className="input" type="password" />

        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
