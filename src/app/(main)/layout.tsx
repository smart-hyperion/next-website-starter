import { PropsWithChildren } from "react";


export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <header></header>
      <main className="flex flex-col min-h-screen">{children}</main>
      <footer></footer>
    </div>
  )
}