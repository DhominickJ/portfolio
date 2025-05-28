
export default function Background() {
    return(`
        <section id="background" class="py-20 fade-in">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold mb-4">My Background</h2>
                <div class="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
            </div>
            <div class="grid md:grid-cols-2 gap-12 items-center">
                <div class="order-2 md:order-1 text-center">
                    <h3 class="text-2xl font-semibold mb-4">Education & Experience</h3>
                    <p class="text-blue-600 dark:text-blue-300 mb-6 leading-relaxed">
                        I am currently studying Computer Science in West Visayas State University, where I developed a passion for creating stuff.
                    </p>
                    <p class="text-blue-600 dark:text-blue-300 mb-6 leading-relaxed">
                        My experience includes front-end development with modern frameworks, back-end integrations, and Arduino/ESP-32 with Network Functions. 
                        I'm committed to continuous learning and staying updated with industry trends (especially on the hardware stuff). Also, Arch btw.
                    </p>
                    <div class="grid grid-cols-3 gap-4 mt-8">
                        <div class="bg-blue-100 dark:bg-blue-800 p-4 rounded-lg">
                            <i class="fas fa-code text-blue-600 dark:text-blue-400 text-2xl mb-2"></i>
                            <h4 class="font-semibold">Web Development</h4>
                            <p class="text-sm text-blue-500 dark:text-blue-400">1+ Years</p>
                        </div>
                        <div class="bg-blue-100 dark:bg-blue-800 p-4 rounded-lg">
                            <i class="fas fa-paint-brush text-blue-600 dark:text-blue-400 text-2xl mb-2"></i>
                            <h4 class="font-semibold">Arduino/ESP32</h4>
                            <p class="text-sm text-blue-500 dark:text-blue-400">1+ Years</p>
                        </div>
                        <div class="bg-blue-100 dark:bg-blue-800 p-4 rounded-lg">
                            <i class="fas fa-paint-brush text-blue-600 dark:text-blue-400 text-2xl mb-2"></i>
                            <h4 class="font-semibold">Backend Dev</h4>
                            <p class="text-sm text-blue-500 dark:text-blue-400">.8 Years</p>
                        </div>
                    </div>
                </div>
                <div class="order-1 md:order-2">
                    <div class="bg-blue-100 dark:bg-blue-800 p-8 rounded-xl">
                        <h3 class="text-xl font-semibold mb-6">Skills & Technologies</h3>
                        <div class="space-y-4">
                            <div>
                                <div class="flex justify-between mb-1 text-white">
                                    <span>HTML/CSS</span>
                                    <span>95%</span>
                                </div>
                                <div class="w-full bg-blue-300 dark:bg-blue-700 rounded-full h-2.5">
                                    <div class="bg-blue-600 dark:bg-blue-400 h-2.5 rounded-full" style="width: 95%"></div>
                                </div>
                            </div>
                            <div>
                                <div class="flex justify-between mb-1 text-white">
                                    <span>JavaScript</span>
                                    <span>90%</span>
                                </div>
                                <div class="w-full bg-blue-300 dark:bg-blue-700 rounded-full h-2.5">
                                    <div class="bg-blue-600 dark:bg-blue-400 h-2.5 rounded-full" style="width: 90%"></div>
                                </div>
                            </div>
                            <div>
                                <div class="flex justify-between mb-1 text-white">
                                    <span>Python</span>
                                    <span>85%</span>
                                </div>
                                <div class="w-full bg-blue-300 dark:bg-blue-700 rounded-full h-2.5">
                                    <div class="bg-blue-600 dark:bg-blue-400 h-2.5 rounded-full" style="width: 85%"></div>
                                </div>
                            </div>
                            <div>
                                <div class="flex justify-between mb-1 text-white">
                                    <span>Arduino/ESP32</span>
                                    <span>80%</span>
                                </div>
                                <div class="w-full bg-blue-300 dark:bg-blue-700 rounded-full h-2.5">
                                    <div class="bg-blue-600 dark:bg-blue-400 h-2.5 rounded-full" style="width: 80%"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>`)
}