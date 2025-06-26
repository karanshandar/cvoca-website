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

    <!-- Modern Presidents Leaderboard -->
    <div class="presidents-leaderboard-section">
      <div v-if="filteredPresidents.length > 0" class="presidents-leaderboard">
        <!-- Leaderboard Header -->
        <div class="leaderboard-header">
          <div class="header-rank">#</div>
          <div class="header-name">President Name</div>
          <div class="header-village">Village</div>
          <div class="header-year">Term</div>
        </div>

        <!-- Leaderboard Rows -->
        <div 
          v-for="(president, index) in paginatedPresidents" 
          :key="president.Name"
          class="leaderboard-row"
          :style="{ animationDelay: `${index * 0.03}s` }"
        >
          <div class="row-rank">
            <div class="rank-badge">
              <span class="rank-number">#{{ president.SrNo }}</span>
            </div>
          </div>
          
          <div class="row-name">
            <span class="president-name">{{ president.Name }}</span>
          </div>
          
          <div class="row-village">
            <v-icon icon="mdi-map-marker" class="location-icon" />
            <span class="village-name">{{ president.Village }}</span>
          </div>
          
          <div class="row-year">
            <div class="year-badge">
              <v-icon icon="mdi-calendar" class="calendar-icon" />
              <span class="year-text">{{ president.Year }}</span>
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
  margin-bottom: 2rem;
}

