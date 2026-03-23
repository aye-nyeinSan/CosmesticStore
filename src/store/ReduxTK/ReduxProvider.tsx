"use client";
import { Provider } from "react-redux";
import cosmeticStore from "./cosmeticStore";

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={cosmeticStore}>{children}</Provider>;
}
