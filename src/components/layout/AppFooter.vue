<template>
  <footer class="app-footer">
    <div class="footer-background">
      <div class="footer-gradient"></div>
      <div class="footer-pattern"></div>
    </div>
    
    <v-container class="footer-container">
      <!-- Main Footer Content -->
      <div class="footer-content">
        <!-- Brand Section -->
        <div class="footer-brand">
          <div class="brand-header">
            <div class="logo-wrapper">
              <v-img
                src="/assets/images/logo-light.png"
                alt="CVOCA Logo"
                width="48"
                height="48"
                class="footer-logo"
              />
            </div>
            <div class="brand-text">
              <h3 class="brand-title">CVOCA</h3>
              <p class="brand-subtitle">Chartered & Cost Accountants Association</p>
            </div>
          </div>
          
          <p class="brand-description">
            Empowering professionals through knowledge, networking, and innovation in the dynamic world of accounting and finance.
          </p>
          
          <div class="social-links">
            <v-btn
              v-for="social in SOCIAL_LINKS"
              :key="social.platform"
              icon
              variant="text"
              :href="social.href"
              :target="social.external ? '_blank' : undefined"
              :rel="social.external ? 'noopener noreferrer' : undefined"
              class="social-btn"
              :aria-label="social.platform"
              @click="social.href === '#' && handlePlaceholderClick(social.platform)"
            >
              <v-icon :icon="social.icon" />
            </v-btn>
          </div>
        </div>

        <!-- Quick Links Section -->
        <div class="footer-section">
          <h4 class="footer-section-title">Quick Links</h4>
          <nav class="footer-nav">
            <router-link 
              v-for="item in getQuickLinks()" 
              :key="item.path" 
              :to="item.path" 
              class="footer-nav-link"
              @click="scrollToTop"
            >
              <v-icon :icon="item.icon" class="footer-nav-icon" />
              {{ item.label }}
            </router-link>
          </nav>
        </div>

        <!-- Resources Section -->
        <div class="footer-section">
          <h4 class="footer-section-title">Resources</h4>
          <nav class="footer-nav">
            <a 
              v-for="resource in RESOURCES" 
              :key="resource.href"
              :href="resource.href" 
              class="footer-nav-link"
              @click="scrollToTop"
            >
              <v-icon :icon="resource.icon" class="footer-nav-icon" />
              {{ resource.label }}
            </a>
          </nav>
        </div>

        <!-- Contact Section -->
        <div class="footer-section">
          <h4 class="footer-section-title">Contact Us</h4>
          <div class="contact-info">
            <div 
              v-for="contact in CONTACT_INFO" 
              :key="contact.type"
              class="contact-item"
            >
              <v-icon :icon="contact.icon" class="contact-icon" />
              <div class="contact-details">
                <span class="contact-label">{{ contact.label }}</span>
                <span class="contact-value">{{ contact.value }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <v-divider class="footer-divider" />
        
        <div class="footer-bottom-content">
          <div class="footer-bottom-left">
            <p class="copyright">
              © {{ new Date().getFullYear() }} CVOCA. All rights reserved.
            </p>
          </div>
          
          <div class="footer-bottom-right">
            <router-link 
              v-for="link in FOOTER_LINKS" 
              :key="link.to"
              :to="link.to" 
              class="footer-bottom-link"
              @click="scrollToTop"
            >
              {{ link.label }}
            </router-link>
          </div>
        </div>
      </div>
    </v-container>
  </footer>
</template>

<script setup>
import { SOCIAL_LINKS, CONTACT_INFO, getQuickLinks } from '@/utils/constants'

const RESOURCES = [
  { href: '/blog', icon: 'mdi-newspaper', label: 'Blog & Articles' },
  { href: '/events', icon: 'mdi-calendar', label: 'Events Calendar' },
  { href: '/membership', icon: 'mdi-account-group', label: 'Membership Benefits' },
  { href: '/digital-outreach', icon: 'mdi-earth', label: 'Digital Outreach' }
]

const FOOTER_LINKS = [
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact' },
  { to: '/membership', label: 'Membership' }
]

const handlePlaceholderClick = (platform) => {
  console.log(`${platform} link clicked - placeholder for future implementation`)
  // You can add a toast notification here when social media links are ready
}

const scrollToTop = () => {
  // Small delay to ensure navigation completes for router links
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, 100)
}
</script>

