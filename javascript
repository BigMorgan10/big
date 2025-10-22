// Global Navigation System
class GalacticNavigationSystem {
    constructor() {
        this.pages = new Map();
        this.userSession = null;
        this.staffMode = false;
        this.initializeSystem();
    }

    initializeSystem() {
        this.registerPages();
        this.loadUserSession();
        this.initializeStaffFeatures();
        this.startGlobalMonitoring();
    }

    registerPages() {
        this.pages.set('home', {
            title: 'Portail Galactique',
            url: 'index.html',
            access: 'public',
            description: 'Page d\'accueil principale'
        });

        this.pages.set('dashboard', {
            title: 'Tableau de Bord',
            url: 'dashboard.html',
            access: 'user',
            description: 'Tableau de bord utilisateur'
        });

        this.pages.set('monitoring', {
            title: 'Surveillance',
            url: 'monitoring.html',
            access: 'staff',
            description: 'Panneau de surveillance'
        });

        this.pages.set('content', {
            title: 'Gestion Contenu',
            url: 'content-manager.html',
            access: 'admin',
            description: 'Gestionnaire de contenu'
        });

        this.pages.set('analytics', {
            title: 'Analytics',
            url: 'analytics.html',
            access: 'admin',
            description: 'Centre d\'analytics'
        });

        this.pages.set('security', {
            title: 'Sécurité',
            url: 'security-center.html',
            access: 'staff',
            description: 'Centre de sécurité'
        });
    }

    loadUserSession() {
        const session = localStorage.getItem('currentUser');
        if (session) {
            this.userSession = JSON.parse(session);
            this.updateNavigation();
        }
    }

    initializeStaffFeatures() {
        if (localStorage.getItem('staffSession') === 'true') {
            this.staffMode = true;
            this.enableStaffFeatures();
        }
    }

    enableStaffFeatures() {
        // Add staff-specific UI elements
        document.body.classList.add('staff-mode');
        
        // Create staff toolbar
        const staffBar = document.createElement('div');
        staffBar.id = 'staffToolbar';
        staffBar.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: rgba(255, 107, 53, 0.9);
            color: white;
            padding: 1rem;
            border-radius: 10px;
            z-index: 10000;
            display: flex;
            gap: 1rem;
            align-items: center;
        `;
        
        staffBar.innerHTML = `
            <span>🔓 Mode
