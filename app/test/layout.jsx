"use client";
import Link from "next/link";
import { styled } from "styled-components";

export default function Layout({ children }) {
  return (
    <Bigsection>
      <ul>
        <li>
          {" "}
          <Link href="/test/test1">test1</Link>
        </li>
        <li>
          {" "}
          <Link href="/test/test2">test2</Link>
        </li>
        <li>
          {" "}
          <Link href="/test/test3">test3</Link>
        </li>
      </ul>
      <main>{children}</main>
    </Bigsection>
  );
}
const Bigsection = styled.div`
  ul {
    list-style: none;
    display: flex;
    gap: 10px;
    li {
    }
  }
`;
