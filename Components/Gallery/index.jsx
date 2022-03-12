import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Header = styled.div({
  fontSize: 18,
  color: "red",
});

const GridItem = styled.div({
  padding: 24,
  margin: 24,
  width: 300,
  height: 300,
  border: "1px solid blue",
});

export default function Gallery({ items }) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {items.map((p, i) => {
        return (
          <GridItem key={i}>
            <Header>{p.title}</Header>
          </GridItem>
        );
      })}
    </div>
  );
}
