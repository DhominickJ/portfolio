
export default function Goals() {
    return(`
        <section id="goals" class="py-20 bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 rounded-3xl text-white fade-in">
            <div class="container mx-auto px-6 text-center">
                <div class="mb-16">
                    <h2 class="text-3xl md:text-4xl font-bold mb-4">Goals & Dreams</h2>
                    <div class="w-20 h-1 bg-white mx-auto opacity-70"></div>
                </div>
                <div class="grid md:grid-cols-3 gap-8">
                    <div class="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                        <i class="fas fa-globe text-3xl mb-4"></i>
                        <h3 class="text-xl font-semibold mb-4">Global Impact</h3>
                        <p>I aspire to create technology that solves real-world problems and improves lives globally, focusing on accessibility and sustainability.</p>
                    </div>
                    <div class="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                        <i class="fas fa-darkbulb text-3xl mb-4"></i>
                        <h3 class="text-xl font-semibold mb-4">Continuous Growth</h3>
                        <p>My goal is to never stop learning, constantly exploring new technologies and methodologies to enhance my skills and knowledge.</p>
                    </div>
                    <div class="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                        <i class="fas fa-hands-helping text-3xl mb-4"></i>
                        <h3 class="text-xl font-semibold mb-4">Mentorship</h3>
                        <p>I dream of establishing a program to mentor aspiring developers, helping to bridge the gap between education and industry needs.</p>
                    </div>
                </div>
                <div class="mt-12 bg-white/20 backdrop-blur-sm p-8 rounded-xl max-w-3xl mx-auto">
                    <h3 class="text-2xl font-semibold mb-4">Long-term Vision</h3>
                    <p class="mb-6">
                        In five years, I see myself leading a team of passionate developers creating innovative web solutions that push boundaries. 
                        I aim to strike a balance between technical expertise and creative vision, always prioritizing user experience.
                    </p>
                    <a href="#intro" class="inline-block bg-white text-blue-600 hover:bg-blue-100 px-8 py-3 rounded-lg font-medium transition">
                        Let's Connect
                    </a>
                </div>
            </div>
        </section>
    `)
}