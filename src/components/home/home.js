import React, { useState } from "react";
import iPi from "../../iPi-Logo.png";
import { Content, Form, Grid, Tile, Button } from "carbon-components-react";
import NavHeader from "../header/header";
import "./home.scss";

function Home() {
  return (
    <div className="form">
      <NavHeader />
      <Content>
        <div>
          <Form className="form">
            <img classname="logo" src={iPi} alt="ipi"></img>
            <Tile light={false}>
              <h3>ABOUT IPI</h3>
              <br />
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
              Section 1.10.32 of "de Finibus Bonorum et Malorum", written by
              Cicero in 45 BC "Sed ut perspiciatis unde omnis iste natus error
              sit voluptatem accusantium doloremque laudantium, totam rem
              aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
              architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
              voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
              quia consequuntur magni dolores eos qui ratione voluptatem sequi
              nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
              sit amet, consectetur, adipisci velit, sed quia non numquam eius
              modi tempora incidunt ut labore et dolore magnam aliquam quaerat
              voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
              ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatur? Quis autem vel eum iure reprehenderit qui in ea
              voluptate velit esse quam nihil molestiae consequatur, vel illum
              qui dolorem eum fugiat quo voluptas nulla pariatur?"
            </Tile>
            <br />
            <br />
            <Tile>
              <h4>HOW IT WORKS</h4>
              <br />
              IPI is a platform that allows users to buy or sell the rights to
              any piece of intellectual property, online, from anywhere in the
              world.
            </Tile>

            <Button classname="primary" href="/Investor">
              Create Investor Account
            </Button>
            <Button classname="secondary" kind="secondary" href="/Seller">
              Create Rights Seller Account
            </Button>
          </Form>
        </div>
      </Content>
    </div>
  );
}

export default Home;
