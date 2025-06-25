<template>
  <div class="modern-past-presidents-gallery">
    <!-- Modern Statistics Header -->
    <div class="stats-section">
      <div class="stats-container">
        <div 
          v-for="(stat, index) in statistics" 
          :key="stat.label"
          class="stat-card"
          :class="`stat-${index + 1}`"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <div class="stat-icon">
            <v-icon :icon="stat.icon" />
          </div>
          <div class="stat-content">
            <div class="stat-number">{{ stat.number }}</div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
          <div class="stat-decoration"></div>
        </div>
      </div>
    </div>

    <!-- Modern Search and Filter Section -->
    <div class="search-filter-section">
      <div class="search-filter-container">
        <!-- Search Input -->
        <div class="search-container">
          <div class="search-input-wrapper">
            <v-text-field
              v-model="searchQuery"
              label="Search presidents by name or village..."
              prepend-inner-icon="mdi-magnify"
              variant="outlined"
              rounded="xl"
              clearable
              hide-details
              color="primary"
              class="modern-search-field"
            />
          </div>
        </div>

        <!-- Filter Pills -->
        <div class="filter-container">
          <div class="filter-header">
            <v-icon icon="mdi-filter-variant" class="filter-icon" />
            <span class="filter-title">Filter by Era</span>
          </div>
          <v-chip-group
            v-model="selectedDecade"
            selected-class="selected-filter-chip"
            mandatory
            class="modern-filter-chips"
          >
            <v-chip 
              v-for="option in filterOptions"
              :key="option.value"
              :value="option.value"
              class="filter-chip"
              size="large"
            >
              <v-icon :icon="option.icon" class="mr-2" />
              {{ option.label }}
            </v-chip>
          </v-chip-group>
        </div>
      </div>
    </div>

    <!-- Results Summary -->
    <div class="results-section" v-if="hasActiveFilters">
      <div class="results-card">
        <div class="results-icon">
          <v-icon icon="mdi-information" />
        </div>
        <div class="results-content">
          <span class="results-text">
            Showing <strong>{{ filteredPresidents.length }}</strong> president{{ filteredPresidents.length !== 1 ? 's' : '' }}
            <span v-if="searchQuery"> matching "<em>{{ searchQuery }}</em>"</span>
            <span v-if="selectedDecade !== 'all'"> from the <strong>{{ selectedDecade }}s</strong></span>
          </span>
        </div>
      </div>
    </div>

    <!-- Modern Presidents Grid -->
    <div class="presidents-grid-section">
      <div v-if="filteredPresidents.length > 0" class="presidents-grid">
        <div 
          v-for="(president, index) in paginatedPresidents" 
          :key="president.Name"
          class="modern-president-card"
          :style="{ animationDelay: `${index * 0.05}s` }"
        >
          <div class="card-glow"></div>
          
          <!-- Card Header -->
          <div class="card-header">
            <div class="president-number">
              <span class="number-text">#{{ president.SrNo }}</span>
            </div>
            <div class="year-badge">
              <v-icon icon="mdi-crown" class="crown-icon" />
              <span class="year-text">{{ president.Year }}</span>
            </div>
          </div>

          <!-- Card Body -->
          <div class="card-body">
            <div class="president-avatar">
              <v-icon icon="mdi-account-circle" />
            </div>
            
            <div class="president-info">
              <h3 class="president-name">{{ president.Name }}</h3>
              
              <div class="president-location">
                <v-icon icon="mdi-map-marker" class="location-icon" />
                <span class="location-text">{{ president.Village }}</span>
              </div>

              <div class="tenure-info">
                <span class="tenure-label">Served in</span>
                <span class="tenure-year">{{ president.Year }}</span>
              </div>
            </div>
          </div>

          <!-- Card Footer -->
          <div class="card-footer">
            <div class="legacy-indicator">
              <div class="legacy-dots">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
              </div>
              <span class="legacy-text">Legacy Leader</span>
            </div>
          </div>
        </div>
      </div>

      <!-- No Results State -->
      <div v-else class="no-results-section">
        <div class="no-results-card">
          <div class="no-results-icon">
            <v-icon icon="mdi-account-search" />
          </div>
          <h3 class="no-results-title">No Presidents Found</h3>
          <p class="no-results-message">
            We couldn't find any presidents matching your search criteria. 
            Try adjusting your filters or search terms.
          </p>
          <v-btn
            color="primary"
            variant="elevated"
            rounded="xl"
            size="large"
            @click="clearFilters"
            class="clear-filters-btn"
          >
            <v-icon icon="mdi-refresh" class="mr-2" />
            Clear All Filters
          </v-btn>
        </div>
      </div>
    </div>

    <!-- Modern Pagination -->
    <div class="pagination-section" v-if="totalPages > 1">
      <div class="pagination-container">
        <v-pagination
          v-model="currentPage"
          :length="totalPages"
          :total-visible="7"
          color="primary"
          rounded="circle"
          class="modern-pagination"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import pastPresidentsData from '@/data/pastPresidents.json'

