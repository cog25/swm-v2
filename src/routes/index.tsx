import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main class="text-center p-4 mx-auto">
      <Title>Hello World</Title>
      <h1 class="text-16 color-[#335d92] font-100">
        Hello world!
        </h1>
      <Counter />
    </main>
  );
}
