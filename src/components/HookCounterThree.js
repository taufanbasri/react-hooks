import React, { useState } from "react";

function HookCounterThree() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  return (
    <div>
      <form>
        <input
          type="text"
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
          placeholder="First Name"
        />
        <input
          type="text"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
          placeholder="Last Name"
        />

        <h2>
          {name.firstName} {name.lastName}
        </h2>
      </form>
    </div>
  );
}

export default HookCounterThree;
