<script lang="ts">
  import '../../global.postcss'
  import { lang_style } from '../../stores/lang_style'
  import { onDestroy } from 'svelte'
  let current = 'landing'
  let th: string
  let eng: string
  let displayStatus: string = 'hidden'
  const thai = lang_style.subscribe(value => (th = value))
  onDestroy(thai)
  const english = lang_style.subscribe(value => (eng = value))
  onDestroy(english)
  const toggleLang = (lang: string) => {
    if (lang == 'th') {
      th = 'text-primary'
      eng = 'text-black-1'
    } else {
      th = 'text-black-1'
      eng = 'text-primary'
    }
  }
  const toggleMenu = () => {
    if (displayStatus == 'flex') {
      displayStatus = 'hidden'
    } else {
      displayStatus = 'flex'
    }
  }
</script>

<nav class="md:bg-secondary navbar">
  <div class="md:flex md:flex-wrap md:justify-between md:flex-row md:p-5 items-center">
    <!-- mobile mode -->
    <div class="flex flex-col">
      <div class="flex flex-wrap flex-row justify-between items-center px-5 pt-5">
        <img
          class="menu md:hidden items-center m-2"
          src="https://soilcrete-static-pictures.s3.us-west-002.backblazeb2.com/WhiteLogo.png"
          height="32px"
          width="116px"
          alt=""
        />
        <div
          class="lg:hidden md:hidden nav-right hidden-menu items-center leading-none md:mt-0 px-3 py-2 text-white hover:text-primary"
          on:click={toggleMenu}
        >
          <svg class="fill-current h-5 w-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </div>
      </div>
      <div class="{displayStatus} flex-col md:hidden lg:hidden w-full text-center self-end rounded">
        <a href="/" class="menu-mobile" on:click={toggleMenu}>หน้าแรก</a>
        <a href="/about" class="menu-mobile" on:click={toggleMenu}>เกี่ยวกับบริษัท</a>
        <a href="/portfolio" class="menu-mobile" on:click={toggleMenu}>ผลงาน</a>
        <a href="/service" class="menu-mobile" on:click={toggleMenu}>บริการของเรา</a>
        <a href="/foundations" class="menu-mobile" on:click={toggleMenu}>เสาเข็มดินซีเมนต์</a>
        <a href="/contact" class="menu-mobile" on:click={toggleMenu}>ติดต่อเรา</a>
        <div class="menu-mobile">
          <button
            class="nav-button inline-flex items-center bg-tricondary hover:bg-tricondary-onHover focus:bg-tricondary-onPressed"
          >
            <svg
              class="fill-current w-4 h-4 mr-sm"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
              />
            </svg>
            <span>ติดต่อทันที</span>
          </button>
        </div>
      </div>
    </div>

    <!-- desktop mode -->
    <div
      class="hidden md:ml-auto md:mr-auto md:flex md:flex-wrap md:items-center text-base md:justify-center"
    >
      <a
        href="/"
        class="menu-desktop {current === 'landing' ? 'selected' : ''}"
        on:click={() => (current = 'landing')}
      >
        หน้าแรก
      </a>
      <a
        href="/about"
        class="menu-desktop {current === 'about' ? 'selected' : ''}"
        on:click={() => (current = 'about')}
      >
        เกี่ยวกับบริษัท
      </a>
      <a
        href="/portfolio"
        class="menu-desktop {current === 'portfolio' ? 'selected' : ''}"
        on:click={() => (current = 'portfolio')}
      >
        ผลงาน
      </a>
      <a
        href="/service"
        class="menu-desktop {current === 'service' ? 'selected' : ''}"
        on:click={() => (current = 'service')}
      >
        บริการของเรา
      </a>
      <a
        href="/foundations"
        class="menu-desktop {current === 'foundations' ? 'selected' : ''}"
        on:click={() => (current = 'foundations')}
      >
        เสาเข็มดินซีเมนต์
      </a>
      <a
        href="/contact"
        class="menu-desktop {current === 'contact' ? 'selected' : ''}"
        on:click={() => (current = 'contact')}
      >
        ติดต่อเรา
      </a>
      <button
        class="nav-button inline-flex items-center mt-4 md:inline-flex md:mt-0 text-secondary bg-tricondary hover:bg-tricondary-onHover focus:bg-tricondary-onPressed mr-4"
      >
        <svg
          class="fill-current w-4 h-4 mr-sm"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
          />
        </svg>
        <span>ติดต่อทันที</span>
      </button>
    </div>
    <div class="hidden md:block">
      <span class="inline-block text-black-1 text-sm px-4 py-2 leading-none mt-4 md:mt-0 mr-4"
        ><span class="lang {th} hover:text-primary mr-4" on:click={() => toggleLang('th')}>ไทย</span
        >/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
          class="lang {eng} hover:text-primary"
          on:click={() => toggleLang('eng')}
        >
          ENG
        </span></span
      >
    </div>
  </div>
</nav>

<style>
  .navbar {
    position: fixed;
    top: 0px;
    width: 100%;
  }
  a:hover,
  a:visited,
  a:link,
  a:active {
    text-decoration: none;
    cursor: pointer;
  }
  nav {
    z-index: 5;
  }
  .lang {
    @apply text-base;
    cursor: pointer;
  }
  .hidden-menu {
    cursor: pointer;
  }
  .nav-button {
    padding: 4px 6.5px;
    width: fit-content;
  }
  .hidden-menu:hover {
    color: black;
  }
  .menu-mobile {
    @apply cursor-pointer bg-secondary text-black-1 hover:text-secondary hover:bg-primary p-2;
  }
  .menu-desktop {
    @apply block mt-4 md:inline-block md:mt-0 text-black-1 hover:text-primary mr-xl;
  }
  .selected {
    @apply font-bold;
  }
</style>