.stats-container {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.stat-card {
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem 1.75rem;
  border-radius: 16px;
  min-width: 180px;
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
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
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
  font-size: 1.8rem;
  font-weight: 800;
  line-height: 1;
  margin-bottom: 0.2rem;
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
  font-size: 0.85rem;
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

/* Presidents Leaderboard Section */
.presidents-leaderboard-section {
  margin-bottom: 3rem;
}

.presidents-leaderboard {
  background: rgba(var(--v-theme-surface), 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(var(--v-theme-outline), 0.3);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

/* Leaderboard Header */
.leaderboard-header {
  display: grid;
  grid-template-columns: 70px minmax(280px, 2fr) 180px 120px;
  gap: 2rem;
  padding: 1rem 1.5rem;
  background: linear-gradient(135deg, 
    rgba(var(--v-theme-primary), 0.1) 0%,
    rgba(var(--v-theme-secondary), 0.05) 100%
  );
  border-bottom: 2px solid rgba(var(--v-theme-outline), 0.2);
  font-weight: 700;
  font-size: 0.9rem;
  color: rgb(var(--v-theme-on-surface-variant));
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.header-rank {
  text-align: center;
}

.header-name {
  text-align: left;
}

.header-village {
  text-align: center;
}

.header-year {
  text-align: center;
}

/* Leaderboard Rows */
.leaderboard-row {
  display: grid;
  grid-template-columns: 70px minmax(280px, 2fr) 180px 120px;
  gap: 2rem;
  padding: 0.875rem 1.5rem;
  border-bottom: 1px solid rgba(var(--v-theme-outline), 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  animation: fadeInUp 0.6s ease forwards;
  opacity: 0;
  transform: translateY(20px);
  align-items: center;
}

.leaderboard-row:hover {
  background: rgba(var(--v-theme-primary), 0.05);
  transform: translateX(8px);
  border-left: 4px solid rgb(var(--v-theme-primary));
  padding-left: calc(1.5rem - 4px);
}

.leaderboard-row:last-child {
  border-bottom: none;
}

/* Rank Badge */
.row-rank {
  display: flex;
  justify-content: center;
  align-items: center;
}

.rank-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem 0.8rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.85rem;
  min-width: 50px;
  background: rgba(var(--v-theme-surface-variant), 0.6);
  color: rgb(var(--v-theme-on-surface-variant));
  border: 1px solid rgba(var(--v-theme-outline), 0.3);
  transition: all 0.3s ease;
}

.rank-number {
  font-size: 0.85rem;
  letter-spacing: 0.3px;
}

/* President Name */
.row-name {
  display: flex;
  align-items: center;
}

.president-name {
  font-size: 1.1rem;
  font-weight: 600;
  color: rgb(var(--v-theme-on-surface));
  line-height: 1.3;
}

/* Village */
.row-village {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.location-icon {
  font-size: 1rem;
  color: rgb(var(--v-theme-primary));
  opacity: 0.7;
}

.village-name {
  font-size: 0.95rem;
  color: rgb(var(--v-theme-on-surface-variant));
  font-weight: 500;
}

/* Year Badge */
.row-year {
  display: flex;
  justify-content: center;
  align-items: center;
}

.year-badge {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(var(--v-theme-primary), 0.1);
  color: rgb(var(--v-theme-primary));
  border-radius: 8px;
  padding: 0.4rem 0.8rem;
  font-weight: 600;
  border: 1px solid rgba(var(--v-theme-primary), 0.3);
}

.calendar-icon {
  font-size: 0.9rem;
}

.year-text {
  font-size: 0.85rem;
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
    min-width: 160px;
    padding: 1rem 1.5rem;
  }
  
  .leaderboard-header,
  .leaderboard-row {
    grid-template-columns: 65px 1fr 140px 110px;
    padding: 0.875rem 1.25rem;
    gap: 0.6rem;
  }
  
  .rank-badge {
    min-width: 45px;
    padding: 0.35rem 0.7rem;
    font-size: 0.8rem;
  }
  
  .president-name {
    font-size: 1rem;
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
    justify-content: flex-start;
  }
  
  .filter-chip {
    padding: 0.5rem 1rem !important;
    flex: 0 0 auto;
    min-width: fit-content;
  }
  
  .leaderboard-header,
  .leaderboard-row {
    grid-template-columns: 60px 1fr 120px 100px;
    padding: 0.875rem 1rem;
    gap: 0.5rem;
  }
  
  .leaderboard-header {
    font-size: 0.8rem;
  }
  
  .rank-badge {
    min-width: 45px;
    padding: 0.3rem 0.6rem;
    font-size: 0.8rem;
  }
  
  .president-name {
    font-size: 0.95rem;
  }
  
  .village-name {
    font-size: 0.85rem;
  }
  
  .year-text {
    font-size: 0.8rem;
  }
}

@media (max-width: 480px) {
  .modern-past-presidents-gallery {
    padding: 1rem;
  }
  
  .stat-card {
    flex-direction: column;
    text-align: center;
    gap: 0.75rem;
    padding: 1rem;
  }
  
  .stat-icon {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }
  
  .stat-number {
    font-size: 1.5rem;
  }
  
  .modern-filter-chips {
    flex-direction: row;
    justify-content: center;
    gap: 0.5rem;
  }
  
  .filter-chip {
    padding: 0.5rem 0.75rem !important;
    font-size: 0.85rem !important;
    flex: 0 0 auto;
    min-width: fit-content;
  }
  
  .leaderboard-header,
  .leaderboard-row {
    grid-template-columns: 50px 1fr 80px;
    padding: 1rem 0.75rem;
    gap: 0.5rem;
  }
  
  .header-year,
  .row-year {
    display: none;
  }
  
  .leaderboard-header {
    font-size: 0.75rem;
  }
  
  .rank-badge {
    min-width: 40px;
    padding: 0.25rem 0.5rem;
    font-size: 0.75rem;
  }
  
  .president-name {
    font-size: 0.9rem;
  }
  
  .village-name {
    font-size: 0.8rem;
  }
  
  .trophy-icon,
  .medal-icon {
    font-size: 0.9rem;
  }
}

@media (max-width: 360px) {
  .modern-filter-chips {
    gap: 0.4rem;
  }
  
  .filter-chip {
    padding: 0.4rem 0.6rem !important;
    font-size: 0.8rem !important;
    border-radius: 12px !important;
  }
  
  .filter-header {
    margin-bottom: 0.5rem;
  }
  
  .filter-title {
    font-size: 0.9rem;
  }
}
</style> 