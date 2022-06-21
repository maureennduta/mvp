import React, { useState } from "react";
import { Content, Form, Grid, Tile, TextInput } from "carbon-components-react";
import NavHeader from "../header/header";

function Seller() {
  return (
    <div className="form">
      <NavHeader />
      <Content>
        <div>
          <Form className="form">
            <Tile light={false}>
              <h3>ABOUT IPI</h3>
              <br />
              Thank you so much for joining us The iPi platform is not up just
              yet, BUT! You must sign up for the launch below. We are here to
              connect you to Capital Investements into the Intellectual
              Property, from around the world, and wwith no middlemen. This is
              going to be a big deal. See you soon?
            </Tile>
            <div>
              <TextInput
                helperText="Optional helper text"
                id="test2"
                invalidText="A valid value is required"
                labelText="NAME"
                placeholder="Placeholder text"
              />
              <TextInput
                helperText="Optional helper text"
                id="test2"
                invalidText="A valid value is required"
                labelText="Email Address"
                placeholder="Placeholder text"
              />
            </div>

            <br />
            <br />
          </Form>
        </div>
      </Content>
    </div>
  );
}

export default Seller;