<style scoped>
.app-footer {
  position: relative;
  background: var(--v-theme-surface);
  border-top: 1px solid var(--v-theme-outline);
  overflow: hidden;
}

.footer-background {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.footer-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, 
    var(--v-theme-primary-container) 0%, 
    var(--v-theme-secondary-container) 100%);
  opacity: 0.05;
}

.footer-pattern {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, var(--v-theme-primary) 1px, transparent 1px);
  background-size: 24px 24px;
  opacity: 0.02;
}

.footer-container {
  position: relative;
  z-index: 1;
  max-width: 1400px;
  padding: 4rem 2rem 2rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;
}

/* Brand Section */
.footer-brand {
  max-width: 400px;
}

.brand-header {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
}

.logo-wrapper {
  margin-right: 1rem;
  transition: transform var(--transition-fast);
}

.logo-wrapper:hover { transform: scale(1.05); }

.footer-logo {
  border-radius: var(--radius-sm);
  box-shadow: var(--shadow-sm);
}

.brand-text {
  display: flex;
  flex-direction: column;
}

.brand-title {
  font-size: 1.75rem;
  font-weight: 800;
  color: var(--v-theme-primary);
  line-height: 1;
  margin: 0 0 0.25rem 0;
}

.brand-subtitle {
  font-size: 0.875rem;
  color: var(--v-theme-on-surface-variant);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 0;
}

.brand-description {
  color: var(--v-theme-on-surface-variant);
  line-height: 1.6;
  margin-bottom: 2rem;
}

/* Social Links */
.social-links {
  display: flex;
  gap: 0.5rem;
}

.social-btn {
  border-radius: 50% !important;
  transition: all var(--transition-normal);
  background: var(--v-theme-surface-variant);
}

.social-btn:hover {
  background: var(--v-theme-primary) !important;
  color: var(--v-theme-on-primary) !important;
  transform: translateY(-2px) scale(1.1);
}

.social-btn[href="#"] {
  opacity: 0.7;
  position: relative;
}

.social-btn[href="#"]:hover {
  opacity: 1;
}

.social-btn[href="#"]::after {
  content: '';
  position: absolute;
  top: -2px;
  right: -2px;
  width: 8px;
  height: 8px;
  background: var(--v-theme-warning);
  border-radius: 50%;
  opacity: 0.6;
}

/* Footer Sections */
.footer-section {
  min-width: 200px;
}

.footer-section-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--v-theme-primary);
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--v-theme-primary-container);
}

.footer-nav {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-nav-link {
  display: flex;
  align-items: center;
  color: var(--v-theme-on-surface-variant);
  text-decoration: none;
  transition: all var(--transition-fast);
  padding: 0.5rem;
  border-radius: var(--radius-sm);
}

.footer-nav-link:hover {
  color: var(--v-theme-primary);
  background: var(--v-theme-primary-container);
  transform: translateX(4px);
}

.footer-nav-icon {
  margin-right: 0.75rem;
  opacity: 0.7;
}

/* Contact Info */
.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 0.75rem;
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
}

.contact-item:hover {
  background: var(--v-theme-surface-variant);
  transform: translateX(2px);
}

.contact-icon {
  color: var(--v-theme-primary);
  margin-top: 0.125rem;
  flex-shrink: 0;
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.contact-label {
  font-weight: 600;
  font-size: 0.875rem;
  color: var(--v-theme-on-surface);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.contact-value {
  color: var(--v-theme-on-surface-variant);
}

/* Footer Bottom */
.footer-bottom {
  padding-top: 2rem;
}

.footer-divider {
  margin-bottom: 2rem;
  opacity: 0.3;
}

.footer-bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.copyright {
  color: var(--v-theme-on-surface-variant);
  font-size: 0.875rem;
  margin: 0;
}

.footer-bottom-right {
  display: flex;
  gap: 2rem;
}

.footer-bottom-link {
  color: var(--v-theme-on-surface-variant);
  text-decoration: none;
  font-size: 0.875rem;
  transition: color var(--transition-fast);
}

.footer-bottom-link:hover {
  color: var(--v-theme-primary);
}

/* Responsive */
@media (max-width: 768px) {
  .footer-container { padding: 3rem 1rem 1.5rem; }
  
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-bottom: 2rem;
  }
  
  .footer-bottom-content {
    flex-direction: column;
    text-align: center;
  }
  
  .footer-bottom-right {
    justify-content: center;
  }
}
</style> 