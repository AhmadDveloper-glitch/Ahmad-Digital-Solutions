// =========================
// CONTACT FORM
// =========================

// =========================
// CONTACT FORM - WHATSAPP
// =========================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    const phoneNumber = "923247720624";

    const whatsappMessage =
        "Hello Ahmad Digital Solutions!" +
        "\n\n" +
        "Name: " + name +
        "\nEmail: " + email +
        "\nSubject: " + subject +
        "\n\nMessage:\n" + message;

    const whatsappURL =
        "https://wa.me/" +
        phoneNumber +
        "?text=" +
        encodeURIComponent(whatsappMessage);

    window.open(whatsappURL, "_blank");

    contactForm.reset();
});
// =========================
// MOBILE MENU
// =========================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function() {

    navLinks.classList.toggle("active");

});
// =========================
// PROJECT DETAILS
// =========================

const projectModal = document.getElementById("projectModal");
const projectDetails = document.getElementById("projectDetails");

function openProject(project) {

    let content = "";

    if (project === "urbanwear") {

        content = `
            <span class="modal-category">
                Digital Marketing
            </span>

            <h2 class="modal-title">
                UrbanWear Pakistan
            </h2>

            <p class="modal-description">
                A complete demo social media marketing project
                created for a modern men's fashion brand.
            </p>

            <h3 class="modal-heading">
                Project Work
            </h3>
            <div class="modal-gallery">

    <img src="img1.png"
         alt="UrbanWear Social Media Post 1">

    <img src="img2.png"
         alt="UrbanWear Social Media Post 2">

    <img src="img3.png"
         alt="UrbanWear Social Media Post 3">
            <h3 class="modal-heading">
    Promotional Reel
</h3>

<video class="project-video" controls>
    <source src="video3.mp4" type="video/mp4">
    Your browser does not support video.
</video>

</div>

            <ul class="modal-list">
                <li>Brand identity and visual direction</li>
                <li>Social media post design</li>
                <li>Promotional reel concept</li>
                <li>Captions and hashtags</li>
                <li>7-day content calendar</li>
                <li>Social media marketing strategy</li>
                <li>Meta Ads campaign concept</li>
            </ul>

            <h3 class="modal-heading">
                Platforms
            </h3>

            <p class="modal-description">
                Facebook & Instagram
            </p>

            <div class="modal-tags">
                <span>Branding</span>
                <span>Social Media</span>
                <span>Content</span>
                <span>Meta Ads</span>
            </div>
        `;
    }


    else if (project === "foodies") {

        content = `
            <span class="modal-category">
                Social Media Marketing
            </span>

            <h2 class="modal-title">
                The Foodies Restaurant
            </h2>

            <p class="modal-description">
                A demo restaurant marketing project focused on
                food content, customer engagement and online visibility.
            </p>

            <h3 class="modal-heading">
                Project Work
            </h3>
            <div class="modal-gallery">

    <img src="img5.png"
         alt="The Foodies Restaurant Post 1">

    <img src="img4.png"
         alt="The Foodies Restaurant Post 2">

    <img src="img6.png"
         alt="The Foodies Restaurant Post 3">
            <h3 class="modal-heading">
    Promotional Reel
</h3>

<video class="project-video" controls>
    <source src="video1.mp4" type="video/mp4">
    Your browser does not support video.
</video>

</div>

            <ul class="modal-list">
                <li>Restaurant visual identity</li>
                <li>Food promotional posts</li>
                <li>Promotional reel</li>
                <li>Captions and hashtags</li>
                <li>7-day content calendar</li>
                <li>Social media marketing strategy</li>
                <li>Meta Ads campaign concept</li>
            </ul>

            <h3 class="modal-heading">
                Platforms
            </h3>

            <p class="modal-description">
                Facebook & Instagram
            </p>

            <div class="modal-tags">
                <span>Food Content</span>
                <span>Branding</span>
                <span>Marketing</span>
                <span>Social Media</span>
            </div>
        `;
    }


    else if (project === "techzone") {

        content = `
            <span class="modal-category">
                Digital Marketing
            </span>

            <h2 class="modal-title">
                TechZone Mobile Store
            </h2>

            <p class="modal-description">
                A demo digital marketing project for a technology
                store offering smartphones, accessories and repair services.
            </p>

            <h3 class="modal-heading">
                Project Work
            </h3>
            <div class="modal-gallery">

    <img src="img7.jpeg"
         alt="TechZone Social Media Post 1">

    <img src="img8.jpeg"
         alt="TechZone Social Media Post 2">

    <img src="img9.jpeg"
         alt="TechZone Social Media Post 3">
            <h3 class="modal-heading">
    Promotional Reel
</h3>

<video class="project-video" controls>
    <source src="video2.mp4" type="video/mp4">
    Your browser does not support video.
</video>

</div>

            <ul class="modal-list">
                <li>Technology brand visual direction</li>
                <li>Smartphone promotional content</li>
                <li>Accessories content</li>
                <li>Mobile repair service promotion</li>
                <li>Promotional reel</li>
                <li>Captions and hashtags</li>
                <li>7-day content calendar</li>
                <li>Social media marketing strategy</li>
            </ul>

            <h3 class="modal-heading">
                Platforms
            </h3>

            <p class="modal-description">
                Facebook & Instagram
            </p>

            <div class="modal-tags">
                <span>Tech</span>
                <span>Social Media</span>
                <span>Content</span>
                <span>Marketing</span>
            </div>
        `;
    }

    projectDetails.innerHTML = content;

    projectModal.classList.add("active");

    document.body.style.overflow = "hidden";
}


function closeProject() {

    projectModal.classList.remove("active");

    document.body.style.overflow = "";
}


// Close when clicking outside modal

projectModal.addEventListener("click", function(event) {

    if (event.target === projectModal) {
        closeProject();
    }

});