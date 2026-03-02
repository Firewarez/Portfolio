<template>
    <section class="Section-Projects">
        <h2>Projects</h2>
        <div class="my-projects flex">
            <div class="card">
                <div class="image acsocial"></div>
                <div class="content">
                    <a href="#">
                        <span class="title">
                            AcSocial
                        </span>
                    </a>

                    <p class="desc">
                        Institutional website for an NGO dedicated to the social inclusion and rehabilitation of people
                        with physical disabilities. The project involved structuring content, accessible design, and a
                        focus on empathetic and functional communication.
                    </p>

                    <div class="stack">
                        <span class="tag">React</span>
                        <span class="tag">Java</span>
                        <span class="tag">CSS</span>
                    </div>

                    <a class="action" href="https://acmaisaudepravoce.com/" target="_blank" rel="noopener noreferrer">
                        Find out more
                        <span aria-hidden="true">
                            →
                        </span>
                    </a>
                </div>
            </div>

            <div class="card">
                <div class="image unpnews"></div>
                <div class="content">
                    <a href="#">
                        <span class="title">
                            UNPNews
                        </span>
                    </a>

                    <p class="desc">
                        A news portal developed for a university, designed to keep students and faculty informed about
                        campus events, academic achievements, and important announcements. The platform features a
                        simple and intuitive interface for easy navigation. Users can post articles, comment, and share news.
                    </p>

                    <div class="stack">
                        <span class="tag">PHP</span>
                        <span class="tag">MySQL</span>
                        <span class="tag">Bootstrap</span>
                    </div>

                    <a class="action" href="https://unpnews.com/" target="_blank" rel="noopener noreferrer">
                        Find out more
                        <span aria-hidden="true">
                            →
                        </span>
                    </a>
                </div>
            </div>

            <div class="card">
                <div class="image multimobi"></div>
                <div class="content">
                    <a href="#">
                        <span class="title">
                            MultiMobi
                        </span>
                    </a>

                    <p class="desc">
                        An urban mobility application designed to provide users with real-time information on public
                        transportation options, including bus routes, schedules, and traffic updates. The app aims to
                        enhance the commuting experience by offering efficient route planning and promoting sustainable transportation choices.
                    </p>

                    <div class="stack">
                        <span class="tag">React</span>
                        <span class="tag">Express</span>
                        <span class="tag">React Native</span>
                        <span class="tag">Firebase</span>
                        <span class="tag">Google Maps API</span>
                    </div>

                    <a class="action" href="https://multi-bus-develop.vercel.app/" target="_blank"
                        rel="noopener noreferrer">
                        Find out more
                        <span aria-hidden="true">
                            →
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style scoped>
.Section-Projects {
    min-height: 100vh;
    padding: 100px 20px 50px 20px;
    background-color: transparent;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.my-projects {
    margin-top: 40px;
    gap: 40px;
    justify-content: center;
    flex-wrap: wrap;
    align-items: flex-start;
}

/* Card */
.card {
    max-width: 320px;
    border-radius: 0.75rem;
    background-color: rgba(255, 255, 255, 0.75);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.5);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    will-change: transform, backdrop-filter;
}

.card:hover {
    transform: translateY(-5px) translateZ(0); 
    background-color: rgba(255, 255, 255, 0.95);
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
}

.card a {
    text-decoration: none
}

.content {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}

.image {
    object-fit: cover;
    width: 100%;
    height: 180px;
    background-color: rgb(239, 205, 255);
    background-size: cover;
    background-position: center top;
}

.image.acsocial {
    background-image: url('@/assets/acsaude.png');
}

.image.unpnews {
    background-image: url('@/assets/unpnews.png');
}

.image.multimobi {
    background-image: url('@/assets/multimobi.png');
}

.title {
    color: #111827;
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 700;
}

.desc {
    margin-top: 0.75rem;
    color: #4B5563;
    font-size: 0.9rem;
    line-height: 1.4rem;
    flex-grow: 1;
}

.stack {
    margin-top: 1.25rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.tag {
    background-color: #F3F4F6;
    color: #374151;
    font-size: 0.75rem;
    font-weight: 600;
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    transition: background-color 0.2s ease;
}

.tag:hover {
    background-color: #E5E7EB;
}

.action {
    display: inline-flex;
    margin-top: 1.5rem;
    color: #ffffff;
    font-size: 0.9rem;
    font-weight: 600;
    align-items: center;
    gap: 0.5rem;
    background-color: #2563EB;
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
    width: fit-content;
    transition: background-color 0.3s ease;
}

.action:hover {
    background-color: #1D4ED8;
}

.action span {
    transition: transform .3s ease;
}

.action:hover span {
    transform: translateX(4px);
}
/* End Card */
</style>