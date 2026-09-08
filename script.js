const navigationItems = [
    { slug: "home", label: "Home", href: "index.html" },
    { slug: "about", label: "About", href: "about.html" },
    { slug: "work", label: "Work", href: "work.html" },
    { slug: "experience", label: "Experience", href: "experience.html" },
    { slug: "skills", label: "Skills", href: "skills.html" },
    { slug: "contact", label: "Contact", href: "contact.html" },
    { slug: "blog", label: "Blog", href: "blog.html" }
];

const currentPage = document.body.dataset.page;

const headerTarget = document.getElementById("site-header");
const footerTarget = document.getElementById("site-footer");

if (headerTarget) {
    const navLinks = navigationItems
        .map((item) => {
            const current = item.slug === currentPage ? ' aria-current="page"' : "";
            return `<a href="${item.href}"${current}>${item.label}</a>`;
        })
        .join("");

    headerTarget.innerHTML = `
        <header class="site-header">
            <div class="header-inner">
                <a class="brand-mark" href="index.html">
                    <span class="brand-orb" aria-hidden="true"></span>
                    <span>Minh Quynh Nguyen</span>
                </a>
                <nav class="site-nav" aria-label="Primary navigation">
                    ${navLinks}
                </nav>
            </div>
        </header>
    `;
}

if (footerTarget) {
    const year = new Date().getFullYear();
    const footerLinks = navigationItems
        .filter((item) => item.slug !== "home")
        .map((item) => `<a href="${item.href}">${item.label}</a>`)
        .join("");

    footerTarget.innerHTML = `
        <footer class="shell footer-inner">
            <div class="card footer-card">
                <div>
                    <p class="eyebrow">Portfolio and Writing</p>
                    <h2>Minh Quynh Nguyen</h2>
                    <p class="footer-meta">Personal website with portfolio pages and selected writing.</p>
                </div>
                <div class="footer-links">
                    ${footerLinks}
                </div>
            </div>
            <p class="footer-meta">&copy; ${year} Minh Quynh Nguyen. Some sections remain placeholders while the blog can contain full articles and images.</p>
        </footer>
    `;
}