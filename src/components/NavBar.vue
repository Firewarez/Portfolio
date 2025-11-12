<template>
    <nav class="navbar-content">
        <div class="bar-content">
            <div class="bar-content-tittle">
                <a href="#" class="desktop-item"><span class="desktop-item">Arthur Barcelos</span></a>
            </div>
            <div class="bar-content-items">
                <a href="#" class="desktop-item"><span>Skills</span></a>
                <a href="#" class="desktop-item"><span>Projects</span></a>
                <a href="#" class="desktop-item"><span>Contact</span></a>
            </div>
            <div class="bar-content-items-mobile">
                <i class="bi bi-list"></i>
                <div class="bar-content-items-mobile-dropdown">
                    <a href="#" class="mobile-item"><span>Skills</span></a>
                    <a href="#" class="mobile-item"><span>Projects</span></a>
                    <a href="#" class="mobile-item"><span>Contact</span></a>
                </div>
            </div>
        </div>
    </nav>
</template>

<!--Script-->
<script setup>

</script>

<!--Css-->
<style scoped>
.navbar-content {
    z-index: 999;
    width: 100%;
    height: 100px;
    position: fixed;
    background-color: transparent;
    align-items: center;
    padding: 0 20px;
    /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
}

.bar-content {
    max-width: 90%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}


.desktop-item{
    position: relative;
    display: inline-block;
    margin-left: 20px;
    text-decoration: none;
    color: white;
    font-weight: 500;
}

.desktop-item span{
    font-size: 24px;
    font-weight: bold;  
}

.desktop-item::after {
    content: "";
    position: absolute;
    display: block;
    bottom: -6px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: rgb(255, 255, 255);
    transform: scaleX(0);
    transform-origin: left center;
    transition: transform 0.3s ease;
}

.desktop-item:hover::after {
    transform: scaleX(1);
}


.bar-content-items-mobile {
    display: none;
    position: relative;
}


/* Mobile media styles 768px */
@media (max-width: 768px) {

    .navbar-content{
        width: 100%;
        padding: 0 0px;
    }
    .bar-content{
        width: 100%;
    }

    .bar-content-items {
        display: none;
    }

    .bar-content-items-mobile {
        display: flex;
    }

    .bar-content-items-mobile-dropdown {
        display: none;
        position: absolute;
        top: 40px;
        right: 0;
        background-color: var(--secondary-font);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        overflow: hidden;
        flex-direction: column;
    }

    .bar-content-items-mobile i{
        font-size: 24px;
        font-weight: bold;
        color: white;
        cursor: pointer;
    }
}
</style>