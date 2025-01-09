<template>
  <nav class="p-8 navbar" :class="{
    'sticky top-0 z-10 bg-white': isNavbarSticky,
    'navbar-animate': isNavbarSticky,
  }">
    <!-- Mobile Toggle Button -->
    <div class="flex">
      <img src="../../assets/Image/resort-logo.webp" alt="Resort Logo" class="mx-auto lg:mx-0 lg:hidden" />
      <button class="lg:hidden text-gray-400" @click="toggleMenu" aria-label="Toggle navigation">
        <svg v-if="isMobileMenuOpen" class="w-6 h-6 text-gray-800 dark:text-white"
         xmlns="http://www.w3.org/2000/svg"
         :class="{ 'rotate-180': isMobileMenuOpen }"
          width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path
            d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" />
        </svg>
        <svg v-else class="w-6 h-6 text-gray-800 dark:text-white" 
        xmlns="http://www.w3.org/2000/svg" width="24"
          height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M8 6h8M6 10h12M8 14h8M6 18h12" />
        </svg>
      </button>
    </div>

  
    <ul :class="{
      'hidden': !isMobileMenuOpen && isMobile,
      'flex flex-col space-y-4': isMobileMenuOpen && isMobile,
      'lg:flex lg:flex-row lg:space-y-0 lg:space-x-8': true,
    }" class="justify-center text-2xl font-medium">
      <li><a href="#home" class="text-gray-400 hover:text-black">Home</a></li>
      <li><a href="#aboutus" class="hover:text-black">About Us</a></li>
      <li><a href="#rooms" class="hover:text-black">Rooms</a></li>
      <img src="../../assets/Image/resort-logo.webp" alt="Resort Logo" class="mx-auto lg:mx-0" :class="{
        'hidden': isMobileMenuOpen && isMobile,
        'flex flex-col space-y-4': isMobileMenuOpen && isMobile,
        'lg:flex lg:flex-row lg:space-y-0 lg:space-x-8': true,
      }" />
      <li><a href="#amenities" class="hover:text-black">Amenities</a></li>
      <li><a href="#bistro" class="hover:text-black">Bistro</a></li>
      <li><a href="#contact" class="hover:text-black">Contact</a></li>
    </ul>
  </nav>

  <div :class="{ line: true, hidden: isLineHidden }" class="transition-all duration-500"></div>
</template>

<script>
export default {
  name: "headerComponent",
  data() {
    return {
      isMobileMenuOpen: false,
      isNavbarSticky: false,
      isLineHidden: false,
      isMobile: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
    handleScroll() {
      if (window.scrollY > 300) {
        this.isNavbarSticky = true;
        this.isLineHidden = true;
      } else {
        this.isNavbarSticky = false;
        this.isLineHidden = false;
      }
    },
    checkIfMobile() {
      this.isMobile = window.innerWidth < 1024;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.checkIfMobile);
    this.checkIfMobile(); // Initial check
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.checkIfMobile);
  },
};
</script>

<style scoped>
/* General Styles */.line {
  height: 4px;
  width: 100vw;
  background-color: #b59053;
}

.hidden {
  display: none !important;
}

nav {
  transition: top 0.3s ease, transform 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.navbar-animate {
  transform: translateY(10px);
}

.navbar-animate.sticky {
  transform: translateY(0);
}

.navbar {
  background-color: white;
  background-attachment: fixed !important;
}


a {
  transition: color 0.3s;
}

a:hover {
  color: black;
}

.rotate-180 {
  transform: rotate(180deg);
}

</style>
