import { PageHeader } from "antd";
import React from "react";

// displays a page header

export default function Header( props ) {
  return (

      <PageHeader
        title={(
          <a href="https://noreturn.club" >
            {window.innerWidth<600?"noreturn":"🤑 noreturn.club"}
          </a>
        )}
        style={{ cursor: "pointer",fontSize:22, color:"white"}}
        extra={props.extra}
      />

  );
}
