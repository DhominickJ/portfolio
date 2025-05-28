
export default function Headers(styles) {
    return(`
    <nav class="sticky top-0 z-50 bg-white/80 font-bold dark:bg-[${styles.getPropertyValue('--dark-background')}] backdrop-blur-md shadow-sm text-[${styles.getPropertyValue('--primary')}]">
        <div class="container mx-auto px-6 py-4">
            <div class="flex justify-between items-center">
                <a href="#" class="text-2xl font-bold text-[#428EC5] dark:text-[${styles.getPropertyValue('--primary')}]">Strynyx</a>
                <div class="flex items-center space-x-6">
                    <div class="hidden md:flex space-x-8 text-[#F6E8DC]">
                        <a href="#intro" class="nav-link">Intro</a>
                        <a href="#background" class="nav-link">Background</a>
                        <a href="#projects" class="nav-link">Projects</a>
                        <a href="#goals" class="nav-link">Goals</a>
                    </div>
                </div>
            </div>
        </div>
        <!-- Mobile Menu -->
        <div id="mobileMenu" class="hidden md:hidden bg-[#428EC5] dark:bg-blue-800 shadow-lg">
            <div class="container mx-auto px-6 py-4 flex flex-col space-y-4">
                <a href="#intro" class="nav-link block px-4 py-2">Intro</a>
                <a href="#background" class="nav-link block px-4 py-2">Background</a>
                <a href="#projects" class="nav-link block px-4 py-2">Projects</a>
                <a href="#goals" class="nav-link block px-4 py-2">Goals</a>
            </div>
        </div>
    </nav>
    `)
}