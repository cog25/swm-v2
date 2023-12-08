import { JSX, ParentComponent, ParentProps, Show, splitProps } from "solid-js";
import { Title } from "solid-start";
import Footer from "~/components/Footer";

export default function Home() {
  return (
    <>
      <Title>Software Maker</Title>
      <div class="w-screen">
        <Main />
        <Introduce />
        <Showcase />
        <Apply />
      </div>
      <Footer />
    </>
  );
}

const Main = () => (
  <main class="container mt-30vh">
    <h1 class="font-800 text-5xl">Software Maker</h1>
    <p class="font-pretendard">구리고등학교 프로그래밍 동아리</p>
    <div class="grid mx-auto py-20vh place-items-center text-8">
      <a class="i-zondicons-arrow-thin-down text-stone-800 animate-(bounce-alt count-infinite duration-2s)" />
    </div>
  </main>
);

type WarpperProps = { wrapperClass: string | undefined };
type HTMLProps = JSX.HTMLAttributes<HTMLElement>;

const IntroduceArticle = (props: ParentProps<WarpperProps & HTMLProps>) => {
  const [wrapperProps, htmlProps] = splitProps(props, ["wrapperClass"]);

  return (
    <div class={wrapperProps.wrapperClass}>
      <article {...htmlProps}>
        {props.children}
      </article>
    </div>
  );
};

const Introduce = () => (
  <section class="my-8">
    <h2 class="container text-4xl font-500 mb-8">Introduce</h2>
    <IntroduceArticle
      wrapperClass="mt-8 bg-red-700 text-white"
      class="container py-24 text-5"
    >
      <h3 class="font-600 text-3xl">Learn</h3>
      <p>C, C++, Java, Python 등, 다양한 프로그래밍 언어를 배웁니다.</p>
    </IntroduceArticle>
    <IntroduceArticle
      wrapperClass="mt-8 bg-purple-700 text-white"
      class="container py-24 text-5"
    >
      <h3 class="font-600 text-3xl">Coporate</h3>
      <p>팀을 이뤄, 서로 협력하고 의지하며 나아갑니다.</p>
    </IntroduceArticle>
    <IntroduceArticle
      wrapperClass="mt-8 bg-cyan-700 text-white"
      class="container py-24 text-5"
    >
      <h3 class="font-600 text-3xl">Make</h3>
      <p>
        배운 내용을 바탕으로, 팀원과 상의하고 고민하며 프로젝트를 제작합니다.
      </p>
    </IntroduceArticle>
  </section>
);

const Showcase = () => (
  <section class="container mb-8">
    <h2 class="text-4xl font-500 mb-8">Showcase</h2>
    <article class="my-4 bg-slate-100 rd-2 p-4 grid grid-cols-[1fr_auto] grid-items-end">
      <div>
        <h3 class="text-2xl font-600">동아리 홈페이지</h3>
        <p>
          지금 이 웹사이트. Solid-Start와 UnoCSS, Typescript로 만들었습니다.
        </p>
      </div>
      <a href="/showcase/homepage" class="vertical-baseline hover:underline">
        <span class="i-zondicons-arrow-thin-right inline-block h-0.8em mr-1" />
        자세히 보기
      </a>
    </article>
  </section>
);

const Apply = () => (
  <section>
    <h2 class="container text-4xl font-500 my-8">Apply</h2>
    <article class="my-4 grid place-items-center">
      {/* TODO: 구글 폼 등으로 연결 */}
      <a href="">
        <button class="px-8 p-(t-4 b-3) bg-black/50 text-(white 6) rd-99">
          지원하기
        </button>
      </a>
      {/* TODO: 모집시 변경 요망 */}
      <span class="mt-2 text-(4 black/50)">지원 기간이 아닙니다.</span>
      {/* <span class="mt-2 text-(4 black/50)">모집 기한: ~ 2023. 3. 10</span> */}
    </article>
  </section>
);
