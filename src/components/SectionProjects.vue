<template>
    <section class="Section-Projects">
        <h2>Projects</h2>
        <div class="my-projects flex">
            <div class="card">
                <div class="image"></div>
                <div class="content">
                    <a href="#">
                        <span class="title">
                            AcSocial
                        </span>
                    </a>

                    <p class="desc">
                        institutional website for an NGO dedicated to the social inclusion and rehabilitation of people
                        with physical disabilities. The project involved structuring content, accessible design, and a
                        focus on empathetic and functional communication.
                    </p>

                    <a class="action" href="https://acmaisaudepravoce.com/" target="_blank" rel="noopener noreferrer">
                        Find out more
                        <span aria-hidden="true">
                            →
                        </span>
                    </a>
                </div>
            </div>

            <div class="card">
                <div class="image"></div>
                <div class="content">
                    <a href="#">
                        <span class="title">
                            UNPNews
                        </span>
                    </a>

                    <p class="desc">
                        A news portal developed for a university, designed to keep students and faculty informed about
                        campus events, academic achievements, and important announcements. The platform features a simple
                        and intuitive interface for easy navigation. Users can post articles, comment, and share news.
                    </p>

                    <a class="action" href="https://unpnews.com/" target="_blank" rel="noopener noreferrer">
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
    background-color: #121212;
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
}

/* Card */
/*  */
.card {
    max-width: 300px;
    border-radius: 0.5rem;
    background-color: #fff;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    border: 1px solid transparent;
}

.card a {
    text-decoration: none
}

.content {
    padding: 1.1rem;
}

.image {
    object-fit: cover;
    width: 100%;
    height: 150px;
    background-color: rgb(239, 205, 255);
    background-image: url('@/assets/acsaude.png');
    background-size: cover;
    border-radius: 0.5rem;
}

.title {
    color: #111827;
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 600;
}

.desc {
    margin-top: 0.5rem;
    color: #6B7280;
    font-size: 0.875rem;
    line-height: 1.25rem;
}

.action {
    display: inline-flex;
    margin-top: 1rem;
    color: #ffffff;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 500;
    align-items: center;
    gap: 0.25rem;
    background-color: #2563EB;
    padding: 4px 8px;
    border-radius: 4px;
}

.action span {
    transition: .3s ease;
}

.action:hover span {
    transform: translateX(4px);
}

/* End Card */
</style>