const pagePath = window.location.pathname;
const fromPost = pagePath.includes("/posts/");
const blogHref = fromPost ? "../../blog.html" : "blog.html";

const navigationItems = [
    { slug: "blog", label: "Blog", href: blogHref }
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
                <a class="brand-mark" href="${blogHref}">
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
        .map((item) => `<a href="${item.href}">${item.label}</a>`)
        .join("");

    footerTarget.innerHTML = `
        <footer class="shell footer-inner">
            <div class="card footer-card">
                <div>
                    <p class="eyebrow">Portfolio and Writing</p>
                    <h2>Minh Quynh Nguyen</h2>
                    <p class="footer-meta">Selected writing and notes.</p>
                </div>
                <div class="footer-links">
                    ${footerLinks}
                </div>
            </div>
            <p class="footer-meta">&copy; ${year} Minh Quynh Nguyen.</p>
        </footer>
    `;
}