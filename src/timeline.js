
export default function Timeline() {
    return(`
                <section class="py-20 fade-in">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold mb-4">Project Timeline</h2>
                <div class="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
            </div>
            <div class="max-w-2xl mx-auto">
                <!-- Timeline Item 1 -->
                <div class="relative pl-8 timeline-item">
                    <div class="absolute left-0 top-0 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400 border-4 border-blue-100 dark:border-blue-900 z-10"></div>
                    <div class="bg-blue-100 dark:bg-blue-800 p-6 rounded-xl mb-8">
                        <div class="flex justify-between items-center mb-2">
                            <span class="text-sm font-medium text-blue-600 dark:text-blue-400">2023</span>
                            <span class="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">Latest</span>
                        </div>
                        <h3 class="text-xl font-semibold mb-2">3rd Year and Beyond</h3>
                        <p class="text-blue-600 dark:text-blue-300">Built multiple robotics projects with different system based orientation named "Wall-E" and a Symptom-prediction Application named R.E.M</p>
                    </div>
                </div>
                <!-- Timeline Item 2 -->
                <div class="relative pl-8 timeline-item">
                    <div class="absolute left-0 top-0 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400 border-4 border-blue-100 dark:border-blue-900 z-10"></div>
                    <div class="bg-blue-100 dark:bg-blue-800 p-6 rounded-xl mb-8">
                        <span class="text-sm font-medium text-blue-600 dark:text-blue-400">2022</span>
                        <h3 class="text-xl font-semibold mb-2 mt-2">3rd Year College</h3>
                        <p class="text-blue-600 dark:text-blue-300">Joined several START-UP Competitions and won Top 20 on PSC (Philippine Startup Challenge) </p>
                    </div>
                </div>
                <!-- Timeline Item 3 -->
                <div class="relative pl-8 timeline-item">
                    <div class="absolute left-0 top-0 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400 border-4 border-blue-100 dark:border-blue-900 z-10"></div>
                    <div class="bg-blue-100 dark:bg-blue-800 p-6 rounded-xl mb-8">
                        <span class="text-sm font-medium text-blue-600 dark:text-blue-400">2021</span>
                        <h3 class="text-xl font-semibold mb-2 mt-2">2nd Year College</h3>
                        <p class="text-blue-600 dark:text-blue-300">Created a custom plant-status detection system called "AQUATERRA". Lead the team WaterQual on making a Water Status Detection System using Arduino and ESP-32</p>
                    </div>
                </div>
                <!-- Timeline Item 4 -->
                <div class="relative pl-8">
                    <div class="absolute left-0 top-0 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400 border-4 border-blue-100 dark:border-blue-900 z-10"></div>
                    <div class="bg-blue-100 dark:bg-blue-800 p-6 rounded-xl">
                        <span class="text-sm font-medium text-blue-600 dark:text-blue-400">2020</span>
                        <h3 class="text-xl font-semibold mb-2 mt-2">1st Year College</h3>
                        <p class="text-blue-600 dark:text-blue-300">Designed and built my first portfolio website to showcase my early projects and skills.</p>
                    </div>
                </div>
            </div>
        </section>`)
}