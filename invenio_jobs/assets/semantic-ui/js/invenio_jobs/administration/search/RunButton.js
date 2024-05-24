// This file is part of InvenioRDM
// Copyright (C) 2024 CERN
//
// Invenio RDM Records is free software; you can redistribute it and/or modify it
// under the terms of the MIT License; see LICENSE file for more details.

import React from "react";
import { Dropdown, DropdownMenu, FormInput, Button, Form } from "semantic-ui-react";
import { i18next } from "@translations/invenio_app_rdm/i18next";

import PropTypes from "prop-types";

export const RunButton = ({ config }) => {
  const handleClick = async () => {
    console.log(config);
  };

  return (
    <Dropdown
      text={i18next.t("Run")}
      icon="play"
      floating
      labeled
      button
      className="icon"
      basic
      closeOnBlur={false}
    >
      <DropdownMenu>
        <Form className="p-10">
          {Object.keys(config).map(key => (
            <FormInput label={key} defaultValue={config[key]} onClick={e => e.stopPropagation()} />
          ))}
          <Button type="submit" content="Run"/>
        </Form>
      </DropdownMenu>
    </Dropdown>
  );
};

RunButton.propTypes = {};