// Reactive state
const searchQuery = ref('')
const selectedDecade = ref('all')
const currentPage = ref(1)
const itemsPerPage = 24

// Helper functions
const getYearFromString = (yearStr) => parseInt(yearStr.split('-')[0])
const getDecadeFromYear = (year) => Math.floor(year / 10) * 10

// Computed properties
const decades = computed(() => {
  const allDecades = new Set(
    pastPresidentsData.map(president => 
      getDecadeFromYear(getYearFromString(president.Year))
    )
  )
  return Array.from(allDecades).sort()
})

const statistics = computed(() => {
  const totalCount = filteredPresidents.value.length
  const years = pastPresidentsData.map(p => getYearFromString(p.Year))
  const minYear = Math.min(...years)
  const maxYear = Math.max(...years)
  
  return [
    {
      icon: 'mdi-crown',
      number: totalCount,
      label: 'Distinguished Leaders',
    },
    {
      icon: 'mdi-calendar-range',
      number: `${maxYear - minYear}+`,
      label: 'Years of Leadership',
    },
    {
      icon: 'mdi-timeline',
      number: `${minYear}-${maxYear}`,
      label: 'Era Span',
    }
  ]
})

const filterOptions = computed(() => [
  { 
    value: 'all', 
    label: 'All Eras', 
    icon: 'mdi-history' 
  },
  ...decades.value.map(decade => ({
    value: decade.toString(),
    label: `${decade}s`,
    icon: 'mdi-calendar-clock'
  }))
])

const filteredPresidents = computed(() => {
  let filtered = pastPresidentsData

  // Apply search filter
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(president =>
      president.Name.toLowerCase().includes(query) ||
      president.Village.toLowerCase().includes(query)
    )
  }

  // Apply decade filter
  if (selectedDecade.value !== 'all') {
    const decade = parseInt(selectedDecade.value)
    filtered = filtered.filter(president => {
      const year = getYearFromString(president.Year)
      return getDecadeFromYear(year) === decade
    })
  }

  return filtered
})

const totalPages = computed(() => 
  Math.ceil(filteredPresidents.value.length / itemsPerPage)
)

const paginatedPresidents = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return filteredPresidents.value.slice(start, end)
})

const hasActiveFilters = computed(() => 
  searchQuery.value || selectedDecade.value !== 'all'
)

// Methods
const clearFilters = () => {
  searchQuery.value = ''
  selectedDecade.value = 'all'
  currentPage.value = 1
}

// Watch for filter changes to reset pagination
watch([searchQuery, selectedDecade], () => {
  currentPage.value = 1
})
</script>

<style scoped>
/* Modern Past Presidents Gallery Styles */
.modern-past-presidents-gallery {
  max-width: 1600px;
  margin: 0 auto;
  padding: 2rem;
  background: linear-gradient(135deg, 
    rgba(var(--v-theme-surface), 0.8) 0%,
    rgba(var(--v-theme-background), 0.9) 100%
  );
  border-radius: 24px;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(var(--v-theme-outline), 0.2);
}

