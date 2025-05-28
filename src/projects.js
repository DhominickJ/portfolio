
export default function Projects() {
    return(`
        <section id="projects" class="bg-blue-50 dark:bg-blue-800 rounded-3xl py-20 fade-in">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                <div class="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
            </div>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-5">
                <!-- Project 1 -->
                <div class="bg-white dark:bg-blue-900 rounded-xl overflow-hidden shadow-md card-hover transition-all duration-300">
                    <img src="./walle.JPG" 
                         alt="Wall-E Robotics @ CPU-Iloilo" class="w-full h-48 object-cover">
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2">Wall-E Robotics @ CPU-Iloilo</h3>
                        <p class="text-blue-600 dark:text-blue-300 mb-4">Detects "Say Hi!" and Smile to the Camera while it delivers it to you!</p>
                        <div class="flex flex-wrap gap-2 mb-4">
                            <span class="text-xs bg-blue-100 dark:bg-blue-500 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">Arduino</span>
                            <span class="text-xs bg-blue-100 dark:bg-blue-500 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">Node.js</span>
                            <span class="text-xs bg-blue-100 dark:bg-blue-500 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">MongoDB</span>
                        </div>
                    </div>
                </div>
                <!-- Project 2 -->
                <div class="bg-white dark:bg-blue-900 rounded-xl overflow-hidden shadow-md card-hover transition-all duration-300">
                    <img src="./aquaterra.png" 
                         alt="AquaTerra" class="w-full h-48 object-cover">
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2">AquaTerra</h3>
                        <p class="text-blue-600 dark:text-blue-300 mb-4">Your personal plant-pal allowing you to sense what your plant is feeling!</p>
                        <div class="flex flex-wrap gap-2 mb-4">
                            <span class="text-xs bg-blue-100 dark:bg-blue-500 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">HTML & CSS</span>
                            <span class="text-xs bg-blue-100 dark:bg-blue-500 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">Arduino</span>
                            <span class="text-xs bg-blue-100 dark:bg-blue-500 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">Python</span>
                            <span class="text-xs bg-blue-100 dark:bg-blue-500 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">MongoDB</span>
                        </div>
                        <a href="https://aquaterra.vercel.app" class="text-blue-600 dark:text-blue-400 hover:underline font-medium">View Project →</a>
                    </div>
                </div>
                <!-- Project 3 -->
                <div class="bg-white dark:bg-blue-900 rounded-xl overflow-hidden shadow-md card-hover transition-all duration-300">
                    <img src="./rem.png" 
                         alt="Travel Blog" class="w-full h-48 object-cover">
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2">Symptom Synthesis Application R.E.M</h3>
                        <p class="text-blue-600 dark:text-blue-300 mb-4">A symptom synthesis application perfect for people who still don't understand how they feel.</p>
                        <div class="flex flex-wrap gap-2 mb-4">
                            <span class="text-xs bg-blue-100 dark:bg-blue-500 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">Flask</span>
                            <span class="text-xs bg-blue-100 dark:bg-blue-500 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">Python</span>
                            <span class="text-xs bg-blue-100 dark:bg-blue-500 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">NLTK</span>
                        </div>
                        <a href="https://rem-symp.onrender.com/" class="text-blue-600 dark:text-blue-400 hover:underline font-medium">View Project →</a>
                    </div>
                </div>
            </div>
            <div class="text-center mt-12">
                <a href="#" class="inline-block border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-700 px-8 py-3 rounded-lg transition">
                    View All Projects
                </a>
            </div>
        </section>`)
}