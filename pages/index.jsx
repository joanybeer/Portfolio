import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Header = styled.div({
  fontSize: 100,
  color: "red",
});

export default function Root() {
  return (
    <div>
      sddsds
      <Link href="/contact">
        <Header
          style={{
            fontWeight: "bold",
          }}
        >
          flap
        </Header>
      </Link>
    </div>
  );
}
