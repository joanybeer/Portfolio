import React from "react";
import Link from "next/link";
import styled from "styled-components";
import Gallery from "../Components/Gallery";

const Header = styled.div({
  fontSize: 100,
  color: "red",
});

const images = [
  {
    src: "flap",
    title: "flap",
  },
  {
    src: "flap",
    title: "flap2",
  },
  {
    src: "flap",
    title: "flap3",
  },
];

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
      <Gallery someProp="yyy" items={images}></Gallery>
    </div>
  );
}
