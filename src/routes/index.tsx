import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <div class="w-screen">
      <main class="container mt-30vh">
        <h1 class="font-800 text-5xl">Software Maker</h1>
        구리고등학교 프로그래밍 동아리
        <div class="grid mx-auto py-20vh place-items-center text-8">
          <a class="i-zondicons-arrow-thin-down text-stone-800 animate-(bounce-alt count-infinite duration-2s)" />
        </div>
      </main>
      {/* Color: https://windicss.org/utilities/general/colors.html */}
      <section class="container py-8">
        <h2 class="text-4xl font-500">Introduce</h2>
      </section>
      <div class="mt-8 bg-red-800 text-white">
        <section class="container py-24">
          <h3 class="font-600 text-3xl">Learn</h3>
          <p>C, C++, Java, Python 등, 다양한 프로그래밍 언어를 배웁니다.</p>
        </section>
      </div>
      <div class="mt-8 bg-purple-800 text-white">
        <section class="container py-24">
          <h3 class="font-600 text-3xl">Coporate</h3>
          <p>팀을 이뤄, 서로 협력하고 의지하며 나아갑니다.</p>
        </section>
      </div>
      <div class="mt-8 bg-cyan-800 text-white">
        <section class="container py-24">
          <h3 class="font-600 text-3xl">Make</h3>
          <p>
            배운 내용을 바탕으로, 팀원과 상의하고 고민하며 프로젝트를
            제작합니다.
          </p>
        </section>
      </div>
    </div>
  );
}
