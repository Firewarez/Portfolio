<template>
  <section class="min-h-screen flex flex-col items-center justify-center py-20 relative z-10 w-full overflow-hidden gap-16">
    
    <!-- Text Content -->
    <div class="space-y-8 max-w-4xl px-4 w-full flex flex-col items-center text-center">
      <div class="space-y-3 w-full flex flex-col items-center">
        <h2 class="text-sm font-bold tracking-[0.2em] text-[#8B5DFF] uppercase drop-shadow-sm">Introduction</h2>
        <h3 class="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
          I'm Arthur Barcelos
        </h3>
        <p class="text-xl text-gray-400 font-medium">Full Stack Developer <span class="text-gray-500">&bull;</span> Computer Science Student</p>
      </div>

      <div class="space-y-6 text-[1.05rem] md:text-lg text-gray-300 leading-relaxed font-light mt-4 w-full text-center">
        <p>
          I'm currently pursuing a Bachelor's degree in Computer Science at <span class="font-medium text-white border-b-2 border-[#8B5DFF]/50 pb-0.5">Unipê University</span>. 2+ year building scalable applications using <span class="font-medium text-white border-b-2 border-[#8B5DFF]/50 pb-0.5">React</span>, <span class="font-medium text-white border-b-2 border-[#8B5DFF]/50 pb-0.5">Node.js Express.js</span>, <span class="font-medium text-white border-b-2 border-[#8B5DFF]/50 pb-0.5">Java</span> and <span class="font-medium text-white border-b-2 border-[#8B5DFF]/50 pb-0.5">PostgreSQL</span>. I'm deeply passionate about DevOps practices.
        </p>
        <p>
          With a creative mindset and natural leadership abilities, I enjoy challenging myself by creating new projects that put my skills to the test. I'm always looking for opportunities to grow and contribute to meaningful tech solutions.
        </p>
      </div>

      <!-- Stats Cards -->
      <div class="stats-row">
        <div class="stat-card" v-for="stat in stats" :key="stat.label">
          <span class="stat-number">{{ stat.value }}</span>
          <span class="stat-label">{{ stat.label }}</span>
        </div>
      </div>
    </div>

    <!-- Skills / Tech Stack Marquee Full Width -->
    <div class="w-full relative py-8 bg-black/10 border-y border-white/5 backdrop-blur-md" style="mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent); -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);">
      <div class="marquee-container">
          <!-- Marquee Row 1 (Right to Left) -->
          <div class="marquee-content gap-6 pr-6 items-center">
            <template v-for="i in 10" :key="'top-'+i">
              <div v-for="tech in topRow" :key="tech.name + '-' + i" class="tech-card shrink-0">
                <span :class="['tech-icon', tech.color]"><i :class="['bi', tech.icon]"></i></span>
                <span class="tech-name">{{ tech.name }}</span>
              </div>
            </template>
          </div>
        </div>

        <div class="marquee-container mt-6">
          <!-- Marquee Row 2 (Left to Right) -->
          <div class="marquee-content-reverse gap-6 pr-6 items-center">
            <template v-for="i in 10" :key="'bottom-'+i">
              <div v-for="tech in bottomRow" :key="tech.name + '-' + i" class="tech-card shrink-0">
                <span :class="['tech-icon', tech.color]"><i :class="['bi', tech.icon]"></i></span>
                <span class="tech-name">{{ tech.name }}</span>
              </div>
            </template>
          </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const stats = [
  { value: '3+', label: 'Projects Delivered' },
  { value: '2+', label: 'Year of Experience' },
  { value: '10+', label: 'Technologies' },
];

const topRow = [
  { name: 'React', icon: 'bi-filetype-jsx', color: 'text-[#61DAFB]' },
  { name: 'Angular', icon: 'bi-google', color: 'text-[#DD0031]' },
  { name: 'Vue.js', icon: 'bi-filetype-vue', color: 'text-[#42b883]' },
  { name: 'Express', icon: 'bi-server', color: 'text-gray-300' },
  { name: 'TypeScript', icon: 'bi-filetype-tsx', color: 'text-[#3178C6]' },
  { name: 'Java', icon: 'bi-cup-hot-fill', color: 'text-[#b07219]' },
  { name: 'PHP', icon: 'bi-filetype-php', color: 'text-[#777BB4]' },
  { name: 'PostgreSQL', icon: 'bi-database-fill', color: 'text-[#336791]' }
];

const bottomRow = [
  { name: 'MySQL', icon: 'bi-database', color: 'text-[#F29111]' },
  { name: 'JavaScript', icon: 'bi-filetype-js', color: 'text-[#F7DF1E]' },
  { name: 'HTML5', icon: 'bi-filetype-html', color: 'text-[#E34F26]' },
  { name: 'CSS3', icon: 'bi-filetype-css', color: 'text-[#1572B6]' },
  { name: 'Tailwind CSS', icon: 'bi-wind', color: 'text-[#38B2AC]' },
  { name: 'Firebase', icon: 'bi-fire', color: 'text-[#FFCA28]' },
  { name: 'Docker', icon: 'bi-box-seam-fill', color: 'text-[#2496ED]' },
  { name: 'Git', icon: 'bi-git', color: 'text-[#F05032]' }
];
</script>

<style scoped>
/* Stats */
.stats-row {
  display: flex;
  gap: 2rem;
  margin-top: 1rem;
}

.stat-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.25rem 2rem;
  border-radius: 1rem;
  background: rgba(139, 93, 255, 0.08);
  border: 1px solid rgba(139, 93, 255, 0.15);
  transition: all 0.3s ease;
}

.stat-card:hover {
  background: rgba(139, 93, 255, 0.15);
  transform: translateY(-4px);
}

.stat-number {
  font-size: 2rem;
  font-weight: 800;
  color: #8B5DFF;
  line-height: 1;
}

.stat-label {
  font-size: 0.8rem;
  color: #9ca3af;
  margin-top: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

@media (max-width: 640px) {
  .stats-row {
    flex-direction: column;
    gap: 1rem;
  }

  .stat-card {
    padding: 1rem 1.5rem;
  }
}

/* Tech cards */
.tech-card {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  border-radius: 0.75rem;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  cursor: default;
}

.tech-card:hover {
  background-color: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-0.25rem);
}

.tech-icon {
  font-size: 1.5rem;
  line-height: 2rem;
  filter: drop-shadow(0 4px 3px rgba(0,0,0,0.07)) drop-shadow(0 2px 2px rgba(0,0,0,0.06));
}

.tech-name {
  color: #e5e7eb;
  font-weight: 600;
  letter-spacing: 0.025em;
  font-size: 0.875rem;
  line-height: 1.25rem;
}

@media (min-width: 768px) {
  .tech-name {
    font-size: 1rem;
    line-height: 1.5rem;
  }
}

.marquee-container {
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  display: flex;
}

.marquee-content {
  display: flex;
  animation: scroll 40s linear infinite;
  width: max-content;
}

.marquee-content-reverse {
  display: flex;
  animation: scroll-reverse 40s linear infinite;
  width: max-content;
}

.marquee-container:hover .marquee-content,
.marquee-container:hover .marquee-content-reverse {
  animation-play-state: paused;
}

@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

@keyframes scroll-reverse {
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
}
</style>