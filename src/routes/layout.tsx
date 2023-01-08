import { component$, Slot } from '@builder.io/qwik';
import Header from '../components/header/header';

export default component$(() => {
  return (
    <>
      <main class='bg-gradient-to-r from-pink-400 to-purple-200'>
        <Header />
        <section>
          <Slot />
        </section>
      </main>
      <footer>
        <a href='https://www.builder.io/' target='_blank'>
          Made with ♡ by Builder.io
        </a>
      </footer>
    </>
  );
});
