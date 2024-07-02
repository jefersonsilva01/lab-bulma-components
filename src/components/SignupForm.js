import React from "react";
import "bulma/css/bulma.css"

import Navbar from "./Navbar";
import FormField from "./FormField";
import CoolButton from "./CoolButton";

function SingupForm(props) {
  return (
    <>
      <Navbar />
      <form action="">
        <FormField label="Name" type="text" placeholder="e.g Jef Silv" />
        <FormField label="E-mail" type="email" placeholder="e.g jef@silv.com" />
        <FormField label="Password" type="password" placeholder="********" />

        <CoolButton isSmall isSuccess>Button 2</CoolButton>
      </form>
    </>
  );
}

export default SingupForm;