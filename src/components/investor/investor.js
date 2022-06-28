import React, { useState } from "react";
import {
  Content,
  Form,
  Tile,
  TextInput,
  Button,
} from "carbon-components-react";
import NavHeader from "../header/header";

function Investor() {
  const [Username, setUsername] = useState("");
  const [Address, setAddress] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${Username} and the email was ${Address}`);
    setUsername('');
    setAddress('');
    };

  return (
    <div className="form">
      <NavHeader />
      <Content>
        <div>
          <Form className="form" onSubmit={handleSubmit}>
            <Tile light={false}>
              <h3>ABOUT IPI</h3>
              <br />
              Thank you so much for joining us. The iPi platform is not up just
              yet, BUT! You must sign up for the launch below. We are here to
              connect you to the newest and greatest Assets in the Intellectual
              Property, from around the world, and wwith no middlemen. This is
              going to be a big deal. See you soon?
            </Tile>
            <div>
              <TextInput
                helperText=""
                id="name"
                invalidText="A valid name is required"
                labelText="Name:"
                placeholder="Enter Name"
                required
                value={Username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextInput
                helperText=""
                id="address"
                invalidText="A valid email is required"
                labelText="Email Address:"
                placeholder="Enter Email Address"
                required
                value={Address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <Button
              size="default"
              kind="primary"
              type="submit"
              data-testid="submit"
            >
              Submit
            </Button>

            <br />
            <br />
          </Form>
        </div>
      </Content>
    </div>
  );
}

export default Investor;
