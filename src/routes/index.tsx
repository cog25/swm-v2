import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <div class="w-screen">
      <main class="container mt-30vh">
        <h1 class="font-800 text-5xl">Software Maker</h1>
        구리고등학교 프로그래밍 동아리
        <div class="grid mx-auto py-20vh place-items-center text-16">
          <a class="i-system-uicons-arrow-down text-stone-500 animate-(bounce-alt count-infinite duration-2s)" />
        </div>
      </main>
      {/* Color: https://windicss.org/utilities/general/colors.html */}
      <section class="
        py-8 text-white
      ">
        <h2 class="text-(4xl black) font-500 container mb-12">Introduce</h2>
        <article class="bg-red-800">
          <div class="container py-24 mb-8 md:mb-24">
            <h3 class="font-600 text-3xl">Learn</h3>
            <p>C, C++, Java, Python 등, 다양한 프로그래밍 언어를 배웁니다.</p>
          </div>
        </article>
        <article class="bg-purple-800 mb-8 md:mb-24">
          <div class="container py-24">
            <h3 class="font-600 text-3xl">Coporate</h3>
            <p>팀을 이뤄, 서로 협력하고 의지하며 나아갑니다.</p>
          </div>
        </article>
        <article class="bg-cyan-800 mb-8 md:mb-24">
          <div class="container py-24">
            <h3 class="font-600 text-3xl">Make</h3>
            <p>
              배운 내용을 바탕으로, 팀원과 상의하고 고민하며 프로젝트를
              제작합니다.
            </p>
          </div>
        </article>
      </section>
      <section class="py-8">
        <h2 class="text-(4xl black) font-500 container mb-12">Showcases</h2>
      </section>
      <section class="py-8">
        <h2 class="text-(4xl black) font-500 container mb-12">Apply</h2>
      </section>
    </div>
  );
}