/* Statistics Section */
.stats-section {
  margin-bottom: 4rem;
}

.stats-container {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.stat-card {
  position: relative;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem 2.5rem;
  border-radius: 20px;
  min-width: 220px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(var(--v-theme-outline), 0.3);
  animation: fadeInUp 0.6s ease forwards;
  opacity: 0;
  transform: translateY(30px);
}

.stat-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.stat-1 {
  background: linear-gradient(135deg, 
    rgba(var(--v-theme-primary), 0.1) 0%,
    rgba(var(--v-theme-primary), 0.05) 100%
  );
  border-color: rgba(var(--v-theme-primary), 0.3);
}

.stat-1:hover {
  border-color: rgb(var(--v-theme-primary));
  box-shadow: 0 20px 40px rgba(var(--v-theme-primary), 0.2);
}

.stat-2 {
  background: linear-gradient(135deg, 
    rgba(var(--v-theme-secondary), 0.1) 0%,
    rgba(var(--v-theme-secondary), 0.05) 100%
  );
  border-color: rgba(var(--v-theme-secondary), 0.3);
}

.stat-2:hover {
  border-color: rgb(var(--v-theme-secondary));
  box-shadow: 0 20px 40px rgba(var(--v-theme-secondary), 0.2);
}

.stat-3 {
  background: linear-gradient(135deg, 
    rgba(156, 39, 176, 0.1) 0%,
    rgba(156, 39, 176, 0.05) 100%
  );
  border-color: rgba(156, 39, 176, 0.3);
}

.stat-3:hover {
  border-color: rgb(156, 39, 176);
  box-shadow: 0 20px 40px rgba(156, 39, 176, 0.2);
}

.stat-icon {
  width: 60px;
  height: 60px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: rgb(var(--v-theme-on-primary));
  position: relative;
  z-index: 2;
}

.stat-1 .stat-icon {
  background: linear-gradient(135deg, rgb(var(--v-theme-primary)), #42a5f5);
}

.stat-2 .stat-icon {
  background: linear-gradient(135deg, rgb(var(--v-theme-secondary)), #00acc1);
}

.stat-3 .stat-icon {
  background: linear-gradient(135deg, #9c27b0, #e1bee7);
}

.stat-number {
  font-size: 2.2rem;
  font-weight: 800;
  line-height: 1;
  margin-bottom: 0.25rem;
}

.stat-1 .stat-number {
  color: rgb(var(--v-theme-primary));
}

.stat-2 .stat-number {
  color: rgb(var(--v-theme-secondary));
}

.stat-3 .stat-number {
  color: rgb(156, 39, 176);
}

.stat-label {
  font-size: 0.95rem;
  font-weight: 600;
  color: rgb(var(--v-theme-on-surface-variant));
  letter-spacing: 0.3px;
}

.stat-decoration {
  position: absolute;
  top: -50%;
  right: -20%;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  opacity: 0.1;
  transition: all 0.3s ease;
}

.stat-1 .stat-decoration {
  background: radial-gradient(circle, rgb(var(--v-theme-primary)), transparent);
}

.stat-2 .stat-decoration {
  background: radial-gradient(circle, rgb(var(--v-theme-secondary)), transparent);
}

.stat-3 .stat-decoration {
  background: radial-gradient(circle, rgb(156, 39, 176), transparent);
}

/* Search and Filter Section */
.search-filter-section {
  margin-bottom: 3rem;
}

.search-filter-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.search-container {
  display: flex;
  justify-content: center;
}

.search-input-wrapper {
  width: 100%;
  max-width: 500px;
}

.modern-search-field {
  background: rgba(var(--v-theme-surface), 0.9);
  backdrop-filter: blur(20px);
  border-radius: 24px;
}

.filter-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.filter-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgb(var(--v-theme-on-surface-variant));
}

.filter-icon {
  font-size: 1.2rem;
}

.filter-title {
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.3px;
}

.modern-filter-chips {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.filter-chip {
  background: rgba(var(--v-theme-surface), 0.9) !important;
  border: 2px solid rgba(var(--v-theme-outline), 0.3) !important;
  border-radius: 16px !important;
  padding: 0.75rem 1.5rem !important;
  transition: all 0.3s ease !important;
  backdrop-filter: blur(20px);
}

.filter-chip:hover {
  transform: translateY(-2px);
  border-color: rgba(var(--v-theme-primary), 0.5) !important;
  box-shadow: 0 4px 15px rgba(var(--v-theme-primary), 0.2);
}

.filter-chip.selected-filter-chip {
  background: rgb(var(--v-theme-primary)) !important;
  border-color: rgb(var(--v-theme-primary)) !important;
  color: rgb(var(--v-theme-on-primary)) !important;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(var(--v-theme-primary), 0.3);
}

/* Results Section */
.results-section {
  margin-bottom: 2rem;
}

.results-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  background: rgba(var(--v-theme-primary), 0.05);
  border: 1px solid rgba(var(--v-theme-primary), 0.2);
  border-radius: 16px;
  max-width: 600px;
  margin: 0 auto;
}

.results-icon {
  width: 40px;
  height: 40px;
  background: rgba(var(--v-theme-primary), 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(var(--v-theme-primary));
}

.results-text {
  font-size: 0.95rem;
  color: rgb(var(--v-theme-on-surface));
  line-height: 1.5;
}

/* Presidents Grid Section */
.presidents-grid-section {
  margin-bottom: 3rem;
}

.presidents-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
}

/* Modern President Cards */
.modern-president-card {
  position: relative;
  background: rgba(var(--v-theme-surface), 0.9);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(var(--v-theme-outline), 0.3);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  animation: fadeInUp 0.6s ease forwards;
  opacity: 0;
  transform: translateY(30px);
}

.modern-president-card:hover {
  transform: translateY(-8px) scale(1.02);
  border-color: rgba(var(--v-theme-primary), 0.5);
  box-shadow: 0 20px 40px rgba(var(--v-theme-primary), 0.15);
}

.card-glow {
  position: absolute;
  inset: -2px;
  border-radius: 22px;
  padding: 2px;
  background: linear-gradient(45deg, 
    transparent, 
    rgba(var(--v-theme-primary), 0.3), 
    transparent
  );
  opacity: 0;
  transition: opacity 0.3s ease;
}

.modern-president-card:hover .card-glow {
  opacity: 1;
}

/* Card Header */
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  background: linear-gradient(135deg, 
    rgba(var(--v-theme-primary), 0.1) 0%,
    rgba(var(--v-theme-secondary), 0.05) 100%
  );
}

.president-number {
  background: rgba(var(--v-theme-primary), 0.1);
  border: 1px solid rgba(var(--v-theme-primary), 0.3);
  border-radius: 8px;
  padding: 0.25rem 0.75rem;
}

.number-text {
  font-size: 0.8rem;
  font-weight: 700;
  color: rgb(var(--v-theme-primary));
  letter-spacing: 0.5px;
}

.year-badge {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, #ffd700, #ffed4e);
  color: #1a1a1a;
  border-radius: 12px;
  padding: 0.5rem 1rem;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(255, 215, 0, 0.3);
}

.crown-icon {
  font-size: 1rem;
}

.year-text {
  font-size: 0.9rem;
  letter-spacing: 0.3px;
}

/* Card Body */
.card-body {
  padding: 1.5rem;
  text-align: center;
}

.president-avatar {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, 
    rgba(var(--v-theme-primary), 0.2),
    rgba(var(--v-theme-secondary), 0.2)
  );
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  color: rgb(var(--v-theme-primary));
  font-size: 2rem;
  border: 3px solid rgba(var(--v-theme-primary), 0.3);
}

.president-name {
  font-size: 1.2rem;
  font-weight: 700;
  color: rgb(var(--v-theme-on-surface));
  margin-bottom: 0.75rem;
  line-height: 1.2;
}

.president-location {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.location-icon {
  font-size: 1rem;
  color: rgb(var(--v-theme-primary));
}

.location-text {
  font-size: 0.9rem;
  color: rgb(var(--v-theme-on-surface-variant));
  font-weight: 500;
}

.tenure-info {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.tenure-label {
  font-size: 0.8rem;
  color: rgb(var(--v-theme-on-surface-variant));
  opacity: 0.8;
}

.tenure-year {
  font-size: 1rem;
  font-weight: 600;
  color: rgb(var(--v-theme-primary));
}

/* Card Footer */
.card-footer {
  padding: 1rem 1.5rem;
  background: rgba(var(--v-theme-surface-variant), 0.3);
  border-top: 1px solid rgba(var(--v-theme-outline), 0.2);
}

.legacy-indicator {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
}

.legacy-dots {
  display: flex;
  gap: 0.25rem;
}

.dot {
  width: 6px;
  height: 6px;
  background: rgb(var(--v-theme-primary));
  border-radius: 50%;
  opacity: 0.6;
}

.legacy-text {
  font-size: 0.8rem;
  color: rgb(var(--v-theme-on-surface-variant));
  font-weight: 500;
  letter-spacing: 0.3px;
}

/* No Results Section */
.no-results-section {
  display: flex;
  justify-content: center;
  padding: 4rem 2rem;
}

.no-results-card {
  text-align: center;
  max-width: 500px;
  padding: 3rem 2rem;
  background: rgba(var(--v-theme-surface), 0.9);
  border: 1px solid rgba(var(--v-theme-outline), 0.3);
  border-radius: 24px;
  backdrop-filter: blur(20px);
}

.no-results-icon {
  width: 80px;
  height: 80px;
  background: rgba(var(--v-theme-primary), 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: rgb(var(--v-theme-primary));
  font-size: 2rem;
}

.no-results-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: rgb(var(--v-theme-on-surface));
  margin-bottom: 1rem;
}

.no-results-message {
  font-size: 1rem;
  color: rgb(var(--v-theme-on-surface-variant));
  line-height: 1.6;
  margin-bottom: 2rem;
}

.clear-filters-btn {
  font-weight: 600;
  letter-spacing: 0.3px;
}

/* Pagination Section */
.pagination-section {
  margin-top: 3rem;
}

.pagination-container {
  display: flex;
  justify-content: center;
}

.modern-pagination {
  background: rgba(var(--v-theme-surface), 0.9);
  border-radius: 16px;
  padding: 1rem;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(var(--v-theme-outline), 0.3);
}

/* Animations */
@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive Design */
@media (max-width: 1024px) {
  .stats-container {
    gap: 1rem;
  }
  
  .stat-card {
    min-width: 200px;
    padding: 1.5rem 2rem;
  }
  
  .presidents-grid {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
}

@media (max-width: 768px) {
  .modern-past-presidents-gallery {
    padding: 1.5rem;
  }
  
  .stats-container {
    flex-direction: column;
    align-items: center;
  }
  
  .stat-card {
    width: 100%;
    max-width: 350px;
  }
  
  .search-filter-container {
    gap: 1.5rem;
  }
  
  .modern-filter-chips {
    gap: 0.75rem;
  }
  
  .filter-chip {
    padding: 0.5rem 1rem !important;
  }
  
  .presidents-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
  }
}

@media (max-width: 480px) {
  .modern-past-presidents-gallery {
    padding: 1rem;
  }
  
  .stat-card {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
    padding: 1.5rem;
  }
  
  .stat-icon {
    width: 50px;
    height: 50px;
    font-size: 1.2rem;
  }
  
  .stat-number {
    font-size: 1.8rem;
  }
  
  .modern-filter-chips {
    flex-direction: column;
    align-items: center;
  }
  
  .filter-chip {
    width: 100%;
    max-width: 250px;
  }
  
  .presidents-grid {
    grid-template-columns: 1fr;
  }
  
  .modern-president-card {
    margin: 0 auto;
    max-width: 300px;
  }
  
  .card-body {
    padding: 1rem;
  }
  
  .president-name {
    font-size: 1.1rem;
  }
}
</style> 