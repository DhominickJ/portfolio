
export default function About() {
    return(`
        <section id="intro" class="min-h-screen flex justify-center items-center flex-col text-center fade-in p-4">
            <div class="container w-full flex flex-col-reverse md:flex-row items-center gap-8">
            <div class="w-full md:w-2/3 lg:w-1/2">
            <h1 class="text-3xl md:text-5xl font-bold mb-4 text-[#F6E8DC]">Hi, I'm <span class="text-blue-600 dark:text-blue-400">Dhominick</span></h1>
            <h2 class="text-xl md:text-3xl text-blue-600 dark:text-blue-300 mb-6">"Soon to Be" Systems Architecture & Designer</h2>
            <p class="text-base md:text-lg mb-8 leading-relaxed text-blue-800 dark:text-blue-300">
            I am passionate about tech especially with hardware on the side. I have a homelab at home running a LLM's system off the network. My favorite hobby is starting projects... that's it. I am always the guy that people go to whenever they have problems with their computers. 
            </p>
            <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#projects" class="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition">
                My Work
            </a>
            <a href="#background" class="border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-800 px-6 py-3 rounded-lg transition">
                Learn About Me
            </a>
            </div>
            </div>
            <div class="w-48 md:w-1/3 mb-6 md:mb-0">
            <img src="./Dhom.png"
            alt="Profile" class="w-full h-full object-cover aspect-square">
            </div>
            </div>
            <a href="#background" class="mt-16 animate-bounce">
            <i class="fas fa-chevron-down text-2xl text-blue-600 dark:text-blue-400"></i>
            </a>
        </section>
        `)
}