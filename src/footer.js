
export default function Footer() {
    return(`
        <footer class="bg-blue-100 dark:bg-blue-900 py-12">
        <div class="px-6">
            <div class="text-center mb-8">
                <h2 class="text-2xl font-bold mb-2 text-blue-600 dark:text-blue-400">Let's Work Together</h2>
                <p class="text-blue-600 dark:text-blue-300 max-w-xl mx-auto">Have a project in mind or want to discuss potential collaborations? I'd love to hear from you!</p>
            </div>
            <div class="flex justify-center space-x-6 mb-8">
                <a href="#" class="text-blue-600 dark:text-blue-300 hover:text-blue-600 dark:hover:text-blue-400 text-xl">
                    <i class="fab fa-github"></i>
                </a>
                <a href="#" class="text-blue-600 dark:text-blue-300 hover:text-blue-600 dark:hover:text-blue-400 text-xl">
                    <i class="fab fa-linkedin"></i>
                </a>
                <a href="#" class="text-blue-600 dark:text-blue-300 hover:text-blue-600 dark:hover:text-blue-400 text-xl">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="#" class="text-blue-600 dark:text-blue-300 hover:text-blue-600 dark:hover:text-blue-400 text-xl">
                    <i class="fab fa-instagram"></i>
                </a>
            </div>
            <div class="text-center text-blue-500 dark:text-blue-400 text-sm">
                <p>© 2023 My Portfolio. All rights reserved.</p>
            </div>
        </div>
    </footer>
    `)
}