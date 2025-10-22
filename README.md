<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>🌌 Big M 모건 - Portail Galactique Ultra</title>
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700;900&family=Exo+2:wght@300;400;600&display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --primary-cyan: #00fff7;
            --neon-pink: #ff00ff;
            --electric-blue: #0080ff;
            --warning-orange: #ff6b35;
            --success-green: #00ff88;
            --bg-dark: #000011;
            --bg-gradient: linear-gradient(135deg, #000011 0%, #001122 50%, #000033 100%);
            --glass-bg: rgba(0, 17, 34, 0.8);
            --border-glow: 0 0 20px rgba(0, 255, 247, 0.5);
        }

        body {
            font-family: 'Exo 2', sans-serif;
            background: var(--bg-gradient);
            color: #ffffff;
            min-height: 100vh;
            overflow-x: hidden;
            position: relative;
        }

        /* Animated background */
        .stars-bg {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            overflow: hidden;
        }

        .star {
            position: absolute;
            background: var(--primary-cyan);
            border-radius: 50%;
            animation: twinkle 3s infinite;
        }

        @keyframes twinkle {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.2); }
        }

        /* Header */
        .header {
            position: fixed;
            top: 0;
            width: 100%;
            background: rgba(0, 0, 17, 0.95);
            backdrop-filter: blur(15px);
            z-index: 1000;
            padding: 1rem 2rem;
            border-bottom: 2px solid var(--primary-cyan);
            transform: translateY(-100%);
            animation: slideDown 0.8s ease forwards;
        }

        @keyframes slideDown {
            to { transform: translateY(0); }
        }

        .nav-container {
            max-width: 1400px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            font-family: 'Orbitron', monospace;
            font-size: 1.8rem;
            font-weight: 900;
            background: linear-gradient(45deg, var(--primary-cyan), var(--neon-pink));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            text-shadow: 0 0 20px rgba(0, 255, 247, 0.5);
            animation: glow 2s infinite alternate;
        }

        @keyframes glow {
            from { text-shadow: 0 0 20px rgba(0, 255, 247, 0.5); }
            to { text-shadow: 0 0 30px rgba(255, 0, 255, 0.8); }
        }

        .nav-menu {
            display: flex;
            gap: 2rem;
            list-style: none;
        }

        .nav-link {
            color: #ffffff;
            text-decoration: none;
            padding: 0.7rem 1.5rem;
            border: 1px solid transparent;
            border-radius: 25px;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        .nav-link:hover {
            border-color: var(--primary-cyan);
            box-shadow: var(--border-glow);
            transform: translateY(-2px);
        }

        /* Main container */
        .main-container {
            padding-top: 100px;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        /* Login section */
        .login-section {
            background: var(--glass-bg);
            border: 2px solid var(--primary-cyan);
            border-radius: 20px;
            padding: 3rem;
            margin: 2rem;
            max-width: 500px;
            width: 90%;
            box-shadow: var(--border-glow);
            animation: fadeInUp 1s ease;
            backdrop-filter: blur(10px);
        }

        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(50px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .profile-section {
            text-align: center;
            margin-bottom: 2rem;
        }

        .profile-img {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            border: 4px solid var(--primary-cyan);
            object-fit: cover;
            margin-bottom: 1rem;
            transition: all 0.5s ease;
            cursor: pointer;
        }

        .profile-img:hover {
            transform: rotate(360deg) scale(1.1);
            box-shadow: 0 0 30px var(--primary-cyan);
        }

        .title {
            font-family: 'Orbitron', monospace;
            font-size: 2.5rem;
            margin-bottom: 0.5rem;
            background: linear-gradient(45deg, var(--primary-cyan), var(--neon-pink));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .subtitle {
            color: #aaa;
            font-size: 1.1rem;
        }

        /* Form elements */
        .form-group {
            margin-bottom: 1.5rem;
        }

        .form-label {
            display: block;
            margin-bottom: 0.5rem;
            color: var(--primary-cyan);
            font-weight: 600;
        }

        .form-input, .form-select {
            width: 100%;
            padding: 0.8rem 1.2rem;
            background: rgba(0, 0, 0, 0.7);
            border: 2px solid var(--electric-blue);
            border-radius: 10px;
            color: #ffffff;
            font-size: 1rem;
            transition: all 0.3s ease;
        }

        .form-input:focus, .form-select:focus {
            outline: none;
            border-color: var(--primary-cyan);
            box-shadow: var(--border-glow);
        }

        /* Buttons */
        .btn {
            padding: 0.8rem 2rem;
            background: linear-gradient(45deg, var(--electric-blue), var(--primary-cyan));
            border: none;
            border-radius: 25px;
            color: #ffffff;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin: 0.5rem;
        }

        .btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 25px rgba(0, 255, 247, 0.4);
        }

        .btn-secondary {
            background: transparent;
            border: 2px solid var(--primary-cyan);
            color: var(--primary-cyan);
        }

        .btn-staff {
            background: linear-gradient(45deg, var(--warning-orange), #ff8c42);
            border: none;
        }

        /* Panels */
        .panel {
            display: none;
            background: var(--glass-bg);
            border: 2px solid var(--primary-cyan);
            border-radius: 15px;
            padding: 2rem;
            margin-top: 2rem;
            max-width: 600px;
            width: 90%;
            animation: slideIn 0.5s ease;
        }

        @keyframes slideIn {
            from { transform: translateX(-100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }

        .panel-staff {
            border-color: var(--warning-orange);
            background: rgba(255, 107, 53, 0.1);
        }

        /* Dashboard sections */
        .dashboard-section {
            display: none;
            max-width: 1400px;
            width: 90%;
            margin: 2rem auto;
        }

        .dashboard-header {
            text-align: center;
            margin-bottom: 3rem;
            padding: 2rem;
            background: var(--glass-bg);
            border-radius: 15px;
        }

        .dashboard-title {
            font-family: 'Orbitron', monospace;
            font-size: 2.5rem;
            margin-bottom: 1rem;
            background: linear-gradient(45deg, var(--primary-cyan), var(--neon-pink));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        /* Grid layouts */
        .grid-2 {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
            gap: 2rem;
            margin-bottom: 3rem;
        }

        .grid-3 {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-bottom: 3rem;
        }

        .grid-4 {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin-bottom: 3rem;
        }

        /* Cards */
        .card {
            background: var(--glass-bg);
            border: 2px solid var(--primary-cyan);
            border-radius: 15px;
            padding: 2rem;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        .card:hover {
            transform: translateY(-5px);
            box-shadow: var(--border-glow);
        }

        .card-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1.5rem;
        }

        .card-title {
            font-family: 'Orbitron', monospace;
            font-size: 1.3rem;
            color: var(--primary-cyan);
        }

        .card-icon {
            font-size: 2rem;
        }

        .card-content {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
        }

        .card-subtitle {
            color: #aaa;
            font-size: 0.9rem;
        }

        /* Status indicators */
        .status-indicator {
            display: inline-block;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            margin-right: 0.5rem;
            animation: pulse 2s infinite;
        }

        .status-online { background: var(--success-green); }
        .status-warning { background: var(--warning-orange); }
        .status-offline { background: #ff4444; }

        /* Terminal style */
        .terminal {
            background: #000;
            color: #00ff00;
            font-family: 'Courier New', monospace;
            font-size: 0.9rem;
            padding: 1rem;
            height: 300px;
            overflow-y: auto;
            border: 1px solid #333;
            border-radius: 5px;
        }

        .terminal-line {
            margin-bottom: 0.3rem;
            opacity: 0;
            animation: fadeIn 0.5s forwards;
        }

        /* Editor */
        .editor-container {
            margin-top: 2rem;
        }

        .editor-toolbar {
            background: rgba(0, 0, 0, 0.5);
            padding: 1rem;
            border-radius: 8px 8px 0 0;
            display: flex;
            gap: 1rem;
            flex-wrap: wrap;
        }

        .editor-content {
            background: #1e1e1e;
            color: #d4d4d4;
            border: 1px solid #333;
            border-radius: 0 0 8px 8px;
            padding: 1rem;
            min-height: 400px;
            font-family: 'Courier New', monospace;
            font-size: 14px;
            line-height: 1.5;
            overflow-x: auto;
        }

        /* Responsive */
        @media (max-width: 768px) {
            .nav-menu {
                flex-direction: column;
                gap: 1rem;
            }
            
            .grid-2, .grid-3, .grid-4 {
                grid-template-columns: 1fr;
            }
            
            .login-section {
                padding: 2rem 1.5rem;
            }
        }

        /* Hidden elements */
        .hidden {
            display: none !important;
        }

        /* Loading animation */
        .loading {
            display: inline-block;
            width: 20px;
            height: 20px;
            border: 3px solid rgba(0, 255, 247, 0.3);
            border-radius: 50%;
            border-top-color: var(--primary-cyan);
            animation: spin 1s ease-in-out infinite;
        }

        @keyframes spin {
            to { transform: rotate(360deg); }
        }

        /* Alert system */
        .alert {
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem 2rem;
            border-radius: 10px;
            z-index: 10000;
            animation: slideIn 0.5s ease;
            max-width: 400px;
        }

        .alert-success {
            background: var(--success-green);
            color: #000;
        }

        .alert-error {
            background: #ff4444;
            color: white;
        }

        .alert-warning {
            background: var(--warning-orange);
            color: white;
        }

        /* Progress bar */
        .progress-bar {
            width: 100%;
            height: 20px;
            background: rgba(0, 0, 0, 0.5);
            border-radius: 10px;
            overflow: hidden;
            margin: 1rem 0;
        }

        .progress-fill {
            height: 100%;
            background: linear-gradient(90deg, var(--primary-cyan), var(--neon-pink));
            transition: width 0.3s ease;
            border-radius: 10px;
        }

        /* Glow effects */
        .glow-text {
            animation: glow 2s infinite alternate;
        }

        .glow-border {
            box-shadow: var(--border-glow);
        }
    </style>
</head>
<body>
    <!-- Animated background -->
    <div class="stars-bg" id="starsBg"></div>

    <!-- Header -->
    <header class="header" id="mainHeader" style="display: none;">
        <div class="nav-container">
            <div class="logo">🌌 BIG M 모건</div>
            <nav>
                <ul class="nav-menu" id="navMenu">
                    <li><a href="#" class="nav-link" onclick="showPage('home')">Accueil</a></li>
                    <li><a href="#" class="nav-link hidden" id="navDashboard" onclick="showPage('dashboard')">Tableau de Bord</a></li>
                    <li><a href="#" class="nav-link hidden" id="navMonitoring" onclick="showPage('monitoring')">Surveillance</a></li>
                    <li><a href="#" class="nav-link hidden" id="navContent" onclick="showPage('content')">Contenu</a></li>
                    <li><a href="#" class="nav-link hidden" id="navAnalytics" onclick="showPage('analytics')">Analytics</a></li>
                    <li><a href="#" class="nav-link hidden" id="navSecurity" onclick="showPage('security')">Sécurité</a></li>
                    <li><a href="#" class="nav-link" onclick="logout()">Déconnexion</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <!-- Main container -->
    <main class="main-container">
        <!-- PAGE D'ACCUEIL -->
        <section id="homePage" class="page-section">
            <div class="login-section">
                <div class="profile-section">
                    <img src="https://via.placeholder.com/150x150/00fff7/000000?text=M" alt="Profile" class="profile-img">
                    <h1 class="title">Portail Galactique</h1>
                    <p class="subtitle">Big M 모건 - Système de gestion ultra-avancé</p>
                </div>

                <div class="form-group">
                    <label class="form-label">🌍 Langue / Language</label>
                    <select class="form-select" id="language">
                        <option value="fr">Français 🇫🇷</option>
                        <option value="en">English 🇬🇧</option>
                        <option value="kr">한국어 🇰🇷</option>
                    </select>
                </div>

                <div class="form-group">
                    <label class="form-label">🧬 Identifiant Galactique</label>
                    <input type="text" class="form-input" id="userId" placeholder="Ex: morgan-001" maxlength="20">
                </div>

                <div style="text-align: center;">
                    <button class="btn" onclick="enterPortal()">✨ ENTREZ DANS LE PORTAIL</button>
                    <button class="btn btn-secondary" onclick="generateQR()">📱 Générer QR Code</button>
                    <button class="btn btn-staff" onclick="toggleStaffAccess()">🔐 Accès Personnel</button>
                </div>

                <div class="panel panel-staff" id="staffPanel">
                    <h3 style="color: var(--warning-orange); margin-bottom: 1rem;">🔐 Accès Personnel Sécurisé</h3>
                    <div class="form-group">
                        <input type="password" class="form-input" id="staffCode" placeholder="Code d'accès personnel" maxlength="20">
                    </div>
                    <button class="btn btn-staff" onclick="staffLogin()">SE CONNECTER</button>
                    <div id="staffError" style="color: #ff4444; margin-top: 1rem; display: none;"></div>
                    <div id="staffLoading" style="color: var(--primary-cyan); margin-top: 1rem; display: none;">Connexion en cours...</div>
                </div>
            </div>
        </section>

        <!-- TABLEAU DE BORD -->
        <section id="dashboardPage" class="dashboard-section" style="display: none;">
            <div class="dashboard-header">
                <h1 class="dashboard-title">🎛 Tableau de Bord Central</h1>
                <p>Contrôle total de votre portail galactique</p>
                <div style="margin-top: 1rem;">
                    <span class="status-indicator status-online"></span>
                    <span id="systemStatus">Système opérationnel</span>
                </div>
            </div>

            <div class="grid-4">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Visiteurs Actifs</h3>
                        <span class="card-icon">👥</span>
                    </div>
                    <div class="card-content" id="activeVisitors">0</div>
                    <div class="card-subtitle">Utilisateurs connectés</div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 0%" id="visitorProgress"></div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Sessions Staff</h3>
                        <span class="card-icon">🔐</span>
                    </div>
                    <div class="card-content" id="staffSessions">0</div>
                    <div class="card-subtitle">Personnel en ligne</div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 0%" id="staffProgress"></div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Performance</h3>
                        <span class="card-icon">⚡</span>
                    </div>
                    <div class="card-content" id="systemPerformance">100%</div>
                    <div class="card-subtitle">État optimal</div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 100%" id="perfProgress"></div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Sécurité</h3>
                        <span class="card-icon">🛡️</span>
                    </div>
                    <div class="card-content" id="securityStatus">🔒</div>
                    <div class="card-subtitle">Système sécurisé</div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 100%" id="secProgress"></div>
                    </div>
                </div>
            </div>

            <div class="grid-2">
                <div class="card">
                    <h3 class="card-title">📊 Activité Récente</h3>
                    <div class="terminal" id="activityTerminal">
                        <div class="terminal-line">[${new Date().toLocaleTimeString()}] Système initialisé</div>
                    </div>
                </div>

                <div class="card">
                    <h3 class="card-title">🚨 Alertes Système</h3>
                    <div id="alertsContainer">
                        <p style="color: #aaa;">Aucune alerte active</p>
                    </div>
                </div>
            </div>

            <div class="grid-3">
                <button class="btn" onclick="showPage('monitoring')">👁 Surveillance</button>
                <button class="btn" onclick="showPage('content')">📝 Contenu</button>
                <button class="btn" onclick="showPage('analytics')">📈 Analytics</button>
            </div>
        </section>

        <!-- SURVEILLANCE -->
        <section id="monitoringPage" class="dashboard-section" style="display: none;">
            <div class="dashboard-header">
                <h1 class="dashboard-title">👁 Surveillance en Temps Réel</h1>
                <p>Monitoring galactique - Big M 모건</p>
                <div style="margin-top: 1rem;">
                    <span class="status-indicator status-online"></span>
                    <span id="monitoringStatus">Système de surveillance actif</span>
                </div>
            </div>

            <div class="grid-4">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">CPU Usage</h3>
                        <span class="card-icon">🖥️</span>
                    </div>
                    <div class="card-content" id="cpuUsage">0%</div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 0%" id="cpuProgress"></div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Memory</h3>
                        <span class="card-icon">💾</span>
                    </div>
                    <div class="card-content" id="memoryUsage">0%</div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 0%" id="memoryProgress"></div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Network</h3>
                        <span class="card-icon">🌐</span>
                    </div>
                    <div class="card-content" id="networkTraffic">0 MB/s</div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 0%" id="networkProgress"></div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Connections</h3>
                        <span class="card-icon">🔗</span>
                    </div>
                    <div class="card-content" id="activeConnections">0</div>
                </div>
            </div>

            <div class="grid-2">
                <div class="card">
                    <h3 class="card-title">📋 Logs Système</h3>
                    <div class="terminal" id="systemLogs"></div>
                </div>

                <div class="card">
                    <h3 class="card-title">🔒 Sécurité</h3>
                    <div class="terminal" id="securityLogs"></div>
                </div>
            </div>

            <div class="card">
                <h3 class="card-title">🌐 Carte Réseau</h3>
                <div style="display: flex; justify-content: space-around; align-items: center; padding: 2rem;">
                    <div class="network-node" style="width: 80px; height: 80px; background: var(--success-green); border-radius: 50%; display: flex; align-items: center; justify-content: center;">WEB</div>
                    <div style="width: 100px; height: 2px; background: var(--primary-cyan);"></div>
                    <div class="network-node" style="width: 80px; height: 80px; background: var(--warning-orange); border-radius: 50%; display: flex; align-items: center; justify-content: center;">DB</div>
                    <div style="width: 100px; height: 2px; background: var(--primary-cyan);"></div>
                    <div class="network-node" style="width: 80px; height: 80px; background: var(--neon-pink); border-radius: 50%; display: flex; align-items: center; justify-content: center;">CDN</div>
                </div>
            </div>
        </section>

        <!-- GESTION DE CONTENU -->
        <section id="contentPage" class="dashboard-section" style="display: none;">
            <div class="dashboard-header">
                <h1 class="dashboard-title">📝 Gestionnaire de Contenu</h1>
                <p>Administrez tout le contenu de votre portail galactique</p>
            </div>

            <div class="grid-2">
                <div class="card">
                    <h3 class="card-title">📤 Zone de Téléchargement</h3>
                    <div class="upload-area" onclick="document.getElementById('fileInput').click()">
                        <div class="upload-icon">☁️</div>
                        <p>Cliquez ici ou glissez-déposez vos fichiers</p>
                        <p style="font-size: 0.9rem; color: #aaa; margin-top: 0.5rem;">
                            Formats acceptés: Images, Vidéos, PDF, HTML, CSS, JS
                        </p>
                    </div>
                    <input type="file" id="fileInput" style="display: none;" multiple accept="image/*,video/*,.pdf,.html,.css,.js" onchange="handleFileUpload(this)">
                </div>

                <div class="card">
                    <h3 class="card-title">📄 Fichiers Récents</h3>
                    <div class="content-list" id="recentFiles">
                        <div class="content-item">
                            <div class="item-info">
                                <div class="item-title">index.html</div>
                                <div class="item-meta">24.5 KB - Modifié il y a 2 heures</div>
                            </div>
                            <div class="item-actions">
                                <button class="btn btn-primary" onclick="editFile('index.html')">✏️</button>
                                <button class="btn btn-danger" onclick="deleteFile('index.html')">🗑️</button>
                            </div>
                        </div>
                        <div class="content-item">
                            <div class="item-info">
                                <div class="item-title">style.css</div>
                                <div class="item-meta">15.2 KB - Modifié il y a 5 heures</div>
                            </div>
                            <div class="item-actions">
                                <button class="btn btn-primary" onclick="editFile('style.css')">✏️</button>
                                <button class="btn btn-danger" onclick="deleteFile('style.css')">🗑️</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card">
                <h3 class="card-title">✏️ Éditeur de Code</h3>
                <div class="editor-container">
                    <div class="editor-toolbar">
                        <button class="btn btn-primary" onclick="saveCode()">💾 Sauvegarder</button>
                        <button class="btn" onclick="previewCode()">👁️ Aperçu</button>
                        <button class="btn" onclick="formatCode()">🎨 Formater</button>
                        <select class="btn" onchange="changeLanguage(this.value)">
                            <option value="html">HTML</option>
                            <option value="css">CSS</option>
                            <option value="javascript">JavaScript</option>
                            <option value="json">JSON</option>
                        </select>
                    </div>
                    <div class="editor-content" contenteditable="true" id="codeEditor">
&lt;!-- Code HTML de démonstration --&gt;
&lt;!DOCTYPE html&gt;
&lt;html lang="fr"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Ma Page Galactique&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Bienvenue dans l'univers Big M&lt;/h1&gt;
    &lt;p&gt;Contenu éditable en temps réel...&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
                    </div>
                </div>
            </div>
        </section>

        <!-- ANALYTICS -->
        <section id="analyticsPage" class="dashboard-section" style="display: none;">
            <div class="dashboard-header">
                <h1 class="dashboard-title">📈 Centre d'Analytics</h1>
                <p>Analyses et statistiques détaillées</p>
            </div>

            <div class="grid-3">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Visites</h3>
                        <span class="card-icon">📊</span>
                    </div>
                    <div class="card-content" id="totalVisits">0</div>
                    <div class="card-subtitle">Total des visites</div>
                </div>

                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Pages Vues</h3>
                        <span class="card-icon">📄</span>
                    </div>
                    <div class="card-content" id="pageViews">0</div>
                    <div class="card-subtitle">Pages consultées</div>
                </div>

                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Temps Moyen</h3>
                        <span class="card-icon">⏱️</span>
                    </div>
                    <div class="card-content" id="avgTime">0s</div>
                    <div class="card-subtitle">Temps par session</div>
                </div>
            </div>

            <div class="grid-2">
                <div class="card">
                    <h3 class="card-title">📈 Évolution des Visites</h3>
                    <canvas id="visitsChart" width="400" height="200"></canvas>
                </div>

                <div class="card">
                    <h3 class="card-title">🌍 Répartition Géographique</h3>
                    <div id="geoChart">
                        <div style="margin-bottom: 1rem;">
                            <span>🇫🇷 France: 45%</span>
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: 45%"></div>
                            </div>
                        </div>
                        <div style="margin-bottom: 1rem;">
                            <span>🇺🇸 USA: 30%</span>
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: 30%"></div>
                            </div>
                        </div>
                        <div style="margin-bottom: 1rem;">
                            <span>🇰🇷 Corée: 15%</span>
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: 15%"></div>
                            </div>
                        </div>
                        <div>
                            <span>🌍 Autres: 10%</span>
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: 10%"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- SÉCURITÉ -->
        <section id="securityPage" class="dashboard-section" style="display: none;">
            <div class="dashboard-header">
                <h1 class="dashboard-title">🔒 Centre de Sécurité</h1>
                <p>Gestion des accès et sécurité du système</p>
            </div>

            <div class="grid-2">
                <div class="card">
                    <h3 class="card-title">📋 Logs de Connexion</h3>
                    <div class="terminal" id="loginLogs"></div>
                </div>

                <div class="card">
                    <h3 class="card-title">🚨 Tentatives de Hacking</h3>
                    <div class="terminal" id="hackingLogs"></div>
                </div>
            </div>

            <div class="grid-2">
                <div class="card">
                    <h3 class="card-title">🔐 Gestion des Accès</h3>
                    <div style="margin-bottom: 1rem;">
                        <button class="btn" onclick="viewAllUsers()">👥 Voir tous les utilisateurs</button>
                        <button class="btn" onclick="banUser()">🚫 Bannir un utilisateur</button>
                    </div>
                    <div style="margin-bottom: 1rem;">
                        <button class="btn" onclick="changeStaffCode()">🔑 Changer code staff</button>
                        <button class="btn" onclick="viewBlockedIPs()">🌐 IPs bloquées</button>
                    </div>
                </div>

                <div class="card">
                    <h3 class="card-title">⚡ Actions de Sécurité</h3>
                    <div style="margin-bottom: 1rem;">
                        <button class="btn btn-secondary" onclick="clearAllLogs()">🗑️ Vider les logs</button>
                        <button class="btn btn-secondary" onclick="resetAllSessions()">🔄 Réinitialiser sessions</button>
                    </div>
                    <div style="margin-bottom: 1rem;">
                        <button class="btn" onclick="enableMaintenanceMode()">🔧 Mode maintenance</button>
                        <button class="btn btn-danger" onclick="emergencyShutdown()">🚨 Arrêt d'urgence</button>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <!-- Alert system -->
    <div class="alert-system" id="alertSystem"></div>

    <script>
        // ====================================================================
        // 🌌 SYSTEME GLOBAL - BIG M PORTAIL GALACTIQUE ULTRA
        // ====================================================================

        class GalacticSystem {
            constructor() {
                this.currentUser = null;
                this.staffSession = false;
                this.currentPage = 'home';
                this.securityLogs = [];
                this.activeUsers = [];
                this.fileSystem = new Map();
                this.monitoringActive = false;
                this.analyticsData = {
                    visits: 0,
                    pageViews: 0,
                    sessions: []
                };
                
                this.init();
            }

            init() {
                this.createStarfield();
                this.loadUserSession();
                this.initializeFileSystem();
                this.startGlobalMonitoring();
                this.setupEventListeners();
                this.updateAnalytics();
            }

            // ====================================================================
            // 🎨 INTERFACE & NAVIGATION
            // ====================================================================

            createStarfield() {
                const starsBg = document.getElementById('starsBg');
                for (let i = 0; i < 200; i++) {
                    const star = document.createElement('div');
                    star.className = 'star';
                    star.style.left = Math.random() * 100 + '%';
                    star.style.top = Math.random() * 100 + '%';
                    star.style.width = Math.random() * 3 + 'px';
                    star.style.height = star.style.width;
                    star.style.animationDelay = Math.random() * 3 + 's';
                    star.style.animationDuration = (Math.random() * 3 + 2) + 's';
                    starsBg.appendChild(star);
                }
            }

            showPage(pageId) {
                // Hide all pages
                document.querySelectorAll('.page-section, .dashboard-section').forEach(page => {
                    page.style.display = 'none';
                });

                // Show selected page
                const page = document.getElementById(pageId + 'Page');
                if (page) {
                    page.style.display = pageId === 'home' ? 'flex' : 'block';
                    this.currentPage = pageId;
                    
                    // Update page view analytics
                    this.recordPageView(pageId);
                    
                    // Start page-specific features
                    if (pageId === 'monitoring') {
                        this.startRealTimeMonitoring();
                    } else if (pageId === 'analytics') {
                        this.updateAnalyticsDisplay();
                    } else if (pageId === 'security') {
                        this.updateSecurityLogs();
                    }
                }
            }

            showNotification(message, type = 'success') {
                const alertSystem = document.getElementById('alertSystem');
                const notification = document.createElement('div');
                notification.className = `alert alert-${type}`;
                notification.innerHTML = `
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <span>${message}</span>
                        <button onclick="this.parentElement.parentElement.remove()" style="background: none; border: none; color: inherit; font-size: 1.2rem; cursor: pointer;">×</button>
                    </div>
                `;
                alertSystem.appendChild(notification);
                
                setTimeout(() => {
                    if (notification.parentElement) {
                        notification.remove();
                    }
                }, 5000);
            }

            // ====================================================================
            // 🔐 AUTHENTIFICATION & SESSIONS
            // ====================================================================

            enterPortal() {
                const userId = document.getElementById('userId').value.trim();
                const language = document.getElementById('language').value;

                if (!userId || !/^([a-zA-Z0-9-_]+)$/.test(userId)) {
                    this.showNotification('Identifiant invalide', 'error');
                    return;
                }

                // Create user session
                this.currentUser = {
                    id: userId,
                    language: language,
                    loginTime: new Date().toISOString(),
                    isAdmin: userId.toLowerCase().includes('root') || userId === 'iam24morgan',
                    isStaff: false,
                    permissions: this.getUserPermissions(userId)
                };

                // Update analytics
                this.analyticsData.visits++;
                this.recordActiveUser(this.currentUser);

                // Save session
                localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
                
                // Log security event
                this.logSecurityEvent('USER_LOGIN', { userId, language });

                // Show header and navigation
                document.getElementById('mainHeader').style.display = 'block';
                this.updateNavigation();
                this.showPage('dashboard');
                
                this.showNotification('✅ Connexion réussie ! Bienvenue ' + userId, 'success');
            }

            staffLogin() {
                const code = document.getElementById('staffCode').value.trim();
                const errorDiv = document.getElementById('staffError');
                const loadingDiv = document.getElementById('staffLoading');

                if (!code) {
                    errorDiv.textContent = 'Veuillez entrer le code personnel';
                    errorDiv.style.display = 'block';
                    return;
                }

                loadingDiv.style.display = 'block';
                errorDiv.style.display = 'none';

                setTimeout(() => {
                    loadingDiv.style.display = 'none';
                    
                    if (code === 'Morning_Starr') {
                        this.staffSession = true;
                        if (this.currentUser) {
                            this.currentUser.isStaff = true;
                            this.currentUser.permissions.push('staff', 'monitoring', 'security');
                        }
                        
                        localStorage.setItem('staffSession', 'true');
                        this.logSecurityEvent('STAFF_LOGIN', { code: 'SUCCESS' });
                        
                        document.getElementById('staffPanel').style.display = 'none';
                        this.showNotification('🔓 Accès personnel accordé ! Mode surveillance activé', 'success');
                        
                        this.updateNavigation();
                        this.showPage('monitoring');
                    } else {
                        errorDiv.textContent = '❌ Code incorrect - Tentative enregistrée';
                        errorDiv.style.display = 'block';
                        this.logSecurityEvent('FAILED_STAFF_LOGIN', { code: code });
                    }
                }, 2000);
            }

            getUserPermissions(userId) {
                const permissions = ['dashboard'];
                if (userId.toLowerCase().includes('root') || userId === 'iam24morgan') {
                    permissions.push('admin', 'content', 'analytics', 'security');
                }
                return permissions;
            }

            updateNavigation() {
                if (!this.currentUser) return;

                // Show/hide navigation items based on permissions
                const navItems = {
                    'navDashboard': ['dashboard'],
                    'navMonitoring': ['monitoring', 'staff'],
                    'navContent': ['content', 'admin'],
                    'navAnalytics': ['analytics', 'admin'],
                    'navSecurity': ['security', 'staff']
                };

                Object.keys(navItems).forEach(navId => {
                    const required = navItems[navId];
                    const hasAccess = required.some perm => 
                        this.currentUser.permissions.includes(perm) || 
                        (this.staffSession && required.includes('staff'));
                    
                    document.getElementById(navId).style.display = hasAccess ? 'block' : 'none';
                });
            }

            logout() {
                this.logSecurityEvent('LOGOUT', { userId: this.currentUser?.id });
                this.currentUser = null;
                this.staffSession = false;
                localStorage.removeItem('currentUser');
                localStorage.removeItem('staffSession');
                
                document.getElementById('mainHeader').style.display = 'none';
                this.showPage('home');
                this.showNotification('Déconnexion réussie', 'success');
            }

            // ====================================================================
            // 📊 ANALYTICS & STATISTICS
            // ====================================================================

            recordPageView(pageId) {
                this.analyticsData.pageViews++;
                this.analyticsData.sessions.push({
                    page: pageId,
                    timestamp: new Date().toISOString(),
                    user: this.currentUser?.id || 'anonymous'
                });
                
                localStorage.setItem('analyticsData', JSON.stringify(this.analyticsData));
                this.updateStatistics();
            }

            recordActiveUser(user) {
                this.activeUsers.push({
                    userId: user.id,
                    loginTime: user.loginTime,
                    isStaff: user.isStaff || false
                });
                
                // Keep only recent users (last 24h)
                const cutoff = new Date(Date.now() - 24 * 60 * 60 * 1000);
                this.activeUsers = this.activeUsers.filter(u => 
                    new Date(u.loginTime) > cutoff
                );
                
                localStorage.setItem('activeUsers', JSON.stringify(this.activeUsers));
            }

            updateStatistics() {
                if (!this.currentUser) return;

                // Update dashboard statistics
                const visitors = this.activeUsers.length;
                const staff = this.activeUsers.filter(u => u.isStaff).length;
                const performance = this.calculatePerformance();
                const security = this.calculateSecurityStatus();

                document.getElementById('activeVisitors').textContent = visitors;
                document.getElementById('staffSessions').textContent = staff;
                document.getElementById('systemPerformance').textContent = performance + '%';
                document.getElementById('securityStatus').textContent = security > 90 ? '🔒' : '⚠️';

                // Update progress bars
                document.getElementById('visitorProgress').style.width = Math.min(visitors * 10, 100) + '%';
                document.getElementById('staffProgress').style.width = Math.min(staff * 20, 100) + '%';
                document.getElementById('perfProgress').style.width = performance + '%';
                document.getElementById('secProgress').style.width = security + '%';
            }

            calculatePerformance() {
                const memory = performance.memory;
                if (memory) {
                    const usedPercent = (memory.usedJSHeapSize / memory.totalJSHeapSize) * 100;
                    return Math.max(0, 100 - usedPercent);
                }
                return 100;
            }

            calculateSecurityStatus() {
                const recentErrors = this.securityLogs.filter(log => 
                    log.event === 'JS_ERROR' && 
                    new Date() - new Date(log.timestamp) < 300000
                ).length;
                
                return Math.max(0, 100 - (recentErrors * 10));
            }

            updateAnalytics() {
                const saved = localStorage.getItem('analyticsData');
                if (saved) {
                    this.analyticsData = JSON.parse(saved);
                }
                
                document.getElementById('totalVisits').textContent = this.analyticsData.visits;
                document.getElementById('pageViews').textContent = this.analyticsData.pageViews;
                
                const avgTime = this.calculateAverageSessionTime();
                document.getElementById('avgTime').textContent = avgTime;
            }

            calculateAverageSessionTime() {
                if (this.analyticsData.sessions.length < 2) return '0s';
                
                const sessions = this.analyticsData.sessions;
                let totalTime = 0;
                let sessionCount = 0;
                
                for (let i = 1; i < sessions.length; i++) {
                    const timeDiff = new Date(sessions[i].timestamp) - new Date(sessions[i-1].timestamp);
                    if (timeDiff < 300000) { // Less than 5 minutes
                        totalTime += timeDiff;
                        sessionCount++;
                    }
                }
                
                const avgTime = sessionCount > 0 ? totalTime / sessionCount : 0;
                return Math.round(avgTime / 1000) + 's';
            }

            updateAnalyticsDisplay() {
                this.updateAnalytics();
                
                // Update visits chart
                const canvas = document.getElementById('visitsChart');
                if (canvas) {
                    this.drawSimpleChart(canvas);
                }
            }

            drawSimpleChart(canvas) {
                const ctx = canvas.getContext('2d');
                const width = canvas.width;
                const height = canvas.height;
                
                ctx.clearRect(0, 0, width, height);
                
                // Draw grid
                ctx.strokeStyle = '#333';
                ctx.lineWidth = 1;
                
                for (let i = 0; i <= 10; i++) {
                    const y = (height - 40) * i / 10 + 20;
                    ctx.beginPath();
                    ctx.moveTo(40, y);
                    ctx.lineTo(width - 20, y);
                    ctx.stroke();
                }
                
                // Draw sample data
                const data = [];
                for (let i = 0; i < 24; i++) {
                    data.push(Math.floor(Math.random() * 100));
                }
                
                ctx.strokeStyle = '#00d4ff';
                ctx.lineWidth = 2;
                ctx.beginPath();
                
                const stepX = (width - 60) / (data.length - 1);
                const maxValue = Math.max(...data);
                
                data.forEach((value, index) => {
                    const x = 40 + index * stepX;
                    const y = height - 40 - (value / maxValue) * (height - 60);
                    
                    if (index === 0) {
                        ctx.moveTo(x, y);
                    } else {
                        ctx.lineTo(x, y);
                    }
                });
                
                ctx.stroke();
            }

            // ====================================================================
            // 👁 SURVEILLANCE EN TEMPS RÉEL
            // ====================================================================

            startRealTimeMonitoring() {
                if (this.monitoringActive) return;
                this.monitoringActive = true;
                
                // Update monitoring metrics
                setInterval(() => this.updateMonitoringMetrics(), 2000);
                
                // Generate logs
                setInterval(() => this.generateSystemLogs(), 3000);
                setInterval(() => this.generateSecurityLogs(), 5000);
                
                this.showNotification('Surveillance en temps réel activée', 'success');
            }

            updateMonitoringMetrics() {
                // Simulate system metrics
                const cpu = Math.floor(Math.random() * 30) + 20;
                const memory = Math.floor(Math.random() * 40) + 30;
                const network = (Math.random() * 50 + 10).toFixed(1);
                const connections = Math.floor(Math.random() * 50) + 10;

                document.getElementById('cpuUsage').textContent = cpu + '%';
                document.getElementById('memoryUsage').textContent = memory + '%';
                document.getElementById('networkTraffic').textContent = network + ' MB/s';
                document.getElementById('activeConnections').textContent = connections;

                // Update progress bars
                document.getElementById('cpuProgress').style.width = cpu + '%';
                document.getElementById('memoryProgress').style.width = memory + '%';
                document.getElementById('networkProgress').style.width = (network * 2) + '%';

                // Check for anomalies
                if (cpu > 80 || memory > 85) {
                    this.showNotification(`🚨 Alert: High resource usage - CPU: ${cpu}%, Memory: ${memory}%`, 'warning');
                    this.addTerminalLine('systemLogs', `HIGH RESOURCE USAGE: CPU ${cpu}%, Memory ${memory}%`, 'error');
                }
            }

            generateSystemLogs() {
                const logs = [
                    'System scan completed',
                    'Cache cleared successfully',
                    'Database backup created',
                    'Security update applied',
                    'Network optimization finished',
                    'Memory cleanup performed',
                    'File system check passed',
                    'Performance metrics updated'
                ];

                const randomLog = logs[Math.floor(Math.random() * logs.length)];
                this.addTerminalLine('systemLogs', randomLog, 'output');
                
                // Also add to dashboard activity
                this.addTerminalLine('activityTerminal', randomLog, 'output');
            }

            generateSecurityLogs() {
                const events = [
                    { type: 'output', message: 'Security scan completed - No threats detected' },
                    { type: 'warning', message: 'Unusual login pattern detected from IP 192.168.1.100' },
                    { type: 'output', message: 'Firewall rules updated successfully' },
                    { type: 'warning', message: 'Multiple failed login attempts blocked' },
                    { type: 'output', message: 'SSL certificate verified and valid' },
                    { type: 'error', message: 'Potential SQL injection attempt blocked' }
                ];

                const event = events[Math.floor(Math.random() * events.length)];
                this.addTerminalLine('securityLogs', event.message, event.type);
                
                if (event.type === 'error' || event.type === 'warning') {
                    this.logSecurityEvent('SECURITY_ALERT', { message: event.message, type: event.type });
                }
            }

            addTerminalLine(terminalId, message, type = 'output') {
                const terminal = document.getElementById(terminalId);
                if (!terminal) return;
                
                const line = document.createElement('div');
                line.className = `terminal-line terminal-${type}`;
                
                const timestamp = new Date().toLocaleTimeString();
                line.textContent = `[${timestamp}] ${message}`;
                
                terminal.appendChild(line);
                terminal.scrollTop = terminal.scrollHeight;
                
                // Limit lines
                if (terminal.children.length > 100) {
                    terminal.removeChild(terminal.firstChild);
                }
            }

            // ====================================================================
            // 📁 GESTIONNAIRE DE CONTENU
            // ====================================================================

            initializeFileSystem() {
                // Create default files
                const defaultFiles = [
                    { name: 'index.html', content: '<!DOCTYPE html>\n<html>\n<head><title>Accueil</title></head>\n<body><h1>Bienvenue</h1></body>\n</html>', type: 'html', size: '2.5 KB', modified: new Date().toISOString() },
                    { name: 'style.css', content: 'body { font-family: Arial; background: #000; color: #fff; }', type: 'css', size: '1.2 KB', modified: new Date().toISOString() },
                    { name: 'script.js', content: 'console.log("Hello World");', type: 'js', size: '0.8 KB', modified: new Date().toISOString() }
                ];

                defaultFiles.forEach(file => {
                    this.fileSystem.set(file.name, file);
                });

                this.updateFileList();
            }

            handleFileUpload(input) {
                const files = input.files;
                for (let file of files) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        const fileData = {
                            name: file.name,
                            content: e.target.result,
                            type: file.type.split('/')[1] || file.name.split('.').pop(),
                            size: this.formatFileSize(file.size),
                            modified: new Date().toISOString()
                        };
                        
                        this.fileSystem.set(file.name, fileData);
                        this.updateFileList();
                        this.showNotification(`Fichier uploadé: ${file.name}`, 'success');
                        this.logSecurityEvent('FILE_UPLOAD', { file: file.name, size: file.size });
                    };
                    reader.readAsText(file);
                }
            }

            formatFileSize(bytes) {
                if (bytes === 0) return '0 Bytes';
                const k = 1024;
                const sizes = ['Bytes', 'KB', 'MB', 'GB'];
                const i = Math.floor(Math.log(bytes) / Math.log(k));
                return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
            }

            updateFileList() {
                const fileList = document.getElementById('recentFiles');
                if (!fileList) return;
                
                fileList.innerHTML = '';
                
                Array.from(this.fileSystem.values()).slice(-5).reverse().forEach(file => {
                    const item = document.createElement('div');
                    item.className = 'content-item';
                    item.innerHTML = `
                        <div class="item-info">
                            <div class="item-title">${file.name}</div>
                            <div class="item-meta">${file.size} - Modifié ${new Date(file.modified).toLocaleString()}</div>
                        </div>
                        <div class="item-actions">
                            <button class="btn btn-primary" onclick="galacticSystem.editFile('${file.name}')">✏️</button>
                            <button class="btn btn-danger" onclick="galacticSystem.deleteFile('${file.name}')">🗑️</button>
                        </div>
                    `;
                    fileList.appendChild(item);
                });
            }

            editFile(fileName) {
                const file = this.fileSystem.get(fileName);
                if (file) {
                    const editor = document.getElementById('codeEditor');
                    editor.innerText = file.content;
                    editor.focus();
                    window.currentEditingFile = fileName;
                    this.showNotification(`Édition de: ${fileName}`, 'success');
                }
            }

            deleteFile(fileName) {
                if (confirm(`Êtes-vous sûr de vouloir supprimer ${fileName} ?`)) {
                    this.fileSystem.delete(fileName);
                    this.updateFileList();
                    this.showNotification(`Fichier supprimé: ${fileName}`, 'success');
                    this.logSecurityEvent('FILE_DELETE', { file: fileName });
                }
            }

            saveCode() {
                const editor = document.getElementById('codeEditor');
                const content = editor.innerText;
                
                if (window.currentEditingFile) {
                    const file = this.fileSystem.get(window.currentEditingFile);
                    if (file) {
                        file.content = content;
                        file.modified = new Date().toISOString();
                        this.showNotification(`Fichier sauvegardé: ${window.currentEditingFile}`, 'success');
                        this.logSecurityEvent('FILE_EDIT', { file: window.currentEditingFile });
                    }
                } else {
                    // Save as new file
                    const fileName = prompt('Nom du fichier:') || 'newfile.html';
                    const fileData = {
                        name: fileName,
                        content: content,
                        type: fileName.split('.').pop(),
                        size: this.formatFileSize(new Blob([content]).size),
                        modified: new Date().toISOString()
                    };
                    
                    this.fileSystem.set(fileName, fileData);
                    this.updateFileList();
                    this.showNotification(`Fichier créé: ${fileName}`, 'success');
                    window.currentEditingFile = fileName;
                }
            }

            previewCode() {
                const content = document.getElementById('codeEditor').innerText;
                const previewWindow = window.open('', '_blank', 'width=800,height=600');
                previewWindow.document.write(content);
                previewWindow.document.close();
            }

            formatCode() {
                const editor = document.getElementById('codeEditor');
                let content = editor.innerText;
                
                // Basic HTML formatting
                if (window.currentEditingFile && window.currentEditingFile.endsWith('.html')) {
                    content = content.replace(/></g, '>\n<');
                    content = content.replace(/({|})/g, '\n$1\n');
                }
                
                editor.innerText = content;
            }

            changeLanguage(language) {
                // Update syntax highlighting based on language
                const editor = document.getElementById('codeEditor');
                editor.className = `editor-content language-${language}`;
                this.showNotification(`Langage changé: ${language.toUpperCase()}`, 'success');
            }

            // ====================================================================
            // 🔒 SÉCURITÉ & LOGS
            // ====================================================================

            logSecurityEvent(event, data) {
                const logEntry = {
                    timestamp: new Date().toISOString(),
                    event: event,
                    data: data,
                    user: this.currentUser?.id || 'system',
                    page: this.currentPage
                };
                
                this.securityLogs.push(logEntry);
                
                // Keep only last 100 logs
                if (this.securityLogs.length > 100) {
                    this.securityLogs.splice(0, this.securityLogs.length - 100);
                }
                
                localStorage.setItem('securityLogs', JSON.stringify(this.securityLogs));
                
                // Update security logs display if on security page
                if (this.currentPage === 'security') {
                    this.updateSecurityLogs();
                }
            }

            updateSecurityLogs() {
                const loginLogs = document.getElementById('loginLogs');
                const hackingLogs = document.getElementById('hackingLogs');
                
                if (!loginLogs || !hackingLogs) return;
                
                // Login logs
                loginLogs.innerHTML = '';
                this.securityLogs.filter(log => 
                    log.event.includes('LOGIN') || log.event.includes('SESSION')
                ).slice(-10).forEach(log => {
                    this.addTerminalLine('loginLogs', `${log.event} - ${log.data.userId || 'System'}`, 'output');
                });
                
                // Security alerts
                hackingLogs.innerHTML = '';
                this.securityLogs.filter(log => 
                    log.event.includes('SECURITY') || log.event.includes('FAILED')
                ).slice(-10).forEach(log => {
                    this.addTerminalLine('hackingLogs', `${log.event} - ${JSON.stringify(log.data)}`, 'warning');
                });
            }

            viewAllUsers() {
                const users = this.activeUsers.map(u => 
                    `${u.userId} - ${new Date(u.loginTime).toLocaleString()} - ${u.isStaff ? 'Staff' : 'User'}`
                ).join('\n');
                
                alert(`Utilisateurs actifs (${this.activeUsers.length}):\n\n${users}`);
            }

            banUser() {
                const userId = prompt('ID utilisateur à bannir:');
                if (userId) {
                    this.logSecurityEvent('USER_BANNED', { userId, by: this.currentUser?.id });
                    this.showNotification(`Utilisateur banni: ${userId}`, 'success');
                }
            }

            changeStaffCode() {
                if (!this.staffSession) {
                    this.showNotification('Accès refusé - Mode staff requis', 'error');
                    return;
                }
                
                const newCode = prompt('Nouveau code staff:');
                if (newCode && newCode.length >= 6) {
                    // In real system, this would be encrypted and stored securely
                    this.logSecurityEvent('STAFF_CODE_CHANGED', { by: this.currentUser?.id });
                    this.showNotification('Code staff modifié avec succès', 'success');
                } else {
                    this.showNotification('Code trop court (minimum 6 caractères)', 'error');
                }
            }

            viewBlockedIPs() {
                const blockedIPs = ['192.168.1.100', '10.0.0.50', '172.16.0.25']; // Sample data
                alert(`IPs bloquées (${blockedIPs.length}):\n${blockedIPs.join('\n')}`);
            }

            clearAllLogs() {
                if (confirm('Êtes-vous sûr de vouloir vider tous les logs ?')) {
                    this.securityLogs = [];
                    localStorage.removeItem('securityLogs');
                    this.updateSecurityLogs();
                    this.showNotification('Logs vidés avec succès', 'success');
                }
            }

            resetAllSessions() {
                if (confirm('Êtes-vous sûr de vouloir réinitialiser toutes les sessions ?')) {
                    this.activeUsers = [];
                    localStorage.removeItem('activeUsers');
                    this.updateStatistics();
                    this.showNotification('Sessions réinitialisées', 'success');
                }
            }

            enableMaintenanceMode() {
                document.body.innerHTML = `
                    <div style="background: #000; color: #ff0; height: 100vh; display: flex; align-items: center; justify-content: center; font-size: 2rem; text-align: center;">
                        <div>
                            🔧 MODE MAINTENANCE ACTIVÉ 🔧<br>
                            <div style="font-size: 1rem; margin-top: 2rem;">
                                Le site est temporairement indisponible pour maintenance.<br>
                                Merci de revenir plus tard.
                            </div>
                        </div>
                    </div>
                `;
                this.logSecurityEvent('MAINTENANCE_MODE', { by: this.currentUser?.id });
            }

            emergencyShutdown() {
                if (confirm('⚠️ ÊTES-VOUS SÛR ? Cela va arrêter tous les systèmes !')) {
                    document.body.innerHTML = `
                        <div style="background: #000; color: #f00; height: 100vh; display: flex; align-items: center; justify-content: center; font-size: 3rem; text-align: center;">
                            <div>
                                🚨 ARRÊT D'URGENCE ACTIVÉ 🚨<br>
                                <div style="font-size: 1rem; margin-top: 2rem;">
                                    Tous les systèmes ont été arrêtés pour des raisons de sécurité.<br>
                                    Contactez l'administrateur système immédiatement.
                                </div>
                            </div>
                        </div>
                    `;
                    this.logSecurityEvent('EMERGENCY_SHUTDOWN', { 
                        by: this.currentUser?.id,
                        timestamp: new Date().toISOString()
                    });
                }
            }

            // ====================================================================
            // 🌍 UTILITAIRES GLOBAUX
            // ====================================================================

            toggleStaffAccess() {
                const panel = document.getElementById('staffPanel');
                panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
                document.getElementById('staffCode').value = '';
                document.getElementById('staffError').style.display = 'none';
            }

            generateQR() {
                const userId = document.getElementById('userId').value.trim();
                if (!userId) {
                    this.showNotification('Entrez un identifiant d\'abord', 'error');
                    return;
                }
                
                const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(userId)}&size=300x300&color=00fff7&bgcolor=000011`;
                window.open(qrUrl, '_blank');
            }

            loadUserSession() {
                const session = localStorage.getItem('currentUser');
                if (session) {
                    this.currentUser = JSON.parse(session);
                    this.staffSession = localStorage.getItem('staffSession') === 'true';
                    
                    if (this.currentUser) {
                        document.getElementById('mainHeader').style.display = 'block';
                        this.updateNavigation();
                        this.showPage('dashboard');
                    }
                }
            }

            setupEventListeners() {
                // Enter key support
                document.getElementById('userId').addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') this.enterPortal();
                });
                
                document.getElementById('staffCode').addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') this.staffLogin();
                });

                // Auto-save code editor
                const editor = document.getElementById('codeEditor');
                if (editor) {
                    let saveTimeout;
                    editor.addEventListener('input', () => {
                        clearTimeout(saveTimeout);
                        saveTimeout = setTimeout(() => {
                            if (window.currentEditingFile) {
                                this.saveCode();
                            }
                        }, 2000);
                    });
                }
            }

            startGlobalMonitoring() {
                // Monitor performance
                setInterval(() => {
                    const memory = performance.memory;
                    if (memory && memory.usedJSHeapSize > 100 * 1024 * 1024) {
                        this.logSecurityEvent('HIGH_MEMORY_USAGE', {
                            usage: Math.round(memory.usedJSHeapSize / 1048576),
                            total: Math.round(memory.totalJSHeapSize / 1048576)
                        });
                    }
                }, 30000);

                // Update statistics every 5 seconds
                setInterval(() => this.updateStatistics(), 5000);
                
                // Update analytics every 30 seconds
                setInterval(() => this.updateAnalytics(), 30000);
            }
        }

        // ====================================================================
        // 🚀 INITIALISATION DU SYSTÈME
        // ====================================================================

        let galacticSystem;

        // Global functions
        function enterPortal() {
            if (!galacticSystem) galacticSystem = new GalacticSystem();
            galacticSystem.enterPortal();
        }

        function staffLogin() {
            galacticSystem.staffLogin();
        }

        function toggleStaffAccess() {
            galacticSystem.toggleStaffAccess();
        }

        function generateQR() {
            galacticSystem.generateQR();
        }

        function showPage(pageId) {
            galacticSystem.showPage(pageId);
        }

        function logout() {
            galacticSystem.logout();
        }

        function saveCode() {
            galacticSystem.saveCode();
        }

        function previewCode() {
            galacticSystem.previewCode();
        }

        function formatCode() {
            galacticSystem.formatCode();
        }

        function changeLanguage(lang) {
            galacticSystem.changeLanguage(lang);
        }

        function handleFileUpload(input) {
            galacticSystem.handleFileUpload(input);
        }

        function editFile(fileName) {
            galacticSystem.editFile(fileName);
        }

        function deleteFile(fileName) {
            galacticSystem.deleteFile(fileName);
        }

        function viewAllUsers() {
            galacticSystem.viewAllUsers();
        }

        function banUser() {
            galacticSystem.banUser();
        }

        function changeStaffCode() {
            galacticSystem.changeStaffCode();
        }

        function viewBlockedIPs() {
            galacticSystem.viewBlockedIPs();
        }

        function clearAllLogs() {
            galacticSystem.clearAllLogs();
        }

        function resetAllSessions() {
            galacticSystem.resetAllSessions();
        }

        function enableMaintenanceMode() {
            galacticSystem.enableMaintenanceMode();
        }

        function emergencyShutdown() {
            galacticSystem.emergencyShutdown();
        }

        function viewLogs() {
            galacticSystem.viewAllLogs?.() || galacticSystem.viewAllUsers();
        }

        // Initialize on page load
        document.addEventListener('DOMContentLoaded', function() {
            galacticSystem = new GalacticSystem();
        });

        // Error handling
        window.addEventListener('error', (e) => {
            if (galacticSystem) {
                galacticSystem.logSecurityEvent('JS_ERROR', {
                    message: e.message,
                    filename: e.filename,
                    line: e.lineno,
                    user: galacticSystem.currentUser?.id
                });
            }
        });
    </script>
</body>
</html>
