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

const Page = styled.div({
  padding: 24,
});

export default function Root() {
  return (
    <>
      <Page>
        <Link href="/contact">
          <Header
            style={{
              fontWeight: "bold",
            }}
          >
            flap
          </Header>
        </Link>
      </Page>

      <Gallery someProp="yyy" items={images}></Gallery>
    </>
  );
}
